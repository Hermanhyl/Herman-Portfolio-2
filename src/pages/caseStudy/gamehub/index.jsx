import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';
import { useTranslation } from 'react-i18next';

export default function GameHubCaseStudy() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: 'GameHub Case Study',
    description: 'My very first web development project — where it all began.',
    url: 'https://hermanhylland.netlify.app/case-study/gamehub',
  });

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">

        {/* Section 1: Case Study Hero */}
        <section className="relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />

          {/* Subtle animated background elements */}
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Back button - top left */}
          <BackButton position="top" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

              {/* Image Side - shows first on mobile */}
              <div className="order-first lg:order-last lg:w-[55%] w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl opacity-50 blur-sm" />
                  <div className="relative rounded-2xl overflow-hidden bg-gray-900">
                    <OptimizedImage
                      src="/GameHub.jpg"
                      alt="GameHub e-commerce website"
                      eager={true}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                {/* Tags - inline with separators */}
                <p className="text-sm font-medium text-emerald-400 tracking-wide">
                  {t('cs.gamehub.tags')}
                </p>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight">
                  GameHub
                </h1>

                {/* Tagline */}
                <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
                  {t('cs.gamehub.tagline')}
                </p>

                {/* Metadata - clean typography, no boxes */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.role')}</span>{' '}
                    <span className="text-gray-300">{t('cs.gamehub.roleValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.type')}</span>{' '}
                    <span className="text-gray-300">{t('cs.gamehub.typeValue')}</span>
                    <span className="text-gray-600 mx-3">•</span>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.stack')}</span>{' '}
                    <span className="text-gray-300">{t('cs.gamehub.stackValue')}</span>
                  </p>
                  <p>
                    <span className="text-emerald-400 font-semibold">{t('cs.common.context')}</span>{' '}
                    <span className="text-gray-300">{t('cs.gamehub.contextValue')}</span>
                  </p>
                </div>

                {/* Note badge */}
                <div className="pt-4">
                  <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-lg px-4 py-2">
                    <p className="text-amber-400 text-sm font-medium">
                      {t('cs.gamehub.noteBadge')}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: The Brief */}
        <section className="relative py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-4">
              {t('cs.common.theBrief')}
            </p>

            {/* Body text */}
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('cs.gamehub.briefText')}
            </p>
          </div>
        </section>

        {/* Section 3: What I Was Learning */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.whatIWasLearning')}
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.gamehub.learningHeading')}
            </h2>

            {/* Intro paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed mb-12">
              {t('cs.gamehub.learningIntro')}
            </p>

            {/* Key lessons - 2x2 grid of cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12 text-left">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">01</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.gamehub.lesson1')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">02</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.gamehub.lesson2')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">03</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.gamehub.lesson3')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6">
                <span className="text-3xl font-bold text-emerald-400 mb-3 block">04</span>
                <p className="text-white leading-relaxed text-lg">
                  {t('cs.gamehub.lesson4')}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden">
              <OptimizedImage
                src="/GameHub.jpg"
                alt="GameHub product grid and cart functionality"
                className="w-full h-auto"
              />
            </div>
          </div>
        </section>

        {/* Section 4: Why It's Here */}
        <section className="relative py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {/* Section label */}
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('cs.common.whyItsHere')}
            </p>

            {/* Subheading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cs.gamehub.journeyHeading')}
            </h2>

            {/* Body paragraph */}
            <p className="text-lg text-gray-400 leading-relaxed">
              {t('cs.gamehub.journeyText')}
            </p>
          </div>
        </section>

        {/* Action buttons */}
        <section className="relative py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
              <a
                href="https://hermanhyl.github.io/GameHub-CA-Project/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('cs.common.viewLiveSite')}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://github.com/Hermanhyl/GameHub-CA-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('cs.common.viewGithub')}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href="https://www.figma.com/design/8gYmTlN6pQaNHcUsanX1sJ/Main-Working-File?node-id=28-12358&p=f&t=urereGhuipDAbHzu-0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                {t('cs.common.viewFigma')}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <BackButton position="bottom" />
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
