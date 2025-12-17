import { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('dev1')
  .setDescription('Dev command 1')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This dev command is not yet implemented.');
};
