import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEntry {
  period: string;
  role: string;
  company?: string;
  details: string;
  side: 'left' | 'right';
  icon: 'shield' | 'chart';
}

const ENTRIES: TimelineEntry[] = [
  {
    period: 'Jul 2025 – Aug 2025',
    role: 'Ethical Hacking Intern',
    company: 'Internship',
    details:
      'Conducted vulnerability assessments and penetration testing on web applications. Identified security flaws and implemented mitigation strategies improving system security.',
    side: 'right',
    icon: 'shield',
  },
  {
    period: 'May 2025 – Jul 2025',
    role: 'Salesforce Analyst Intern',
    details:
      'Developed Tableau dashboards and analytical reports. Enhanced reporting efficiency and data-driven decision making.',
    side: 'left',
    icon: 'chart',
  },
];

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
      <path
        d="M12 2L4 6v5c0 5.25 3.4 10.15 8 11.25C16.6 21.15 20 16.25 20 11V6l-8-4z"
        stroke="#00f5ff"
        strokeWidth="1.5"
        fill="rgba(0,245,255,0.08)"
      />
      <path d="M9 12l2 2 4-4" stroke="#00f5ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
      <rect x="3" y="14" width="4" height="7" rx="1" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.08)" />
      <rect x="10" y="9" width="4" height="12" rx="1" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.12)" />
      <rect x="17" y="4" width="4" height="17" rx="1" stroke="#00f5ff" strokeWidth="1.5" fill="rgba(0,245,255,0.06)" />
    </svg>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the SVG line drawing
      const line = lineRef.current;
      if (line) {
        const length = line.getTotalLength?.() ?? 600;
        gsap.set(line, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        gsap.to(line, {
          strokeDashoffset: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        });
      }

      // Animate entries
      gsap.utils.toArray<HTMLElement>('.timeline-entry').forEach((entry) => {
        const side = entry.dataset.side;
        gsap.from(entry, {
          x: side === 'left' ? -60 : 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: entry,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative mx-auto max-w-4xl">
      {/* Center line (SVG) */}
      <svg
        className="absolute left-4 top-0 h-full w-2 lg:left-1/2 lg:-translate-x-1/2"
        preserveAspectRatio="none"
      >
        <line
          ref={lineRef}
          x1="4"
          y1="0"
          x2="4"
          y2="100%"
          stroke="#00f5ff"
          strokeWidth="2"
        />
      </svg>

      <div className="flex flex-col gap-16 py-8">
        {ENTRIES.map((entry, i) => {
          const isRight = entry.side === 'right';
          return (
            <div
              key={i}
              className="timeline-entry relative"
              data-side={entry.side}
            >
              {/* Dot on timeline */}
              <div
                className="absolute top-6 z-10 h-3 w-3 rounded-full"
                style={{
                  background: '#00f5ff',
                  boxShadow: '0 0 8px rgba(0,245,255,0.5)',
                  left: '10px',
                }}
              />
              {/* Desktop: alternate left/right */}
              <div
                className={`
                  ml-12 lg:ml-0
                  lg:w-[45%]
                  ${isRight ? 'lg:ml-[55%]' : 'lg:mr-[55%]'}
                `}
              >
                <div
                  className="rounded-xl p-6"
                  style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 245, 255, 0.1)',
                  }}
                >
                  {/* Period */}
                  <span
                    className="text-xs uppercase tracking-wider"
                    style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      color: '#00f5ff',
                    }}
                  >
                    {entry.period}
                  </span>

                  {/* Role + Icon */}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="shrink-0">
                      {entry.icon === 'shield' ? <ShieldIcon /> : <ChartIcon />}
                    </div>
                    <h3
                      className="text-lg font-semibold"
                      style={{ fontFamily: 'Orbitron, sans-serif', color: '#f0f0f0' }}
                    >
                      {entry.role}
                    </h3>
                  </div>

                  {entry.company && (
                    <p
                      className="mt-1 text-xs"
                      style={{ fontFamily: 'DM Sans, sans-serif', color: '#888888' }}
                    >
                      {entry.company}
                    </p>
                  )}

                  {/* Details */}
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ fontFamily: 'DM Sans, sans-serif', color: '#888888' }}
                  >
                    {entry.details}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop dot repositioning */}
      <style>{`
        @media (min-width: 1024px) {
          .timeline-entry > div:first-child {
            left: 50% !important;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}
