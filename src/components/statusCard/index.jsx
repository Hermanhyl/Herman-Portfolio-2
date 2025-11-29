/**
 * StatusCard component - Card for displaying status/activity items
 *
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.icon - Lucide icon component
 * @param {string} props.title - Card title
 * @param {string} props.subtitle - Card subtitle/description
 * @param {string} props.color - Color theme: 'emerald' | 'cyan' | 'purple' | 'pink'
 */
function StatusCard({ icon: Icon, title, subtitle, color = 'emerald' }) {
  const colorVariants = {
    emerald: {
      gradient: 'from-emerald-500/10 to-cyan-500/10',
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
      iconBg: 'bg-emerald-500/20 group-hover:bg-emerald-500/30',
      icon: 'text-emerald-400',
      title: 'text-emerald-300',
    },
    cyan: {
      gradient: 'from-cyan-500/10 to-blue-500/10',
      border: 'border-cyan-500/20 hover:border-cyan-500/40',
      iconBg: 'bg-cyan-500/20 group-hover:bg-cyan-500/30',
      icon: 'text-cyan-400',
      title: 'text-cyan-300',
    },
    purple: {
      gradient: 'from-purple-500/10 to-pink-500/10',
      border: 'border-purple-500/20 hover:border-purple-500/40',
      iconBg: 'bg-purple-500/20 group-hover:bg-purple-500/30',
      icon: 'text-purple-400',
      title: 'text-purple-300',
    },
    pink: {
      gradient: 'from-pink-500/10 to-orange-500/10',
      border: 'border-pink-500/20 hover:border-pink-500/40',
      iconBg: 'bg-pink-500/20 group-hover:bg-pink-500/30',
      icon: 'text-pink-400',
      title: 'text-pink-300',
    },
  };

  const styles = colorVariants[color];

  return (
    <div className={`flex items-start gap-4 p-5 bg-gradient-to-br ${styles.gradient} rounded-xl border ${styles.border} transition-all duration-300 group hover:transform hover:scale-105`}>
      <div className={`flex-shrink-0 p-3 ${styles.iconBg} rounded-lg transition-colors`}>
        <Icon className={`w-6 h-6 ${styles.icon}`} />
      </div>
      <div>
        <h3 className={`font-bold text-lg ${styles.title} mb-1`}>{title}</h3>
        <p className="text-gray-300 text-base">{subtitle}</p>
      </div>
    </div>
  );
}

export default StatusCard;
