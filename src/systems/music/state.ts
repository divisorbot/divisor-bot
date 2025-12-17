import { MusicPlayer } from './types';
import { MusicPlayerManager } from './player';

export const players = new Map<string, MusicPlayer>();
export const managers = new Map<string, MusicPlayerManager>();