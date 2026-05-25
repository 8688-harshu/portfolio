import { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillNode {
  name: string;
  level: number;
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
  driftSpeed: number;
  driftAmp: number;
}

const SKILL_DATA = [
  { name: 'Python', level: 90, importance: 3 },
  { name: 'JavaScript', level: 85, importance: 3 },
  { name: 'Java', level: 75, importance: 2 },
  { name: 'React.js', level: 85, importance: 3 },
  { name: 'Node.js', level: 80, importance: 2 },
  { name: 'Flask', level: 78, importance: 2 },
  { name: 'Generative AI', level: 92, importance: 4 },
  { name: 'LLM', level: 90, importance: 4 },
  { name: 'RAG', level: 88, importance: 4 },
  { name: 'NLP', level: 82, importance: 3 },
  { name: 'Prompt Eng.', level: 90, importance: 3 },
  { name: 'MySQL', level: 75, importance: 1 },
  { name: 'Supabase', level: 70, importance: 1 },
  { name: 'Docker', level: 65, importance: 1 },
  { name: 'AWS', level: 68, importance: 1 },
  { name: 'DigitalOcean', level: 60, importance: 1 },
  { name: 'REST APIs', level: 85, importance: 2 },
  { name: 'Cybersecurity', level: 72, importance: 2 },
] as const;

function getRadius(importance: number): number {
  // Guarantee min 70px diameter (35px radius)
  if (importance >= 4) return 42; // 84px diameter
  if (importance >= 3) return 38; // 76px diameter
  return 35; // 70px diameter
}

export default function SkillConstellation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  
  const nodesRef = useRef<SkillNode[]>([]);
  const mouseRef = useRef({ x: -999, y: -999 });
  const drawProgressRef = useRef({ value: 0 });
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  const initNodes = useCallback((width: number, height: number): SkillNode[] => {
    // 4 columns, 5 rows to fit 18 nodes nicely in a grid
    const cols = 4;
    const cellW = width / cols;
    const cellH = height / 5;

    return SKILL_DATA.map((skill, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);

      // Centered in cell
      const baseX = cellW * (col + 0.5);
      const baseY = cellH * (row + 0.5);
      const r = getRadius(skill.importance);

      return {
        name: skill.name,
        level: skill.level,
        x: baseX,
        y: baseY,
        baseX,
        baseY,
        vx: 0,
        vy: 0,
        radius: r,
        phase: Math.random() * Math.PI * 2,
        driftSpeed: 0.3 + Math.random() * 0.4,
        driftAmp: 6 + Math.random() * 6,
      };
    });
  }, []);

  const resize = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    nodesRef.current = initNodes(w, h);
  }, [initNodes]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    resize();

    // ScrollTrigger to animate stroke-dashoffset drawing progress
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: container,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(drawProgressRef.current, {
          value: 1,
          duration: 1.8,
          ease: 'power2.out',
        });
      },
      onLeaveBack: () => {
        drawProgressRef.current.value = 0;
      }
    });

    let time = 0;
    let rafId: number;

    const updatePhysics = () => {
      time += 0.016;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const nodes = nodesRef.current;

      // 1. Repulsion force between nodes (prevent overlaps)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const nodeA = nodes[i];
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Force-directed repulsion buffer of 15px
          const minDist = nodeA.radius + nodeB.radius + 15;
          if (dist < minDist) {
            const force = (minDist - dist) * 0.15;
            const ax = (dx / (dist || 1)) * force;
            const ay = (dy / (dist || 1)) * force;

            nodeA.vx -= ax;
            nodeA.vy -= ay;
            nodeB.vx += ax;
            nodeB.vy += ay;
          }
        }
      }

      // 2. Mouse Repulsion
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      if (mx !== -999 && my !== -999) {
        for (const node of nodes) {
          const dx = node.x - mx;
          const dy = node.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const force = (120 - dist) * 0.08;
            node.vx += (dx / (dist || 1)) * force;
            node.vy += (dy / (dist || 1)) * force;
          }
        }
      }

      // 3. Spring Attraction back to drifting slots & Apply position
      for (const node of nodes) {
        const targetX = node.baseX + Math.sin(time * node.driftSpeed + node.phase) * node.driftAmp;
        const targetY = node.baseY + Math.cos(time * node.driftSpeed + node.phase) * node.driftAmp;

        const dx = targetX - node.x;
        const dy = targetY - node.y;

        node.vx += dx * 0.025;
        node.vy += dy * 0.025;

        // Friction damping
        node.vx *= 0.82;
        node.vy *= 0.82;

        node.x += node.vx;
        node.y += node.vy;

        // Wall padding collision checks
        const pad = node.radius + 5;
        if (node.x < pad) { node.x = pad; node.vx *= -0.5; }
        if (node.x > w - pad) { node.x = w - pad; node.vx *= -0.5; }
        if (node.y < pad) { node.y = pad; node.vy *= -0.5; }
        if (node.y > h - pad) { node.y = h - pad; node.vy *= -0.5; }
      }

      // 4. Update Node DOM Transforms
      for (let i = 0; i < nodes.length; i++) {
        const el = nodeRefs.current[i];
        if (el) {
          el.style.transform = `translate3d(${nodes[i].x - nodes[i].radius}px, ${nodes[i].y - nodes[i].radius}px, 0)`;
        }
      }

      // 5. Update Connection Lines
      let lineIndex = 0;
      const maxLines = lineRefs.current.length;
      const progress = drawProgressRef.current.value;

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (lineIndex >= maxLines) break;

          const nodeA = nodes[i];
          const nodeB = nodes[j];
          const dx = nodeB.x - nodeA.x;
          const dy = nodeB.y - nodeA.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect if distance < 150px
          if (dist < 150) {
            const line = lineRefs.current[lineIndex];
            if (line) {
              line.setAttribute('x1', String(nodeA.x));
              line.setAttribute('y1', String(nodeA.y));
              line.setAttribute('x2', String(nodeB.x));
              line.setAttribute('y2', String(nodeB.y));
              line.setAttribute('stroke-dasharray', String(dist));
              line.setAttribute('stroke-dashoffset', String(dist * (1 - progress)));
              line.setAttribute('opacity', String(0.2 * (1 - dist / 150)));
              line.style.display = 'block';
            }
            lineIndex++;
          }
        }
      }

      // Hide unused connection line slots
      for (let i = lineIndex; i < maxLines; i++) {
        const line = lineRefs.current[i];
        if (line) {
          line.style.display = 'none';
        }
      }

      rafId = requestAnimationFrame(updatePhysics);
    };

    rafId = requestAnimationFrame(updatePhysics);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -999, y: -999 };
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(rafId);
      scrollTriggerInstance.kill();
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', resize);
    };
  }, [resize]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[380px] lg:h-[520px] overflow-hidden select-none border border-white/5 rounded-2xl bg-black/10 backdrop-blur-[2px]"
    >
      {/* SVG Canvas for connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {Array.from({ length: 45 }).map((_, i) => (
          <line
            key={i}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            stroke="#00f5ff"
            strokeWidth="0.75"
            strokeOpacity="0.2"
            style={{ display: 'none' }}
          />
        ))}
      </svg>

      {/* HTML DOM Node elements for perfect font scale & styling */}
      {SKILL_DATA.map((skill, i) => {
        const radius = getRadius(skill.importance);
        return (
          <div
            key={skill.name}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            data-cursor="click"
            className="absolute rounded-full border border-[#00f5ff33] bg-[#050505ea] flex flex-col items-center justify-center text-center px-1 text-white/80 cursor-pointer overflow-hidden transition-all duration-300 hover:scale-110 hover:border-[#00f5ff] hover:bg-[#00f5ff0c]"
            style={{
              width: `${radius * 2}px`,
              height: `${radius * 2}px`,
              left: 0,
              top: 0,
              zIndex: 2,
              backdropFilter: 'blur(6px)',
              boxShadow: '0 0 15px rgba(0, 245, 255, 0.03)',
            }}
            onMouseEnter={() => setHoveredNode(i)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <span 
              className="font-mono text-[10px] lg:text-[11px] font-semibold tracking-wider text-ellipsis overflow-hidden px-1 whitespace-nowrap w-full text-center"
              style={{ color: hoveredNode === i ? '#00f5ff' : '#f0f0f0' }}
            >
              {skill.name}
            </span>
            {/* Expanded skill progress bar */}
            <div className="w-[60%] h-[1.5px] bg-white/10 rounded-full mt-1.5 overflow-hidden">
              <div
                className="h-full bg-[#00f5ff] transition-all duration-500 ease-out"
                style={{ width: hoveredNode === i ? `${skill.level}%` : '0%' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
