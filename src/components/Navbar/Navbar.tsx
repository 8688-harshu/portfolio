import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';

interface NavbarProps {
  visible: boolean;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

const SCROLL_THRESHOLD = 10;

const Navbar: React.FC<NavbarProps> = ({ visible }) => {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(0);
  const hasEntered = useRef(false);

  // ── Scroll direction detection ──
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (Math.abs(currentY - lastScrollY.current) < SCROLL_THRESHOLD) return;

      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ── GSAP entrance animation ──
  useEffect(() => {
    if (visible && !hasEntered.current && navRef.current) {
      hasEntered.current = true;
      gsap.fromTo(
        navRef.current,
        { y: '-100%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.1 }
      );
    }
  }, [visible]);

  // ── Active section detection via IntersectionObserver ──
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // ── Mobile menu GSAP animation ──
  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileOpen) {
      gsap.to(mobileMenuRef.current, {
        opacity: 1,
        visibility: 'visible',
        duration: 0.4,
        ease: 'power2.out',
      });

      const validLinks = mobileLinkRefs.current.filter(Boolean);
      gsap.fromTo(
        validLinks,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.5, ease: 'power3.out', delay: 0.15 }
      );
    } else {
      gsap.to(mobileMenuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          if (mobileMenuRef.current) {
            mobileMenuRef.current.style.visibility = 'hidden';
          }
        },
      });
    }
  }, [mobileOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      setMobileOpen(false);
    },
    []
  );

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full px-6 md:px-12 py-4 flex items-center justify-between"
        style={{
          zIndex: 1000,
          backgroundColor: 'rgba(5, 5, 5, 0.8)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          transform: visible ? (hidden ? 'translateY(-100%)' : 'translateY(0)') : 'translateY(-100%)',
          transition: hasEntered.current ? 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          opacity: hasEntered.current ? 1 : 0,
          borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          data-cursor="click"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="relative"
          style={{
            fontFamily: "'Orbitron', sans-serif",
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#00f5ff',
            textDecoration: 'none',
            letterSpacing: '0.1em',
            textShadow: '0 0 10px rgba(0, 245, 255, 0.6), 0 0 20px rgba(0, 245, 255, 0.2)',
          }}
        >
          HV
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                data-cursor="link"
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative group"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: isActive ? '#00f5ff' : '#888888',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                  paddingBottom: '4px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#f0f0f0';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) (e.currentTarget as HTMLAnchorElement).style.color = '#888888';
                }}
              >
                {link.label}
                {/* Underline pseudo-element */}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '1px',
                    backgroundColor: '#00f5ff',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="group-hover:!scale-x-100"
                />
              </a>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
          data-cursor="click"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none' }}
        >
          <span
            style={{
              display: 'block',
              width: '20px',
              height: '1.5px',
              backgroundColor: '#f0f0f0',
              transition: 'all 0.3s ease',
              position: 'absolute',
              transform: mobileOpen ? 'rotate(45deg)' : 'translateY(-5px)',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '20px',
              height: '1.5px',
              backgroundColor: '#f0f0f0',
              transition: 'all 0.3s ease',
              position: 'absolute',
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: 'block',
              width: '20px',
              height: '1.5px',
              backgroundColor: '#f0f0f0',
              transition: 'all 0.3s ease',
              position: 'absolute',
              transform: mobileOpen ? 'rotate(-45deg)' : 'translateY(5px)',
            }}
          />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed inset-0 flex flex-col items-center justify-center gap-8"
        style={{
          zIndex: 999,
          backgroundColor: 'rgba(5, 5, 5, 0.96)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: 0,
          visibility: 'hidden',
        }}
      >
        {NAV_LINKS.map((link, i) => {
          const sectionId = link.href.replace('#', '');
          const isActive = activeSection === sectionId;

          return (
            <a
              key={link.href}
              ref={(el) => {
                mobileLinkRefs.current[i] = el;
              }}
              href={link.href}
              data-cursor="click"
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                fontFamily: "'Orbitron', sans-serif",
                fontSize: '1.5rem',
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: isActive ? '#00f5ff' : '#f0f0f0',
                textDecoration: 'none',
                opacity: 0,
                transition: 'color 0.3s ease',
              }}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
