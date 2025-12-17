import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('stats6')
  .setDescription('Stats command 6');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This stats command is not yet implemented.');
};
