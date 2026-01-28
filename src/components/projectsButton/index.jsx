import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BookOpen } from 'lucide-react';

/**
 * ProjectsButton - Reusable button that navigates to the Articles section
 *
 * Uses purple/pink gradient styling and navigates to /work?view=articles.
 *
 * @param {Object} props - Component props
 * @param {string} props.size - 'sm' | 'md' | 'lg' - Button size variant
 * @param {string} props.className - Additional CSS classes
 */
function ProjectsButton({ size = 'lg', className = '' }) {
  const { t } = useTranslation();

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <Link
      to="/work?view=articles"
      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 backdrop-blur-sm border border-purple-500/50 hover:border-purple-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer ${sizes[size]} ${className}`}
    >
      <BookOpen className="w-5 h-5" aria-hidden="true" />
      {t('hero.viewArticles')}
    </Link>
  );
}

export default ProjectsButton;
