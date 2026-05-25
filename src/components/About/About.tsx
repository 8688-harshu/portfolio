import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../shared/SectionHeading';
import StatsCounter from './StatsCounter';
import SkillConstellation from './SkillConstellation';

gsap.registerPlugin(ScrollTrigger);

const BIO_TEXT =
  'Passionate AI Full Stack Developer with hands-on experience in building intelligent, scalable web applications. I specialize in Generative AI, Large Language Models, and Retrieval-Augmented Generation architectures. My work bridges the gap between cutting-edge AI research and production-ready software, delivering solutions that are both innovative and reliable.';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const wordsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Word-by-word reveal
      wordsRef.current.forEach((word, i) => {
        if (!word) return;
        gsap.to(word, {
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: word,
            start: 'top 90%',
            end: 'top 60%',
            scrub: true,
          },
          delay: i * 0.01,
        });
      });

      // Education card reveal
      gsap.from('.education-card', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.education-card',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const words = BIO_TEXT.split(' ');

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden py-32"
      style={{ background: '#050505' }}
    >
      {/* Noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          opacity: 0.5,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col gap-16 lg:flex-row">
          {/* Left column — 60% */}
          <div className="w-full lg:w-[60%]">
            <SectionHeading title="ABOUT ME" number="02" />

            {/* Bio with word-by-word reveal */}
            <p
              className="text-lg leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  ref={(el) => {
                    wordsRef.current[i] = el;
                  }}
                  className="inline-block mr-[0.3em]"
                  style={{ opacity: 0.15, color: '#888888' }}
                >
                  {word}
                </span>
              ))}
            </p>

            {/* Stats counter */}
            <StatsCounter />

            {/* Education card */}
            <div
              className="education-card mt-12 rounded-xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #0a1628, #0a0a0a)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(0, 245, 255, 0.1)',
                borderLeft: '3px solid #00f5ff',
                boxShadow: '0 0 30px rgba(0, 245, 255, 0.08)',
              }}
            >
              {/* Graduation Cap Icon */}
              <span className="absolute top-6 right-6 text-2xl opacity-40 select-none text-[#00f5ff]">
                🎓
              </span>

              <h3
                className="text-lg font-semibold pr-10"
                style={{ fontFamily: 'Orbitron, sans-serif', color: '#f0f0f0' }}
              >
                SRKR Engineering College
              </h3>
              <p
                className="mt-1 text-sm font-medium"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#00f5ff' }}
              >
                B.Tech in Cyber Security
              </p>
              
              <div
                className="mt-4 flex flex-wrap gap-6 text-sm"
                style={{ fontFamily: 'DM Sans, sans-serif', color: '#888888' }}
              >
                <div>
                  <span className="block text-xs uppercase tracking-wider opacity-60">
                    Duration
                  </span>
                  <span style={{ color: '#f0f0f0' }}>2023 – 2027</span>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider opacity-60">
                    CGPA
                  </span>
                  <span style={{ color: '#f0f0f0' }}>8.02</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative mt-6">
                <div className="flex justify-between text-[10px] uppercase tracking-wider mb-1.5" style={{ fontFamily: 'JetBrains Mono, monospace', color: '#888888' }}>
                  <span>Degree Progress</span>
                  <span className="text-[#00f5ff] font-semibold">75% Completed</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-[#00f5ff] rounded-full" style={{ width: '75%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right column — 40% */}
          <div className="w-full lg:w-[40%]">
            <SkillConstellation />
          </div>
        </div>
      </div>
    </section>
  );
}
