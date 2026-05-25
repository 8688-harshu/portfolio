import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../shared/SectionHeading';
import Timeline from './Timeline';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {}, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen py-32"
      style={{ background: '#050505' }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionHeading title="EXPERIENCE" number="04" />
        <Timeline />
      </div>
    </section>
  );
}
