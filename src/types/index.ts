import { Collection, SlashCommandBuilder, ChatInputCommandInteraction, Client } from 'discord.js';

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, { data: SlashCommandBuilder; execute: Function }>;
  }
}

export interface Command {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}