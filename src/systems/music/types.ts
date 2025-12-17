export interface Track {
  title: string;
  url: string;
  duration: number; // in seconds
  author: string;
  thumbnail: string;
  requestedBy: string;
  source: 'youtube' | 'spotify';
}

export interface MusicQueue {
  tracks: Track[];
  currentIndex: number;
  loop: boolean;
  shuffle: boolean;
  autoplay: boolean;
}

export interface MusicPlayer {
  guildId: string;
  voiceChannelId: string;
  textChannelId: string;
  queue: MusicQueue;
  volume: number;
  playing: boolean;
  paused: boolean;
  // voice connection etc.
}

export interface MusicConfig {
  guildId: string;
  defaultVolume: number;
  djRoleId?: string;
  autoplay: boolean;
  lockMusic: boolean;
}