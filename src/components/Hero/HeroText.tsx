import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface HeroTextProps {
  startAnimation: boolean;
  onAnimationComplete?: () => void;
}

/* -------------------------------------------------------------------------- */
/*  Helper: split a word into individual <span> letters                       */
/* -------------------------------------------------------------------------- */

function LetterSpans({ text, className }: { text: string; className?: string }) {
  return (
    <>
      {text.split('').map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={`inline-block opacity-0 ${className ?? ''}`}
          style={{ display: char === ' ' ? 'inline' : undefined }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );
}

/* -------------------------------------------------------------------------- */
/*  Tags                                                                      */
/* -------------------------------------------------------------------------- */

const TAGS = ['Generative AI', 'LLM', 'RAG', 'Prompt Engineering'] as const;

/* -------------------------------------------------------------------------- */
/*  HeroText Component                                                        */
/* -------------------------------------------------------------------------- */

export default function HeroText({ startAnimation, onAnimationComplete }: HeroTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const glitchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  /* ---- Build & play GSAP timeline ---- */
  const buildTimeline = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    ctxRef.current = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => onAnimationComplete?.(),
      });
      tlRef.current = tl;

      /* 1. 'HARSHA VARDHAN' letters fly in (t=0.0s) */
      const nameLetters = container.querySelectorAll('[data-anim="name"] span');
      tl.fromTo(
        nameLetters,
        {
          opacity: 0,
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.6,
          stagger: 0.04,
          ease: 'back.out(1.7)',
        },
        0.0
      );

      /* 2. 'MUCHERLA' letters fly in (t=0.8s) */
      const lastLetters = container.querySelectorAll('[data-anim="last"] span');
      tl.fromTo(
        lastLetters,
        {
          opacity: 0,
          x: () => gsap.utils.random(-200, 200),
          y: () => gsap.utils.random(-200, 200),
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.7,
          stagger: 0.05,
          ease: 'back.out(1.7)',
        },
        0.8
      );

      /* 3. Cyan line draws in (t=1.4s) */
      const line = container.querySelector('[data-anim="line"]');
      tl.fromTo(
        line,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.5, ease: 'power2.out' },
        1.4
      );

      /* 4. Subtitle slides up (t=1.6s) */
      const subtitle = container.querySelector('[data-anim="subtitle"]');
      tl.fromTo(
        subtitle,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        1.6
      );

      /* 5. Tag pills scale in (t=1.9s) */
      const pills = container.querySelectorAll('[data-anim="pill"]');
      tl.fromTo(
        pills,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
          ease: 'back.out(2)',
        },
        1.9
      );

      /* 6. CTA buttons fade in (t=2.4s) */
      const ctas = container.querySelectorAll('[data-anim="cta"]');
      tl.fromTo(
        ctas,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.12,
          ease: 'power2.out',
        },
        2.4
      );

      /* 7. Scroll indicator opacity (t=2.7s) */
      const scrollIndicator = document.querySelector('[data-anim="scroll-indicator"]');
      if (scrollIndicator) {
        tl.to(scrollIndicator, { opacity: 1, duration: 0.5 }, 2.7);
      }
    }, container);
  }, [onAnimationComplete]);

  /* ---- Start animation when flag flips ---- */
  useEffect(() => {
    if (startAnimation) {
      buildTimeline();
    }
  }, [startAnimation, buildTimeline]);

  /* ---- Glitch effect every 4s ---- */
  useEffect(() => {
    const nameEl = containerRef.current?.querySelector('[data-anim="name"]') as HTMLElement | null;
    const lastEl = containerRef.current?.querySelector('[data-anim="last"]') as HTMLElement | null;
    if (!nameEl || !lastEl) return;

    glitchIntervalRef.current = setInterval(() => {
      nameEl.classList.add('glitch-active');
      lastEl.classList.add('glitch-active');
      setTimeout(() => {
        nameEl.classList.remove('glitch-active');
        lastEl.classList.remove('glitch-active');
      }, 300);
    }, 4000);

    return () => {
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
    };
  }, []);

  /* ---- Cleanup GSAP context ---- */
  useEffect(() => {
    return () => {
      ctxRef.current?.revert();
    };
  }, []);

  /* ---- Render ---- */
  return (
    <div ref={containerRef} className="flex flex-col gap-4 z-10 relative">
      {/* Name */}
      <h1 className="leading-tight flex flex-col gap-1 md:gap-3">
        <div
          data-anim="name"
          className="font-[Orbitron] font-bold text-[clamp(2.2rem,5vw,4.5rem)] text-[var(--text-primary,#f0f0f0)] whitespace-nowrap"
          style={{ letterSpacing: '0.08em', display: 'block' }}
        >
          <span className="inline-block whitespace-nowrap">
            <LetterSpans text="HARSHA" />
          </span>
          {'\u00A0'}
          <span className="inline-block whitespace-nowrap">
            <LetterSpans text="VARDHAN" />
          </span>
        </div>
        <div
          data-anim="last"
          className="font-[Orbitron] font-bold text-[clamp(2.2rem,5vw,4.5rem)] text-[#00f5ff] whitespace-nowrap"
          style={{ letterSpacing: '0.08em', display: 'block' }}
        >
          <span className="inline-block whitespace-nowrap">
            <LetterSpans text="MUCHERLA" />
          </span>
        </div>
      </h1>

      {/* Cyan line */}
      <div
        data-anim="line"
        className="h-[2px] w-[120px] bg-[#00f5ff] origin-left my-2"
        style={{ transform: 'scaleX(0)' }}
      />

      {/* Subtitle */}
      <p
        data-anim="subtitle"
        className="font-[DM_Sans] text-[1.1rem] md:text-[1.3rem] text-[var(--text-secondary,#888888)] tracking-wide opacity-0 flex flex-wrap items-center gap-x-2"
      >
        <span>AI Full Stack Developer</span>
        <span className="text-[#00f5ff] font-bold select-none">•</span>
        <span>Generative AI</span>
        <span className="text-[#00f5ff] font-bold select-none">•</span>
        <span>LLM</span>
        <span className="text-[#00f5ff] font-bold select-none">•</span>
        <span>RAG</span>
      </p>

      {/* Tag pills */}
      <div className="flex flex-wrap gap-2 mt-1">
        {TAGS.map((tag) => (
          <span
            key={tag}
            data-anim="pill"
            className="rounded-full px-4 py-1 font-mono text-xs text-[#00f5ff] border border-[#00f5ff33] opacity-0"
            style={{
              backgroundColor: '#00f5ff11',
              transform: 'scale(0)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="#projects"
          data-anim="cta"
          data-cursor="click"
          className="
            rounded-full px-6 py-3 font-mono text-sm uppercase tracking-wider
            border border-[#00f5ff] text-[#00f5ff] bg-transparent
            hover:scale-105 transition-transform duration-200
            opacity-0
          "
        >
          View My Work ↓
        </a>
        <a
          href="#contact"
          data-anim="cta"
          data-cursor="click"
          className="
            rounded-full px-6 py-3 font-mono text-sm uppercase tracking-wider
            bg-[#00f5ff] text-[#050505] border border-[#00f5ff]
            hover:scale-105 transition-transform duration-200
            opacity-0
          "
        >
          Let's Connect →
        </a>
      </div>
    </div>
  );
}
