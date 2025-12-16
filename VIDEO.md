# Video Integration in Astro Starlight

## Overview
This document outlines the plan to integrate video content (screencasts, tutorials) into the Starlight documentation site. Videos will enhance guides like deployment tutorials with visual demonstrations, improving user experience while maintaining performance.

## Current State
- Site built with Astro + Starlight, supporting MDX files.
- No video content integrated yet.
- Guides are text-based, multilingual (Slovenian primary, English/Croatian translations).

## Goals
- Embed screencasts in relevant guides (e.g., deployment-tutorial.mdx).
- Optimize videos for web (downscale resolution/bitrate to ~720p, MP4 format, <50MB/file).
- Ensure responsive, accessible embeds with lazy loading and captions where needed.
- Support self-hosted or external hosting (Mux for streaming).

## Implementation Options

### 1. Video Hosting
- **Self-Hosted**: Store optimized videos in `public/videos/`, serve via `<video>` tags.
- **External (Recommended)**: Use Mux for streaming to reduce load times and costs.

### 2. Embedding in Starlight
- **Basic**: `<video>` element in MDX files.
- **Enhanced**: Install `astro-embed` for YouTube/Vimeo, or `starlight-videos` plugin for structured guides.

### 3. Video Optimization
- **Tool**: Use `@profullstack/transcoder` (Node package) for batch transcoding to MP4.
- **Process**: Resize to 720p, reduce bitrate, ensure H.264 codec for browser compatibility.
- **Build Integration**: Add npm script to process videos pre-build.

### 4. Content Strategy
- Target: Add 2-3 videos per guide (e.g., deployment steps).
- Accessibility: Add transcripts/captions.
- Multilingual: Videos in Slovenian, subtitles in English/Croatian.

## Next Steps
1. Confirm screencast sources and specs (formats, lengths).
2. Choose hosting/optimization tools.
3. Test embedding in a sample guide.
4. Roll out to production.

## Dependencies
- `astro-embed` or `starlight-videos`
- `@profullstack/transcoder` or `thumbsup-downsize`
- FFmpeg (for transcoding)