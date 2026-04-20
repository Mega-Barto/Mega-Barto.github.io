import { useStore } from '@nanostores/react';
import { useEffect, useLayoutEffect } from 'react';
import { getStringByPath } from '../../i18n/resolveKey';
import { $language, syncLanguageFromHtml } from '../../stores/i18n';

async function loadBundle(lang: 'es' | 'en'): Promise<Record<string, unknown>> {
  const mod =
    lang === 'en'
      ? await import('../../i18n/locales/en.json')
      : await import('../../i18n/locales/es.json');
  return mod.default as Record<string, unknown>;
}

function applyTranslations(bundle: Record<string, unknown>): void {
  for (const el of document.querySelectorAll('[data-i18n-key]')) {
    const key = el.getAttribute('data-i18n-key');
    if (!key) continue;
    const val = getStringByPath(bundle, key);
    if (val === undefined) continue;
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) el.setAttribute(attr, val);
    else el.textContent = val;
  }
}

export default function I18nHydrator() {
  const lang = useStore($language);

  useLayoutEffect(() => {
    syncLanguageFromHtml();
  }, []);

  useEffect(() => {
    void (async () => {
      const bundle = await loadBundle(lang);
      document.documentElement.lang = lang;
      document.documentElement.setAttribute('data-lang', lang);
      applyTranslations(bundle);
    })();
  }, [lang]);

  return null;
}
