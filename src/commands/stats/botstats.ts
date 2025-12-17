import { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('botstats')
  .setDescription('Get bot statistics');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const client = interaction.client;
  const embed = new EmbedBuilder()
    .setTitle('Bot Statistics')
    .addFields(
      { name: 'Servers', value: client.guilds.cache.size.toString(), inline: true },
      { name: 'Users', value: client.users.cache.size.toString(), inline: true },
      { name: 'Uptime', value: `${(client.uptime / 1000 / 60 / 60).toFixed(2)} hours`, inline: true },
    );
  await interaction.reply({ embeds: [embed] });
};