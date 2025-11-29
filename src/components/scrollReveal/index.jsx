import { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal component - Animates children when they scroll into view
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child elements to animate
 * @param {string} props.className - Additional CSS classes
 * @param {number} props.delay - Animation delay in ms (default: 0)
 * @param {string} props.animation - Animation type: 'fade-up' | 'fade-scale' (default: 'fade-up')
 */
function ScrollReveal({ children, className = '', delay = 0, animation = 'fade-up' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
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
  }, []);

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
