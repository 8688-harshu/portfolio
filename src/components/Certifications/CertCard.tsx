import { useRef } from 'react';

interface CertCardProps {
  name: string;
  issuer: string;
  year: string;
  isSpecial?: boolean;
}

const ISSUER_COLORS: Record<string, string> = {
  'Columbia University': '#9b59b6',
  AWS: '#ff9900',
  IBM: '#4a90d9',
  Cisco: '#00f5ff',
  Prakalp: '#ffd700',
};

export default function CertCard({ name, issuer, year, isSpecial }: CertCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const accentColor = isSpecial ? '#ffd700' : '#00f5ff';
  const issuerColor = ISSUER_COLORS[issuer] || '#00f5ff';
  const issuerInitial = issuer.charAt(0).toUpperCase();

  return (
    <div
      ref={cardRef}
      className="cert-card group relative rounded-xl p-6"
      data-cursor="click"
      style={{
        background: 'rgba(255, 255, 255, 0.02)',
        border: isSpecial
          ? '1px solid rgba(255, 215, 0, 0.3)'
          : '1px solid rgba(0, 245, 255, 0.1)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(-8px)';
        el.style.boxShadow = isSpecial
          ? '0 0 30px rgba(255, 215, 0, 0.15), 0 0 60px rgba(255, 215, 0, 0.08)'
          : '0 0 30px rgba(0, 245, 255, 0.13), 0 0 60px rgba(0, 245, 255, 0.07)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = 'translateY(0)';
        el.style.boxShadow = 'none';
      }}
    >
      {/* Gradient border effect (pseudo via inner glow) */}
      {isSpecial && (
        <div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background:
              'linear-gradient(135deg, rgba(255,215,0,0.06), rgba(255,140,0,0.03), transparent)',
          }}
        />
      )}

      <div className="relative z-10">
        {/* Top row: avatar + year */}
        <div className="flex items-start justify-between">
          {/* Issuer avatar */}
          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
            style={{
              background: `${issuerColor}22`,
              color: issuerColor,
              border: `1px solid ${issuerColor}44`,
              fontFamily: 'Orbitron, sans-serif',
            }}
          >
            {isSpecial ? '🏆' : issuerInitial}
          </div>

          {/* Year badge */}
          <span
            className="rounded-full px-3 py-1 text-xs"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: accentColor,
              background: isSpecial ? 'rgba(255, 215, 0, 0.08)' : 'rgba(0, 245, 255, 0.06)',
              border: isSpecial
                ? '1px solid rgba(255, 215, 0, 0.2)'
                : '1px solid rgba(0, 245, 255, 0.15)',
            }}
          >
            {year}
          </span>
        </div>

        {/* Cert name */}
        <h3
          className="mt-4 text-sm font-semibold leading-snug"
          style={{
            fontFamily: 'Orbitron, sans-serif',
            color: isSpecial ? '#ffd700' : '#f0f0f0',
          }}
        >
          {name}
        </h3>

        {/* Issuer */}
        <p
          className="mt-2 text-xs"
          style={{ fontFamily: 'DM Sans, sans-serif', color: '#888888' }}
        >
          {issuer}
        </p>

        {/* Special badge */}
        {isSpecial && (
          <div
            className="mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              color: '#ffd700',
              background:
                'linear-gradient(135deg, rgba(255,215,0,0.12), rgba(255,140,0,0.08))',
              border: '1px solid rgba(255, 215, 0, 0.25)',
            }}
          >
            🏆 CHAMPIONS
          </div>
        )}
      </div>
    </div>
  );
}
