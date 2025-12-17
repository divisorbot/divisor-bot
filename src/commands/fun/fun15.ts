import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('fun15')
  .setDescription('Fun command 15');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This fun command is not yet implemented.');
};
