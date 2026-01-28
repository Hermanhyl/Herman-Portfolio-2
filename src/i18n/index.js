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

export default i18n;
