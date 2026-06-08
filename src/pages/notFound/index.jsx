import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Home, Briefcase } from 'lucide-react';
import PageTransition from '../../components/pageTransition';
import useDocumentMeta from '../../hooks/useDocumentMeta';

/**
 * 404 page. Catches every unknown route via the wildcard <Route path="*">
 * in App.jsx. Two jobs:
 *
 *   1. Tell the user the page is missing and give them a way back.
 *   2. Tell crawlers via a runtime-injected <meta name="robots"
 *      content="noindex"> not to index the URL they hit — Netlify
 *      can't return a real 404 status for SPA routes (the rewrite
 *      to /index.html always returns 200), so noindex is how we
 *      keep typo-URLs and bot-poked URLs out of search results.
 */
export default function NotFound() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: t('notFound.metaTitle'),
    description: t('notFound.metaDescription'),
  });

  // Add a runtime noindex meta. SPA infrastructure can't return a
  // 404 status code, so noindex + nofollow is the next best signal
  // to crawlers that this URL is not real content. Cleaned up on
  // navigation away.
  useEffect(() => {
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <PageTransition>
      <div className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Oversized 404 numeral in the editorial style used elsewhere */}
          <p
            aria-hidden="true"
            className="font-display italic text-accent text-[10rem] sm:text-[14rem] md:text-[16rem] font-extrabold leading-none tracking-tight tabular-nums select-none"
          >
            404
          </p>

          <div className="space-y-4">
            <h1 className="font-display text-bone text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.025em] leading-[1.05]">
              {t('notFound.title')}
            </h1>
            <p className="text-lg sm:text-xl text-bone-muted max-w-xl mx-auto leading-relaxed">
              {t('notFound.description')}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-accent-ink font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Home className="w-5 h-5" aria-hidden="true" />
              {t('notFound.backHome')}
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Briefcase className="w-5 h-5" aria-hidden="true" />
              {t('notFound.viewWork')}
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
