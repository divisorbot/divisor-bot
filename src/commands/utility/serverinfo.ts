import { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('serverinfo')
  .setDescription('Get server information');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const guild = interaction.guild;
  if (!guild) return;
  const embed = new EmbedBuilder()
    .setTitle(guild.name)
    .setThumbnail(guild.iconURL())
    .addFields(
      { name: 'Owner', value: `<@${guild.ownerId}>`, inline: true },
      { name: 'Members', value: guild.memberCount.toString(), inline: true },
      { name: 'Created', value: guild.createdAt.toString(), inline: true },
    );
  await interaction.reply({ embeds: [embed] });
};