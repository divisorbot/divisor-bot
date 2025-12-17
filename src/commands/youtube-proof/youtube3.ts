import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('youtube3')
  .setDescription('YouTube proof command 3');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This YouTube proof command is not yet implemented.');
};
