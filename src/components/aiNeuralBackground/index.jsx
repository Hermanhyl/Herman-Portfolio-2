import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * AiNeuralBackground — a live, mouse-reactive neural constellation for
 * the AI view. Tangerine nodes drift on the ink background, connect to
 * their neighbours, and light up + link to the cursor as it moves.
 *
 * Fixed to the viewport so it is always present while scrolling the AI
 * view (it "follows all the way down" instead of scrolling away).
 *
 * WCAG 2.3.3: under prefers-reduced-motion the animation loop and
 * cursor reactivity are skipped and a single static frame is drawn, so
 * the effect is calm and non-animated for users who ask for that.
 */
export default function AiNeuralBackground() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    const ACCENT = [255, 92, 44]; // tangerine
    const BONE = [245, 239, 230]; // cream
    const CONNECT = 150;
    const MOUSE_REACH = 210;
    const speed = reduced ? 0 : 0.35;

    const initNodes = () => {
      const count = Math.max(26, Math.min(Math.floor((width * height) / 20000), 80));
      nodesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        r: 1.2 + Math.random() * 1.8,
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initNodes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const nodes = nodesRef.current;
      const { x: mx, y: my } = mouseRef.current;

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];

        // Neighbour links
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < CONNECT) {
            const o = (1 - dist / CONNECT) * 0.16;
            ctx.strokeStyle = `rgba(${BONE[0]},${BONE[1]},${BONE[2]},${o})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }

        // Cursor link + glow
        let glow = 0;
        const mdist = Math.hypot(a.x - mx, a.y - my);
        if (mdist < MOUSE_REACH) {
          glow = 1 - mdist / MOUSE_REACH;
          ctx.strokeStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${glow * 0.55})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }

        ctx.fillStyle = `rgba(${ACCENT[0]},${ACCENT[1]},${ACCENT[2]},${0.32 + glow * 0.6})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r + glow * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      const nodes = nodesRef.current;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }
      draw();
      rafRef.current = requestAnimationFrame(step);
    };

    resize();
    if (reduced) {
      draw();
    } else {
      step();
    }

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };

    window.addEventListener('resize', resize);
    if (!reduced) {
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerleave', onLeave);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerleave', onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
