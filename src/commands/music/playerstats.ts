import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('playerstats')
  .setDescription('Description for playerstats');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This music command is not yet implemented.');
};
