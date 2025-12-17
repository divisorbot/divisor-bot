import { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnection, AudioPlayer } from '@discordjs/voice';
import { VoiceBasedChannel, TextChannel } from 'discord.js';
import ytdl from 'ytdl-core';
import { Track } from './types';

export class VoiceManager {
  private connection: VoiceConnection | null = null;
  private player: AudioPlayer | null = null;
  private currentResource: any = null;

  constructor(private voiceChannel: VoiceBasedChannel, private textChannel: TextChannel) {}

  connect(): void {
    this.connection = joinVoiceChannel({
      channelId: this.voiceChannel.id,
      guildId: this.voiceChannel.guild.id,
      adapterCreator: this.voiceChannel.guild.voiceAdapterCreator as any,
    });

    this.player = createAudioPlayer();
    this.connection.subscribe(this.player);
  }

  playTrack(track: Track): void {
    if (!this.player) return;

    const stream = ytdl(track.url, { filter: 'audioonly', highWaterMark: 1 << 25 });
    this.currentResource = createAudioResource(stream);
    this.player.play(this.currentResource);
  }

  pause(): void {
    if (this.player) {
      this.player.pause();
    }
  }

  resume(): void {
    if (this.player) {
      this.player.unpause();
    }
  }

  stop(): void {
    if (this.player) {
      this.player.stop();
    }
  }

  setVolume(volume: number): void {
    if (this.currentResource) {
      this.currentResource.volume.setVolume(volume / 100);
    }
  }

  disconnect(): void {
    if (this.connection) {
      this.connection.destroy();
    }
  }

  onFinish(callback: () => void): void {
    if (this.player) {
      this.player.on(AudioPlayerStatus.Idle, callback);
    }
  }
}