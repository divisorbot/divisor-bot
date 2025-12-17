import mongoose, { Schema, Document } from 'mongoose';

export interface IYouTubeConfig extends Document {
  guildId: string;
  enabled: boolean;
  channelId: string;
  youtubeUrl: string;
  roleId: string;
}

const youtubeConfigSchema = new Schema<IYouTubeConfig>({
  guildId: { type: String, required: true, unique: true },
  enabled: { type: Boolean, default: false },
  channelId: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  roleId: { type: String, required: true },
});

export const YouTubeConfig = mongoose.model<IYouTubeConfig>('YouTubeConfig', youtubeConfigSchema);