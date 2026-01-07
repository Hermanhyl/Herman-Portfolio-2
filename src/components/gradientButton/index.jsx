import { Link, useNavigate } from 'react-router-dom';

/**
 * GradientButton component - Reusable gradient button/link
 *
 * @param {Object} props - Component props
 * @param {string} props.to - Internal link destination (uses React Router Link)
 * @param {string} props.href - External link destination (uses anchor tag)
 * @param {React.ReactNode} props.children - Button content
 * @param {React.ReactNode} props.icon - Optional icon component
 * @param {string} props.variant - 'primary' | 'secondary'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {string} props.className - Additional classes
 * @param {Function} props.onClick - Click handler (for button variant)
 */
function GradientButton({
  to,
  href,
  children,
  icon: Icon,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  ...props
}) {
  const navigate = useNavigate();
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black cursor-pointer';

  const variants = {
    primary: 'bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl focus:ring-emerald-400',
    secondary: 'bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white focus:ring-white/50',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </>
  );

  // Internal link with hash support (e.g., "/#projects" or "/page#section")
  if (to) {
    // Check if it's a hash link (contains #)
    if (to.includes('#')) {
      const [path, hash] = to.split('#');

      const handleHashClick = (e) => {
        e.preventDefault();

        // Navigate to the path first (if not already there)
        const targetPath = path || '/';
        if (window.location.pathname !== targetPath) {
          navigate(targetPath);
          // Wait for navigation to complete, then scroll
          setTimeout(() => {
            const element = document.getElementById(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 100);
        } else {
          // Already on the page, just scroll
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      };

      return (
        <button onClick={handleHashClick} className={`group ${combinedClassName}`} {...props}>
          {content}
        </button>
      );
    }

    return (
      <Link to={to} className={`group ${combinedClassName}`} {...props}>
        {content}
      </Link>
    );
  }

  // External link
  if (href) {
    return (
      <a
        href={href}
        className={`group ${combinedClassName}`}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {content}
      </a>
    );
  }

  // Button
  return (
    <button onClick={onClick} className={`group ${combinedClassName}`} {...props}>
      {content}
    </button>
  );
}

export default GradientButton;
