import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('roll')
  .setDescription('Roll a dice')
  .addIntegerOption(option =>
    option.setName('sides')
      .setDescription('Number of sides')
      .setMinValue(2)
      .setMaxValue(100)
      .setRequired(false)
  );

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const sides = interaction.options.getInteger('sides') || 6;
  const result = Math.floor(Math.random() * sides) + 1;
  await interaction.reply(`Rolled a ${result} on a ${sides}-sided die!`);
};