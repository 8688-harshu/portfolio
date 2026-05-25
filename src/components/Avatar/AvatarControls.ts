import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Idle Animation                                                     */
/* ------------------------------------------------------------------ */

/**
 * Creates an idle animation updater that applies:
 *  - Y-axis floating (sine wave, amplitude 0.1, period 3s)
 *  - Breathing scale on torso (1.0 → 1.02)
 *  - Subtle rotation drift
 */
export function createIdleAnimation(model: THREE.Object3D) {
  const baseY = model.position.y;
  const baseRotationY = model.rotation.y;
  const baseScale = model.scale.clone(); // Capture the base scale (prevents vertical stretching)
  const clock = new THREE.Clock();

  return function update() {
    const elapsed = clock.getElapsedTime();

    // Floating (scaled with the model's actual vertical size)
    model.position.y = baseY + Math.sin(elapsed * ((2 * Math.PI) / 3)) * (baseScale.y * 0.15);

    // Breathing — scale relative to base scale
    const breathe = 1.0 + Math.sin(elapsed * 2.5) * 0.02;
    model.scale.set(baseScale.x * breathe, baseScale.y, baseScale.z * breathe);

    // Subtle rotation drift
    model.rotation.y = baseRotationY + Math.sin(elapsed * 0.3) * 0.08;
  };
}

/* ------------------------------------------------------------------ */
/*  Mouse Tracker                                                      */
/* ------------------------------------------------------------------ */

interface MouseTrackerResult {
  onMouseMove: (e: MouseEvent) => void;
  update: () => void;
  cleanup: () => void;
}

/**
 * Creates a mouse tracker that lerps the model's rotation toward the cursor.
 * Max rotation: ±15 degrees (≈ 0.26 rad).
 */
export function createMouseTracker(
  model: THREE.Object3D,
  container: HTMLElement
): MouseTrackerResult {
  const target = { x: 0, y: 0 };
  const current = { x: 0, y: 0 };
  const MAX_ROTATION = THREE.MathUtils.degToRad(15);
  const LERP_FACTOR = 0.05;

  function onMouseMove(e: MouseEvent) {
    const rect = container.getBoundingClientRect();
    // Normalise to –1 … +1
    target.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    target.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
  }

  function update() {
    current.x += (target.x - current.x) * LERP_FACTOR;
    current.y += (target.y - current.y) * LERP_FACTOR;

    model.rotation.y = current.x * MAX_ROTATION;
    model.rotation.x = current.y * MAX_ROTATION * 0.5;
  }

  function cleanup() {
    container.removeEventListener('mousemove', onMouseMove);
  }

  container.addEventListener('mousemove', onMouseMove);

  return { onMouseMove, update, cleanup };
}

/* ------------------------------------------------------------------ */
/*  Particle Materialisation                                           */
/* ------------------------------------------------------------------ */

interface MaterializationResult {
  start: () => void;
  update: () => void;
  isComplete: boolean;
  dispose: () => void;
}

/**
 * Creates a Points cloud that starts scattered and converges to targetPositions over ~2 s.
 * Particles: 2000 small cyan dots.
 */
