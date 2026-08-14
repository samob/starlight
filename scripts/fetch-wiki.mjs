#!/usr/bin/env node
/**
 * Fetch Colibri wiki pages from Forgejo and create .mdx files in all 3 languages
 * Run: node scripts/fetch-wiki.mjs
 */

import { promises as fs } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = join(__dirname, '..');

const WIKI_PAGES = [
  'a2a-complexity-audit.md',
  'abbreviations.md',
  'agent-events-reference.md',
  'agent-harness.md',
  'bare-metal-freebsd.md',
  'contracts.md',
  'cost-dashboard.md',
  'cost-model.md',
  'daemon-not-demon.md',
  'deepseek-pricing.md',
  'deployment.md',
  'doctor.md',
  'external-mcp.md',
  'factory-model.md',
  'forge-ops.md',
  'glasspane.md',
  'glm-pricing.md',
  'headroom-sidecar.md',
  'hive-pane.md',
  'hive-routing.md',
  'index.md',
  'jail-confinement.md',
  'layered-soul.md',
  'llama-cpp-benchmarks.md',
  'llama-cpp.md',
  'model-selection-and-eval.md',
  'mother-hive.md',
  'naming-decisions.md',
  'operator-attention.md',
  'operator-cli.md',
  'pull-requests.md',
  'quality-gates.md',
  'runtime-inventory.md',
  'rust-glossary.md',
  'skills-catalog.md',
  'ssh-bridge.md',
  'store-schema.md',
  'task-board.md',
  'task-dispatch-flow.md',
  'terminal.md',
  'tmux-safety.md',
  'tokenomics.md',
  'ts-legacy.md',
  'tui.md',
  'updating-a-node.md',
  'vault-provision.md',
  'verify-before-execute.md'
];

const BASE_URL = 'https://code.smilepowered.org/clawdie/colibri/raw/branch/main/docs/wiki/';
const LOCALES = ['', 'en/', 'hr/']; // root = Slovenian

function fetchWithTimeout(url, options = {}) {
  const { timeout = 10000 } = options;
  return Promise.race([
    fetch(url).then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      return res.text();
    }),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), timeout))
  ]);
}

function extractTitleFromFrontmatter(frontmatter) {
  const match = frontmatter.match(/title:\s*"([^"]*)"/);
  return match ? match[1] : null;
}

function removeDuplicateHeading(content) {
  // Split frontmatter and rest
  const frontmatterMatch = content.match(/^---[\s\S]*?---/);
  if (!frontmatterMatch) return content;

  const frontmatter = frontmatterMatch[0];
  const rest = content.substring(frontmatterMatch[0].length);

  const title = extractTitleFromFrontmatter(frontmatter);
  if (!title) return content;

  // Find first heading line in rest
  const headingMatch = rest.match(/^\s*(#+)\s*([^\n]*)/m);
  if (!headingMatch) return content;

  const headingLevel = headingMatch[1];
  const headingText = headingMatch[2].trim();

  // If it's an H1 and matches the title, remove it
  if (headingLevel === '#' && headingText === title) {
    // Remove the heading line and any following blank line (including newline after)
    const newRest = rest.replace(/^\s*#\s*[^\n]*\n\s*/, '');
    return frontmatter + newRest;
  }

  return content;
}

function convertToMdx(content, filename) {
  // If no frontmatter, add a basic one
  if (!content.startsWith('---')) {
    const title = filename.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `---\ntitle: ${title}\ndescription: Colibri wiki page\n---\n\n${content}`;
  }

  // Remove duplicate H1 heading that matches frontmatter title
  return removeDuplicateHeading(content);
}

async function fetchAndSave(page) {
  const url = BASE_URL + page;
  try {
    console.log(`Fetching ${page}...`);
    const content = await fetchWithTimeout(url);
    const mdxContent = convertToMdx(content, page);
    const mdxName = page.replace('.md', '.mdx');
    
    for (const locale of LOCALES) {
      const targetDir = join(PROJECT_ROOT, 'src/content/docs', locale, 'wiki');
      await fs.mkdir(targetDir, { recursive: true });
      const targetPath = join(targetDir, mdxName);
      await fs.writeFile(targetPath, mdxContent, 'utf8');
    }
    
    console.log(`  ���� �� Saved to ${LOCALES.length} locales`);
  } catch (err) {
    console.error(`  ���� �� Failed: ${err.message}`);
  }
}

async function main() {
  console.log(`Fetching ${WIKI_PAGES.length} wiki pages from Colibri repo...\n`);
  
  for (const page of WIKI_PAGES) {
    await fetchAndSave(page);
    // Small delay to be nice to the server
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log('\nDone!');
}

main().catch(console.error);
