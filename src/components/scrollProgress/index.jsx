import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Fixed gradient progress bar at the top of the viewport. Tracks document
 * scroll. Use on long-form pages (blog posts) where the reader benefits
 * from seeing how far through they are.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX, transformOrigin: '0% 50%' }}
      className="fixed top-[72px] left-0 right-0 h-[2px] z-[60] bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500"
    />
  );
}
