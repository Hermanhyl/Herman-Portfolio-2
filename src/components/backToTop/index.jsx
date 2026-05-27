import { useState, useEffect, useRef } from 'react';

/**
 * Double chevron SVG — two stacked "^" marks pointing up. Top one is
 * slightly smaller / shorter so the pair reads as a "skip to top" mark
 * rather than two equal arrows. Strokes are rounded for a softer line.
 */
function DoubleChevronUp() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 sm:w-6 sm:h-6"
      aria-hidden="true"
    >
      {/* Top chevron — narrower, sits higher */}
      <polyline points="6 11, 12 6, 18 11" />
      {/* Bottom chevron — full width, sits below */}
      <polyline points="6 18, 12 13, 18 18" />
    </svg>
  );
}

/**
 * BackToTop — appears after 300px scroll. Visually a sibling to the
 * chatbot button (same shape/size/shadow) but inverted role: ink bg,
 * tangerine ring, tangerine icon. Three motion states (idle / hover /
 * click) live in index.css.
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const launchTimerRef = useRef(null);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    toggleVisibility();
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  useEffect(() => {
    return () => {
      if (launchTimerRef.current) clearTimeout(launchTimerRef.current);
    };
  }, []);

  const scrollToTop = () => {
    // Trigger the launch animation, then scroll. Animation duration in
    // CSS is 0.6s; we clear the flag after that so a second click can
    // re-trigger.
    setIsLaunching(true);
    if (launchTimerRef.current) clearTimeout(launchTimerRef.current);
    launchTimerRef.current = setTimeout(() => setIsLaunching(false), 600);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`group fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40 h-12 w-12 sm:h-14 sm:w-14 bg-ink-elevated border-2 border-accent text-accent rounded-full shadow-2xl shadow-accent/20 transition-transform duration-300 hover:scale-110 hover:border-[2.5px] hover:shadow-xl active:scale-95 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-ink animate-in fade-in slide-in-from-bottom-4 duration-500 back-to-top-bob cursor-pointer flex items-center justify-center overflow-hidden ${
        isLaunching ? 'back-to-top-launching' : ''
      }`}
    >
      {/* Icon stack — relative + overflow-hidden on the button clips the
          hover tick-up loop so chevrons appear to scroll through. */}
      <span className="relative h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center">
        {/* Resting icon: visible at rest, hides on hover so the tick-up
            loop has the stage. */}
        <span className="absolute inset-0 flex items-center justify-center back-to-top-icon transition-opacity duration-200 group-hover:opacity-0">
          <DoubleChevronUp />
        </span>
        {/* Hover loop: two staggered chevron pairs that translate-up + fade
            continuously. Hidden until hovered. */}
        <span className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="absolute inset-0 flex items-center justify-center back-to-top-tick">
            <DoubleChevronUp />
          </span>
          <span className="absolute inset-0 flex items-center justify-center back-to-top-tick-delay">
            <DoubleChevronUp />
          </span>
        </span>
      </span>
    </button>
  );
}
