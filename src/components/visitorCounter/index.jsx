import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

/**
 * VisitorCounter component that tracks and displays unique page views.
 * Uses browser's sessionStorage to count unique visits per session.
 *
 * @component
 * @param {Object} props - Component props
 * @param {boolean} [props.prominent=false] - Whether to display prominently
 * @returns {JSX.Element} The visitor counter display
 */
export default function VisitorCounter({ prominent = false }) {
  const [visitorCount, setVisitorCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const incrementVisitorCount = () => {
      try {
        // Check if this is a new session
        const hasVisited = sessionStorage.getItem('hasVisited');

        if (!hasVisited) {
          // Mark as visited for this session
          sessionStorage.setItem('hasVisited', 'true');

          // Get current count from localStorage
          const currentCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
          const newCount = currentCount + 1;

          // Update count
          localStorage.setItem('visitorCount', newCount.toString());
          setVisitorCount(newCount);
        } else {
          // Just get the current count
          const currentCount = parseInt(localStorage.getItem('visitorCount') || '0', 10);
          setVisitorCount(currentCount);
        }
      } catch (error) {
        console.error('Error tracking visitor:', error);
        setVisitorCount(0);
      } finally {
        setLoading(false);
      }
    };

    incrementVisitorCount();
  }, []);

  if (loading || visitorCount === null) {
    return null;
  }

  // Determine styling based on prominence and visitor count
  const isHighCount = visitorCount >= 100;
  const shouldBeProminent = prominent || isHighCount;

  return (
    <div
      className={`flex items-center gap-2 transition-all duration-300 ${
        shouldBeProminent
          ? 'text-emerald-400 text-base md:text-lg'
          : 'text-gray-500 text-xs md:text-sm'
      }`}
      title={`${visitorCount.toLocaleString()} unique visitors`}
    >
      <Eye className={`${shouldBeProminent ? 'w-5 h-5' : 'w-4 h-4'}`} aria-hidden="true" />
      <span className="font-medium">
        {visitorCount.toLocaleString()}
        <span className={`ml-1 ${shouldBeProminent ? 'font-normal' : 'font-light'}`}>
          {visitorCount === 1 ? 'visitor' : 'visitors'}
        </span>
      </span>
    </div>
  );
}
