import { Events, Message } from 'discord.js';
import { processProofSubmission } from '../systems/youtubeProof/service';

export const name = Events.MessageCreate;

export const execute = async (message: Message): Promise<void> => {
  if (message.author.bot) return;

  await processProofSubmission(message);
};