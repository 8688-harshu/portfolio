import { useEffect, useRef, useCallback } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const cursorState = useRef<string>('default');
  const isTouchDevice = useRef(false);

  const LERP = 0.12;
  const DOT_SIZE = 6;
  const RING_SIZE_DEFAULT = 32;
  const RING_SIZE_CLICK = 60;

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const cursorAttr = target.closest<HTMLElement>('[data-cursor]');
    if (cursorAttr) {
      cursorState.current = cursorAttr.getAttribute('data-cursor') || 'default';
    } else {
      cursorState.current = 'default';
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    mousePos.current = { x: -100, y: -100 };
  }, []);

  const animate = useCallback(() => {
    ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, LERP);
    ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, LERP);

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${mousePos.current.x - DOT_SIZE / 2}px, ${mousePos.current.y - DOT_SIZE / 2}px)`;
    }

    const state = cursorState.current;
    const isClick = state === 'click';
    const isLink = state === 'link';
    const ringSize = isClick ? RING_SIZE_CLICK : RING_SIZE_DEFAULT;

    if (ringRef.current) {
      ringRef.current.style.transform = `translate(${ringPos.current.x - ringSize / 2}px, ${ringPos.current.y - ringSize / 2}px)`;
      ringRef.current.style.width = `${ringSize}px`;
      ringRef.current.style.height = `${ringSize}px`;
      ringRef.current.style.backgroundColor = isClick ? '#00f5ff33' : 'transparent';
      ringRef.current.style.borderStyle = isLink ? 'dashed' : 'solid';
      ringRef.current.style.borderColor = isClick || isLink ? '#00f5ff' : 'rgba(0, 245, 255, 0.5)';
    }

    if (labelRef.current) {
      labelRef.current.style.opacity = isClick ? '1' : '0';
    }

    rafId.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    // Detect touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      isTouchDevice.current = true;
      return;
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    rafId.current = requestAnimationFrame(animate);

    // Hide default cursor
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(rafId.current);
      if (styleEl.parentNode) {
        document.head.removeChild(styleEl);
      }
    };
  }, [handleMouseMove, handleMouseOver, handleMouseLeave, animate]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) {
    return null;
  }

  return (
    <>
      {/* Dot layer */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${DOT_SIZE}px`,
          height: `${DOT_SIZE}px`,
          backgroundColor: '#00f5ff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'none',
        }}
      />
      {/* Ring layer */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${RING_SIZE_DEFAULT}px`,
          height: `${RING_SIZE_DEFAULT}px`,
          border: '1px solid rgba(0, 245, 255, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-style 0.2s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxSizing: 'border-box',
        }}
      >
        <span
          ref={labelRef}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '8px',
            color: '#00f5ff',
            letterSpacing: '0.1em',
            opacity: 0,
            transition: 'opacity 0.2s ease',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        >
          CLICK
        </span>
      </div>
    </>
  );
};

export default CustomCursor;
