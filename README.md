# Divisor Bot

Divisor Bot is a large-scale, production-ready Discord utility bot built with Node.js, TypeScript, and discord.js. It provides 100+ slash commands across multiple categories, modular systems for optional features, and MongoDB for persistent data storage.

## Features

- **100+ Slash Commands**: Organized into categories including utility, fun, stats, info, admin, YouTube proof, and dev.
- **Modular Systems**: Optional features like YouTube subscription proof can be enabled per guild.
- **MongoDB Persistence**: Guild configurations, proof submissions, and other data are stored in MongoDB.
- **Modern Discord UI Builders**: Utilizes discord.js builders for rich interactions.
- **Production-Ready**: Clean architecture, error handling, and scalability considerations.

## Primary Feature: YouTube Subscription Proof

An optional system for guilds to require users to prove YouTube channel subscriptions.

- Admins configure a submission channel, YouTube URL, and role to grant.
- Users submit screenshot proofs in the designated channel.
- Bot validates submissions and auto-grants roles on approval.
- Manual review options available.

## Music System

A full-featured music system supporting YouTube and Spotify playback.

### Core Commands

- `/play` - Play a song from URL or search query
- `/pause` - Pause the current song
- `/resume` - Resume playback
- `/stop` - Stop music and clear queue
- `/skip` - Skip to the next song
- `/queue` - Display the current queue
- `/volume` - Adjust playback volume (0-100)
- `/nowplaying` - Show current song information
- `/leave` - Disconnect from voice channel

### Advanced Commands

Playback: skipto, previous, replay, seek
Queue: clearqueue, remove, move, swap, shuffle, loop, repeat, autoplay
Audio: mute, unmute, bassboost, nightcore, vaporwave, speed, pitch, equalizer, resetfilters
Search: search, lyrics, related, recommend
Info: songinfo, queueinfo, playerstats
Control: forceskip, forcestop, lockmusic, unlockmusic, dj, setdjrole
Config: musicconfig, setvolume, setautoplay, settimeout
Utility: join, reconnect, fix

### Permissions

- Regular users can play music and view info
- DJs/Admins can control playback, modify queue, and configure settings
- Supports Discord permissions and bot-managed DJ roles

### Limitations

- Spotify support requires YouTube fallback for playback
- Lyrics command requires external API (not implemented)
- Some advanced filters may not be fully functional

## Setup Instructions

1. Clone the repository.
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example` with your Discord bot token, client ID, and MongoDB URI.
4. Build the project: `npm run build`
5. Start the bot: `npm start`

## MongoDB Setup

Ensure you have a MongoDB instance running. Update the `MONGODB_URI` in your `.env` file to point to your database.

## Command Philosophy

All commands are slash commands for consistency and discoverability. Permissions are enforced through Discord permissions and optional role checks. Commands are organized by category for easy management.

## Permissions Model

Admin and configuration commands require Discord administrator permissions. Optional role-based restrictions can be implemented for additional security.

## Deployment Notes

- Use a process manager like PM2 for production.
- Monitor resource usage, especially with large numbers of guilds.
- Regularly update dependencies for security.
- Backup MongoDB data regularly.

## License

MIT