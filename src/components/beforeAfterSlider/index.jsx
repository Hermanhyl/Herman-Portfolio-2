import { useRef, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { MoveHorizontal } from 'lucide-react';
import OptimizedImage from '../optimizedImage';

/**
 * BeforeAfterSlider — draggable divider that reveals an "after" image
 * over a "before" image. Signature component for redesign case
 * studies.
 *
 * Accessibility (Herman sells WCAG audits, so this must pass one):
 *   - Pointer drag via Pointer Events (mouse + touch).
 *   - Click / tap anywhere on the image jumps the divider there.
 *   - The handle is role="slider", focusable, arrow-key operable
 *     (Shift+arrow = larger step, Home/End = 0/100), with
 *     aria-valuenow kept in sync.
 *   - Both images carry meaningful alt text.
 *   - Labels fade via CSS transition, disabled under
 *     prefers-reduced-motion by the global rule in index.css.
 *
 * Requires the before and after images to share the exact same
 * crop and aspect ratio, otherwise the reveal looks broken.
 *
 * @param {string} props.beforeSrc
 * @param {string} props.afterSrc
 * @param {string} props.beforeAlt
 * @param {string} props.afterAlt
 * @param {number} [props.initial=50] - Starting divider position (0-100).
 */
export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  initial = 50,
}) {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [pos, setPos] = useState(initial); // 0-100, % of width
  const dragging = useRef(false);

  const beforeLabel = t('beforeAfter.before');
  const afterLabel = t('beforeAfter.after');

  const posFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, pct)));
  }, []);

  const onPointerDown = (e) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    posFromClientX(e.clientX);
  };
  const onPointerMove = (e) => {
    if (dragging.current) posFromClientX(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - step));
    else if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + step));
    else if (e.key === 'Home') setPos(0);
    else if (e.key === 'End') setPos(100);
    else return;
    e.preventDefault();
  };

  return (
    <figure className="m-0">
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative overflow-hidden rounded-2xl select-none cursor-col-resize bg-gray-900 leading-[0] shadow-2xl shadow-black/50"
        style={{ touchAction: 'none' }}
      >
        {/* Before image sits underneath, full width */}
        <OptimizedImage
          src={beforeSrc}
          alt={beforeAlt}
          wrapperClassName="block w-full"
          className="block w-full h-auto pointer-events-none"
        />

        {/* After image, revealed on the RIGHT of the divider. Clip the
            left `pos%` so "before" (the base image) stays on the left
            under the Before label, and "after" shows on the right under
            the After label. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          aria-hidden="true"
        >
          <OptimizedImage
            src={afterSrc}
            alt=""
            wrapperClassName="block w-full h-full"
            className="block w-full h-full object-cover pointer-events-none"
          />
        </div>

        {/* Corner labels */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-black/65 text-white transition-opacity duration-200 pointer-events-none"
          style={{ opacity: pos > 15 ? 1 : 0 }}
        >
          {beforeLabel}
        </span>
        <span
          className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-semibold bg-accent text-accent-ink transition-opacity duration-200 pointer-events-none"
          style={{ opacity: pos < 85 ? 1 : 0 }}
        >
          {afterLabel}
        </span>

        {/* Divider + handle */}
        <div
          className="absolute top-0 bottom-0 flex flex-col items-center -translate-x-1/2 w-11 cursor-col-resize focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          style={{ left: `${pos}%` }}
          role="slider"
          tabIndex={0}
          aria-label={t('beforeAfter.ariaLabel')}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          aria-valuetext={`${Math.round(pos)}% ${afterLabel}`}
          onKeyDown={onKeyDown}
        >
          <div className="flex-1 w-0.5 bg-white shadow-[0_0_4px_rgba(0,0,0,0.4)]" />
          <div className="grid place-items-center w-10 h-10 rounded-full bg-white text-ink shadow-lg">
            <MoveHorizontal className="w-5 h-5" aria-hidden="true" />
          </div>
          <div className="flex-1 w-0.5 bg-white shadow-[0_0_4px_rgba(0,0,0,0.4)]" />
        </div>
      </div>

      <figcaption className="mt-3 text-center text-sm text-gray-400">
        {t('beforeAfter.caption')}
      </figcaption>
    </figure>
  );
}
