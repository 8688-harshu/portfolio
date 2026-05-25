import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CONTACT_LINKS = [
  { emoji: '📧', label: 'harshu.ram824@gmail.com', href: 'mailto:harshu.ram824@gmail.com' },
  { emoji: '📱', label: '+91 8688027739', href: 'tel:+918688027739' },
  {
    emoji: '💼',
    label: 'linkedin.com/in/harsha-vardhan-fullstack-agentica',
    href: 'https://linkedin.com/in/harsha-vardhan-fullstack-agentica',
  },
  { emoji: '🐙', label: 'github.com/8688-harshu', href: 'https://github.com/8688-harshu' },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
      <path
        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
      <path
        d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"
        fill="currentColor"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M2 7l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

const SOCIAL_ICONS = [
  {
    icon: <LinkedInIcon />,
    href: 'https://linkedin.com/in/harsha-vardhan-fullstack-agentica',
    label: 'LinkedIn',
  },
  { icon: <GitHubIcon />, href: 'https://github.com/8688-harshu', label: 'GitHub' },
  { icon: <EmailIcon />, href: 'mailto:harshu.ram824@gmail.com', label: 'Email' },
];

function MagneticIcon({
  children,
  href,
  label,
}: {
  children: React.ReactNode;
  href: string;
  label: string;
}) {
  const iconRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = iconRef.current;
    if (!el) return;

    let animFrame = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 60) {
        const pull = (1 - dist / 60) * 0.4;
        animFrame = requestAnimationFrame(() => {
          el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
        });
      } else {
        animFrame = requestAnimationFrame(() => {
          el.style.transform = 'translate(0, 0)';
        });
      }
    };

    const handleMouseLeave = () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      el.style.transform = 'translate(0, 0)';
      setTimeout(() => {
        el.style.transition = 'transform 0.15s ease-out';
      }, 500);
    };

    document.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animFrame);
      document.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={iconRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      data-cursor="link"
      className="flex h-[44px] w-[44px] items-center justify-center rounded-full"
      style={{
        border: '1px solid rgba(0, 245, 255, 0.25)',
        color: '#888888',
        transition: 'transform 0.15s ease-out, color 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.color = '#00f5ff';
        el.style.borderColor = 'rgba(0, 245, 255, 0.6)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.color = '#888888';
        el.style.borderColor = 'rgba(0, 245, 255, 0.25)';
      }}
    >
      {children}
    </a>
  );
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading lines stagger
      gsap.utils.toArray<HTMLElement>('.contact-line').forEach((line, i) => {
        gsap.from(line, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.15,
          scrollTrigger: {
            trigger: line,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });

      // Subtext
      gsap.from('.contact-subtext', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.contact-subtext',
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // Contact links stagger
      gsap.utils.toArray<HTMLElement>('.contact-link').forEach((link, i) => {
        gsap.from(link, {
          y: 20,
          opacity: 0,
          duration: 0.5,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: link,
            start: 'top 92%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center py-32"
      style={{ background: '#050505' }}
    >
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-12">
        {/* Large heading */}
        <div>
          <div
            className="contact-line"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#f0f0f0',
              textTransform: 'uppercase',
            }}
          >
            LET&apos;S BUILD
          </div>
          <div
            className="contact-line"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#f0f0f0',
              textTransform: 'uppercase',
            }}
          >
            SOMETHING
          </div>
          <div
            className="contact-line"
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#00f5ff',
              textTransform: 'uppercase',
            }}
          >
            TOGETHER.
          </div>
        </div>

        {/* Subtext */}
        <p
          className="contact-subtext mt-8 text-lg"
          style={{ fontFamily: 'DM Sans, sans-serif', color: '#888888' }}
        >
          Open to collaborations, freelance projects, and full-time roles in AI.
        </p>

        {/* Contact details */}
        <div className="mt-12 flex flex-col items-center gap-4">
          {CONTACT_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="contact-link"
              style={{
                fontFamily: 'JetBrains Mono, monospace',
                color: '#888888',
                fontSize: '0.875rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#00f5ff';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#888888';
              }}
            >
              <span className="mr-2">{link.emoji}</span>
              {link.label}
            </a>
          ))}
        </div>

        {/* Social icons row */}
        <div className="mt-12 flex items-center justify-center gap-4">
          {SOCIAL_ICONS.map((social) => (
            <MagneticIcon key={social.label} href={social.href} label={social.label}>
              {social.icon}
            </MagneticIcon>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-20 pb-8">
          <p
            className="text-center text-xs"
            style={{ fontFamily: 'JetBrains Mono, monospace', color: '#888888' }}
          >
            HARSHA VARDHAN © 2025
          </p>
          <p
            className="mt-1 text-center text-xs"
            style={{
              fontFamily: 'JetBrains Mono, monospace',
              color: '#888888',
              opacity: 0.3,
            }}
          >
            Built with React · Three.js · GSAP
          </p>
        </footer>
      </div>
    </section>
  );
}
