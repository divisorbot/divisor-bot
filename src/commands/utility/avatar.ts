import { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('avatar')
  .setDescription('Get user avatar')
  .addUserOption(option =>
    option.setName('user')
      .setDescription('User to get avatar for')
      .setRequired(false)
  );

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const user = interaction.options.getUser('user') || interaction.user;
  const embed = new EmbedBuilder()
    .setTitle(`${user.username}'s Avatar`)
    .setImage(user.displayAvatarURL({ size: 1024 }));
  await interaction.reply({ embeds: [embed] });
};