import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionHeading from '../shared/SectionHeading';
import ProjectCard from './ProjectCard';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    title: 'TrustLens',
    subtitle: 'AI-Powered Fake News Detection Platform',
    description:
      'End-to-end fake news detection system leveraging NLP and deep learning models. Features real-time article analysis, credibility scoring, and source verification with a modern React dashboard.',
    stat: '94% Detection Accuracy',
    tags: ['Python', 'NLP', 'React', 'Flask', 'Deep Learning', 'REST API'],
    icon: 'trustlens' as const,
  },
  {
    title: 'AI Chatbot',
    subtitle: 'LLM-Powered Conversational Agent',
    description:
      'Full-stack conversational AI chatbot built with RAG architecture, enabling context-aware responses from custom knowledge bases. Implements streaming responses, chat history, and semantic search.',
    stat: 'RAG + Streaming Architecture',
    tags: ['Generative AI', 'LLM', 'RAG', 'Node.js', 'Supabase', 'OpenAI'],
    icon: 'chatbot' as const,
  },
  {
    title: 'AquaFlow',
    subtitle: 'Smart Water Quality Monitoring System',
    description:
      'IoT-integrated water quality monitoring platform that collects sensor data in real-time, applies ML-based anomaly detection, and provides actionable insights through interactive dashboards.',
    stat: 'Real-Time IoT Analytics',
    tags: ['Python', 'IoT', 'MySQL', 'Docker', 'React', 'Machine Learning'],
    icon: 'aquaflow' as const,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.project-card').forEach((card, i) => {
        gsap.from(card, {
          y: 80,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative min-h-screen py-32"
      style={{ background: '#050505' }}
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <SectionHeading title="PROJECTS" number="03" />

        <div className="flex flex-col gap-10">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.title}
              index={i}
              title={project.title}
              subtitle={project.subtitle}
              description={project.description}
              stat={project.stat}
              tags={project.tags}
              icon={project.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
