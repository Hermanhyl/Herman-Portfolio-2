import { useState } from 'react';
import OptimizedImage from '../optimizedImage';

/**
 * LivePreview component - Displays a live iframe preview of a website
 * Falls back to static image if iframe fails to load
 *
 * @param {Object} props - Component props
 * @param {string} props.url - Live website URL to preview
 * @param {string} props.fallbackImage - Fallback image path if iframe fails
 * @param {string} props.title - Title for accessibility
 */
function LivePreview({ url, fallbackImage, title }) {
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // If iframe fails or we have an error, show fallback image
  if (iframeError) {
    return (
      <OptimizedImage
        src={fallbackImage}
        alt={title}
        className="w-full h-full object-cover object-top rounded-xl transition duration-300 ease-in-out group-hover:scale-105"
      />
    );
  }

  return (
    <div className="relative w-full h-full">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading preview...</div>
        </div>
      )}

      {/* Live iframe preview */}
      <iframe
        src={url}
        title={`Live preview of ${title}`}
        className="w-full h-full rounded-xl border-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
        sandbox="allow-same-origin allow-scripts"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIframeError(true);
          setIsLoading(false);
        }}
        style={{
          pointerEvents: 'none', // Prevent interaction with iframe
          transform: 'scale(1)',
          transformOrigin: 'top center'
        }}
      />

      {/* Overlay to ensure no interaction and indicate it's a preview */}
      <div className="absolute inset-0 pointer-events-none rounded-xl" aria-hidden="true"></div>
    </div>
  );
}

export default LivePreview;
