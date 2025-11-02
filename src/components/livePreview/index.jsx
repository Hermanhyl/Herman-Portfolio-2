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

      {/* Live iframe preview - scaled to show more content */}
      <iframe
        src={url}
        title={`Live preview of ${title}`}
        className="absolute top-0 left-0 border-0 transition-transform duration-300 ease-in-out"
        sandbox="allow-same-origin allow-scripts"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIframeError(true);
          setIsLoading(false);
        }}
        style={{
          pointerEvents: 'none', // Prevent interaction with iframe
          width: '1400px', // Large viewport to capture more content
          height: '1050px', // Proportional height
          transform: 'scale(0.35)', // Scale down to fit
          transformOrigin: 'top left'
        }}
      />

      {/* Overlay to ensure no interaction and indicate it's a preview */}
      <div className="absolute inset-0 pointer-events-none rounded-xl" aria-hidden="true"></div>
    </div>
  );
}

export default LivePreview;
