import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * BackToTop button component that appears when user scrolls down
 * and smoothly scrolls to the top when clicked.
 *
 * @component
 * @returns {JSX.Element|null} The back-to-top button or null if not visible
 */
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="fixed bottom-8 right-8 z-40 p-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-black group animate-in fade-in slide-in-from-bottom-4"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" aria-hidden="true" />
        </button>
      )}
    </>
  );
}
