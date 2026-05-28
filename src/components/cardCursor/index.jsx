import { useState, useRef, useEffect } from 'react';

/**
 * CardCursor — wraps a card, hides the OS cursor inside its bounds, and
 * follows the pointer with a small tangerine disc showing the action
 * label ("VIEW →", "READ →", etc.).
 *
 * - Hides native cursor on the wrapper AND every descendant via
 *   [&_*]:cursor-none — child Links/buttons no longer leak the pointer
 *   cursor through.
 * - Press animation: scale shrinks to 0.82 and background deepens to
 *   accent-soft on pointerdown; springs back on pointerup.
 * - Touch / non-mouse pointer types: disc is skipped entirely.
 * - prefers-reduced-motion is handled by the global CSS rule in
 *   index.css that zeros out transitions.
 *
 * @param {React.ReactNode} props.children
 * @param {string} props.label - Disc label. Default "VIEW →".
 * @param {string} props.className
 */
function CardCursor({ children, label = 'VIEW →', className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);

  const handleMove = (e) => {
    if (!ref.current) return;
    if (e.pointerType && e.pointerType !== 'mouse') return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleEnter = (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    setActive(true);
  };

  const handleLeave = () => {
    setActive(false);
    setPressed(false);
  };

  const handleDown = (e) => {
    if (e.pointerType && e.pointerType !== 'mouse') return;
    setPressed(true);
  };

  const handleUp = () => setPressed(false);

  // If the pointer is released outside the card (e.g. mouse leaves
  // during a drag), reset pressed state at the window level too.
  useEffect(() => {
    if (!pressed) return;
    const onWindowUp = () => setPressed(false);
    window.addEventListener('pointerup', onWindowUp);
    window.addEventListener('pointercancel', onWindowUp);
    return () => {
      window.removeEventListener('pointerup', onWindowUp);
      window.removeEventListener('pointercancel', onWindowUp);
    };
  }, [pressed]);

  // Track keyboard focus inside the wrapper so the custom cursor +
  // disc can stand down when a child is focused (WCAG 2.4.7). Uses
  // focusin/focusout because focus/blur do not bubble.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const onFocusIn = () => setFocusWithin(true);
    const onFocusOut = (event) => {
      // Only clear if focus left the wrapper entirely (not just moved
      // between two descendants). relatedTarget is the element gaining
      // focus.
      if (!node.contains(event.relatedTarget)) setFocusWithin(false);
    };
    node.addEventListener('focusin', onFocusIn);
    node.addEventListener('focusout', onFocusOut);
    return () => {
      node.removeEventListener('focusin', onFocusIn);
      node.removeEventListener('focusout', onFocusOut);
    };
  }, []);

  // Scale: 1 when hovering, 0.82 when pressed, 0 when not active
  const scale = !active ? 0 : pressed ? 0.82 : 1;

  // WCAG 2.4.7 Focus Visible. When a child is keyboard-focused, restore
  // the native cursor so the system focus indicator and the OS pointer
  // are both visible to users who navigate primarily by keyboard but
  // may also have a mouse parked over the card. The disc itself is
  // hidden via opacity in the same condition.
  const showDisc = active && !focusWithin;

  return (
    <div
      ref={ref}
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
      onPointerMove={handleMove}
      onPointerDown={handleDown}
      onPointerUp={handleUp}
      /* `cursor-none` on the wrapper and on every descendant — child
         Links/buttons override the default `cursor: pointer` only while
         the disc is active AND no child is keyboard-focused. The
         :focus-within reset is also wired in CSS as a backstop in case
         the React reconciliation lag drops a frame. */
      className={`relative focus-within:!cursor-auto [&:focus-within_*]:!cursor-auto ${active && !focusWithin ? 'cursor-none [&_*]:cursor-none' : ''} ${className}`}
    >
      {children}
      <div
        aria-hidden="true"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%) scale(${showDisc ? scale : 0})`,
          // Press uses a snappier curve so the depression reads as tactile;
          // release uses the same out-expo as enter for spring-back feel.
          transition: pressed
            ? 'transform 110ms cubic-bezier(0.4, 0, 0.6, 1), background-color 110ms ease-out, opacity 180ms ease-out'
            : 'transform 220ms cubic-bezier(0.22, 1, 0.36, 1), background-color 200ms ease-out, opacity 180ms ease-out',
          opacity: showDisc ? 1 : 0,
        }}
        className={`pointer-events-none absolute top-0 left-0 z-30 flex items-center justify-center h-16 w-16 rounded-full text-accent-ink font-display italic text-sm font-bold tracking-tight will-change-transform ${pressed ? 'bg-accent-soft' : 'bg-accent'}`}
      >
        {label}
      </div>
    </div>
  );
}

export default CardCursor;
