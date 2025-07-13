import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar traducciones
import en from './locales/en.json';
import es from './locales/es.json';

// Configuración de recursos
const resources = {
  en: {
    translation: en
  },
  es: {
    translation: es
  }
} as const;

// Configuración de i18n
i18n
  .use(LanguageDetector) // Detecta el idioma del navegador
  .use(initReactI18next) // Conecta con React
  .init({
    resources,
    fallbackLng: 'es', // Idioma por defecto
    lng: 'es', // Idioma inicial
    debug: import.meta.env.DEV,

    // Configuración del detector de idioma
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'i18nextLng',
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React ya escapa por defecto
    },

    // Configuración de namespace
    defaultNS: 'translation',
    ns: ['translation'],

    // Configuración de carga
    load: 'languageOnly',
    preload: ['es', 'en'],

    // Configuración de recursos faltantes
    saveMissing: true,
    missingKeyHandler: (lng, _ns, key) => {
      if (import.meta.env.DEV) {
        console.warn(`Missing translation key: ${key} for language: ${lng}`);
      }
    },
  });

export default i18n;

// Tipos para TypeScript
export type Language = 'es' | 'en';

// Función helper para cambiar idioma
export const changeLanguage = (lng: Language) => {
  return i18n.changeLanguage(lng);
};

// Función helper para obtener el idioma actual
export const getCurrentLanguage = (): Language => {
  return i18n.language as Language;
};

// Función helper para obtener idiomas disponibles
export const getAvailableLanguages = (): Language[] => {
  return ['es', 'en'];
};
