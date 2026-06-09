import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

/**
 * Language switcher component for toggling between English and Norwegian.
 *
 * WCAG 4.1.2 Name, Role, Value:
 *   The detector returns BCP-47 codes like 'en-US' or 'en-NO'
 *   depending on the user's browser settings, while the i18n
 *   resources are keyed under base codes ('en' / 'no'). A literal
 *   `=== 'en'` check therefore failed for 'en-US' users — the
 *   button labelled itself as if the page were already Norwegian,
 *   and the first click flipped only the visible chrome (not the
 *   underlying content language). External WCAG test (F2) confirmed
 *   the desync.
 *
 *   Normalize to the base subtag before every comparison so the
 *   label, aria-label, and target language all agree from the very
 *   first render.
 */
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const baseLang = (i18n.language || 'en').split('-')[0];
  const isEnglish = baseLang === 'en';

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'no' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      aria-label={`Switch to ${isEnglish ? 'Norwegian' : 'English'}`}
    >
      <Globe className="w-4 h-4" aria-hidden="true" />
      <span>{isEnglish ? 'NO' : 'EN'}</span>
    </button>
  );
}

export default LanguageSwitcher;
