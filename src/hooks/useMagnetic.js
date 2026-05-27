import { useRef, useState, useCallback } from 'react';

/**
 * Returns a ref + an inline style that "pulls" the element toward the cursor.
 * The visual smoothing is a CSS transition baked into the returned style,
 * which automatically backs off under the global prefers-reduced-motion
 * media query (see src/index.css).
 *
 * Usage:
 *   const { ref, style, handleMouseMove, handleMouseLeave } = useMagnetic(6);
 *   <div ref={ref} style={style} onMouseMove={...} onMouseLeave={...} />
 */
export default function useMagnetic(strength = 6) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      setOffset({ x: dx * strength, y: dy * strength });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0 });
  }, []);

  const style = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
    transition: 'transform 250ms cubic-bezier(0.22, 1, 0.36, 1)',
    willChange: 'transform',
  };

  return { ref, style, handleMouseMove, handleMouseLeave };
}
