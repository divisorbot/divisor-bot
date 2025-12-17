import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('fun13')
  .setDescription('Fun command 13');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This fun command is not yet implemented.');
};
