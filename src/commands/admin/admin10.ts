import { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('admin10')
  .setDescription('Admin command 10')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This admin command is not yet implemented.');
};
