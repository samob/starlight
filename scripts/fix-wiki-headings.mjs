#!/usr/bin/env node
/**
 * Remove duplicate H1 headings from wiki pages that match the frontmatter title.
 * Run: node scripts/fix-wiki-headings.mjs
 */

import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const LOCALES = ['', 'en/', 'hr/']; // root = Slovenian

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  
  // Split frontmatter and rest
  const frontmatterMatch = content.match(/^---[\s\S]*?---/);
  if (!frontmatterMatch) return;
  
  const frontmatter = frontmatterMatch[0];
  const rest = content.substring(frontmatterMatch[0].length);
  
  // Extract title from frontmatter
  const titleMatch = frontmatter.match(/title:\s*"([^"]*)"/);
  if (!titleMatch) return;
  let title = titleMatch[1];
  
  // Find first heading in rest (after optional whitespace/newlines)
  const headingMatch = rest.match(/^\s*(#+)\s*([^\n]*)/m);
  if (!headingMatch) return;
  
  const headingLevel = headingMatch[1];
  const headingText = headingMatch[2].trim();
  
  // If it's an H1 and matches the title (ignoring surrounding whitespace and quotes)
  if (headingLevel === '#' && headingText === title) {
    // Remove the heading line and any following blank line
    const newRest = rest.replace(/^\s*#\s*[^\n]*\n\s*/, '');
    const newContent = frontmatter + newRest;
    if (newContent !== content) {
      await fs.writeFile(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  }
}

async function main() {
  for (const locale of LOCALES) {
    const wikiDir = join(PROJECT_ROOT, 'src/content/docs', locale, 'wiki');
    try {
      const files = await fs.readdir(wikiDir);
      const mdxFiles = files.filter(f => f.endsWith('.mdx'));
      for (const file of mdxFiles) {
        await processFile(join(wikiDir, file));
      }
      console.log(`Processed ${mdxFiles.length} files in ${locale || 'sl'} wiki`);
    } catch (err) {
      console.error(`Error reading ${wikiDir}:`, err.message);
    }
  }
}

main().catch(console.error);
