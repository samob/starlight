#!/usr/bin/env node
/**
 * Fix internal wiki links to use extensionless URLs
 * - ./index.md -> ../
 * - ./page.md -> ./page
 * - Keeps external links (http, https, ../../) unchanged
 */

import { promises as fs } from 'node:fs';
import { join } from 'node:path';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');
const LOCALES = ['', 'en/', 'hr/'];

function fixLinks(content) {
  let fixed = content;
  let changes = 0;

  // Fix ./index.md -> ../ (go up to wiki index)
  // Match [text](./index.md) or [text](./index.md) with possible trailing chars
  const indexLinkRegex = /(\[.*?\]\()\.\/index\.md(\))/g;
  fixed = fixed.replace(indexLinkRegex, (match, prefix, suffix) => {
    changes++;
    return `${prefix}../${suffix}`;
  });

  // Fix ./page.md -> ./page (remove .md extension for internal wiki links)
  // But don't match if it's already extensionless, or if it's an external path (../../)
  // Match [text](./something.md) where something doesn't contain / or .
  const pageLinkRegex = /(\[.*?\]\()\.\/([a-z0-9-]+)\.md(\))/g;
  fixed = fixed.replace(pageLinkRegex, (match, prefix, page, suffix) => {
    changes++;
    return `${prefix}./${page}${suffix}`;
  });

  return { content: fixed, changes };
}

async function processFile(filePath) {
  let content = await fs.readFile(filePath, 'utf8');
  const { content: fixed, changes } = fixLinks(content);
  if (changes > 0) {
    await fs.writeFile(filePath, fixed, 'utf8');
    console.log(`Fixed ${changes} links in ${filePath}`);
    return changes;
  }
  return 0;
}

async function main() {
  let totalChanges = 0;
  let totalFiles = 0;

  for (const locale of LOCALES) {
    const wikiDir = join(PROJECT_ROOT, 'src/content/docs', locale, 'wiki');
    try {
      const files = await fs.readdir(wikiDir);
      const mdxFiles = files.filter(f => f.endsWith('.mdx'));
      for (const file of mdxFiles) {
        const changes = await processFile(join(wikiDir, file));
        if (changes > 0) totalFiles++;
        totalChanges += changes;
      }
      console.log(`Processed ${mdxFiles.length} files in ${locale || 'sl'} wiki`);
    } catch (err) {
      console.error(`Error reading ${wikiDir}:`, err.message);
    }
  }

  console.log(`\nTotal: ${totalChanges} links fixed in ${totalFiles} files`);
}

main().catch(console.error);