export function createParticleMaterialization(
  scene: THREE.Scene,
  targetPositions: Float32Array
): MaterializationResult {
  const PARTICLE_COUNT = 2000;
  const DURATION = 2.0; // seconds

  // Current positions — start randomly scattered
  const currentPositions = new Float32Array(PARTICLE_COUNT * 3);
  const startPositions = new Float32Array(PARTICLE_COUNT * 3);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const i3 = i * 3;
    startPositions[i3] = (Math.random() - 0.5) * 10;
    startPositions[i3 + 1] = (Math.random() - 0.5) * 10;
    startPositions[i3 + 2] = (Math.random() - 0.5) * 10;

    currentPositions[i3] = startPositions[i3];
    currentPositions[i3 + 1] = startPositions[i3 + 1];
    currentPositions[i3 + 2] = startPositions[i3 + 2];
  }

  // Ensure target array has enough entries; wrap if necessary
  const safeTarget = new Float32Array(PARTICLE_COUNT * 3);
  for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
    safeTarget[i] = targetPositions[i % targetPositions.length] || 0;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x00f5ff,
    size: 0.02,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  let started = false;
  let complete = false;
  let elapsed = 0;
  const clock = new THREE.Clock(false);

  const result: MaterializationResult = {
    get isComplete() {
      return complete;
    },

    start() {
      if (started) return;
      started = true;
      scene.add(points);
      clock.start();
    },

    update() {
      if (!started || complete) return;

      elapsed = clock.getElapsedTime();
      const t = Math.min(elapsed / DURATION, 1.0);
      // Ease-out cubic
      const ease = 1 - Math.pow(1 - t, 3);

      const pos = geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < PARTICLE_COUNT * 3; i++) {
        currentPositions[i] = startPositions[i] + (safeTarget[i] - startPositions[i]) * ease;
      }
      pos.needsUpdate = true;

      if (t >= 1.0) {
        complete = true;
      }
    },

    dispose() {
      scene.remove(points);
      geometry.dispose();
      material.dispose();
    },
  };

  return result;
}

/* ------------------------------------------------------------------ */
/*  Particle Dissolution                                               */
/* ------------------------------------------------------------------ */

interface DissolutionResult {
  trigger: () => void;
  update: () => void;
  dispose: () => void;
}

/**
 * Samples vertex positions from a model, creates a Points cloud at those positions,
 * and on trigger hides the model while the particles fly outward with random velocities.
 */
export function createParticleDissolution(
  model: THREE.Object3D,
  scene: THREE.Scene
): DissolutionResult {
  // Gather vertices from the model
  const vertices: number[] = [];
  model.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const geo = mesh.geometry;
      const posAttr = geo.getAttribute('position');
      if (!posAttr) return;

      const worldMatrix = mesh.matrixWorld;
      const v = new THREE.Vector3();
      for (let i = 0; i < posAttr.count; i++) {
        v.fromBufferAttribute(posAttr, i);
        v.applyMatrix4(worldMatrix);
        vertices.push(v.x, v.y, v.z);
      }
    }
  });

  // Limit / sample down to ~2000
  const MAX_PARTICLES = 2000;
  const stride = Math.max(1, Math.floor(vertices.length / 3 / MAX_PARTICLES));
  const sampledPositions: number[] = [];
  for (let i = 0; i < vertices.length / 3; i += stride) {
    sampledPositions.push(vertices[i * 3], vertices[i * 3 + 1], vertices[i * 3 + 2]);
    if (sampledPositions.length / 3 >= MAX_PARTICLES) break;
  }

  const count = sampledPositions.length / 3;
  const positions = new Float32Array(sampledPositions);
  const velocities = new Float32Array(count * 3);

  // Pre-generate random velocities
  for (let i = 0; i < count * 3; i++) {
    velocities[i] = (Math.random() - 0.5) * 4;
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: 0x00f5ff,
    size: 0.03,
    transparent: true,
    opacity: 1.0,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  points.visible = false;

  scene.add(points);

  let triggered = false;
  let elapsed = 0;
  const clock = new THREE.Clock(false);
  const DISSOLUTION_DURATION = 2.0;

  return {
    trigger() {
      if (triggered) return;
      triggered = true;
      model.visible = false;
      points.visible = true;
      clock.start();
    },

    update() {
      if (!triggered) return;

      const delta = clock.getDelta();
      elapsed += delta;

      const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i3] * delta;
        positions[i3 + 1] += velocities[i3 + 1] * delta;
        positions[i3 + 2] += velocities[i3 + 2] * delta;
      }
      posAttr.needsUpdate = true;

      // Fade out
      const t = Math.min(elapsed / DISSOLUTION_DURATION, 1.0);
      material.opacity = 1.0 - t;

      if (t >= 1.0) {
        points.visible = false;
      }
    },

    dispose() {
      scene.remove(points);
      geometry.dispose();
      material.dispose();
    },
  };
}
