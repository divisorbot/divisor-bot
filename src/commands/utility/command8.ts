import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('command8')
  .setDescription('Description for command 8');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This command is not yet implemented.');
};
