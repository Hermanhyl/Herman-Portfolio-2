import { useEffect, useRef } from 'react';

/**
 * NetworkBackground component - Canvas-based connecting dots animation
 * Creates a subtle network effect with floating dots that connect when near each other
 */
function NetworkBackground() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const dotsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuration
    const config = {
      dotCount: Math.floor((width * height) / 25000), // Responsive dot count
      dotRadius: 2.5,
      connectionDistance: 150,
      dotSpeed: 0.5,
      dotColor: { r: 52, g: 211, b: 153 }, // emerald-400
      lineColor: { r: 34, g: 211, b: 238 }, // cyan-400
      dotOpacity: 0.6,
      lineOpacity: 0.25,
    };

    // Ensure reasonable dot count
    config.dotCount = Math.max(20, Math.min(config.dotCount, 60));

    // Set canvas size - use documentElement to avoid scrollbar issues
    const setCanvasSize = () => {
      width = document.documentElement.clientWidth;
      height = document.documentElement.clientHeight;
      canvas.width = width;
      canvas.height = height;

      // Reinitialize dots on resize
      initDots();
    };

    // Initialize dots with random positions and velocities
    const initDots = () => {
      dotsRef.current = [];
      const count = Math.floor((width * height) / 25000);
      const dotCount = Math.max(20, Math.min(count, 60));

      for (let i = 0; i < dotCount; i++) {
        dotsRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * config.dotSpeed,
          vy: (Math.random() - 0.5) * config.dotSpeed,
          radius: config.dotRadius + Math.random() * 1,
        });
      }
    };

    // Update dot positions
    const updateDots = () => {
      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Bounce off edges with some padding
        if (dot.x < 0 || dot.x > width) {
          dot.vx *= -1;
          dot.x = Math.max(0, Math.min(width, dot.x));
        }
        if (dot.y < 0 || dot.y > height) {
          dot.vy *= -1;
          dot.y = Math.max(0, Math.min(height, dot.y));
        }
      });
    };

    // Draw dots and connections
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const dots = dotsRef.current;

      // Draw connections first (behind dots)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionDistance) {
            // Opacity fades with distance
            const opacity = (1 - distance / config.connectionDistance) * config.lineOpacity;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${config.lineColor.r}, ${config.lineColor.g}, ${config.lineColor.b}, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw dots
      dots.forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${config.dotColor.r}, ${config.dotColor.g}, ${config.dotColor.b}, ${config.dotOpacity})`;
        ctx.fill();
      });
    };

    // Animation loop
    const animate = () => {
      updateDots();
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };

    // Initialize
    setCanvasSize();
    animate();

    // Handle resize
    const handleResize = () => {
      setCanvasSize();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
}

export default NetworkBackground;
