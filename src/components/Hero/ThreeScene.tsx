import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * ThreeScene — animated dot grid background for the Hero section.
 *
 * • 40×40 grid of cyan Points with additive blending
 * • Dots pulse via per-dot sine-wave opacity
 * • Mouse repulsion: dots near the cursor push away
 */
export default function ThreeScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ---- Renderer ---- */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    /* ---- Scene & Camera ---- */
    const scene = new THREE.Scene();
    const aspect = container.clientWidth / container.clientHeight;
    const frustumSize = 20;
    const camera = new THREE.OrthographicCamera(
      (-frustumSize * aspect) / 2,
      (frustumSize * aspect) / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      100
    );
    camera.position.z = 10;

    /* ---- Grid Geometry ---- */
    const GRID = 40;
    const TOTAL = GRID * GRID;
    const SPACING = 0.5;
    const halfGrid = ((GRID - 1) * SPACING) / 2;

    const basePositions = new Float32Array(TOTAL * 3);
    const positions = new Float32Array(TOTAL * 3);
    const colors = new Float32Array(TOTAL * 3);
    const phases = new Float32Array(TOTAL);

    const cyan = new THREE.Color(0x00f5ff);

    for (let ix = 0; ix < GRID; ix++) {
      for (let iy = 0; iy < GRID; iy++) {
        const idx = ix * GRID + iy;
        const i3 = idx * 3;

        const x = ix * SPACING - halfGrid;
        const y = iy * SPACING - halfGrid;

        basePositions[i3] = x;
        basePositions[i3 + 1] = y;
        basePositions[i3 + 2] = 0;

        positions[i3] = x;
        positions[i3 + 1] = y;
        positions[i3 + 2] = 0;

        colors[i3] = cyan.r;
        colors[i3 + 1] = cyan.g;
        colors[i3 + 2] = cyan.b;

        phases[idx] = Math.random() * Math.PI * 2;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      sizeAttenuation: false,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    /* ---- Mouse tracking ---- */
    const mouse = new THREE.Vector2(9999, 9999); // off-screen initially

    function onMouseMove(e: MouseEvent) {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // Map to world coordinates (ortho)
      const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const ny = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      mouse.x = nx * (frustumSize * aspect) * 0.5;
      mouse.y = ny * frustumSize * 0.5;
    }

    window.addEventListener('mousemove', onMouseMove);

    /* ---- Resize handler ---- */
    function onResize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      const a = w / h;
      camera.left = (-frustumSize * a) / 2;
      camera.right = (frustumSize * a) / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }

    window.addEventListener('resize', onResize);

    /* ---- Animation loop ---- */
    const clock = new THREE.Clock();
    let rafId: number;

    const REPULSION_RADIUS = 2.5;
    const REPULSION_STRENGTH = 0.8;

    function animate() {
      rafId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
      const colAttr = geometry.getAttribute('color') as THREE.BufferAttribute;

      for (let i = 0; i < TOTAL; i++) {
        const i3 = i * 3;
        const bx = basePositions[i3];
        const by = basePositions[i3 + 1];

        // Pulsing opacity via color brightness
        const pulse = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(elapsed * 1.5 + phases[i]));
        colAttr.array[i3] = cyan.r * pulse;
        colAttr.array[i3 + 1] = cyan.g * pulse;
        colAttr.array[i3 + 2] = cyan.b * pulse;

        // Mouse repulsion
        const dx = bx - mouse.x;
        const dy = by - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let ox = 0;
        let oy = 0;
        if (dist < REPULSION_RADIUS && dist > 0.001) {
          const force = (1 - dist / REPULSION_RADIUS) * REPULSION_STRENGTH;
          ox = (dx / dist) * force;
          oy = (dy / dist) * force;
        }

        posAttr.array[i3] = bx + ox;
        posAttr.array[i3 + 1] = by + oy;
      }

      posAttr.needsUpdate = true;
      colAttr.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animate();

    /* ---- Cleanup ---- */
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 opacity-40 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
