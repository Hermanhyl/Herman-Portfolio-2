/**
 * SectionHeader component - Reusable header for page sections
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Lucide icon component
 * @param {string} props.badge - Badge text
 * @param {string} props.badgeColor - Color theme: 'emerald' | 'purple' | 'cyan'
 * @param {string} props.title - Section title
 * @param {string} props.description - Section description
 * @param {string} props.className - Additional classes
 */
function SectionHeader({ icon: Icon, badge, badgeColor = 'emerald', title, description, className = '' }) {
  const colorVariants = {
    emerald: 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300',
    purple: 'bg-purple-500/20 border-purple-500/50 text-purple-300',
    cyan: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300',
  };

  const iconColors = {
    emerald: 'text-emerald-400',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400',
  };

  return (
    <div className={`text-center space-y-4 ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 ${colorVariants[badgeColor]} border px-4 py-2 rounded-full backdrop-blur-sm mb-4`}>
          {Icon && <Icon className={`w-4 h-4 ${iconColors[badgeColor]}`} />}
          <span className="text-sm font-medium">{badge}</span>
        </div>
      )}

      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-transparent bg-clip-text pb-2">
        {title}
      </h2>

      {description && (
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
