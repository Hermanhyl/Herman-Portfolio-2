import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Reusable back button component for case study pages
 *
 * @param {Object} props - Component props
 * @param {'top' | 'bottom'} props.position - Position variant: 'top' for hero section, 'bottom' for end of page
 */
export default function BackButton({ position = 'top' }) {
  const navigate = useNavigate();

  if (position === 'bottom') {
    return (
      <div className="mt-16 pt-8 border-t border-white/10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
          <span className="font-medium">Back to previous page</span>
        </button>
      </div>
    );
  }

  // Top position - glass button style
  // On mobile: appears below navbar with margin below to separate from content
  // On lg+: absolute positioning in top left, below navbar
  return (
    <div className="px-4 sm:px-6 lg:px-8 pt-20 pb-4 lg:absolute lg:top-24 lg:left-8 xl:left-12 lg:p-0 z-20">
      <button
        onClick={() => navigate(-1)}
        className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-gray-300 hover:text-white transition-all duration-300 group"
        aria-label="Go back to previous page"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
        <span className="text-base font-medium">Back</span>
      </button>
    </div>
  );
}
