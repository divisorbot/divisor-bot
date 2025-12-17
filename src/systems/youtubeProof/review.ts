import { YouTubeProof } from './proof.model';
import { YouTubeConfig } from './config.model';
import { GuildMember } from 'discord.js';

export const approveProof = async (proofId: string, reviewerId: string, member: GuildMember): Promise<string> => {
  const proof = await YouTubeProof.findById(proofId);
  if (!proof) return 'Proof not found';

  proof.status = 'approved';
  proof.reviewedBy = reviewerId;
  proof.reviewedAt = new Date();
  await proof.save();

  const config = await YouTubeConfig.findOne({ guildId: proof.guildId });
  if (config?.roleId) {
    const role = member.guild.roles.cache.get(config.roleId);
    if (role) {
      try {
        await member.roles.add(role);
      } catch (error) {
        return 'Error adding role';
      }
    }
  }

  return 'Proof approved';
};

export const rejectProof = async (proofId: string, reviewerId: string): Promise<string> => {
  const proof = await YouTubeProof.findById(proofId);
  if (!proof) return 'Proof not found';

  proof.status = 'rejected';
  proof.reviewedBy = reviewerId;
  proof.reviewedAt = new Date();
  await proof.save();

  return 'Proof rejected';
};