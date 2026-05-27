import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

/**
 * Vertical gradient line that draws in as the user scrolls past the
 * timeline. Place inside a `relative` parent and pass the parent's ref via
 * `parentRef` so the scroll progress is measured against the timeline area.
 */
export default function TimelineLine({ parentRef }) {
  const { scrollYProgress } = useScroll({
    target: parentRef,
    offset: ['start 80%', 'end 60%'],
  });

  // Smooth the progress with a spring so the line doesn't twitch with every
  // scroll event. Damping high enough to feel like it follows, not chases.
  const smoothed = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const scaleY = useTransform(smoothed, [0, 1], [0, 1]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleY, transformOrigin: 'top' }}
      className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500 opacity-60"
    />
  );
}
