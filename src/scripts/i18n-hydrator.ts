import { getStringByPath } from '../i18n/resolveKey';
import { $language, syncLanguageFromHtml } from '../stores/i18n';

type Bundle = Record<string, unknown>;

async function loadBundle(lang: 'es' | 'en'): Promise<Bundle> {
  const mod =
    lang === 'en'
      ? await import('../i18n/locales/en.json')
      : await import('../i18n/locales/es.json');
  return mod.default as Bundle;
}

function applyTranslations(bundle: Bundle): void {
  for (const el of document.querySelectorAll<HTMLElement>('[data-i18n-key]')) {
    const key = el.getAttribute('data-i18n-key');
    if (!key) continue;
    const val = getStringByPath(bundle, key);
    if (val === undefined) continue;
    const attr = el.getAttribute('data-i18n-attr');
    if (attr) el.setAttribute(attr, val);
    else el.textContent = val;
  }
}

async function apply(lang: 'es' | 'en'): Promise<void> {
  const bundle = await loadBundle(lang);
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  applyTranslations(bundle);
}

syncLanguageFromHtml();
void apply($language.get());
$language.listen((lang) => {
  void apply(lang);
});
