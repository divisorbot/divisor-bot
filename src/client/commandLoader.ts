import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Client, Collection } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import { config } from '../config/env';

export const loadCommands = async (client: Client): Promise<void> => {
  client.commands = new Collection();

  const commandsPath = join(__dirname, '..', 'commands');
  const commandCategories = readdirSync(commandsPath);
  const commands = [];

  for (const category of commandCategories) {
    const categoryPath = join(commandsPath, category);
    const commandFiles = readdirSync(categoryPath).filter(file => file.endsWith('.ts'));

    for (const file of commandFiles) {
      const filePath = join(categoryPath, file);
      const command = require(filePath);

      if (command.data && command.execute) {
        client.commands.set(command.data.name, command);
        commands.push(command.data.toJSON());
      }
    }
  }

  const rest = new REST({ version: '9' }).setToken(config.DISCORD_TOKEN);

  try {
    await rest.put(
      Routes.applicationCommands(config.CLIENT_ID),
      { body: commands },
    );
    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error(error);
  }
};