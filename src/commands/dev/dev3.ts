import { SlashCommandBuilder, PermissionFlagsBits, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('dev3')
  .setDescription('Dev command 3')
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export const execute = async (interaction: ChatInputCommandInteraction) => {
  await interaction.reply('This dev command is not yet implemented.');
};
