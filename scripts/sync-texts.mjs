import { appendFileSync, existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse as parseYaml, stringify as stringifyYaml } from 'yaml';
import {
  cloneJson,
  collectNonStringLeaves,
  flattenLocale,
  setByPath,
  stringLeaves,
  writeJson,
} from './i18n-locale-utils.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const deckPath = join(root, 'src/i18n/copydeck.es.yaml');
const esPath = join(root, 'src/i18n/locales/es.json');
const enPath = join(root, 'src/i18n/locales/en.json');
const logDir = join(root, 'logs');
const logPath = join(logDir, 'i18n-sync.log');

const LOG_HEADER = `# i18n sync log
# Append-only record of copy deck applies, deck exports, and English locale syncs.
# Local only: logs/ is gitignored. Do not commit this file or rewrite past entries.
# Entry format: .cursor/skills/sync-i18n-en/SKILL.md
`;

const META = {
  locale_source: 'es',
  apply: 'bun run sync:texts',
  export: 'bun run sync:texts -- --export',
  english: 'After apply, follow .cursor/skills/sync-i18n-en/SKILL.md to update en.json',
  placeholders: 'Keep {{name}} tokens identical across locales',
};

function die(message) {
  console.error(message);
  process.exit(1);
}

function parseArgs(argv) {
  const args = {
    exportDeck: false,
    force: false,
    recordEn: false,
    scope: '',
    paths: [],
    verifyI18n: '',
    verify: '',
  };

  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--export') args.exportDeck = true;
    else if (arg === '--force') args.force = true;
    else if (arg === '--record-en') args.recordEn = true;
    else if (arg === '--scope') args.scope = requireValue(argv, ++i, '--scope');
    else if (arg === '--path') args.paths.push(requireValue(argv, ++i, '--path'));
    else if (arg === '--verify-i18n') args.verifyI18n = requireValue(argv, ++i, '--verify-i18n');
    else if (arg === '--verify') args.verify = requireValue(argv, ++i, '--verify');
    else die(`Unknown argument: ${arg}`);
  }

  return args;
}

function requireValue(argv, index, flag) {
  const value = argv[index];
  if (!value || value.startsWith('--')) die(`${flag} requires a value.`);
  return value;
}

function formatList(label, paths) {
  if (paths.length === 0) return [`${label}: (none)`];
  return [`${label}:`, ...paths.map((path) => `  - ${path}`)];
}

function appendSyncLog(lines) {
  mkdirSync(logDir, { recursive: true });
  if (!existsSync(logPath)) writeFileSync(logPath, LOG_HEADER, 'utf8');
  const entry = ['---', `timestamp: ${new Date().toISOString()}`, ...lines, ''].join('\n');
  appendFileSync(logPath, entry, 'utf8');
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    die(`Could not read JSON ${path}: ${err.message}`);
  }
}

function exportDeck(force) {
  if (existsSync(deckPath) && !force) {
    die(
      `Refusing to overwrite existing ${deckPath}. Re-run with --force if you mean to replace it.`,
    );
  }

  const es = readJson(esPath);
  const doc = { _meta: META, ...es };
  const yaml = `# Spanish copy deck for megabarto.com
# Same key tree as src/i18n/locales/es.json (string leaves only).
# Do not rename keys without updating data-i18n-key / *Key in src/.
# Flow: edit this file → bun run sync:texts → skill sync-i18n-en → bun run verify:i18n
${stringifyYaml(doc, { lineWidth: 100 })}`;

  writeFileSync(deckPath, yaml, 'utf8');
  appendSyncLog([
    'action: export',
    'command: bun run sync:texts -- --export',
    'source: src/i18n/locales/es.json',
    'target: src/i18n/copydeck.es.yaml',
    `forced: ${force}`,
  ]);
  console.log(`Wrote ${deckPath} from es.json`);
  console.log('Recorded export in logs/i18n-sync.log');
}

