import { useState, useEffect, useRef } from 'react';
import OptimizedImage from '../optimizedImage';

/**
 * LivePreview component - Displays a live iframe preview of a website
 * Falls back to static image if iframe fails to load
 * Dynamically scales to fill container at any size
 *
 * @param {Object} props - Component props
 * @param {string} props.url - Live website URL to preview
 * @param {string} props.fallbackImage - Fallback image path if iframe fails
 * @param {string} props.title - Title for accessibility
 */
function LivePreview({ url, fallbackImage, title }) {
  const [iframeError, setIframeError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [scale, setScale] = useState(0.35);
  const containerRef = useRef(null);

  // Base iframe dimensions (viewport size to capture)
  const IFRAME_WIDTH = 1400;
  const IFRAME_HEIGHT = 900;

  // Calculate scale based on container size
  useEffect(() => {
    const calculateScale = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const containerHeight = containerRef.current.offsetHeight;

      // Calculate scale to fill container while maintaining aspect ratio
      const scaleX = containerWidth / IFRAME_WIDTH;
      const scaleY = containerHeight / IFRAME_HEIGHT;

      // Use the larger scale to ensure full coverage (cover behavior)
      const newScale = Math.max(scaleX, scaleY);
      setScale(newScale);
    };

    calculateScale();

    // Recalculate on window resize
    window.addEventListener('resize', calculateScale);
    return () => window.removeEventListener('resize', calculateScale);
  }, []);

  // If no URL, iframe fails, or we have an error, show fallback image
  if (!url || iframeError) {
    return (
      <OptimizedImage
        src={fallbackImage}
        alt={title}
        className="w-full h-full object-cover object-top rounded-xl transition duration-300 ease-in-out group-hover:scale-105"
      />
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden rounded-xl">
      {/* Loading skeleton */}
      {isLoading && (
        <div className="absolute inset-0 bg-gray-700 animate-pulse rounded-xl flex items-center justify-center z-10">
          <div className="text-gray-400 text-sm">Loading preview...</div>
        </div>
      )}

      {/* Live iframe preview - dynamically scaled to fill container */}
      <iframe
        src={url}
        title={`Live preview of ${title}`}
        className="absolute top-1/2 left-1/2 border-0 transition-transform duration-300 ease-in-out bg-white"
        sandbox="allow-same-origin allow-scripts"
        loading="lazy"
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIframeError(true);
          setIsLoading(false);
        }}
        style={{
          pointerEvents: 'none',
          width: `${IFRAME_WIDTH}px`,
          height: `${IFRAME_HEIGHT}px`,
          transform: `translate(-50%, -50%) scale(${scale})`,
          transformOrigin: 'center center',
          colorScheme: 'light'
        }}
      />

      {/* Overlay to ensure no interaction */}
      <div className="absolute inset-0 pointer-events-none rounded-xl" aria-hidden="true"></div>
    </div>
  );
}

export default LivePreview;
