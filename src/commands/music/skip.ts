import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { MusicPlayerManager } from '../../systems/music/player';
import { ensureVoiceChannel } from '../../systems/music/service';

export const data = new SlashCommandBuilder()
  .setName('skip')
  .setDescription('Skip the current song');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const manager = MusicPlayerManager.getPlayer(interaction.guildId!);
  if (!manager) {
    await interaction.reply('No music is playing!');
    return;
  }

  if (!ensureVoiceChannel(interaction)) return;

  manager.skip();
  await interaction.reply('Skipped the song!');
};