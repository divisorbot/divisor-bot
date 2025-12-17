import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('coinflip')
  .setDescription('Flip a coin');

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
  await interaction.reply(`The coin landed on: ${result}!`);
};