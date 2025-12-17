import { VoiceChannel, TextChannel, GuildMember } from 'discord.js';
import { MusicPlayer, Track } from './types';
import { VoiceManager } from './voice';
import { QueueManager } from './queue';
import { players, managers } from './state';

export class MusicPlayerManager {
  private player: MusicPlayer;
  private voiceManager: VoiceManager;
  private queueManager: QueueManager;

  constructor(guildId: string, voiceChannel: VoiceChannel, textChannel: TextChannel, member: GuildMember) {
    this.player = {
      guildId,
      voiceChannelId: voiceChannel.id,
      textChannelId: textChannel.id,
      queue: {
        tracks: [],
        currentIndex: -1,
        loop: false,
        shuffle: false,
        autoplay: false,
      },
      volume: 50,
      playing: false,
      paused: false,
    };

    players.set(guildId, this.player);
    managers.set(guildId, this);

    this.voiceManager = new VoiceManager(voiceChannel, textChannel);
    this.queueManager = new QueueManager();

    this.voiceManager.connect();
    this.voiceManager.onFinish(() => this.onTrackFinish());
  }

  addTrack(track: Track): void {
    this.queueManager.addTrack(track);
    if (!this.player.playing) {
      this.playNext();
    }
  }

  playNext(): void {
    const track = this.queueManager.nextTrack();
    if (track) {
      this.voiceManager.playTrack(track);
      this.player.playing = true;
      this.player.paused = false;
    } else {
      this.player.playing = false;
    }
  }

  pause(): void {
    this.voiceManager.pause();
    this.player.paused = true;
  }

  resume(): void {
    this.voiceManager.resume();
    this.player.paused = false;
  }

  stop(): void {
    this.voiceManager.stop();
    this.player.playing = false;
    this.player.paused = false;
  }

  skip(): void {
    this.playNext();
  }

  setVolume(volume: number): void {
    this.player.volume = volume;
    this.voiceManager.setVolume(volume);
  }

  getQueue(): Track[] {
    return this.queueManager.getQueue();
  }

  getCurrentTrack(): Track | null {
    return this.queueManager.getCurrentTrack();
  }

  leave(): void {
    this.voiceManager.disconnect();
    players.delete(this.player.guildId);
    managers.delete(this.player.guildId);
  }

  private onTrackFinish(): void {
    this.playNext();
  }

  static getPlayer(guildId: string): MusicPlayerManager | null {
    return managers.get(guildId) || null;
  }
}