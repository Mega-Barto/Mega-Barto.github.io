const PLACEHOLDER_RE = /\{\{\s*([a-zA-Z0-9_]+)\s*\}\}/g;

/** Flatten nested locale objects to `path → string`. Skips root `_meta`. */
export function flattenLocale(root, prefix = '') {
  const out = new Map();
  if (root === null || root === undefined || typeof root !== 'object' || Array.isArray(root)) {
    return out;
  }

  for (const [key, value] of Object.entries(root)) {
    if (key === '_meta' && prefix === '') continue;
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'string') {
      out.set(path, value);
      continue;
    }
    if (value !== null && typeof value === 'object' && !Array.isArray(value)) {
      for (const [childPath, childValue] of flattenLocale(value, path)) {
        out.set(childPath, childValue);
      }
      continue;
    }
    out.set(path, value);
  }

  return out;
}

export function collectNonStringLeaves(flat) {
  const bad = [];
  for (const [path, value] of flat) {
    if (typeof value !== 'string') bad.push({ path, value });
  }
  return bad;
}

export function stringLeaves(flat) {
  const out = new Map();
  for (const [path, value] of flat) {
    if (typeof value === 'string') out.set(path, value);
  }
  return out;
}

export function collectPlaceholders(template) {
  const names = new Set();
  for (const match of template.matchAll(PLACEHOLDER_RE)) {
    names.add(match[1]);
  }
  return names;
}

export function setByPath(root, path, value) {
  const parts = path.split('.');
  let cur = root;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    if (cur[part] === null || typeof cur[part] !== 'object' || Array.isArray(cur[part])) {
      cur[part] = {};
    }
    cur = cur[part];
  }
  cur[parts[parts.length - 1]] = value;
}

export function cloneJson(value) {
  return JSON.parse(JSON.stringify(value));
}

export function writeJson(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

export function formatPlaceholderSet(names) {
  return [...names].sort().join(', ') || '(none)';
}
