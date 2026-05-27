import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Github, Linkedin, Mail, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import OptimizedImage from '../optimizedImage';
import useMagnetic from '../../hooks/useMagnetic';
import { ease, duration } from '../../utils/motion';

// Variants kept inline so the cascade timing reads top-to-bottom in source.
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const rise = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.out },
  },
};

const word = {
  hidden: { opacity: 0, y: '110%' },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: duration.hero, ease: ease.out },
  },
};

function MagneticCTA({ to, variant = 'primary', children, ariaLabel }) {
  const { ref, style, handleMouseMove, handleMouseLeave } = useMagnetic(6);

  const className =
    variant === 'primary'
      ? 'group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black'
      : 'inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-black';

  return (
    <div
      ref={ref}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Link to={to} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    </div>
  );
}

function HeadlineWords({ text, accentLast = true }) {
  const words = text.split(' ');
  // Index of the last non-punctuation word — picks up "Developer" /
  // "utvikler" regardless of language.
  const accentIndex = accentLast ? words.length - 1 : -1;

  return (
    <span className="inline-flex flex-wrap justify-center md:justify-start">
      {words.map((w, i) => {
        const isAmpersand = w === '&';
        const isAccent = i === accentIndex;
        return (
          <span
            key={`${w}-${i}`}
            /* Wrapper clips for the curtain reveal. Asymmetric padding:
               top is largest because italic Fraunces ampersand has a curl
               that extends above the ascender line; bottom covers g/p
               descenders; horizontal covers italic slant overhang on both
               edges (& curls right, accent word leans). Negative -my
               claws vertical layout back; horizontal padding doubles as
               the inter-word gap so we don't need flex gap-x. */
            className="inline-block overflow-hidden leading-[1.3] pt-[0.2em] pb-[0.12em] px-[0.13em] -mt-[0.2em] -mb-[0.12em]"
          >
            <motion.span
              variants={word}
              className={
                isAmpersand
                  ? 'inline-block italic text-bone-muted'
                  : isAccent
                  ? 'inline-block italic text-accent'
                  : 'inline-block text-bone'
              }
            >
              {w}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setParallax({ x: nx, y: ny });
  };

  // Smoothed via CSS transition on the elements themselves
  const portraitStyle = {
    transform: `translate(${parallax.x * 10}px, ${parallax.y * 10}px)`,
    transition: 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: 'transform',
  };
  const glowStyle = {
    transform: `translate(${parallax.x * 20}px, ${parallax.y * 20}px)`,
    transition: 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: 'transform',
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden pt-20 pb-28 md:pb-24 px-4 sm:px-6 lg:px-8"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Asymmetric: hairline bleeding off the right edge behind the
            portrait — a grid-breaking decorative mark. */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[42%] right-[-15%] h-px w-[55%] bg-accent/40"
        />
        {/* Decorative off-axis mark, top-right area */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-28 right-10 font-display italic text-accent/40 text-2xl select-none rotate-12"
        >
          ✦
        </div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full"
      >
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">

          {/* Text Section */}
          <div className="flex-1 min-w-0 text-center md:text-left space-y-5 md:space-y-6">
            {/* Available badge — uses semantic green for "live" status,
                deliberately off-brand so it reads as a state indicator. */}
            <motion.div variants={rise} className="flex justify-center md:justify-start">
              {/* Slight -2deg tilt: intentional grid-break.
                  Border bumped to 2px — 1px borders alias badly under rotation. */}
              <div className="inline-flex items-center gap-2 bg-green-500/15 border-2 border-green-400/60 px-4 py-2 rounded-full backdrop-blur-sm transition-transform duration-300 hover:scale-105 -rotate-2 origin-left">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </span>
                <span className="text-green-200 text-xs font-semibold uppercase tracking-[0.12em]">{t('hero.available')}</span>
              </div>
            </motion.div>

            {/* Primary Headline - editorial display face, word-by-word reveal */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.32] tracking-[-0.03em]">
              <HeadlineWords text={t('hero.headline')} />
            </h1>

            {/* Subheadline */}
            <motion.p
              variants={rise}
              className="text-xl sm:text-2xl md:text-3xl text-white font-medium leading-relaxed max-w-2xl mx-auto md:mx-0"
            >
              {t('hero.subheadline')}
            </motion.p>

            {/* Credibility Line */}
            <motion.p
              variants={rise}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0"
            >
              {t('hero.credibility')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={rise} className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <MagneticCTA to="/projects" variant="primary">
                {t('hero.cta')}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </MagneticCTA>
              <MagneticCTA to="/contact" variant="secondary">
                {t('hero.ctaSecondary')}
              </MagneticCTA>
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            variants={rise}
            className="order-first md:order-last flex-shrink-0 flex justify-center p-2"
          >
            <div
              style={portraitStyle}
              className="relative group w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
            >
              {/* Glowing aura — moves a touch more than the portrait for depth */}
              <div
                style={glowStyle}
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              />

              {/* Rotating gradient border */}
              <div className="absolute -inset-1 rounded-full bg-conic-gradient animate-spin-slow opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Static dark background circle */}
              <div className="absolute inset-0 rounded-full bg-gray-900"></div>

              {/* Profile Image */}
              <div className="absolute inset-[6px] rounded-full overflow-hidden">
                <OptimizedImage
                  src="/Profil/Bruk_denne.jpg"
                  alt="Herman Hylland"
                  eager={true}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Links */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                <a
                  href="https://github.com/Hermanhyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Herman's GitHub profile"
                  className="p-3 bg-gray-800/90 hover:bg-emerald-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/herman-hylland/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Herman's LinkedIn profile"
                  className="p-3 bg-gray-800/90 hover:bg-cyan-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/hermanhyl98/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Herman's Instagram profile"
                  className="p-3 bg-gray-800/90 hover:bg-pink-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <Link
                  to="/contact"
                  aria-label="Contact Herman via email"
                  className="p-3 bg-gray-800/90 hover:bg-purple-500 border border-white/20 rounded-full text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: duration.slow, ease: ease.out }}
        className="hidden md:flex absolute bottom-6 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 z-20"
      >
        <span className="text-gray-400 text-sm">{t('hero.scrollToExplore')}</span>
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2 animate-bounce">
          <div className="w-1.5 h-3 bg-emerald-400 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
}
