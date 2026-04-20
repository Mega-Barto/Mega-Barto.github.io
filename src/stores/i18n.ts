import { atom } from 'nanostores';

import type { SiteLanguage } from '../i18n/t';

/** Misma clave que usaba `i18next-browser-languagedetector` para conservar preferencia. */
export const I18N_STORAGE_KEY = 'i18nextLng';

export const $language = atom<SiteLanguage>('es');

/** Alinea el store con `<html data-lang>` del script inline (antes de hidratar). */
export function syncLanguageFromHtml(): void {
  if (typeof document === 'undefined') return;
  const attr = document.documentElement.getAttribute('data-lang');
  if (attr === 'en' || attr === 'es') {
    $language.set(attr);
  }
}

export function setLanguage(lang: SiteLanguage): void {
  $language.set(lang);
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);
  }
  if (typeof localStorage !== 'undefined') {
    try {
      localStorage.setItem(I18N_STORAGE_KEY, lang);
    } catch {
      /* ignore quota / private mode */
    }
  }
}
