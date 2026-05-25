import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../shared/SectionHeading';
import CertCard from './CertCard';

gsap.registerPlugin(ScrollTrigger);

const CERTIFICATIONS = [
  {
    name: 'Prompt Engineering & Programming with OpenAI',
    issuer: 'Columbia University',
    year: '2026',
  },
  {
    name: 'Building Customized LLMs with OpenAI',
    issuer: 'Columbia University',
    year: '2026',
  },
  {
    name: 'Introduction to Generative AI',
    issuer: 'AWS',
    year: '2025',
  },
  {
    name: 'Cybersecurity Essentials',
    issuer: 'IBM',
    year: '2025',
  },
  {
    name: 'Python Essentials',
    issuer: 'Cisco',
    year: '2024',
  },
  {
    name: 'Champions — Prakalp Hackathon 2K26',
    issuer: 'Prakalp',
    year: '2026',
    isSpecial: true,
  },
];

export default function Certifications() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.cert-card').forEach((card, i) => {
        gsap.from(card, {
          y: 50,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="certifications"
      ref={sectionRef}
      className="relative py-32"
      style={{ background: '#050505' }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <SectionHeading title="CERTIFICATIONS" number="05" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <CertCard
              key={cert.name}
              name={cert.name}
              issuer={cert.issuer}
              year={cert.year}
              isSpecial={cert.isSpecial}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
