import { VoiceChannel, TextChannel, GuildMember, ChatInputCommandInteraction } from 'discord.js';
import { MusicPlayerManager } from './player';
import { extractTrack } from './extractor';
import { Track } from './types';

export const ensureVoiceChannel = (interaction: ChatInputCommandInteraction): VoiceChannel | null => {
  const member = interaction.member as GuildMember;
  const voiceChannel = member.voice.channel;
  if (!voiceChannel) {
    interaction.reply({ content: 'You must be in a voice channel!', ephemeral: true });
    return null;
  }
  return voiceChannel;
};

export const getOrCreatePlayer = (interaction: ChatInputCommandInteraction): MusicPlayerManager | null => {
  const voiceChannel = ensureVoiceChannel(interaction);
  if (!voiceChannel) return null;

  let manager = MusicPlayerManager.getPlayer(interaction.guildId!);
  if (!manager) {
    manager = new MusicPlayerManager(
      interaction.guildId!,
      voiceChannel,
      interaction.channel as TextChannel,
      interaction.member as GuildMember
    );
  }
  return manager;
};

export const playSong = async (interaction: ChatInputCommandInteraction, query: string): Promise<void> => {
  const manager = getOrCreatePlayer(interaction);
  if (!manager) return;

  const track = await extractTrack(query, interaction.user.id);
  if (!track) {
    await interaction.reply('Could not find the song!');
    return;
  }

  manager.addTrack(track);
  await interaction.reply(`Added to queue: ${track.title}`);
};