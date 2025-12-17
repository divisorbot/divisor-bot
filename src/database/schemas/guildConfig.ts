import mongoose, { Schema, Document } from 'mongoose';

export interface IGuildConfig extends Document {
  guildId: string;
  youtubeProofEnabled: boolean;
  youtubeProofChannelId?: string;
  youtubeChannelUrl?: string;
  youtubeProofRoleId?: string;
  // Add other config fields as needed
}

const guildConfigSchema = new Schema<IGuildConfig>({
  guildId: { type: String, required: true, unique: true },
  youtubeProofEnabled: { type: Boolean, default: false },
  youtubeProofChannelId: { type: String },
  youtubeChannelUrl: { type: String },
  youtubeProofRoleId: { type: String },
});

export const GuildConfig = mongoose.model<IGuildConfig>('GuildConfig', guildConfigSchema);