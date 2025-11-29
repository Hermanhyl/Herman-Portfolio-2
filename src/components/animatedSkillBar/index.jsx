import { useState, useEffect, useRef } from 'react';

/**
 * AnimatedSkillBar component - Skill bar that animates on scroll
 *
 * @param {Object} props - Component props
 * @param {string} props.name - Skill name
 * @param {number} props.level - Skill level (0-100)
 * @param {string} props.color - Gradient color classes
 * @param {number} props.delay - Animation delay in ms
 */
function AnimatedSkillBar({ name, level, color, delay = 0 }) {
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          setTimeout(() => {
            setWidth(level);
          }, delay);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [level, delay, hasAnimated]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-gray-200 group-hover:text-white transition-colors">{name}</span>
        <span className="text-gray-400 group-hover:text-emerald-400 transition-colors font-medium">{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden backdrop-blur-sm">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out relative`}
          style={{ width: `${width}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </div>
      </div>
    </div>
  );
}

export default AnimatedSkillBar;
