import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('fun10')
  .setDescription('Fun command 10');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This fun command is not yet implemented.');
};
