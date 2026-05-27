/**
 * Shared motion tokens for framer-motion.
 * Keeping easing and timing in one place so the whole site feels orchestrated,
 * not a pile of one-off animations.
 */

// Custom cubic-beziers. Avoid framer-motion defaults — they read as "generic".
export const ease = {
  // Smooth, decisive entrance. Borrowed from the "out-expo" family.
  out: [0.22, 1, 0.36, 1],
  // Softer, for body copy or secondary elements.
  outSoft: [0.25, 0.46, 0.45, 0.94],
  // Snappy in-and-out, for hover/focus micro-interactions.
  inOut: [0.65, 0, 0.35, 1],
};

export const duration = {
  fast: 0.25,
  base: 0.5,
  slow: 0.8,
  hero: 1.0,
};

// Variants composable across the site
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
};

export const fadeUpSmall = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.outSoft } },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: duration.base, ease: ease.out } },
};

// Container with stagger — use with `initial="hidden" animate="visible"` or `whileInView`
export const staggerContainer = (stagger = 0.08, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Standard viewport options for whileInView — fire once, fire early
export const viewportOnce = { once: true, margin: '0px 0px -80px 0px' };
