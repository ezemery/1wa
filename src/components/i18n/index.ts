import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";
import translationFR from "./locales/fr/translation.json";

import { initReactI18next } from 'react-i18next';


export const resources = {
  en: {
    translation: translationEN
  },
  ar: {
    translation: translationAR
  },
  fr: {
    translation: translationFR
  }
} as const;

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    resources,
    fallbackLng: 'fr',
    whitelist : ['en', 'ar', 'fr'],
    debug: true,
    detection: {
        checkWhitelist: true, // options for language detection
      },
    interpolation: {
      escapeValue: false, // not needed for react!!
    },
  });


export default i18n;