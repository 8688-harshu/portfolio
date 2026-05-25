import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionHeadingProps {
  title: string;
  number: string;
}

export default function SectionHeading({ title, number }: SectionHeadingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="mb-16 flex items-center gap-4">
      <span
        className="font-mono text-sm tracking-widest"
        style={{ color: '#00f5ff', fontFamily: 'JetBrains Mono, monospace' }}
      >
        {number}
      </span>
      <div
        className="h-px flex-1 max-w-[60px]"
        style={{ background: 'linear-gradient(90deg, #00f5ff, transparent)' }}
      />
      <h2
        className="text-3xl font-bold uppercase tracking-[0.25em]"
        style={{ fontFamily: 'Orbitron, sans-serif', color: '#f0f0f0' }}
      >
        {title}
      </h2>
    </div>
  );
}
