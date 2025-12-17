import mongoose, { Schema, Document } from 'mongoose';

export interface IYouTubeProof extends Document {
  userId: string;
  guildId: string;
  messageId: string;
  attachmentUrl: string;
  status: 'pending' | 'approved' | 'rejected';
  reviewedAt?: Date;
  reviewedBy?: string;
}

const youtubeProofSchema = new Schema<IYouTubeProof>({
  userId: { type: String, required: true },
  guildId: { type: String, required: true },
  messageId: { type: String, required: true },
  attachmentUrl: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  reviewedAt: { type: Date },
  reviewedBy: { type: String },
});

// Index for unique user per guild
youtubeProofSchema.index({ userId: 1, guildId: 1 }, { unique: true });

export const YouTubeProof = mongoose.model<IYouTubeProof>('YouTubeProof', youtubeProofSchema);