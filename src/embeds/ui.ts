import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';

export const createHelpEmbed = () => {
  return new EmbedBuilder()
    .setTitle('Divisor Bot Help')
    .setDescription('Use slash commands to interact with the bot.')
    .addFields(
      { name: 'Utility', value: '/ping, /serverinfo, etc.', inline: true },
      { name: 'Fun', value: '/roll, /coinflip, etc.', inline: true },
    );
};

export const createActionRow = () => {
  return new ActionRowBuilder<ButtonBuilder>()
    .addComponents(
      new ButtonBuilder()
        .setCustomId('help_button')
        .setLabel('Get Help')
        .setStyle(ButtonStyle.Primary),
    );
};