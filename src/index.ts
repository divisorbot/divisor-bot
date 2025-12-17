import { ActivityType } from 'discord.js';
import { createClient } from './client/createClient';
import { loadCommands } from './client/commandLoader';
import { loadEvents } from './client/eventLoader';
import { connectDB } from './database/mongo';
import { config } from './config/env';

const client = createClient();

const init = async (): Promise<void> => {
  await connectDB();
  await loadCommands(client);
  loadEvents(client);

  client.once('ready', () => {
    console.log(`Logged in as ${client.user?.tag}!`);
    client.user?.setActivity('Being built by Ramkrishna', { type: ActivityType.Watching });
  });

  await client.login(config.DISCORD_TOKEN);
};

init().catch(console.error);