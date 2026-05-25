import { useRef, useEffect, useState, useCallback } from 'react';

interface StatItem {
  end: number;
  decimals?: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { end: 2, suffix: '+', label: 'Years of AI Development' },
  { end: 3, suffix: '+', label: 'Major Projects Shipped' },
  { end: 8.02, decimals: 2, suffix: '', label: 'CGPA' },
  { end: 6, suffix: '', label: 'Certifications' },
];

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function AnimatedNumber({
  end,
  decimals = 0,
  suffix,
  shouldAnimate,
}: {
  end: number;
  decimals?: number;
  suffix: string;
  shouldAnimate: boolean;
}) {
  const [display, setDisplay] = useState('0');
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const duration = 2000;

  const animate = useCallback(
    (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);
      const current = easedProgress * end;

      setDisplay(current.toFixed(decimals));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        setDisplay(end.toFixed(decimals));
      }
    },
    [end, decimals]
  );

  useEffect(() => {
    if (shouldAnimate) {
      startTimeRef.current = 0;
      rafRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [shouldAnimate, animate]);

  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4"
    >
      {stats.map((stat, i) => (
        <div key={i} className="text-center lg:text-left">
          <div
            className="text-5xl font-bold leading-none"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#00f5ff',
              fontSize: '3rem',
            }}
          >
            <AnimatedNumber
              end={stat.end}
              decimals={stat.decimals}
              suffix={stat.suffix}
              shouldAnimate={isVisible}
            />
          </div>
          <div
            className="mt-2 text-sm uppercase tracking-wider"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              color: '#888888',
            }}
          >
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
