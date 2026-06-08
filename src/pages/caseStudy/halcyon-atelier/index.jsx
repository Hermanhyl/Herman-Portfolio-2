import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';
import { fadeUp, staggerContainer, viewportOnce } from '../../../utils/motion';

const LIVE_URL = 'https://halcyonateliershowcase.netlify.app/';
const REPO_URL = 'https://github.com/Hermanhyl/Single-page-showcase-Halcyon-Atelier-';

/**
 * Halcyon Atelier — single-page editorial showcase case study.
 * Personal project: a fictional Lisbon hospitality branding studio site
 * built as a craft exercise in committing to one aesthetic direction.
 */
export default function HalcyonAtelierCaseStudy() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: 'Halcyon Atelier Case Study',
    description: 'A single-page editorial showcase for a fictional Lisbon design studio: an exercise in committing to one aesthetic point of view.',
    url: 'https://portfolio-herman-hylland.netlify.app/case-study/halcyon-atelier',
  });

  // Six-colour palette of the Halcyon project. Hex values are hardcoded
  // because they describe the project's palette, not the portfolio's.
  // The labels come from i18n.
  const halcyonPalette = [
    { hex: '#F2EDE5', roleKey: 'paletteRole1' }, // Paper / background
    { hex: '#1B1814', roleKey: 'paletteRole2' }, // Ink
    { hex: '#C44A1E', roleKey: 'paletteRole3' }, // Terracotta accent
    { hex: '#8B7355', roleKey: 'paletteRole4' }, // Warm shadow
    { hex: '#4A4A47', roleKey: 'paletteRole5' }, // Muted slate
    { hex: '#D9CFC2', roleKey: 'paletteRole6' }, // Soft sand
  ];

  // Section-by-section tour entries. Each renders a label + heading +
  // body paragraph + screenshot, alternating image position.
  const tour = [
    { key: 'tourHero', image: '/Halcyon/section-hero.jpg', imageRight: true },
    { key: 'tourAbout', image: '/Halcyon/section-about.jpg', imageRight: false },
    { key: 'tourWork', image: '/Halcyon/section-work.jpg', imageRight: true },
    { key: 'tourPractice', image: '/Halcyon/section-practice.jpg', imageRight: false },
    { key: 'tourContact', image: '/Halcyon/section-contact.jpg', imageRight: true },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-bone">

        {/* ────────── HERO ────────── */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-gray-900" />
          <div className="absolute inset-0 overflow-hidden opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <BackButton position="top" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24 w-full">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 lg:items-center">

              {/* Image — order-first on mobile, order-last on lg */}
              <div className="order-first lg:order-last lg:w-[55%] w-full">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                  <div className="relative rounded-2xl overflow-hidden bg-ink-elevated">
                    <OptimizedImage
                      src="/Halcyon/hero.jpg"
                      alt="Halcyon Atelier folio cover with the studio name and a live Lisbon clock"
                      eager={true}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                <p className="text-sm font-medium text-accent tracking-wide">
                  {t('cs.halcyonAtelier.tags')}
                </p>

                <h1 className="font-display text-bone text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-tight">
                  Halcyon <span className="italic text-accent">Atelier</span>
                </h1>

                <p className="text-xl md:text-2xl text-bone-muted leading-relaxed">
                  {t('cs.halcyonAtelier.tagline')}
                </p>

                {/* Metadata */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-accent font-semibold">{t('cs.common.role')}</span>{' '}
                    <span className="text-bone-muted">{t('cs.halcyonAtelier.roleValue')}</span>
                  </p>
                  <p>
                    <span className="text-accent font-semibold">{t('cs.halcyonAtelier.yearLabel')}</span>{' '}
                    <span className="text-bone-muted">{t('cs.halcyonAtelier.yearValue')}</span>
                    <span className="text-bone-faded mx-3">•</span>
                    <span className="text-accent font-semibold">{t('cs.common.status')}</span>{' '}
                    <span className="text-bone-muted">{t('cs.halcyonAtelier.statusValue')}</span>
                  </p>
                </div>

                {/* Primary CTAs — live site is the load-bearing one */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
                  <a
                    href={LIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-soft text-accent-ink font-semibold px-7 py-3.5 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.03] active:scale-95"
                  >
                    {t('cs.common.viewLiveSite')}
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={REPO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-ink-elevated hover:bg-ink-elevated-2 border border-border hover:border-accent text-bone font-semibold px-7 py-3.5 rounded-xl transition-colors duration-300"
                  >
                    {t('cs.common.viewRepository')}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ────────── THE BRIEF ────────── */}
        <section className="relative py-16 md:py-20">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4">
              {t('cs.halcyonAtelier.briefLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              {t('cs.halcyonAtelier.briefHeading')}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75] mb-5">
              {t('cs.halcyonAtelier.briefP1')}
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75]">
              {t('cs.halcyonAtelier.briefP2')}
            </motion.p>
          </motion.div>
        </section>

        {/* ────────── AESTHETIC DIRECTION ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4">
              {t('cs.halcyonAtelier.aestheticLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              <span className="italic">{t('cs.halcyonAtelier.aestheticHeading')}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75]">
              {t('cs.halcyonAtelier.aestheticP1')}
            </motion.p>
          </motion.div>
        </section>

        {/* ────────── PALETTE ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4"
            >
              {t('cs.halcyonAtelier.paletteLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-8 leading-tight"
            >
              {t('cs.halcyonAtelier.paletteHeading')}
            </motion.h2>

            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6"
            >
              {halcyonPalette.map(({ hex, roleKey }) => (
                <motion.div
                  key={hex}
                  variants={fadeUp}
                  className="bg-ink-elevated border border-border rounded-xl overflow-hidden"
                >
                  <div className="aspect-square w-full" style={{ backgroundColor: hex }} aria-hidden="true" />
                  <div className="p-3 text-center">
                    <p className="font-mono text-xs text-bone tracking-tight">{hex}</p>
                    <p className="text-[11px] text-bone-muted uppercase tracking-wider mt-1">
                      {t(`cs.halcyonAtelier.${roleKey}`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="text-base text-bone-muted leading-relaxed max-w-2xl"
            >
              {t('cs.halcyonAtelier.paletteCaption')}
            </motion.p>
          </div>
        </section>

        {/* ────────── TYPOGRAPHY ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4"
            >
              {t('cs.halcyonAtelier.typeLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight"
            >
              {t('cs.halcyonAtelier.typeHeading')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-bone-muted leading-[1.75] mb-8 max-w-2xl"
            >
              {t('cs.halcyonAtelier.typeP1')}
            </motion.p>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 gap-5"
            >
              <motion.div variants={fadeUp} className="bg-ink-elevated border border-border rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.14em] mb-2">{t('cs.halcyonAtelier.typeFrauncesLabel')}</p>
                <p className="font-display text-3xl text-bone tracking-tight mb-3">Fraunces</p>
                <p className="text-bone-muted leading-relaxed">{t('cs.halcyonAtelier.typeFraunces')}</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-ink-elevated border border-border rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.14em] mb-2">{t('cs.halcyonAtelier.typePlexMonoLabel')}</p>
                <p className="font-mono text-2xl text-bone tracking-tight mb-3">IBM Plex Mono</p>
                <p className="text-bone-muted leading-relaxed">{t('cs.halcyonAtelier.typePlexMono')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ────────── SECTION-BY-SECTION TOUR ────────── */}
        <section className="relative py-16 md:py-20 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4">
                {t('cs.halcyonAtelier.tourLabel')}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone leading-tight">
                {t('cs.halcyonAtelier.tourHeading')}
              </h2>
            </div>

            <div className="space-y-16 md:space-y-20">
              {tour.map(({ key, image, imageRight }) => (
                <motion.div
                  key={key}
                  variants={staggerContainer(0.12)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportOnce}
                  className={`flex flex-col ${imageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                >
                  <motion.div variants={fadeUp} className="lg:w-1/2 space-y-4">
                    <p className="font-display italic text-accent text-lg">{t(`cs.halcyonAtelier.${key}Eyebrow`)}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-bone leading-tight">
                      {t(`cs.halcyonAtelier.${key}Heading`)}
                    </h3>
                    <p className="text-base md:text-lg text-bone-muted leading-[1.75]">
                      {t(`cs.halcyonAtelier.${key}Body`)}
                    </p>
                  </motion.div>
                  <motion.div variants={fadeUp} className="lg:w-1/2 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl shadow-black/30 bg-ink-elevated">
                      <OptimizedImage
                        src={image}
                        alt={t(`cs.halcyonAtelier.${key}Heading`)}
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────── MOTION PRINCIPLES ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4">
              {t('cs.halcyonAtelier.motionLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              {t('cs.halcyonAtelier.motionHeading')}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75]">
              {t('cs.halcyonAtelier.motionP1')}
            </motion.p>
          </motion.div>
        </section>

        {/* ────────── TECHNICAL DETAIL ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4"
            >
              {t('cs.halcyonAtelier.techLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight"
            >
              {t('cs.halcyonAtelier.techHeading')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-bone-muted leading-[1.75] mb-6"
            >
              {t('cs.halcyonAtelier.techP1')}
            </motion.p>

            <motion.dl
              variants={staggerContainer(0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-mono text-sm"
            >
              {['techBuild', 'techAnimation', 'techCss', 'techImages', 'techType', 'techResponsive'].map((stackKey) => (
                <motion.div key={stackKey} variants={fadeUp} className="flex gap-3 border-b border-border pb-2">
                  <dt className="text-accent uppercase tracking-wider w-28 shrink-0">{t(`cs.halcyonAtelier.${stackKey}Label`)}</dt>
                  <dd className="text-bone-muted">{t(`cs.halcyonAtelier.${stackKey}Value`)}</dd>
                </motion.div>
              ))}
            </motion.dl>
          </div>
        </section>

        {/* ────────── WHAT THIS PROJECT DEMONSTRATES ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4">
              {t('cs.halcyonAtelier.closingLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-8 leading-tight">
              {t('cs.halcyonAtelier.closingHeading')}
            </motion.h2>

            <motion.ul variants={staggerContainer(0.08)} className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <motion.li key={n} variants={fadeUp} className="flex items-start gap-3 text-bone-muted leading-relaxed">
                  <span className="font-display italic text-accent text-lg leading-tight tabular-nums shrink-0 mt-0.5">{String(n).padStart(2, '0')}</span>
                  <span>{t(`cs.halcyonAtelier.closing${n}`)}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </section>

        {/* ────────── RESULT / EXPERIENCE IT ────────── */}
        <section className="relative py-16 md:py-24 border-t border-border">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-3">
              {t('cs.common.theResult')}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              {t('cs.halcyonAtelier.resultHeading')}
            </h2>
            <p className="text-lg text-bone-muted leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('cs.halcyonAtelier.resultText')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-10">
              <a
                href={LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-soft text-accent-ink font-semibold px-8 py-4 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                {t('cs.common.viewLiveSite')}
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-ink-elevated hover:bg-ink-elevated-2 border border-border hover:border-accent text-bone font-semibold px-8 py-4 rounded-xl transition-colors duration-300"
              >
                {t('cs.common.viewRepository')}
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Fictional studio disclosure — small, italic, restrained */}
            <p className="font-display italic text-sm text-bone-faded max-w-xl mx-auto leading-relaxed border-t border-border pt-6">
              {t('cs.halcyonAtelier.disclosure')}
            </p>

            <BackButton position="bottom" />
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
