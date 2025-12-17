import dotenv from 'dotenv';

dotenv.config();

const requiredEnvVars = ['DISCORD_TOKEN', 'MONGODB_URI', 'CLIENT_ID'];

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

export const config = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN!,
  MONGODB_URI: process.env.MONGODB_URI!,
  CLIENT_ID: process.env.CLIENT_ID!,
};