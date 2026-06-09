import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pause, Play } from 'lucide-react';

/**
 * Marquee — single-row infinite horizontal scroll.
 *
 * Content is duplicated so the scroll wraps seamlessly. Alternating items
 * render in Fraunces italic for typographic variety; separators are small
 * asterisks.
 *
 * WCAG 2.2.2 Pause, Stop, Hide:
 *   Continuous motion that runs >5s alongside other content needs a
 *   user-accessible mechanism to pause. prefers-reduced-motion still
 *   applies via the global CSS rule (animation-duration zeroed out),
 *   but the success criterion specifies a control on the page, so we
 *   render a visible pause/play toggle anchored to the marquee.
 *
 *   The toggle is focus-visible-ringed, keyboard-operable, and its
 *   icon plus aria-label flip with state. The marquee track is still
 *   aria-hidden so the running text doesn't pollute the AT tree;
 *   the control sits outside the aria-hidden boundary so it remains
 *   discoverable.
 *
 * @param {string[]} props.items - Strings to display in rotation.
 * @param {number} props.durationSec - Loop duration. Default 40s.
 */
function Marquee({ items, durationSec = 40 }) {
  const { t } = useTranslation();
  const [paused, setPaused] = useState(false);
  // Duplicate so the second copy slides in as the first slides out
  const loop = [...items, ...items];

  return (
    <div className="group relative w-full border-y border-border bg-ink py-5">
      <div className="relative w-full overflow-hidden" aria-hidden="true">
        <div
          className="flex w-max gap-10 marquee-track will-change-transform"
          style={{
            animation: `marquee-scroll ${durationSec}s linear infinite`,
            animationPlayState: paused ? 'paused' : 'running',
          }}
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

      {/* Pause/play control. Sits outside the aria-hidden marquee
          track but inside the wrapper so its position follows the
          band. Visible at all times so keyboard-only users can find
          it; minimal styling so it doesn't compete with the editorial
          text behind it. */}
      <button
        type="button"
        onClick={() => setPaused((p) => !p)}
        aria-label={paused ? t('marquee.play') : t('marquee.pause')}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center h-8 w-8 rounded-full bg-ink-elevated/80 backdrop-blur border border-border-strong text-bone-muted hover:text-bone hover:border-accent transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink cursor-pointer"
      >
        {paused ? (
          <Play className="w-3.5 h-3.5" aria-hidden="true" />
        ) : (
          <Pause className="w-3.5 h-3.5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}

export default Marquee;
