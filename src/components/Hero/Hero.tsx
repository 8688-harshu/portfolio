import React, { Suspense, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import HeroText from './HeroText';
import ThreeScene from './ThreeScene';

/* Lazy-load the heavy 3D avatar component */
const AvatarScene = React.lazy(() => import('../Avatar/AvatarScene'));

/* -------------------------------------------------------------------------- */
/*  Avatar loading fallback                                                   */
/* -------------------------------------------------------------------------- */

function AvatarFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Pulsing ring */}
        <div
          className="w-24 h-24 rounded-full border-2 border-[#00f5ff33] animate-ping"
          style={{ animationDuration: '1.5s' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#00f5ff]" />
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Scroll Indicator                                                          */
/* -------------------------------------------------------------------------- */

function ScrollIndicator() {
  return (
    <div
      data-anim="scroll-indicator"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0"
      style={{ zIndex: 10 }}
    >
      {/* Bouncing chevron */}
      <svg
        className="w-5 h-5 text-[#00f5ff] animate-[hero-bounce_1.5s_ease-in-out_infinite]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>

      {/* 'SCROLL' text rotated 90deg, positioned to the right */}
      <span
        className="absolute -right-12 top-1/2 font-[JetBrains_Mono] text-[10px] tracking-widest text-[var(--text-secondary,#888888)] select-none"
        style={{
          transform: 'rotate(90deg) translateX(-50%)',
          transformOrigin: 'center center',
        }}
      >
        SCROLL
      </span>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero Component                                                            */
/* -------------------------------------------------------------------------- */

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [startTextAnimation, setStartTextAnimation] = useState(false);

  /* ---- GSAP context for section-level animations ---- */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Kick off text animation after a short delay for mount
      const timer = setTimeout(() => setStartTextAnimation(true), 300);
      return () => clearTimeout(timer);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'var(--bg-primary, #050505)' }}
    >
      {/* ---- Background dot grid ---- */}
      <ThreeScene />

      {/* ---- Radial glows ---- */}
      {/* Main pulsing glow behind avatar */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.15) 0%, transparent 70%)',
          zIndex: 1,
          animation: 'radial-glow-pulse 3s ease-in-out infinite alternate',
        }}
      />
      {/* Secondary smaller glow at feet */}
      <div 
        className="absolute right-[10%] md:right-[20%] bottom-[10%] w-[30vw] h-[30vw] max-w-[300px] max-h-[300px] pointer-events-none rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.08) 0%, transparent 60%)',
          zIndex: 1,
        }}
      />

      {/* ---- Left: Text content (55%) ---- */}
      <div className="relative z-10 flex items-center justify-start w-full md:w-[55%] px-6 md:px-16 pt-[100px] pb-12 md:py-0 md:pt-[80px] min-h-[50vh] md:min-h-0">
        <HeroText
          startAnimation={startTextAnimation}
          onAnimationComplete={() => {
            // Animation complete — could trigger further reveals
          }}
        />
      </div>

      {/* ---- Right: Avatar canvas (45%) ---- */}
      <div className="relative z-10 w-full md:w-[45%] h-[50vh] md:h-screen flex items-center justify-center pt-[20px] md:pt-[80px]">
        <Suspense fallback={<AvatarFallback />}>
          <AvatarScene />
        </Suspense>
      </div>

      {/* ---- Scroll indicator ---- */}
      <ScrollIndicator />
    </section>
  );
}
