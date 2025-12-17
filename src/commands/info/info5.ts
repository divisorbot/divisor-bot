import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('info5')
  .setDescription('Info command 5');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This info command is not yet implemented.');
};
