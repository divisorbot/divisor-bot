import { SlashCommandBuilder, PermissionFlagsBits } from 'discord.js';

export const data = new SlashCommandBuilder()
  .setName('eval')
  .setDescription('Execute code')
  .addStringOption(option =>
    option.setName('code')
      .setDescription('Code to execute')
      .setRequired(true)
  )
  .setDefaultMemberPermissions(PermissionFlagsBits.Administrator);

export const execute = async (interaction: ChatInputCommandInteraction) => {
  const code = interaction.options.getString('code');
  try {
    let result = eval(code);
    if (typeof result !== 'string') result = require('util').inspect(result);
    await interaction.reply(`\`\`\`js\n${result}\n\`\`\``);
  } catch (error) {
    await interaction.reply(`Error: \`\`\`${error}\`\`\``);
  }
};