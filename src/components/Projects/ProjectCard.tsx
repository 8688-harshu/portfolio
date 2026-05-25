import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { applyTilt } from './tiltEffect';

gsap.registerPlugin(ScrollTrigger);

type IconType = 'trustlens' | 'chatbot' | 'aquaflow';

interface ProjectCardProps {
  index: number;
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  tags: string[];
  icon: IconType;
}

function ProjectIcon({ type }: { type: IconType }) {
  const iconStyle = { width: 40, height: 40 };

  switch (type) {
    case 'trustlens':
      return (
        <svg viewBox="0 0 40 40" fill="none" style={iconStyle}>
          {/* Eye / circuit icon */}
          <circle cx="20" cy="20" r="12" stroke="#00f5ff" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="5" fill="#00f5ff" fillOpacity="0.3" stroke="#00f5ff" strokeWidth="1" />
          <circle cx="20" cy="20" r="2" fill="#00f5ff" />
          <line x1="8" y1="20" x2="2" y2="20" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
          <line x1="32" y1="20" x2="38" y2="20" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="8" x2="20" y2="2" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
          <line x1="20" y1="32" x2="20" y2="38" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
        </svg>
      );
    case 'chatbot':
      return (
        <svg viewBox="0 0 40 40" fill="none" style={iconStyle}>
          {/* Brain icon */}
          <path
            d="M20 4C14 4 9 9 9 15c0 3 1.2 5.8 3.2 7.8L13 35h14l.8-12.2C29.8 20.8 31 18 31 15c0-6-5-11-11-11z"
            stroke="#00f5ff"
            strokeWidth="1.5"
            fill="none"
          />
          <path d="M15 14c0-2.5 2-4.5 5-4.5s5 2 5 4.5" stroke="#00f5ff" strokeWidth="1" opacity="0.6" />
          <line x1="20" y1="14" x2="20" y2="24" stroke="#00f5ff" strokeWidth="1" opacity="0.5" />
          <line x1="15" y1="19" x2="25" y2="19" stroke="#00f5ff" strokeWidth="1" opacity="0.4" />
          <circle cx="16" cy="16" r="1.5" fill="#00f5ff" fillOpacity="0.5" />
          <circle cx="24" cy="16" r="1.5" fill="#00f5ff" fillOpacity="0.5" />
        </svg>
      );
    case 'aquaflow':
      return (
        <svg viewBox="0 0 40 40" fill="none" style={iconStyle}>
          {/* Droplet icon */}
          <path
            d="M20 4L10 22c0 5.5 4.5 10 10 10s10-4.5 10-10L20 4z"
            stroke="#00f5ff"
            strokeWidth="1.5"
            fill="rgba(0,245,255,0.08)"
          />
          <path
            d="M16 24c0 2.2 1.8 4 4 4s4-1.8 4-4"
            stroke="#00f5ff"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle cx="18" cy="20" r="1" fill="#00f5ff" fillOpacity="0.4" />
        </svg>
      );
  }
}

export default function ProjectCard({
  index,
  title,
  subtitle,
  description,
  stat,
  tags,
  icon,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const cleanup = applyTilt(el, { max: 10, perspective: 1000 });
    return cleanup;
  }, []);

  const numberStr = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={cardRef}
      className="project-card relative overflow-hidden rounded-2xl p-8"
      data-cursor="click"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(4px)',
        border: '1px solid rgba(0, 245, 255, 0.1)',
        transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = '0 0 30px rgba(0,245,255,0.13), 0 0 60px rgba(0,245,255,0.07)';
        el.style.borderColor = 'rgba(0, 245, 255, 0.25)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLDivElement;
        el.style.boxShadow = 'none';
        el.style.borderColor = 'rgba(0, 245, 255, 0.1)';
      }}
    >
      {/* Giant faded number */}
      <span
        className="pointer-events-none absolute right-6 top-2 select-none"
        style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '10rem',
          lineHeight: 1,
          opacity: 0.03,
          color: '#f0f0f0',
        }}
      >
        {numberStr}
      </span>

      {/* Icon + Title + Subtitle */}
      <div className="relative z-10 flex items-start gap-4">
        <div className="shrink-0 mt-1">
          <ProjectIcon type={icon} />
        </div>
        <div>
          <h3
            className="text-2xl font-semibold"
            style={{ fontFamily: 'Orbitron, sans-serif', color: '#f0f0f0', fontSize: '1.5rem' }}
          >
            {title}
          </h3>
          <p
            className="mt-1 text-sm"
            style={{ fontFamily: 'DM Sans, sans-serif', color: '#888888' }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Description */}
      <p
        className="relative z-10 mt-6 text-sm leading-relaxed"
        style={{ fontFamily: 'DM Sans, sans-serif', color: '#888888' }}
      >
        {description}
      </p>

      {/* Stat highlight */}
      <p
        className="relative z-10 mt-4"
        style={{ fontFamily: 'Orbitron, sans-serif', color: '#00f5ff', fontSize: '1.2rem' }}
      >
        {stat}
      </p>

      {/* Tags */}
      <div className="relative z-10 mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full px-3 py-1 text-xs"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#00f5ff',
              background: 'rgba(0, 245, 255, 0.06)',
              border: '1px solid rgba(0, 245, 255, 0.15)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
