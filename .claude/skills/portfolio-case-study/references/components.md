# Interactive case study components

React components for Herman's portfolio (React + i18n). All components must be:
- **Accessible**: keyboard operable, proper ARIA, visible focus, respects `prefers-reduced-motion`. Herman sells WCAG audits; his own portfolio must pass one.
- **Responsive**: works from 320px up.
- **Dependency-light**: plain React + CSS, no heavy libraries.
- Styled to match the portfolio's existing design tokens. Before generating final code, ask the user for their CSS approach (CSS modules, Tailwind, styled-components, plain CSS) and adapt. The reference implementations below use plain CSS classes; rename/adapt to fit.

## 1. Before/After slider

The signature component for redesign case studies. Two images stacked, a draggable divider reveals the "after" over the "before".

**When to use:** before and after screenshots exist at the SAME framing/crop/aspect ratio. If framing differs, use side-by-side comparison cards instead; a mismatched slider looks broken and unprofessional.

**Interaction requirements:**
- Pointer drag (mouse + touch via Pointer Events)
- Click/tap anywhere on the image moves the divider there
- Keyboard: the handle is a `role="slider"` focusable element; arrow keys move it (Shift+arrow for bigger steps, Home/End for 0/100%)
- Labels "Før"/"Etter" (or i18n keys) pinned to each side, fading out when the divider crosses them
- `aria-valuenow` updates, images have meaningful alt text ("Forsiden før redesign", "Forsiden etter redesign")

**Reference implementation:**

```jsx
import { useRef, useState, useCallback } from "react";

export default function BeforeAfterSlider({
  beforeSrc, afterSrc, beforeAlt, afterAlt,
  beforeLabel = "Før", afterLabel = "Etter", initial = 50,
}) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(initial); // 0-100, % of width where divider sits
  const dragging = useRef(false);

  const posFromClientX = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    posFromClientX(e.clientX);
  };
  const onPointerMove = (e) => { if (dragging.current) posFromClientX(e.clientX); };
  const onPointerUp = () => { dragging.current = false; };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - step));
    else if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + step));
    else if (e.key === "Home") setPos(0);
    else if (e.key === "End") setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <div
      ref={containerRef}
      className="ba-slider"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <img src={beforeSrc} alt={beforeAlt} className="ba-img" draggable="false" />
      <div className="ba-after-wrap" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        <img src={afterSrc} alt={afterAlt} className="ba-img" draggable="false" />
      </div>

      <span className="ba-label ba-label-before" style={{ opacity: pos > 15 ? 1 : 0 }}>
        {beforeLabel}
      </span>
      <span className="ba-label ba-label-after" style={{ opacity: pos < 85 ? 1 : 0 }}>
        {afterLabel}
      </span>

      <div
        className="ba-handle"
        style={{ left: `${pos}%` }}
        role="slider"
        tabIndex={0}
        aria-label={`Sammenlign ${beforeLabel.toLowerCase()} og ${afterLabel.toLowerCase()}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onKeyDown={onKeyDown}
      >
        <div className="ba-handle-line" />
        <div className="ba-handle-grip" aria-hidden="true">⇄</div>
        <div className="ba-handle-line" />
      </div>
    </div>
  );
}
```

```css
.ba-slider {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  touch-action: none;       /* pointer events own the gesture */
  user-select: none;
  cursor: col-resize;
  line-height: 0;
}
.ba-img { width: 100%; display: block; }
.ba-after-wrap { position: absolute; inset: 0; }

.ba-label {
  position: absolute; top: 12px;
  padding: 4px 10px; border-radius: 6px;
  font-size: 0.8rem; font-weight: 600; line-height: 1.4;
  background: rgba(0,0,0,0.65); color: #fff;
  transition: opacity 200ms ease;
  pointer-events: none;
}
.ba-label-before { left: 12px; }
.ba-label-after { right: 12px; }

.ba-handle {
  position: absolute; top: 0; bottom: 0;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
  width: 44px;              /* WCAG target size */
  cursor: col-resize;
}
.ba-handle:focus-visible { outline: 3px solid var(--accent, #c1663f); outline-offset: 2px; }
.ba-handle-line { flex: 1; width: 2px; background: #fff; box-shadow: 0 0 4px rgba(0,0,0,0.4); }
.ba-handle-grip {
  width: 40px; height: 40px; border-radius: 50%;
  background: #fff; color: #333;
  display: grid; place-items: center;
  font-size: 1.1rem; line-height: 1;
  box-shadow: 0 2px 8px rgba(0,0,0,0.3);
}
@media (prefers-reduced-motion: reduce) {
  .ba-label { transition: none; }
}
```

Usage note for the user: export before/after screenshots at identical dimensions (same page, same viewport width, same scroll position). Full-page screenshots at 1440px width, then downscaled/optimized (WebP/AVIF, `loading="lazy"`), usually work best.

## 2. Metric highlight cards

For the results section. 2-4 cards, each with a big number, a short label, and optionally the "before" value.

```jsx
export function MetricCard({ value, label, before }) {
  return (
    <div className="metric-card">
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
      {before && <span className="metric-before">fra {before}</span>}
    </div>
  );
}
```

Example content: `value="0.9s" label="Lastetid" before="4.2s"`. Grid layout, `repeat(auto-fit, minmax(140px, 1fr))`. Numbers use tabular-nums. Only use real, defensible numbers.

## 3. Process timeline

For projects with distinct phases. Vertical list on mobile, horizontal steps on desktop. Each step: phase name, 1-2 sentence description, optional thumbnail of a process artifact. Semantically an `<ol>`; do not animate on scroll if `prefers-reduced-motion` is set.

## 4. Side-by-side comparison cards

Fallback when before/after images don't share framing. Two figure elements with captions "Før" / "Etter", stacked on mobile, side by side from ~700px.

## 5. Embedded live preview

Prefer a plain screenshot linking to the live site over an iframe (iframes hurt performance and often break responsively). If an iframe is truly wanted, lazy-load it behind a click ("Last inn forhåndsvisning") with a poster image.

## Image guidelines for all components

- WebP or AVIF, `loading="lazy"` for below-the-fold, explicit width/height to avoid layout shift
- Meaningful alt text describing what the screenshot shows, not "screenshot"
- Consistent border radius and shadow with the rest of the portfolio
- Retina: export at 2x display size
