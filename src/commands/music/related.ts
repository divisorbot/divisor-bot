import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('related')
  .setDescription('Description for related');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This music command is not yet implemented.');
};
