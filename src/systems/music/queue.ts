import { MusicQueue, Track } from './types';

export class QueueManager {
  private queue: MusicQueue;

  constructor() {
    this.queue = {
      tracks: [],
      currentIndex: -1,
      loop: false,
      shuffle: false,
      autoplay: false,
    };
  }

  addTrack(track: Track): void {
    this.queue.tracks.push(track);
  }

  removeTrack(index: number): Track | null {
    if (index >= 0 && index < this.queue.tracks.length) {
      return this.queue.tracks.splice(index, 1)[0];
    }
    return null;
  }

  getCurrentTrack(): Track | null {
    if (this.queue.currentIndex >= 0 && this.queue.currentIndex < this.queue.tracks.length) {
      return this.queue.tracks[this.queue.currentIndex];
    }
    return null;
  }

  nextTrack(): Track | null {
    if (this.queue.tracks.length === 0) return null;
    if (this.queue.loop) {
      this.queue.currentIndex = (this.queue.currentIndex + 1) % this.queue.tracks.length;
    } else {
      this.queue.currentIndex++;
      if (this.queue.currentIndex >= this.queue.tracks.length) {
        return null;
      }
    }
    return this.getCurrentTrack();
  }

  previousTrack(): Track | null {
    if (this.queue.tracks.length === 0) return null;
    if (this.queue.loop) {
      this.queue.currentIndex = this.queue.currentIndex > 0 ? this.queue.currentIndex - 1 : this.queue.tracks.length - 1;
    } else {
      this.queue.currentIndex = Math.max(0, this.queue.currentIndex - 1);
    }
    return this.getCurrentTrack();
  }

  clear(): void {
    this.queue.tracks = [];
    this.queue.currentIndex = -1;
  }

  shuffle(): void {
    // Implement shuffle
    for (let i = this.queue.tracks.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.queue.tracks[i], this.queue.tracks[j]] = [this.queue.tracks[j], this.queue.tracks[i]];
    }
  }

  getQueue(): Track[] {
    return this.queue.tracks;
  }

  setLoop(loop: boolean): void {
    this.queue.loop = loop;
  }

  setShuffle(shuffle: boolean): void {
    this.queue.shuffle = shuffle;
  }
}