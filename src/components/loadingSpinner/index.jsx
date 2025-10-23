/**
 * LoadingSpinner component - a reusable loading indicator
 * that can be used throughout the application.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} [props.size='md'] - Size of the spinner ('sm', 'md', 'lg')
 * @param {string} [props.text] - Optional loading text to display
 * @returns {JSX.Element} The loading spinner
 */
export default function LoadingSpinner({ size = 'md', text }) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Animated spinner */}
      <div className={`relative ${sizeClasses[size]}`}>
        <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-transparent border-t-emerald-400 border-r-cyan-400 rounded-full animate-spin"></div>
      </div>
      {text && <p className="text-white text-lg font-medium">{text}</p>}
    </div>
  );
}
