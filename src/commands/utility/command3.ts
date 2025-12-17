import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('command3')
  .setDescription('Description for command 3');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This command is not yet implemented.');
};
