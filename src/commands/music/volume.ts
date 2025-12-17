import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';
import { MusicPlayerManager } from '../../systems/music/player';
import { ensureVoiceChannel } from '../../systems/music/service';

export const data = new SlashCommandBuilder()
  .setName('volume')
  .setDescription('Set the volume')
  .addIntegerOption(option =>
    option.setName('level')
      .setDescription('Volume level (0-100)')
      .setMinValue(0)
      .setMaxValue(100)
      .setRequired(true)
  );

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const manager = MusicPlayerManager.getPlayer(interaction.guildId!);
  if (!manager) {
    await interaction.reply('No music is playing!');
    return;
  }

  if (!ensureVoiceChannel(interaction)) return;

  const level = interaction.options.getInteger('level')!;
  manager.setVolume(level);
  await interaction.reply(`Set volume to ${level}%`);
};