import { Message } from 'discord.js';
import { YouTubeConfig } from './config.model';
import { YouTubeProof } from './proof.model';

export const validateProofSubmission = async (message: Message): Promise<{ valid: boolean; reason?: string }> => {
  const guildId = message.guild?.id;
  if (!guildId) return { valid: false, reason: 'Not in a guild' };

  const config = await YouTubeConfig.findOne({ guildId });
  if (!config || !config.enabled) return { valid: false, reason: 'YouTube proof system not enabled' };

  if (message.channel.id !== config.channelId) return { valid: false, reason: 'Wrong channel' };

  if (message.attachments.size === 0) return { valid: false, reason: 'No attachment provided' };

  const attachment = message.attachments.first();
  if (!attachment?.contentType?.startsWith('image/')) return { valid: false, reason: 'Attachment is not an image' };

  const existingProof = await YouTubeProof.findOne({ userId: message.author.id, guildId });
  if (existingProof) return { valid: false, reason: 'You have already submitted a proof' };

  return { valid: true };
};