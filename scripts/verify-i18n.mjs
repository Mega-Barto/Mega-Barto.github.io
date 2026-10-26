import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  collectPlaceholders,
  flattenLocale,
  formatPlaceholderSet,
  stringLeaves,
} from './i18n-locale-utils.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const srcDir = join(root, 'src');
const esPath = join(root, 'src/i18n/locales/es.json');
const enPath = join(root, 'src/i18n/locales/en.json');
const SCAN_EXTS = new Set(['.ts', '.tsx', '.astro', '.js', '.mjs']);
const KEY_RE =
  /(?:data-i18n-key=(?:["']|\{["'`])|(?:\w+Key:\s*["'])|(?:\bt\(\s*["']))([a-zA-Z][\w.]*)["'`]/g;
const DYNAMIC_PREFIX_RE = /(?:data-i18n-key=\{`|\bt\(\s*`)([a-zA-Z][\w.]*)\.\$\{/g;

function die(message) {
  console.error(message);
  process.exit(1);
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (err) {
    die(`Could not read JSON ${path}: ${err.message}`);
  }
}

function walkFiles(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) {
      if (name === 'node_modules' || name === 'locales') continue;
      walkFiles(full, acc);
      continue;
    }
    if (SCAN_EXTS.has(extname(name))) acc.push(full);
  }
  return acc;
}

function extractKeys(source) {
  const keys = new Set();
  const prefixes = new Set();
  for (const match of source.matchAll(KEY_RE)) {
    keys.add(match[1]);
  }
  for (const match of source.matchAll(DYNAMIC_PREFIX_RE)) {
    prefixes.add(match[1]);
  }
  return { keys, prefixes };
}

function hasPrefix(schema, prefix) {
  const needle = `${prefix}.`;
  for (const path of schema.keys()) {
    if (path === prefix || path.startsWith(needle)) return true;
  }
  return false;
}

const strict = process.argv.includes('--strict');
const en = readJson(enPath);
const es = readJson(esPath);
const enFlat = stringLeaves(flattenLocale(en));
const esFlat = stringLeaves(flattenLocale(es));
const errors = [];
const warnings = [];

for (const path of enFlat.keys()) {
  if (!esFlat.has(path)) errors.push(`Missing in es.json: ${path}`);
}
for (const path of esFlat.keys()) {
  if (!enFlat.has(path)) errors.push(`Missing in en.json: ${path}`);
}

for (const path of enFlat.keys()) {
  if (!esFlat.has(path)) continue;
  const enPh = collectPlaceholders(enFlat.get(path));
  const esPh = collectPlaceholders(esFlat.get(path));
  if (enPh.size === esPh.size && [...enPh].every((n) => esPh.has(n))) continue;
  errors.push(
    `Placeholder mismatch at ${path}: en={${formatPlaceholderSet(enPh)}} es={${formatPlaceholderSet(esPh)}}`,
  );
}

const usedKeys = new Set();
const usedPrefixes = new Set();
for (const file of walkFiles(srcDir)) {
  const source = readFileSync(file, 'utf8');
  const { keys, prefixes } = extractKeys(source);
  for (const key of keys) usedKeys.add(key);
  for (const prefix of prefixes) usedPrefixes.add(prefix);
}

for (const key of [...usedKeys].sort()) {
  if (!enFlat.has(key)) {
    errors.push(`Referenced in code but missing in en.json: ${key}`);
  }
}

for (const prefix of [...usedPrefixes].sort()) {
  if (!hasPrefix(enFlat, prefix)) {
    errors.push(`Dynamic i18n prefix missing in en.json: ${prefix}.*`);
  }
}

if (strict) {
  for (const path of [...enFlat.keys()].sort()) {
    const covered =
      usedKeys.has(path) || [...usedPrefixes].some((p) => path === p || path.startsWith(`${p}.`));
    if (!covered) warnings.push(`Unused locale key: ${path}`);
  }
  for (const w of warnings) errors.push(w);
}

if (errors.length > 0) {
  die(`verify:i18n failed (${errors.length} issue(s)):\n${errors.map((e) => `  ${e}`).join('\n')}`);
}

const relEn = relative(root, enPath).replaceAll('\\', '/');
const relEs = relative(root, esPath).replaceAll('\\', '/');
console.log(
  `verify:i18n OK — ${enFlat.size} keys in ${relEn} / ${relEs}; ${usedKeys.size} static + ${usedPrefixes.size} dynamic prefix(es) referenced in src/.`,
);
