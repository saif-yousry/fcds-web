import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguage = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language || 'ar';
    const dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    document.documentElement.dir = dir;
    document.documentElement.lang = currentLang;

    localStorage.setItem('i18nextLng', currentLang);
  }, [i18n.language]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return {
    currentLang: i18n.language,
    changeLanguage,
  };
};