import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('userinfo')
  .setDescription('Get user information')
  .addUserOption(option =>
    option.setName('user')
      .setDescription('User to get info for')
      .setRequired(false)
  );

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const user = interaction.options.getUser('user') || interaction.user;
  const member = interaction.guild.members.cache.get(user.id);
  const embed = new EmbedBuilder()
    .setTitle(user.username)
    .setThumbnail(user.displayAvatarURL())
    .addFields(
      { name: 'ID', value: user.id, inline: true },
      { name: 'Joined Discord', value: user.createdAt.toString(), inline: true },
      { name: 'Joined Server', value: member?.joinedAt?.toString() || 'N/A', inline: true },
    );
  await interaction.reply({ embeds: [embed] });
};