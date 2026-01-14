import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

/**
 * Language switcher component for toggling between English and Norwegian
 */
function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'no' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium cursor-pointer"
      aria-label={`Switch to ${currentLang === 'en' ? 'Norwegian' : 'English'}`}
    >
      <Globe className="w-4 h-4" />
      <span>{currentLang === 'en' ? 'NO' : 'EN'}</span>
    </button>
  );
}

export default LanguageSwitcher;
