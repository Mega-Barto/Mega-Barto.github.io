import { useStore } from '@nanostores/react';
import { useEffect, useMemo, useState } from 'react';
import { $language } from '../stores/i18n';
import { getStringByPath } from './resolveKey';
import type { SiteLanguage } from './t';
import { t } from './t';

type Bundle = Record<string, unknown>;

export function useClientT(): (key: string, vars?: Record<string, string>) => string {
  const lang = useStore($language);
  const [bundle, setBundle] = useState<Bundle | null>(null);

  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const mod =
        lang === 'en' ? await import('./locales/en.json') : await import('./locales/es.json');
      if (!cancelled) setBundle(mod.default as Bundle);
    })();
    return () => {
      cancelled = true;
    };
  }, [lang]);

  return useMemo(() => {
    return (key: string, vars?: Record<string, string>) => {
      const b = bundle;
      if (!b) return t(key, lang, vars);
      let s = getStringByPath(b, key);
      if (s === undefined) return t(key, lang, vars);
      if (vars) {
        for (const [k, v] of Object.entries(vars)) {
          s = s.replace(new RegExp(`{{\\s*${k}\\s*}}`, 'g'), v);
        }
      }
      return s;
    };
  }, [bundle, lang]);
}

export function useClientLang(): SiteLanguage {
  return useStore($language);
}
