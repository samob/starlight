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

function convertToMdx(content, filename) {
  // The Forgejo pages have OKF frontmatter in a table format at the top
  // We need to extract it and convert to YAML frontmatter
  
  // Skip the Forgejo UI wrapper - the raw content should be clean
  // But the raw endpoint returns the actual file content
  
  // If content starts with OKF table, convert it
  if (content.includes('source_of_truth') || content.includes('okf_version')) {
    // Extract the OKF frontmatter tables and convert to YAML
    // For now, keep as-is but ensure proper frontmatter
    return content;
  }
  
  // If no frontmatter, add basic one
  if (!content.startsWith('---')) {
    const title = filename.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    return `---\ntitle: ${title}\ndescription: Colibri wiki page\n---\n\n${content}`;
  }
  
  return content;
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
    
    console.log(`  �� Saved to ${LOCALES.length} locales`);
  } catch (err) {
    console.error(`  �� Failed: ${err.message}`);
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