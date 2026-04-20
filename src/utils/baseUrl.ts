/** Prefija rutas internas con `import.meta.env.BASE_URL` (GitHub Pages con subruta). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const p = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${p}`;
}
