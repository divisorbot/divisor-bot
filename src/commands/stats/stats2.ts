import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('stats2')
  .setDescription('Stats command 2');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This stats command is not yet implemented.');
};
