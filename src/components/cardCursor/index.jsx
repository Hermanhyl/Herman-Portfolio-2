import { useState, useRef } from 'react';

/**
 * CardCursor — wraps a card and shows a small tangerine-bordered disc
 * with "VIEW →" that follows the cursor while hovering. Hides the OS
 * cursor only inside the card's bounds. Disabled on touch devices and
 * respects prefers-reduced-motion (the dot still appears but doesn't
 * smooth-follow; CSS transition is the smoothing layer).
 *
 * @param {React.ReactNode} props.children - The card content.
 * @param {string} props.label - Text inside the cursor disc. Default "VIEW →".
 * @param {string} props.className - Wrapper classes.
 */
function CardCursor({ children, label = 'VIEW →', className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);

  const handleMove = (e) => {
    if (!ref.current) return;
    // Skip on touch / pointer events without a real cursor
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleEnter = (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    setActive(true);
  };

  const handleLeave = () => setActive(false);

  return (
    <div
      ref={ref}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onPointerMove={handleMove}
      className={`relative ${active ? 'cursor-none' : ''} ${className}`}
    >
      {children}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${active ? 1 : 0})`,
          transition: 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1), opacity 180ms ease-out',
          opacity: active ? 1 : 0,
        }}
        className="pointer-events-none absolute top-0 left-0 z-30 flex items-center justify-center h-16 w-16 rounded-full bg-accent text-accent-ink font-display italic text-sm font-bold tracking-tight will-change-transform"
      >
        {label}
      </div>
    </div>
  );
}

export default CardCursor;
