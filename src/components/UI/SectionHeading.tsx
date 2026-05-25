import { useEffect, useRef, useState, useCallback } from 'react';

interface SectionHeadingProps {
  title: string;
  number: string;
  className?: string;
}

const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
const SCRAMBLE_DURATION = 800; // ms
const LINE_DURATION = 600; // ms

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, number, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const rafRef = useRef<number>(0);

  const scramble = useCallback(() => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const target = title.toUpperCase();
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / SCRAMBLE_DURATION, 1);

      // Number of characters resolved so far
      const resolved = Math.floor(progress * target.length);

      let result = '';
      for (let i = 0; i < target.length; i++) {
        if (i < resolved) {
          result += target[i];
        } else if (target[i] === ' ') {
          result += ' ';
        } else {
          result += SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        }
      }

      setDisplayText(result);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    // Animate the underline
    if (lineRef.current) {
      lineRef.current.style.transition = `width ${LINE_DURATION}ms cubic-bezier(0.16, 1, 0.3, 1) 200ms`;
      lineRef.current.style.width = '100%';
    }
  }, [title, hasAnimated]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            scramble();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [scramble, hasAnimated]);

  // Initialize with scrambled or empty text
  useEffect(() => {
    if (!hasAnimated) {
      setDisplayText(title.toUpperCase().replace(/[^ ]/g, '\u00A0'));
    }
  }, [title, hasAnimated]);

  return (
    <div
      ref={containerRef}
      className={`relative mb-16 ${className}`}
    >
      {/* Large background number */}
      <span
        className="absolute -top-12 left-0 select-none pointer-events-none"
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '8rem',
          fontWeight: 900,
          opacity: 0.05,
          color: '#f0f0f0',
          lineHeight: 1,
          letterSpacing: '0.05em',
        }}
      >
        {number}
      </span>

      {/* Title with scramble */}
      <h2 className="relative z-10">
        <span
          ref={textRef}
          className="tracking-wider"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            color: '#f0f0f0',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            display: 'inline-block',
          }}
        >
          {displayText}
        </span>
      </h2>

      {/* Animated underline */}
      <div
        ref={lineRef}
        className="mt-4"
        style={{
          width: '0%',
          height: '1px',
          background: 'linear-gradient(90deg, #00f5ff, transparent)',
        }}
      />
    </div>
  );
};

export default SectionHeading;
