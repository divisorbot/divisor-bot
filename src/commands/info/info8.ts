import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('info8')
  .setDescription('Info command 8');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This info command is not yet implemented.');
};
