import { Linkedin, Github, Instagram, Mail } from 'lucide-react';

/**
 * Social link configuration
 */
const socialConfig = {
  linkedin: {
    icon: Linkedin,
    label: 'LinkedIn',
    color: 'text-blue-400',
    hoverColor: 'group-hover:text-blue-300',
    ringColor: 'focus:ring-blue-500',
    url: 'https://www.linkedin.com/in/herman-hylland/',
  },
  github: {
    icon: Github,
    label: 'GitHub',
    color: 'text-gray-300',
    hoverColor: 'group-hover:text-white',
    ringColor: 'focus:ring-gray-500',
    url: 'https://github.com/Hermanhyl',
  },
  instagram: {
    icon: Instagram,
    label: 'Instagram',
    color: 'text-pink-400',
    hoverColor: 'group-hover:text-pink-300',
    ringColor: 'focus:ring-pink-500',
    url: 'https://www.instagram.com/hermanhyl98/',
  },
  email: {
    icon: Mail,
    label: 'Email',
    color: 'text-emerald-400',
    hoverColor: 'group-hover:text-emerald-300',
    ringColor: 'focus:ring-emerald-500',
    url: 'mailto:hermanhyl@hotmail.com',
  },
};

/**
 * SocialLink component - Individual social media link
 *
 * @param {Object} props - Component props
 * @param {string} props.platform - Platform key (linkedin, github, instagram, email)
 * @param {string} props.variant - Display variant: 'icon' | 'card' | 'full'
 * @param {string} props.size - Icon size: 'sm' | 'md' | 'lg'
 */
function SocialLink({ platform, variant = 'icon', size = 'md' }) {
  const config = socialConfig[platform];
  if (!config) return null;

  const { icon: Icon, label, color, hoverColor, ringColor, url } = config;
  const isExternal = !url.startsWith('mailto:');

  const sizes = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const iconSize = sizes[size];

  // Icon only variant (for header/footer)
  if (variant === 'icon') {
    return (
      <a
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={`${isExternal ? 'Visit' : 'Contact via'} ${label}${isExternal ? ' (opens in new tab)' : ''}`}
        className={`p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 ${ringColor} focus:ring-offset-2 focus:ring-offset-black group`}
      >
        <Icon className={`${iconSize} ${color} ${hoverColor} transition-colors`} aria-hidden="true" />
      </a>
    );
  }

  // Card variant (for contact page grid)
  if (variant === 'card') {
    return (
      <a
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={`${isExternal ? 'Visit' : 'Contact via'} ${label}${isExternal ? ' (opens in new tab)' : ''}`}
        className={`animated-border backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 ${ringColor} focus:ring-offset-2 focus:ring-offset-gray-900 flex flex-col items-center gap-2 group`}
      >
        <Icon className={`${sizes.lg} ${color} ${hoverColor} transition-colors`} aria-hidden="true" />
        <span className="text-sm font-medium">{label}</span>
      </a>
    );
  }

  // Full variant (with description, for contact page)
  if (variant === 'full') {
    const descriptions = {
      linkedin: 'Connect professionally',
      github: 'Check out my code',
      instagram: 'Follow my journey',
      email: 'hermanhyl@hotmail.com',
    };

    return (
      <a
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        aria-label={`${isExternal ? 'Visit' : 'Contact via'} ${label}${isExternal ? ' (opens in new tab)' : ''}`}
        className={`group animated-border block backdrop-blur-md bg-white/10 p-6 rounded-xl border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 ${ringColor} focus:ring-offset-2 focus:ring-offset-gray-900`}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors`}>
            <Icon className={`${sizes.md} ${color} ${hoverColor} transition-colors`} aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{label}</h3>
            <p className="text-gray-300 text-sm">{descriptions[platform]}</p>
          </div>
        </div>
      </a>
    );
  }

  return null;
}

/**
 * SocialLinks component - Group of social links
 *
 * @param {Object} props - Component props
 * @param {string[]} props.platforms - Array of platform keys to display
 * @param {string} props.variant - Display variant for all links
 * @param {string} props.size - Icon size for all links
 * @param {string} props.className - Additional wrapper classes
 */
function SocialLinks({ platforms = ['linkedin', 'github', 'email'], variant = 'icon', size = 'md', className = '' }) {
  return (
    <div className={`flex gap-3 ${className}`}>
      {platforms.map((platform) => (
        <SocialLink key={platform} platform={platform} variant={variant} size={size} />
      ))}
    </div>
  );
}

export { SocialLink, SocialLinks, socialConfig };
export default SocialLinks;
