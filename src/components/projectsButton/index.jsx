import { useNavigate, useLocation } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

/**
 * ProjectsButton - Reusable button that navigates to the Projects/Illustrations section
 *
 * Uses purple/pink gradient styling and handles both same-page scrolling
 * and cross-page navigation with scroll.
 *
 * @param {Object} props - Component props
 * @param {string} props.size - 'sm' | 'md' | 'lg' - Button size variant
 * @param {string} props.className - Additional CSS classes
 */
function ProjectsButton({ size = 'lg', className = '' }) {
  const navigate = useNavigate();
  const location = useLocation();

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base',
  };

  const handleClick = () => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Navigate to home page, then scroll
      navigate('/');
      setTimeout(() => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 backdrop-blur-sm border border-purple-500/50 hover:border-purple-400 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black cursor-pointer ${sizes[size]} ${className}`}
    >
      <Briefcase className="w-5 h-5" aria-hidden="true" />
      Projects / Illustrations
    </button>
  );
}

export default ProjectsButton;
