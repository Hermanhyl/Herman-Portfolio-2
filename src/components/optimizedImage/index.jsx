import { useState } from 'react';

/**
 * OptimizedImage component that provides lazy loading and loading states.
 * Shows a placeholder while the image loads and transitions smoothly.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.src - Image source URL
 * @param {string} props.alt - Alt text for the image
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.eager=false] - Whether to load image eagerly (default is lazy)
 * @returns {JSX.Element} The optimized image component
 */
export default function OptimizedImage({ src, alt, className = '', eager = false, ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div className="relative overflow-hidden">
      {/* Placeholder blur background */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
      )}

      {/* Actual image */}
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`transition-opacity duration-500 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400">
          <p className="text-sm">Failed to load image</p>
        </div>
      )}
    </div>
  );
}
