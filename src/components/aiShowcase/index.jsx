import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useSpring, useReducedMotion } from 'framer-motion';
import { Sparkles, Bot, Terminal, Puzzle, MessageSquare, Image as ImageIcon, ArrowRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../../utils/motion';

/**
 * AiShowcase — the "AI" view on the Work page.
 *
 * An honest, motion-rich walkthrough of how Herman works with AI:
 * the toolbox (Claude Code featured, Claude, skills/agents, ChatGPT,
 * MidJourney), prompting principles, and an "AI-assisted,
 * human-directed" closing that links to the Connecta case study.
 *
 * Motion design:
 *   - Scroll-driven background: two parallax orbs moving in opposite
 *     directions, plus a slow-rotating dashed ring carrying two
 *     accent marks. Scroll-linked motion is user-controlled, so it
 *     sits safely inside WCAG 2.2.2 (nothing auto-plays).
 *   - Entrance reveals via the shared fadeUp/staggerContainer
 *     variants (disabled by MotionConfig reducedMotion="user").
 *   - Scroll transforms are manually zeroed under
 *     prefers-reduced-motion since useTransform values bypass
 *     MotionConfig.
 *
 * All copy lives in i18n under ai.* (EN + NO). Headings are h2/h3,
 * sitting under the Work page h1.
 */
function AiShowcase() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

  // Parallax ranges collapse to zero when the user prefers reduced
  // motion. Hooks must run unconditionally, so the range is what flips.
  const orb1Y = useTransform(smooth, [0, 1], prefersReduced ? [0, 0] : [-60, 160]);
  const orb2Y = useTransform(smooth, [0, 1], prefersReduced ? [0, 0] : [100, -180]);
  const ringRotate = useTransform(smooth, [0, 1], prefersReduced ? [0, 0] : [0, 150]);
  const starRotate = useTransform(smooth, [0, 1], prefersReduced ? [0, 0] : [0, -220]);

  // Featured tool first (full-width card), then the 2x2 grid.
  const featuredTool = { icon: Terminal, title: 'tool1Title', desc: 'tool1Desc' };
  const tools = [
    { icon: Bot, title: 'tool2Title', desc: 'tool2Desc' },
    { icon: Puzzle, title: 'tool3Title', desc: 'tool3Desc' },
    { icon: MessageSquare, title: 'tool4Title', desc: 'tool4Desc' },
    { icon: ImageIcon, title: 'tool5Title', desc: 'tool5Desc' },
  ];
  const principles = ['principle1', 'principle2', 'principle3', 'principle4'];

  // Split the heading so the last word gets the italic accent, the
  // same editorial pattern used on the other page titles.
  const heading = t('ai.heading');
  const words = heading.split(' ');
  const lead = words.slice(0, -1).join(' ');
  const last = words[words.length - 1];

  return (
    <div ref={sectionRef} className="relative">

      {/* === Scroll-driven decorative background === */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orb1Y }}
          className="absolute -left-24 top-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: orb2Y }}
          className="absolute -right-24 top-1/2 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full blur-3xl"
        />
        {/* Rotating dashed ring with two accent marks riding it */}
        <div className="absolute left-1/2 top-10 -translate-x-1/2 h-[480px] w-[480px] md:h-[560px] md:w-[560px] opacity-40">
          <motion.div
            style={{ rotate: ringRotate }}
            className="h-full w-full rounded-full border border-dashed border-accent/30 relative"
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 font-display italic text-accent text-xl select-none">✦</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 font-display italic text-bone-faded text-sm select-none">✦</span>
          </motion.div>
        </div>
        {/* Free-floating counter-rotating mark */}
        <motion.div
          style={{ rotate: starRotate }}
          className="absolute right-[12%] top-64 font-display italic text-accent/40 text-3xl select-none"
        >
          ✦
        </motion.div>
      </div>

      {/* === Content === */}
      <div className="relative z-10 space-y-24 md:space-y-32">

        {/* Hero */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center max-w-3xl mx-auto pt-10"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-500/40 px-4 py-1.5 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 text-emerald-400" aria-hidden="true" />
            <span className="text-emerald-300 text-xs font-semibold uppercase tracking-[0.12em]">{t('ai.badge')}</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="font-display text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] leading-[1.08] pb-3"
          >
            {lead} <span className="italic text-accent">{last}</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg sm:text-xl text-bone-muted leading-relaxed">
            {t('ai.intro')}
          </motion.p>
        </motion.div>

        {/* Toolbox */}
        <div>
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('ai.toolsLabel')}
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
              {t('ai.toolsHeading')}
            </h3>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Featured card: Claude Code, full width */}
            <motion.div
              variants={fadeUp}
              className="group md:col-span-2 bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-6 md:p-8 transition-[background-color,border-color,transform] duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-5">
                <div className="shrink-0 p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <featuredTool.icon className="w-7 h-7 text-emerald-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                    {t(`ai.${featuredTool.title}`)}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {t(`ai.${featuredTool.desc}`)}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* The remaining four tools, 2x2 */}
            {tools.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                className="group bg-white/5 hover:bg-white/[0.07] border border-white/10 hover:border-emerald-500/30 rounded-2xl p-6 transition-[background-color,border-color,transform] duration-500 hover:-translate-y-1"
              >
                <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl inline-flex mb-4 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="w-6 h-6 text-emerald-400" aria-hidden="true" />
                </div>
                <h4 className="font-display text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                  {t(`ai.${title}`)}
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {t(`ai.${desc}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* MidJourney gallery placeholder */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-6 border border-dashed border-white/20 rounded-2xl p-8 text-center"
          >
            <ImageIcon className="w-8 h-8 text-bone-faded mx-auto mb-3" aria-hidden="true" />
            <p className="text-bone-muted text-sm">{t('ai.galleryNote')}</p>
          </motion.div>
        </div>

        {/* Prompting principles */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
              {t('ai.promptingLabel')}
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              {t('ai.promptingHeading')}
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              {t('ai.promptingIntro')}
            </p>
          </div>

          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
          >
            {principles.map((key, i) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-emerald-500/20 rounded-xl p-6"
              >
                <span className="font-display italic text-accent text-3xl font-bold mb-3 block tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-white leading-relaxed">
                  {t(`ai.${key}`)}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Honest footnote about practice vs principle */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mt-8 text-center text-bone-muted italic leading-relaxed"
          >
            {t('ai.honestyNote')}
          </motion.p>
        </div>

        {/* Closing: AI-assisted, human-directed */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center pb-8"
        >
          <motion.p variants={fadeUp} className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-3">
            {t('ai.closingLabel')}
          </motion.p>
          <motion.h3 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white mb-5">
            {t('ai.closingHeading')}
          </motion.h3>
          <motion.p variants={fadeUp} className="text-lg text-gray-300 leading-relaxed mb-10">
            {t('ai.closingText')}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
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
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}

export default AiShowcase;
