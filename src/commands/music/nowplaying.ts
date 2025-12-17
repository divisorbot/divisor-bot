import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';
import { MusicPlayerManager } from '../../systems/music/player';

export const data = new SlashCommandBuilder()
  .setName('nowplaying')
  .setDescription('Show the currently playing song');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const manager = MusicPlayerManager.getPlayer(interaction.guildId!);
  if (!manager) {
    await interaction.reply('No music is playing!');
    return;
  }

  const current = manager.getCurrentTrack();
  if (!current) {
    await interaction.reply('No song is currently playing!');
    return;
  }

  const embed = new EmbedBuilder()
    .setTitle('Now Playing')
    .setDescription(current.title)
    .addFields(
      { name: 'Author', value: current.author, inline: true },
      { name: 'Duration', value: `${Math.floor(current.duration / 60)}:${(current.duration % 60).toString().padStart(2, '0')}`, inline: true }
    )
    .setThumbnail(current.thumbnail);

  await interaction.reply({ embeds: [embed] });
};