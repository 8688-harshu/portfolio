import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsVisible(false);
        onComplete();
      },
    });

    // ── Phase 1: SVG monogram stroke draw (0–1s) ──
    const paths = svgRef.current?.querySelectorAll('path');
    if (paths) {
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fill: 'transparent',
        });

        tl.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 0.9,
            ease: 'power2.inOut',
          },
          0
        );

        tl.to(
          path,
          {
            fill: '#00f5ff',
            fillOpacity: 0.15,
            duration: 0.4,
            ease: 'power1.in',
          },
          0.7
        );
      });
    }

    // ── Phase 2: Percentage counter (0–2s) ──
    const counter = { value: 0 };
    tl.to(
      counter,
      {
        value: 100,
        duration: 2,
        ease: 'power1.inOut',
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(Math.floor(counter.value)).padStart(3, '0');
          }
        },
      },
      0
    );

    // ── Phase 3: Scan line sweep (1.5–2s) ──
    if (scanLineRef.current) {
      gsap.set(scanLineRef.current, { top: '0%', opacity: 0.6 });
      tl.to(
        scanLineRef.current,
        {
          top: '100%',
          duration: 0.5,
          ease: 'none',
        },
        1.5
      );
      tl.to(
        scanLineRef.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        1.9
      );
    }

    // ── Phase 4: Panel reveal (2–2.5s) ──
    if (topPanelRef.current) {
      tl.to(
        topPanelRef.current,
        {
          yPercent: -100,
          duration: 0.5,
          ease: 'power4.inOut',
        },
        2
      );
    }
    if (bottomPanelRef.current) {
      tl.to(
        bottomPanelRef.current,
        {
          yPercent: 100,
          duration: 0.5,
          ease: 'power4.inOut',
        },
        2
      );
    }

    // Fade out entire container as final cleanup
    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.1,
        ease: 'none',
      },
      2.45
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        pointerEvents: 'all',
      }}
    >
      {/* Top panel */}
      <div
        ref={topPanelRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: '#000000',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
        }}
      >
        {/* SVG Monogram centered at the split */}
        <svg
          ref={svgRef}
          viewBox="0 0 200 100"
          className="preloader-monogram"
          style={{
            width: '160px',
            height: '80px',
            overflow: 'visible',
            transform: 'translateY(50%)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* H path */}
          <path
            d="M 20 10 L 20 90 M 20 50 L 60 50 M 60 10 L 60 90"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* V path */}
          <path
            d="M 110 10 L 140 90 M 140 90 L 170 10"
            fill="none"
            stroke="#00f5ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Bottom panel */}
      <div
        ref={bottomPanelRef}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: '#000000',
        }}
      />

      {/* Scan line */}
      <div
        ref={scanLineRef}
        className="scan-line"
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: '1px',
          backgroundColor: '#00f5ff',
          opacity: 0,
          filter: 'blur(2px)',
          boxShadow: '0 0 8px #00f5ff, 0 0 16px rgba(0, 245, 255, 0.3)',
          zIndex: 3,
          pointerEvents: 'none',
        }}
      />

      {/* Percentage counter */}
      <span
        ref={counterRef}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '2rem',
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '14px',
          color: '#00f5ff',
          letterSpacing: '0.15em',
          zIndex: 4,
          opacity: 0.8,
        }}
      >
        000
      </span>

      {/* Decorative frame corners */}
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          width: '20px',
          height: '20px',
          borderTop: '1px solid rgba(0, 245, 255, 0.3)',
          borderLeft: '1px solid rgba(0, 245, 255, 0.3)',
          zIndex: 4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '2rem',
          right: '2rem',
          width: '20px',
          height: '20px',
          borderTop: '1px solid rgba(0, 245, 255, 0.3)',
          borderRight: '1px solid rgba(0, 245, 255, 0.3)',
          zIndex: 4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          right: '2rem',
          width: '20px',
          height: '20px',
          borderBottom: '1px solid rgba(0, 245, 255, 0.3)',
          borderRight: '1px solid rgba(0, 245, 255, 0.3)',
          zIndex: 4,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '5rem',
          width: '20px',
          height: '20px',
          borderBottom: '1px solid rgba(0, 245, 255, 0.3)',
          borderLeft: '1px solid rgba(0, 245, 255, 0.3)',
          zIndex: 4,
        }}
      />
    </div>
  );
};

export default Preloader;
