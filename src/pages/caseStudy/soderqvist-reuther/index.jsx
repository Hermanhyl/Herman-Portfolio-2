import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PageTransition from '../../../components/pageTransition';
import OptimizedImage from '../../../components/optimizedImage';
import BackButton from '../../../components/backButton';
import useDocumentMeta from '../../../hooks/useDocumentMeta';
import { fadeUp, staggerContainer, viewportOnce } from '../../../utils/motion';

const LIVE_URL = 'https://adorable-llama-48b630.netlify.app/';

// The actual S+R interlocking ligature mark from the live site, pulled
// from the running app's DOM. ViewBox 0 0 64 64, hairline stroke 1.4,
// rounded caps/joins. The brass dot (#B8945A, r 1.4) sits at the
// meeting point of the S and R. We render it here at two scales to
// demonstrate the mark — the same SVG, just scaled.
function SoderqvistReutherMark({ size = 64, color = '#B8945A', strokeWidth = 1.4 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* S — upper bowl + diagonal spine + lower bowl */}
      <path d="M 30 16 C 26 13 18 13 14 16 C 10 19 10 24 14 27 L 22 30 C 26 31 28 33 28 36 C 28 41 22 43 16 41 C 13 40 11 38 10 36" />
      {/* R — vertical stem */}
      <path d="M 36 16 L 36 48" />
      {/* R — upper bowl */}
      <path d="M 36 16 L 46 16 C 52 16 54 19 54 23 C 54 27 52 30 46 30 L 36 30" />
      {/* R — diagonal leg */}
      <path d="M 44 30 L 54 48" />
      {/* S — meeting curve into the R */}
      <path d="M 28 36 C 28 33 26 31 22 30" />
      {/* Brass dot at the meeting point */}
      <circle cx="33" cy="22" r="1.4" fill="#B8945A" stroke="none" />
    </svg>
  );
}

/**
 * Söderqvist & Reuther — multi-page React + Framer Motion site for a
 * fictional high-end Stockholm law firm. Counterpoint to Halcyon
 * Atelier within the same portfolio: where Halcyon was expressive
 * editorial, S&R is restrained, dark, quietly expensive.
 */
