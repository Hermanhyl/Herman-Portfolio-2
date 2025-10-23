import { useEffect, useState } from 'react';

/**
 * PageTransition component that wraps page content with fade-in animation.
 * Provides a smooth transition effect when pages load.
 *
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to wrap
 * @returns {JSX.Element} The wrapped content with transition effects
 */
export default function PageTransition({ children }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ${
        isLoaded
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
}
