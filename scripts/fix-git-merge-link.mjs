#!/usr/bin/env node
/**
 * Fix the git-merge link in tmux-safety.mdx to point to Forgejo
 */

import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const LOCALES = ['', 'en/', 'hr/'];

const FORGEJO_URL = 'https://code.smilepowered.org/clawdie/colibri/src/branch/main/.agent/skills/git-merge/SKILL.md';

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  
  // Replace the relative link with absolute Forgejo URL
  const oldLink = '[git-merge skill](../../.agent/skills/git-merge/SKILL.md)';
  const newLink = `[git-merge skill](${FORGEJO_URL})`;
  
  if (content.includes(oldLink)) {
    content = content.replace(oldLink, newLink);
    await fs.writeFile(filePath, content, 'utf8');
    console.log(`Fixed git-merge link in ${filePath}`);
    return true;
  }
  return false;
}

async function main() {
  for (const locale of LOCALES) {
    const filePath = join(PROJECT_ROOT, 'src/content/docs', locale, 'wiki', 'tmux-safety.mdx');
    try {
      await processFile(filePath);
    } catch (err) {
      console.error(`Error processing ${filePath}:`, err.message);
    }
  }
  console.log('Done');
}

main().catch(console.error);
