import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * easeOutExpo easing — fast start, slow finish.
 */
function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

interface UseCountUpReturn {
  /** The current animated count value (formatted with decimals) */
  count: string;
  /** Attach this ref to the DOM element you want observed */
  ref: React.RefCallback<HTMLElement>;
}

/**
 * Animates a number from 0 to `end` when the attached element
 * scrolls into view. Fires only once.
 *
 * @param end       Target number (e.g. 8.02)
 * @param duration  Animation length in seconds (default 2)
 * @param decimals  Decimal places to display (default 0)
 */
export function useCountUp(
  end: number,
  duration = 2,
  decimals = 0
): UseCountUpReturn {
  const [count, setCount] = useState('0');
  const hasFired = useRef(false);
  const rafRef = useRef<number | null>(null);
  const nodeRef = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const animate = useCallback(() => {
    const durationMs = duration * 1000;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutExpo(progress);
      const currentValue = easedProgress * end;

      setCount(currentValue.toFixed(decimals));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(end.toFixed(decimals));
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [end, duration, decimals]);

  // Ref callback – wires up the IntersectionObserver
  const ref = useCallback(
    (node: HTMLElement | null) => {
      // Disconnect previous observer if element changed
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }

      nodeRef.current = node;

      if (!node || hasFired.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting && !hasFired.current) {
            hasFired.current = true;
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(node);
      observerRef.current = observer;
    },
    [animate]
  );

  // Cleanup RAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { count, ref };
}

export default useCountUp;
