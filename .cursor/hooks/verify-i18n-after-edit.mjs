import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), '../..');

function readPayload() {
  try {
    const raw = readFileSync(0, 'utf8').trim();
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function collectPaths(payload, acc = []) {
  if (typeof payload === 'string') {
    acc.push(payload);
    return acc;
  }
  if (!payload || typeof payload !== 'object') return acc;
  for (const key of ['file_path', 'filePath', 'path', 'file']) {
    if (typeof payload[key] === 'string') acc.push(payload[key]);
  }
  if (Array.isArray(payload.files)) {
    for (const file of payload.files) collectPaths(file, acc);
  }
  if (Array.isArray(payload.edits)) {
    for (const edit of payload.edits) collectPaths(edit, acc);
  }
  if (payload.tool_input && typeof payload.tool_input === 'object') {
    collectPaths(payload.tool_input, acc);
  }
  return acc;
}

function isLocaleJson(filePath) {
  const normalized = filePath.replaceAll('\\', '/');
  return /(?:^|\/)src\/i18n\/locales\/(en|es)\.json$/.test(normalized);
}

const payload = readPayload();
const paths = collectPaths(payload);
if (!paths.some(isLocaleJson)) {
  process.exit(0);
}

const result = spawnSync(process.execPath, ['scripts/verify-i18n.mjs'], {
  cwd: projectRoot,
  encoding: 'utf8',
});

if (result.status === 0) {
  process.exit(0);
}

const detail = (result.stderr || result.stdout || 'verify:i18n failed').trim();
console.error(detail);
process.exit(2);
