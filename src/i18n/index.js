import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// English translations - split into manageable files
import enCommon from './locales/en/common.json';
import enPages from './locales/en/pages.json';
import enFeatures from './locales/en/features.json';
import enProjects from './locales/en/content/projects.json';
import enCaseStudies from './locales/en/content/caseStudies.json';
import enAnimations from './locales/en/content/animations.json';

// Norwegian translations - split into manageable files
import noCommon from './locales/no/common.json';
import noPages from './locales/no/pages.json';
import noFeatures from './locales/no/features.json';
import noProjects from './locales/no/content/projects.json';
import noCaseStudies from './locales/no/content/caseStudies.json';
import noAnimations from './locales/no/content/animations.json';

// Merge all English translations
const en = {
  ...enCommon,
  ...enPages,
  ...enFeatures,
  ...enProjects,
  ...enCaseStudies,
  ...enAnimations,
};

// Merge all Norwegian translations
const no = {
  ...noCommon,
  ...noPages,
  ...noFeatures,
  ...noProjects,
  ...noCaseStudies,
  ...noAnimations,
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      no: { translation: no },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

// WCAG 3.1.1 Language of Page / 3.1.2 Language of Parts.
// Keep <html lang> in sync with the active locale so screen readers
// pick the right pronunciation rules. i18next normalizes detected
// codes to the base language tag (e.g. nb-NO → no); we mirror it.
function syncDocumentLang(lng) {
  if (typeof document === 'undefined' || !lng) return;
  const base = String(lng).split('-')[0];
  document.documentElement.lang = base;
}

syncDocumentLang(i18n.language);
i18n.on('languageChanged', syncDocumentLang);

export default i18n;
