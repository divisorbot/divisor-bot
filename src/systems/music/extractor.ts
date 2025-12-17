import ytdl from 'ytdl-core';
// @ts-ignore
import { getData } from 'spotify-url-info';
import { Track } from './types';

export const extractTrack = async (url: string, requestedBy: string): Promise<Track | null> => {
  if (ytdl.validateURL(url)) {
    const info = await ytdl.getInfo(url);
    const video = info.videoDetails;
    return {
      title: video.title,
      url: video.video_url,
      duration: parseInt(video.lengthSeconds),
      author: video.author.name,
      thumbnail: video.thumbnails[0].url,
      requestedBy,
      source: 'youtube',
    };
  } else if (url.includes('spotify.com')) {
    try {
      const data = await getData(url);
      if (data.type === 'track') {
        // Search YouTube for the track
        // For simplicity, return a placeholder or implement search
        // Here, assume we have a search function
        const searchQuery = `${data.name} ${data.artists[0].name}`;
        // Implement YouTube search
        // For now, stub
        return {
          title: data.name,
          url: '', // need to search
          duration: 0,
          author: data.artists[0].name,
          thumbnail: data.album.images[0].url,
          requestedBy,
          source: 'spotify',
        };
      }
    } catch (error) {
      console.error('Spotify extraction error:', error);
    }
  }
  return null;
};