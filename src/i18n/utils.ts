import { translations, type Language } from './translations';

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Language;
  return 'en';
}

export function useTranslations(lang: Language) {
  return function t(key: string) {
    const keys = key.split('.');
    let value: any = translations[lang];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === 'en') return path;
  return `/${lang}${path}`;
}

export function getAlternateLanguages(currentLang: Language, currentPath: string) {
  const languages = Object.keys(translations) as Language[];
  
  // Remove language prefix from current path if present
  const cleanPath = currentPath.replace(/^\/(en|es)/, '') || '/';
  
  return languages
    .filter(lang => lang !== currentLang)
    .map(lang => ({
      lang,
      url: getLocalizedPath(cleanPath, lang)
    }));
}