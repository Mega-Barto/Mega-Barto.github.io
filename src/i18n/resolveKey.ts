export function getStringByPath(root: unknown, path: string): string | undefined {
  let cur: unknown = root;
  for (const segment of path.split('.')) {
    if (cur === null || cur === undefined || typeof cur !== 'object') return undefined;
    if (!Object.hasOwn(cur, segment)) return undefined;
    cur = (cur as Record<string, unknown>)[segment];
  }
  return typeof cur === 'string' ? cur : undefined;
}
