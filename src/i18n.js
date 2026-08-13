import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
  en: { translation: translationEN },
  ar: { translation: translationAR }
};

const getInitialLang = () => {
  const saved = localStorage.getItem('app_language');
  if (saved && (saved.startsWith('ar') || saved === 'ar')) return 'ar';
  if (saved && (saved.startsWith('en') || saved === 'en')) return 'en';
  return 'ar';
};

const initialLang = getInitialLang();

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'ar',
    supportedLngs: ['ar', 'en'],
    interpolation: {
      escapeValue: false
    }
  });

export const applyLanguageAndDirection = (lng) => {
  const currentLang = lng || 'ar';
  const isArabic = currentLang.startsWith('ar');
  const cleanLang = isArabic ? 'ar' : 'en';
  const dir = isArabic ? 'rtl' : 'ltr';

  localStorage.setItem('app_language', cleanLang);

  document.documentElement.setAttribute('dir', dir);
  document.documentElement.setAttribute('lang', cleanLang);
  if (document.body) {
    document.body.setAttribute('dir', dir);
  }
};

i18n.on('languageChanged', (lng) => {
  applyLanguageAndDirection(lng);
});

applyLanguageAndDirection(initialLang);

export default i18n;