import { SlashCommandBuilder, EmbedBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('help')
  .setDescription('Get help with commands');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const embed = new EmbedBuilder()
    .setTitle('Divisor Bot Help')
    .setDescription('Here are the available command categories:')
    .addFields(
      { name: 'Utility', value: 'ping, serverinfo, userinfo, avatar, etc.', inline: true },
      { name: 'Fun', value: 'roll, coinflip, etc.', inline: true },
      { name: 'Stats', value: 'botstats, etc.', inline: true },
      { name: 'Info', value: 'help, etc.', inline: true },
      { name: 'Admin', value: 'Admin commands', inline: true },
      { name: 'YouTube Proof', value: 'youtube-setup, etc.', inline: true },
      { name: 'Dev', value: 'Developer commands', inline: true },
    );
  await interaction.reply({ embeds: [embed] });
};