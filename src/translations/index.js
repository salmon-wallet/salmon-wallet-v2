import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './en/translation';
import esTranslation from './es/translation';
import frTranslation from './fr/translation';

export const LANGUAGES = ['en', 'es', 'fr'];

export const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
  fr: {
    translation: frTranslation,
  },
};

i18n.use(initReactI18next);

export default i18n;
