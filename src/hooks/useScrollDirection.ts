import { useState, useEffect, useRef } from 'react';

type ScrollDirection = 'up' | 'down';

/**
 * Tracks the current scroll direction with a configurable dead-zone
 * threshold to prevent jitter from tiny scroll deltas.
 */
export function useScrollDirection(threshold = 10): ScrollDirection {
  const [direction, setDirection] = useState<ScrollDirection>('up');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateDirection = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastScrollY.current;

      if (Math.abs(diff) >= threshold) {
        setDirection(diff > 0 ? 'down' : 'up');
        lastScrollY.current = currentY;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(updateDirection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return direction;
}

export default useScrollDirection;
