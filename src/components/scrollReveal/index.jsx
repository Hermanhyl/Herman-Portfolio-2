import { useEffect, useRef, useState } from 'react';

/**
 * Detect prefers-reduced-motion. SSR-safe and falls back to false on
 * older browsers that lack matchMedia.
 */
function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * ScrollReveal component - Animates children when they scroll into view
 *
 * Accessibility:
 *   - prefers-reduced-motion: children are visible immediately, no
 *     animation, no observer (WCAG 2.3.3).
 *   - Observer unavailable (older browsers, JS error): children are
 *     visible immediately as a fallback so content is never hidden
 *     behind a broken animation (WCAG 1.3.1).
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.delay - Animation delay in ms (default: 0)
 * @param {string} props.animation - Animation type: 'fade-up' | 'fade-scale' (default: 'fade-up')
 */
function ScrollReveal({ children, className = '', delay = 0, animation = 'fade-up' }) {
  // Initialize visible if motion is reduced or the observer API is
  // missing — content is never hidden behind an animation that will
  // never run.
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (prefersReducedMotion()) return true;
    if (typeof window.IntersectionObserver === 'undefined') return true;
    return false;
  });
  const ref = useRef(null);

  useEffect(() => {
    // If already visible (reduced motion or no observer), nothing to do.
    if (isVisible) return;
    if (typeof window.IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  const animationClass = animation === 'fade-scale'
    ? 'animate-fade-in-scale'
    : 'animate-fade-in-up';

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
