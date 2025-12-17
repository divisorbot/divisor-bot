import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { MusicPlayerManager } from '../../systems/music/player';

export const data = new SlashCommandBuilder()
  .setName('leave')
  .setDescription('Make the bot leave the voice channel');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const manager = MusicPlayerManager.getPlayer(interaction.guildId!);
  if (!manager) {
    await interaction.reply('The bot is not in a voice channel!');
    return;
  }

  manager.leave();
  await interaction.reply('Left the voice channel!');
};