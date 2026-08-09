/**
 * Centralized image registry for tech-skills content
 * This module provides a single source of truth for all image assets
 * used across the multilingual CV tech-skills pages.
 */

import type { ImageMetadata } from 'astro';

import terminalChat from '~/assets/ollama-dolphin-terminal-chat.png';
import dnsExample from '~/assets/siel.png';
import dockerExample from '~/assets/docker-compose-up.png';
import blenderExample from '~/assets/Icosphere.png';
import windsurfExample from '~/assets/windsurf-editor.png';
import automatorAuth from '~/assets/automator-auth-n8n.png';
import automatorBot from '~/assets/automator-bot-creating-n8n-webhook.png';
import screenshot1 from '~/assets/Screenshot_20251020_154352.png';
import screenshot2 from '~/assets/Screenshot_20251023_025116.png';
import screenshot3 from '~/assets/Screenshot_20251102_020915.png';
import blenderDomeExample from '~/assets/blender-dome-example.png';
import face1 from '~/assets/3v-dome-face-select-01.png';
import face2 from '~/assets/3v-dome-face-select-02.png';
import face3 from '~/assets/3v-dome-face-select-03.png';
import face4 from '~/assets/3v-dome-face-select-04.png';

export interface TechSkillsImages {
  terminalChat: ImageMetadata;
  dnsExample: ImageMetadata;
  dockerExample: ImageMetadata;
  blenderExample: ImageMetadata;
  windsurfExample: ImageMetadata;
  automatorAuth: ImageMetadata;
  automatorBot: ImageMetadata;
  screenshot1: ImageMetadata;
  screenshot2: ImageMetadata;
  screenshot3: ImageMetadata;
  blenderDomeExample: ImageMetadata;
  face1: ImageMetadata;
  face2: ImageMetadata;
  face3: ImageMetadata;
  face4: ImageMetadata;
}

export const images: TechSkillsImages = {
  terminalChat,
  dnsExample,
  dockerExample,
  blenderExample,
  windsurfExample,
  automatorAuth,
  automatorBot,
  screenshot1,
  screenshot2,
  screenshot3,
  blenderDomeExample,
  face1,
  face2,
  face3,
  face4,
};

// Export individual images for selective imports
export {
  terminalChat,
  dnsExample,
  dockerExample,
  blenderExample,
  windsurfExample,
  automatorAuth,
  automatorBot,
  screenshot1,
  screenshot2,
  screenshot3,
  blenderDomeExample,
  face1,
  face2,
  face3,
  face4,
};
