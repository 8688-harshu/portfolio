import { useState, useEffect, useRef, useCallback } from 'react';

export type CursorHoverState = 'default' | 'click' | 'avatar' | 'link';

interface Position {
  x: number;
  y: number;
}

interface UseCursorReturn {
  /** Exact mouse position (inner dot) */
  dotPos: Position;
  /** Lerped trailing position (outer ring) */
  ringPos: Position;
  /** Current hover context, driven by data-cursor attributes */
  hoverState: CursorHoverState;
  /** False when the mouse has left the viewport */
  isVisible: boolean;
}

const LERP_FACTOR = 0.12;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

/**
 * Custom cursor hook that tracks the mouse and provides both an
 * immediate "dot" position and a smooth "ring" that trails behind.
 *
 * Hover states are driven by adding `data-cursor="link|click|avatar"`
 * attributes to any hoverable DOM elements.
 */
export function useCursor(): UseCursorReturn {
  const [dotPos, setDotPos] = useState<Position>({ x: 0, y: 0 });
  const [ringPos, setRingPos] = useState<Position>({ x: 0, y: 0 });
  const [hoverState, setHoverState] = useState<CursorHoverState>('default');
  const [isVisible, setIsVisible] = useState(false);

  // Use refs for the animation loop so we always read fresh values
  const mousePos = useRef<Position>({ x: 0, y: 0 });
  const currentRingPos = useRef<Position>({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  // ── Mouse move ──────────────────────────────────────────────
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    setDotPos({ x: e.clientX, y: e.clientY });

    if (!isVisible) setIsVisible(true);

    // Detect hover state from closest ancestor with data-cursor
    const target = e.target as HTMLElement;
    const cursorEl = target.closest<HTMLElement>('[data-cursor]');

    if (cursorEl) {
      const value = cursorEl.getAttribute('data-cursor') as CursorHoverState;
      setHoverState(value || 'link');
    } else {
      setHoverState('default');
    }
  }, [isVisible]);

  // ── Mouse enter / leave window ──────────────────────────────
  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);

  // ── Animation loop (lerp the ring) ──────────────────────────
  useEffect(() => {
    const tick = () => {
      currentRingPos.current = {
        x: lerp(currentRingPos.current.x, mousePos.current.x, LERP_FACTOR),
        y: lerp(currentRingPos.current.y, mousePos.current.y, LERP_FACTOR),
      };

      setRingPos({ ...currentRingPos.current });
      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  // ── Event listeners ─────────────────────────────────────────
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseEnter, handleMouseLeave]);

  return { dotPos, ringPos, hoverState, isVisible };
}

export default useCursor;
