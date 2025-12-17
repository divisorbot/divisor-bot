import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('youtube1')
  .setDescription('YouTube proof command 1');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This YouTube proof command is not yet implemented.');
};
