/**
 * SectionHeader — section title with optional badge and description.
 *
 * Renders title as solid bone; if `accentLastWord` is true, the final
 * word is rendered in italic accent (tangerine) — the editorial pattern
 * used across the site to give each page a single emphasis moment.
 *
 * @param {React.ReactNode} props.icon - Lucide icon for the badge
 * @param {string} props.badge - Badge text (omit for no badge)
 * @param {string} props.badgeColor - 'emerald' | 'purple' | 'cyan' (legacy
 *   names; after the palette swap these all read on-brand)
 * @param {string} props.title - Section title
 * @param {string} props.description - Optional sub-headline
 * @param {boolean} props.accentLastWord - Emphasize the final word in
 *   italic tangerine. Default false; opt in per page.
 * @param {string} props.className - Extra classes for the outer container
 */
function SectionHeader({ icon: Icon, badge, badgeColor = 'emerald', title, description, accentLastWord = false, className = '' }) {
  const colorVariants = {
    emerald: 'bg-emerald-500/15 border-emerald-500/40 text-emerald-300',
    purple: 'bg-purple-500/20 border-purple-500/50 text-purple-300',
    cyan: 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300',
  };

  const iconColors = {
    emerald: 'text-emerald-400',
    purple: 'text-purple-400',
    cyan: 'text-cyan-400',
  };

  const renderTitle = () => {
    if (!accentLastWord) return title;
    const words = title.split(' ');
    if (words.length < 2) return title;
    const lead = words.slice(0, -1).join(' ');
    const last = words[words.length - 1];
    return (
      <>
        {lead}{' '}
        <span className="italic text-accent">{last}</span>
      </>
    );
  };

  return (
    <div className={`text-center space-y-4 ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 ${colorVariants[badgeColor]} border px-4 py-1.5 rounded-full backdrop-blur-sm mb-4`}>
          {Icon && <Icon className={`w-4 h-4 ${iconColors[badgeColor]}`} />}
          <span className="text-xs font-semibold uppercase tracking-[0.12em]">{badge}</span>
        </div>
      )}

      <h2 className="font-display text-bone text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.025em] leading-[1.05] pb-2">
        {renderTitle()}
      </h2>

      {description && (
        <p className="text-lg sm:text-xl text-bone-muted max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
