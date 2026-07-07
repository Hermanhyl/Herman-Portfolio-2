import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Bot, Terminal, Puzzle, MessageSquare, Image as ImageIcon, ArrowRight, Maximize2 } from 'lucide-react';
import AiNeuralBackground from '../aiNeuralBackground';
import OptimizedImage from '../optimizedImage';
import IllustrationLightbox from '../illustrationLightbox';

/**
 * AI-generated / AI-assisted visual pieces. Data-driven: drop more
 * entries here (and the webp into public/AiGallery/) and the grid +
 * lightbox pick them up automatically. `titleKey` points at an i18n
 * alt/label string.
 */
const aiGallery = [
  { src: '/AiGallery/peson-elvebat.webp', titleKey: 'ai.image1Alt' },
];

/**
 * AiShowcase — the "AI" view on the Work page.
 *
 * A deliberately different, motion-forward experience: a live
 * mouse-reactive neural background behind everything, a decode-text
 * hero, cards that fly in from alternating sides and tilt in 3D under
 * the cursor, and principles that slide in staggered. The point is to
 * feel modern and alive, not like another case-study grid.
 *
 * All copy is in i18n under ai.* (EN + NO). Everything respects
 * prefers-reduced-motion: entrances collapse (MotionConfig
 * reducedMotion="user"), the neural field goes static, and the decode
 * effect resolves instantly.
 */

/** Scramble-then-resolve text, a signature machine/AI effect. */
function DecodeText({ text, className }) {
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced ? text : '');

  useEffect(() => {
    if (reduced) {
      setDisplay(text);
      return;
    }
    const glyphs = '01<>/\\{}[]#*+=x%$&';
    let frame = 0;
    let raf;
    const tick = () => {
      const revealed = Math.floor(frame / 2);
      let out = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          out += ' ';
        } else if (i < revealed) {
          out += text[i];
        } else {
          out += glyphs[Math.floor(Math.random() * glyphs.length)];
        }
      }
      setDisplay(out);
      frame += 1;
      if (revealed <= text.length) {
        raf = requestAnimationFrame(tick);
      } else {
        setDisplay(text);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, reduced]);

  return <span className={className}>{display}</span>;
}

/** 3D tilt-toward-cursor wrapper. Inert under reduced motion / touch. */
function TiltCard({ children, className, glow = false }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, active: false });

  const onMove = (e) => {
    if (reduced || !ref.current || e.pointerType === 'touch') return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 8, ry: px * 10, active: true });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0, active: false });

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
        transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`${className} ${glow && tilt.active ? 'shadow-2xl shadow-accent/20' : ''}`}
    >
      {children}
    </div>
  );
}

/** Directional fly-in variant. dir = -1 (from left) or 1 (from right). */
const flyIn = (dir) => ({
  hidden: { opacity: 0, x: dir * 130, rotate: dir * 1.5 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: { type: 'spring', stiffness: 55, damping: 14 },
  },
});

const rise = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const inViewOnce = { once: true, margin: '-80px' };