function applyDeck() {
  if (!existsSync(deckPath)) {
    die(`Missing ${deckPath}. Generate it with: bun run sync:texts -- --export`);
  }

  let deck;
  try {
    deck = parseYaml(readFileSync(deckPath, 'utf8'));
  } catch (err) {
    die(`Could not parse YAML ${deckPath}: ${err.message}`);
  }

  if (deck === null || typeof deck !== 'object' || Array.isArray(deck)) {
    die('copydeck.es.yaml must be a YAML mapping (object).');
  }

  const en = readJson(enPath);
  const es = readJson(esPath);
  const schema = stringLeaves(flattenLocale(en));
  const deckFlat = flattenLocale(deck);
  const nonStrings = collectNonStringLeaves(deckFlat);
  if (nonStrings.length > 0) {
    die(
      `copydeck.es.yaml has non-string leaves:\n${nonStrings
        .map(({ path, value }) => `  ${path}: ${typeof value}`)
        .join('\n')}`,
    );
  }

  const unknown = [];
  for (const path of deckFlat.keys()) {
    if (!schema.has(path)) unknown.push(path);
  }
  if (unknown.length > 0) {
    die(
      `Unknown key path(s) in copydeck.es.yaml (must exist in en.json):\n${unknown
        .map((p) => `  ${p}`)
        .join('\n')}`,
    );
  }

  const esFlat = stringLeaves(flattenLocale(es));
  const next = cloneJson(es);
  const changedPaths = [];
  for (const [path, value] of deckFlat) {
    setByPath(next, path, value);
    if (esFlat.get(path) !== value) changedPaths.push(path);
  }
  changedPaths.sort();

  writeFileSync(esPath, writeJson(next), 'utf8');

  const missingInDeck = [];
  for (const path of schema.keys()) {
    if (!deckFlat.has(path)) missingInDeck.push(path);
  }
  missingInDeck.sort();

  appendSyncLog([
    'action: apply',
    'command: bun run sync:texts',
    'deck: src/i18n/copydeck.es.yaml',
    'target: src/i18n/locales/es.json',
    `keys_applied: ${deckFlat.size}`,
    `keys_changed: ${changedPaths.length}`,
    `missing_in_deck: ${missingInDeck.length}`,
    ...formatList('changed_paths', changedPaths),
    ...formatList('missing_paths', missingInDeck),
  ]);

  console.log(`Applied ${deckFlat.size} deck key(s) to es.json (${changedPaths.length} changed).`);
  console.log('Recorded apply in logs/i18n-sync.log');
  if (missingInDeck.length > 0) {
    console.warn(
      `Warning: ${missingInDeck.length} schema key(s) not in the copy deck (partial deck is OK).`,
    );
  }
}

function recordEn({ scope, paths, verifyI18n, verify }) {
  if (scope !== 'incremental' && scope !== 'full') {
    die('--scope must be "incremental" or "full".');
  }
  const statuses = new Set(['pass', 'fail', 'skipped']);
  if (!statuses.has(verifyI18n)) die('--verify-i18n must be pass, fail, or skipped.');
  if (!statuses.has(verify)) die('--verify must be pass, fail, or skipped.');

  const unique = [...new Set(paths)].sort();
  const schema = stringLeaves(flattenLocale(readJson(enPath)));
  const unknown = unique.filter((path) => !schema.has(path));
  if (unknown.length > 0) {
    die(`Unknown --path value(s):\n${unknown.map((path) => `  ${path}`).join('\n')}`);
  }

  const allLeaves = scope === 'full' && unique.length === 0;
  const keysTranslated = allLeaves ? schema.size : unique.length;
  appendSyncLog([
    'action: en',
    'command: skill sync-i18n-en',
    'source: src/i18n/locales/es.json',
    'target: src/i18n/locales/en.json',
    `scope: ${scope}`,
    `keys_translated: ${keysTranslated}`,
    `verify_i18n: ${verifyI18n}`,
    `verify: ${verify}`,
    ...(allLeaves ? ['paths: (all string leaves)'] : formatList('paths', unique)),
  ]);
  console.log(
    `Recorded English sync in logs/i18n-sync.log (${keysTranslated} key(s), scope ${scope}).`,
  );
}

const args = parseArgs(process.argv.slice(2));
if (args.recordEn && (args.exportDeck || args.force)) {
  die('Use --record-en on its own, without --export or --force.');
}
if (args.recordEn) recordEn(args);
else if (args.exportDeck) exportDeck(args.force);
else applyDeck();
