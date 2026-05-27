/**
 * SectionMarker — editorial section divider with hairline rule + numeric
 * marker. Pattern: `— 01 · SELECTED WORK —`.
 *
 * Use above a major page section to give the page rhythm and structure.
 * Centered by default; pass align="left" for left-aligned.
 *
 * @param {string} props.number - "01", "02", etc. Rendered tabular.
 * @param {string} props.label - Section label, displayed uppercase.
 * @param {'center'|'left'} props.align - Alignment, default 'center'.
 * @param {string} props.className - Extra wrapper classes.
 */
function SectionMarker({ number, label, align = 'center', className = '' }) {
  const isCenter = align === 'center';
  return (
    <div
      className={`flex items-center gap-3 sm:gap-4 text-bone-faded ${isCenter ? 'justify-center' : 'justify-start'} ${className}`}
    >
      {isCenter && <span className="h-px flex-1 max-w-[80px] bg-bone-faded/40" aria-hidden="true" />}
      <span className="font-display italic text-accent text-base sm:text-lg tabular-nums leading-none">{number}</span>
      <span className="h-3 w-px bg-bone-faded/40" aria-hidden="true" />
      <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.22em] text-bone-muted">
        {label}
      </span>
      <span className="h-px flex-1 max-w-[80px] bg-bone-faded/40" aria-hidden="true" />
    </div>
  );
}

export default SectionMarker;