function AiShowcase() {
  const { t } = useTranslation();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const galleryImages = aiGallery.map((g) => ({ src: g.src, title: t(g.titleKey) }));

  const tools = [
    { icon: Bot, key: 'tool2' },
    { icon: Puzzle, key: 'tool3' },
    { icon: MessageSquare, key: 'tool4' },
    { icon: ImageIcon, key: 'tool5' },
  ];
  const principles = ['principle1', 'principle2', 'principle3', 'principle4'];

  const heading = t('ai.heading');
  const words = heading.split(' ');
  const lead = words.slice(0, -1).join(' ');
  const last = words[words.length - 1];

  return (
    <div className="relative">
      {/* Live mouse-reactive neural field, fixed so it follows scroll */}
      <AiNeuralBackground />

      {/* All content sits above the neural field */}
      <div className="relative z-[2] space-y-28 md:space-y-40 pt-8">

        {/* Hero */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-accent/10 border border-accent/40 px-4 py-1.5 rounded-full backdrop-blur-sm mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.18em]">{t('ai.badge')}</span>
          </motion.div>

          <h2 className="font-display text-bone text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.05] pb-4">
            <DecodeText text={lead} />{' '}
            <span className="italic text-accent">
              <DecodeText text={last} />
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-bone-muted leading-relaxed max-w-2xl mx-auto"
          >
            {t('ai.intro')}
          </motion.p>
        </div>

        {/* Toolbox */}
        <div>
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-[0.18em] mb-3">{t('ai.toolsLabel')}</p>
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white">{t('ai.toolsHeading')}</h3>
          </div>

          {/* Featured: Claude Code, full width, glowing */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="relative mb-6"
          >
            {/* Pulsing glow behind the featured card */}
            <div aria-hidden="true" className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-accent/30 via-accent-soft/20 to-accent/30 blur-xl opacity-60 animate-glow-pulse" />
            <TiltCard glow className="relative bg-ink-elevated/80 backdrop-blur-md border border-accent/30 rounded-2xl p-7 md:p-10">
              <div className="flex flex-col sm:flex-row items-start gap-6">
                <div className="shrink-0 p-4 bg-accent/15 border border-accent/40 rounded-2xl" style={{ transform: 'translateZ(40px)' }}>
                  <Terminal className="w-9 h-9 text-accent" aria-hidden="true" />
                </div>
                <div style={{ transform: 'translateZ(20px)' }}>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-display text-2xl md:text-3xl font-bold text-white">{t('ai.tool1Title')}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent-ink bg-accent px-2 py-0.5 rounded-full">Featured</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed md:text-lg">{t('ai.tool1Desc')}</p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* The rest, flying in from alternating sides */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map(({ icon: Icon, key }, i) => (
              <motion.div
                key={key}
                variants={flyIn(i % 2 === 0 ? -1 : 1)}
                initial="hidden"
                whileInView="visible"
                viewport={inViewOnce}
              >
                <TiltCard glow className="group h-full bg-ink-elevated/70 backdrop-blur-md border border-white/10 hover:border-accent/40 rounded-2xl p-6 md:p-7 transition-colors duration-300">
                  <div className="p-3 bg-accent/15 border border-accent/30 rounded-xl inline-flex mb-4 transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110" style={{ transform: 'translateZ(30px)' }}>
                    <Icon className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h4 className="font-display text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">{t(`ai.${key}Title`)}</h4>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">{t(`ai.${key}Desc`)}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Generated visuals gallery */}
          <motion.div
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-10"
          >
            <div className="text-center mb-6">
              <p className="text-xs font-semibold text-accent uppercase tracking-[0.18em] mb-2">{t('ai.galleryLabel')}</p>
              <p className="text-bone-muted text-sm">{t('ai.galleryNote')}</p>
            </div>
            <div className={`grid gap-4 ${galleryImages.length === 1 ? 'grid-cols-1 max-w-4xl mx-auto' : 'grid-cols-1 sm:grid-cols-2'}`}>
              {galleryImages.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
                  aria-label={img.title}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-accent/40 bg-ink-elevated/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink cursor-pointer transition-colors duration-300"
                >
                  <OptimizedImage
                    src={img.src}
                    alt={img.title}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium bg-black/50 backdrop-blur px-3 py-1.5 rounded-lg">
                      <Maximize2 className="w-4 h-4" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Prompting principles */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-accent uppercase tracking-[0.18em] mb-3">{t('ai.promptingLabel')}</p>
            <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">{t('ai.promptingHeading')}</h3>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto">{t('ai.promptingIntro')}</p>
          </div>

          <div className="space-y-5">
            {principles.map((key, i) => (
              <motion.div
                key={key}
                variants={flyIn(i % 2 === 0 ? -1 : 1)}
                initial="hidden"
                whileInView="visible"
                viewport={inViewOnce}
              >
                <TiltCard className="flex items-start gap-5 md:gap-7 bg-ink-elevated/70 backdrop-blur-md border border-white/10 hover:border-accent/40 rounded-2xl p-6 md:p-7 transition-colors duration-300">
                  <span className="font-display italic text-accent text-4xl md:text-6xl font-bold tabular-nums leading-none shrink-0" style={{ transform: 'translateZ(30px)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-white leading-relaxed md:text-lg self-center">{t(`ai.${key}`)}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={rise}
            initial="hidden"
            whileInView="visible"
            viewport={inViewOnce}
            className="mt-10 text-center text-bone-muted italic leading-relaxed max-w-2xl mx-auto"
          >
            {t('ai.honestyNote')}
          </motion.p>
        </div>

        {/* Closing */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="visible"
          viewport={inViewOnce}
          className="max-w-3xl mx-auto text-center pb-8"
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-[0.18em] mb-3">{t('ai.closingLabel')}</p>
          <h3 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-white mb-5">{t('ai.closingHeading')}</h3>
          <p className="text-lg text-gray-300 leading-relaxed mb-10">{t('ai.closingText')}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Link
              to="/case-study/connecta"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-accent-ink font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t('ai.closingCtaCase')}
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {t('ai.closingCtaContact')}
            </Link>
          </div>
        </motion.div>

      </div>

      {/* Fullscreen viewer for the generated visuals */}
      <IllustrationLightbox
        illustrations={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}

export default AiShowcase;
