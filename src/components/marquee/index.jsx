/**
 * Marquee — single-row infinite horizontal scroll.
 *
 * Content is duplicated so the scroll wraps seamlessly. Alternating items
 * render in Fraunces italic for typographic variety; separators are small
 * asterisks. Pauses on hover and under prefers-reduced-motion (via the
 * global CSS media query in index.css).
 *
 * @param {string[]} props.items - Strings to display in rotation.
 * @param {number} props.durationSec - Loop duration. Default 40s.
 */
function Marquee({ items, durationSec = 40 }) {
  // Duplicate so the second copy slides in as the first slides out
  const loop = [...items, ...items];

  return (
    <div
      className="group relative w-full overflow-hidden border-y border-border bg-ink py-5"
      aria-hidden="true"
    >
      <div
        className="flex w-max gap-10 marquee-track will-change-transform"
        style={{ animation: `marquee-scroll ${durationSec}s linear infinite` }}
      >
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span
              className={`text-2xl md:text-3xl tracking-tight ${
                i % 2 === 0
                  ? 'text-bone font-display'
                  : 'text-accent font-display italic'
              }`}
            >
              {item}
            </span>
            <span className="text-bone-faded text-xl select-none" aria-hidden="true">
              ✺
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
