import en from './locales/en.json';
import es from './locales/es.json';
import { getStringByPath } from './resolveKey';

export type SiteLanguage = 'es' | 'en';

const bundles: Record<SiteLanguage, unknown> = { es, en };

function applyVars(template: string, vars?: Record<string, string>): string {
  if (!vars) return template;
  let out = template;
  for (const [k, v] of Object.entries(vars)) {
    out = out.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), v);
  }
  return out;
}

/** Traducción por clave tipo `header.navigation.projects` (SSG y uso en islas). */
export function t(key: string, lang: SiteLanguage = 'es', vars?: Record<string, string>): string {
  const primary = getStringByPath(bundles[lang], key);
  if (primary !== undefined) return applyVars(primary, vars);
  const fallback = getStringByPath(bundles.es, key);
  return applyVars(fallback ?? key, vars);
}
