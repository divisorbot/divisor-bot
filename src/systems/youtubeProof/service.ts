import { Message } from 'discord.js';
import { YouTubeConfig } from './config.model';
import { YouTubeProof } from './proof.model';
import { validateProofSubmission } from './validator';

export const processProofSubmission = async (message: Message): Promise<void> => {
  const validation = await validateProofSubmission(message);
  if (!validation.valid) {
    await message.reply(validation.reason!);
    return;
  }

  const guildId = message.guild!.id;
  const attachment = message.attachments.first()!;

  const proof = new YouTubeProof({
    userId: message.author.id,
    guildId,
    messageId: message.id,
    attachmentUrl: attachment.url,
    status: 'approved',
    reviewedAt: new Date(),
  });

  await proof.save();

  const config = await YouTubeConfig.findOne({ guildId });
  if (config?.roleId) {
    const role = message.guild!.roles.cache.get(config.roleId);
    if (role) {
      try {
        await message.member!.roles.add(role);
      } catch (error) {
        console.error('Error adding role:', error);
      }
    }
  }

  await message.reply('Proof accepted! Role granted.');
};