export default function SoderqvistReutherCaseStudy() {
  const { t } = useTranslation();

  useDocumentMeta({
    title: 'Söderqvist & Reuther Case Study',
    description:
      'A multi-page React + Framer Motion site for a fictional high-end Stockholm law firm — an exercise in quiet authority, restrained dark UI, and editorial typography on dark.',
    url: 'https://hermanhylland.netlify.app/case-study/soderqvist-reuther',
  });

  // Six representative tones from the project's full thirteen-tone
  // Ink & Brass system. Hex values are the actual project values.
  const firmPalette = [
    { hex: '#0E0F12', roleKey: 'paletteRole1' }, // Base ink (page bg)
    { hex: '#16171B', roleKey: 'paletteRole2' }, // Surface (header/footer band)
    { hex: '#E8E2D2', roleKey: 'paletteRole3' }, // Bone (primary type)
    { hex: '#B8945A', roleKey: 'paletteRole4' }, // Brass accent (surgical)
    { hex: '#7E776B', roleKey: 'paletteRole5' }, // Meta (labels, dates)
    { hex: '#2E2C28', roleKey: 'paletteRole6' }, // Hairline
  ];

  // The six routes of the live site.
  const tour = [
    { key: 'tourHome', image: '/SoderqvistReuther/section-home.jpg', imageRight: true },
    { key: 'tourFirm', image: '/SoderqvistReuther/section-firm.jpg', imageRight: false },
    { key: 'tourPractice', image: '/SoderqvistReuther/section-practice.jpg', imageRight: true },
    { key: 'tourPeople', image: '/SoderqvistReuther/section-people.jpg', imageRight: false },
    { key: 'tourInsights', image: '/SoderqvistReuther/section-insights.jpg', imageRight: true },
    { key: 'tourContact', image: '/SoderqvistReuther/section-contact.jpg', imageRight: false },
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
                      src="/SoderqvistReuther/hero.jpg"
                      alt="Söderqvist & Reuther — dark editorial home page with the firm name and Stockholm clock"
                      eager={true}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="lg:w-[45%] space-y-5 text-center lg:text-left">
                <p className="text-sm font-medium text-accent tracking-wide">
                  {t('cs.soderqvistReuther.tags')}
                </p>

                <h1 className="font-display text-bone text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-[-0.02em] leading-tight">
                  Söderqvist <span className="italic text-accent">&</span> Reuther
                </h1>

                <p className="text-xl md:text-2xl text-bone-muted leading-relaxed">
                  {t('cs.soderqvistReuther.tagline')}
                </p>

                {/* Metadata */}
                <div className="pt-4 space-y-2 text-sm md:text-base">
                  <p>
                    <span className="text-accent font-semibold">{t('cs.common.role')}</span>{' '}
                    <span className="text-bone-muted">{t('cs.soderqvistReuther.roleValue')}</span>
                  </p>
                  <p>
                    <span className="text-accent font-semibold">{t('cs.soderqvistReuther.yearLabel')}</span>{' '}
                    <span className="text-bone-muted">{t('cs.soderqvistReuther.yearValue')}</span>
                    <span className="text-bone-faded mx-3">•</span>
                    <span className="text-accent font-semibold">{t('cs.common.status')}</span>{' '}
                    <span className="text-bone-muted">{t('cs.soderqvistReuther.statusValue')}</span>
                  </p>
                </div>

                {/* Primary CTA — single button, no repo */}
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
              {t('cs.soderqvistReuther.briefLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              {t('cs.soderqvistReuther.briefHeading')}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75] mb-5">
              {t('cs.soderqvistReuther.briefP1')}
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75]">
              {t('cs.soderqvistReuther.briefP2')}
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
              {t('cs.soderqvistReuther.aestheticLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              <span className="italic">{t('cs.soderqvistReuther.aestheticHeading')}</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75] mb-5">
              {t('cs.soderqvistReuther.aestheticP1')}
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75]">
              {t('cs.soderqvistReuther.aestheticP2')}
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
              {t('cs.soderqvistReuther.paletteLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-8 leading-tight"
            >
              {t('cs.soderqvistReuther.paletteHeading')}
            </motion.h2>

            <motion.div
              variants={staggerContainer(0.06)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6"
            >
              {firmPalette.map(({ hex, roleKey }) => (
                <motion.div
                  key={hex}
                  variants={fadeUp}
                  className="bg-ink-elevated border border-border rounded-xl overflow-hidden"
                >
                  <div className="aspect-square w-full" style={{ backgroundColor: hex }} aria-hidden="true" />
                  <div className="p-3 text-center">
                    <p className="font-mono text-xs text-bone tracking-tight">{hex}</p>
                    <p className="text-[11px] text-bone-muted uppercase tracking-wider mt-1">
                      {t(`cs.soderqvistReuther.${roleKey}`)}
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
              {t('cs.soderqvistReuther.paletteCaption')}
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
              {t('cs.soderqvistReuther.typeLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight"
            >
              {t('cs.soderqvistReuther.typeHeading')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-bone-muted leading-[1.75] mb-8 max-w-2xl"
            >
              {t('cs.soderqvistReuther.typeP1')}
            </motion.p>

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 gap-5"
            >
              <motion.div variants={fadeUp} className="bg-ink-elevated border border-border rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.14em] mb-2">{t('cs.soderqvistReuther.typeCormorantLabel')}</p>
                <p className="font-display text-3xl text-bone tracking-tight mb-3">Cormorant Garamond</p>
                <p className="text-bone-muted leading-relaxed">{t('cs.soderqvistReuther.typeCormorant')}</p>
              </motion.div>
              <motion.div variants={fadeUp} className="bg-ink-elevated border border-border rounded-2xl p-6">
                <p className="text-xs font-semibold text-accent uppercase tracking-[0.14em] mb-2">{t('cs.soderqvistReuther.typePlexLabel')}</p>
                <p className="font-sans text-2xl text-bone tracking-tight mb-3">IBM Plex Sans</p>
                <p className="text-bone-muted leading-relaxed">{t('cs.soderqvistReuther.typePlex')}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ────────── LOGO ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4"
            >
              {t('cs.soderqvistReuther.logoLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight"
            >
              {t('cs.soderqvistReuther.logoHeading')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-bone-muted leading-[1.75] mb-8 max-w-2xl"
            >
              {t('cs.soderqvistReuther.logoP1')}
            </motion.p>

            {/* Logo at two scales — the SR mark + full lockup as the
                site uses them. Inline SVG so it stays crisp at any size
                and on-palette. Uses an off-black firm-bg behind to mimic
                how the mark appears on the live site. */}
            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid md:grid-cols-2 gap-5"
            >
              <motion.div
                variants={fadeUp}
                className="bg-ink-elevated border border-border rounded-2xl p-10 flex items-center justify-center"
                style={{ backgroundColor: '#0E0F12' }}
                role="img"
                aria-label="Söderqvist & Reuther S+R monogram in brass"
              >
                <SoderqvistReutherMark size={140} />
              </motion.div>
              <motion.div
                variants={fadeUp}
                className="bg-ink-elevated border border-border rounded-2xl p-8 flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: '#0E0F12' }}
              >
                <div className="flex items-center gap-4">
                  <SoderqvistReutherMark size={44} strokeWidth={1.6} />
                  <span className="block w-px h-7" style={{ backgroundColor: '#2E2C28' }} aria-hidden="true" />
                  <span
                    className="font-display text-sm uppercase"
                    style={{ color: '#E8E2D2', letterSpacing: '0.16em', fontVariant: 'small-caps' }}
                  >
                    Söderqvist &amp; Reuther
                  </span>
                </div>
                <p className="text-[11px] text-bone-faded uppercase tracking-[0.14em] mt-2">
                  {t('cs.soderqvistReuther.logoLockupCaption')}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ────────── PAGE-BY-PAGE TOUR ────────── */}
        <section className="relative py-16 md:py-20 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4">
                {t('cs.soderqvistReuther.tourLabel')}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone leading-tight">
                {t('cs.soderqvistReuther.tourHeading')}
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
                    <p className="font-display italic text-accent text-lg">{t(`cs.soderqvistReuther.${key}Eyebrow`)}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-bone leading-tight">
                      {t(`cs.soderqvistReuther.${key}Heading`)}
                    </h3>
                    <p className="text-base md:text-lg text-bone-muted leading-[1.75]">
                      {t(`cs.soderqvistReuther.${key}Body`)}
                    </p>
                  </motion.div>
                  <motion.div variants={fadeUp} className="lg:w-1/2 w-full">
                    <div className="relative rounded-2xl overflow-hidden border border-border shadow-xl shadow-black/30 bg-ink-elevated">
                      <OptimizedImage
                        src={image}
                        alt={t(`cs.soderqvistReuther.${key}Heading`)}
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ────────── NAVIGATION & ATMOSPHERE ────────── */}
        <section className="relative py-12 md:py-16 border-t border-border">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.p variants={fadeUp} className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-4">
              {t('cs.soderqvistReuther.navLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              {t('cs.soderqvistReuther.navHeading')}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75]">
              {t('cs.soderqvistReuther.navP1')}
            </motion.p>
          </motion.div>
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
              {t('cs.soderqvistReuther.motionLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight">
              {t('cs.soderqvistReuther.motionHeading')}
            </motion.h2>
            <motion.p variants={fadeUp} className="text-lg text-bone-muted leading-[1.75]">
              {t('cs.soderqvistReuther.motionP1')}
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
              {t('cs.soderqvistReuther.techLabel')}
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-6 leading-tight"
            >
              {t('cs.soderqvistReuther.techHeading')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-bone-muted leading-[1.75] mb-6"
            >
              {t('cs.soderqvistReuther.techP1')}
            </motion.p>

            <motion.dl
              variants={staggerContainer(0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid sm:grid-cols-2 gap-x-8 gap-y-3 font-mono text-sm"
            >
              {['techBuild', 'techAnimation', 'techRouting', 'techCss', 'techLogo', 'techResponsive'].map((stackKey) => (
                <motion.div key={stackKey} variants={fadeUp} className="flex gap-3 border-b border-border pb-2">
                  <dt className="text-accent uppercase tracking-wider w-28 shrink-0">{t(`cs.soderqvistReuther.${stackKey}Label`)}</dt>
                  <dd className="text-bone-muted">{t(`cs.soderqvistReuther.${stackKey}Value`)}</dd>
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
              {t('cs.soderqvistReuther.closingLabel')}
            </motion.p>
            <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone mb-8 leading-tight">
              {t('cs.soderqvistReuther.closingHeading')}
            </motion.h2>

            <motion.ul variants={staggerContainer(0.08)} className="space-y-4">
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <motion.li key={n} variants={fadeUp} className="flex items-start gap-3 text-bone-muted leading-relaxed">
                  <span className="font-display italic text-accent text-lg leading-tight tabular-nums shrink-0 mt-0.5">{String(n).padStart(2, '0')}</span>
                  <span>{t(`cs.soderqvistReuther.closing${n}`)}</span>
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
              {t('cs.soderqvistReuther.resultHeading')}
            </h2>
            <p className="text-lg text-bone-muted leading-relaxed mb-10 max-w-2xl mx-auto">
              {t('cs.soderqvistReuther.resultText')}
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
            </div>

            {/* Fictional firm disclosure — small, italic, restrained */}
            <p className="font-display italic text-sm text-bone-faded max-w-xl mx-auto leading-relaxed border-t border-border pt-6">
              {t('cs.soderqvistReuther.disclosure')}
            </p>

            <BackButton position="bottom" />
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
