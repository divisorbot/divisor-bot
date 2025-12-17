import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('stats1')
  .setDescription('Stats command 1');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This stats command is not yet implemented.');
};
