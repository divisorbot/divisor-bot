import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';
import { YouTubeConfig } from '../../systems/youtubeProof/config.model';

export const data = new SlashCommandBuilder()
  .setName('youtube-setup')
  .setDescription('Setup YouTube subscription proof system')
  .addChannelOption(option =>
    option.setName('channel')
      .setDescription('Channel for proof submissions')
      .setRequired(true)
  )
  .addStringOption(option =>
    option.setName('youtube_url')
      .setDescription('YouTube channel URL')
      .setRequired(true)
  )
  .addRoleOption(option =>
    option.setName('role')
      .setDescription('Role to grant on approval')
      .setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const channel = interaction.options.getChannel('channel');
  const youtubeUrl = interaction.options.getString('youtube_url');
  const role = interaction.options.getRole('role');
  const guildId = interaction.guild.id;

  await YouTubeConfig.findOneAndUpdate(
    { guildId },
    {
      guildId,
      enabled: true,
      channelId: channel.id,
      youtubeUrl,
      roleId: role.id,
    },
    { upsert: true }
  );

  await interaction.reply('YouTube proof system configured!');
};