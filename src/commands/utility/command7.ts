import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('command7')
  .setDescription('Description for command 7');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This command is not yet implemented.');
};
