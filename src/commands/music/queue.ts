import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from 'discord.js';
import { MusicPlayerManager } from '../../systems/music/player';

export const data = new SlashCommandBuilder()
  .setName('queue')
  .setDescription('Show the current queue');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const manager = MusicPlayerManager.getPlayer(interaction.guildId!);
  if (!manager) {
    await interaction.reply('No music is playing!');
    return;
  }

  const queue = manager.getQueue();
  const current = manager.getCurrentTrack();

  const embed = new EmbedBuilder()
    .setTitle('Music Queue')
    .setDescription(queue.map((track, index) => `${index + 1}. ${track.title}`).join('\n') || 'Queue is empty');

  if (current) {
    embed.addFields({ name: 'Now Playing', value: current.title });
  }

  await interaction.reply({ embeds: [embed] });
};