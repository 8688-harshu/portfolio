import * as THREE from 'three';

/* ─────────────────────────────────────────────
   Types
   ───────────────────────────────────────────── */

export interface SceneBundle {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  renderer: THREE.WebGLRenderer;
}

/* ─────────────────────────────────────────────
   Scene Factory
   ───────────────────────────────────────────── */

/**
 * Creates a pre-configured Three.js scene, perspective camera, and
 * WebGL renderer with a transparent background and antialiasing.
 *
 * The renderer's DOM element is *not* appended to the document —
 * the consumer should attach `renderer.domElement` to their container.
 */
export function createScene(): SceneBundle {
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0); // transparent background
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.0;

  return { scene, camera, renderer };
}

/* ─────────────────────────────────────────────
   Disposal
   ───────────────────────────────────────────── */

/**
 * Recursively walks the scene graph and disposes every geometry,
 * material (and its maps/textures), then disposes the renderer.
 */
export function disposeScene(scene: THREE.Scene, renderer: THREE.WebGLRenderer): void {
  scene.traverse((object) => {
    // Dispose geometry
    if (object instanceof THREE.Mesh) {
      if (object.geometry) {
        object.geometry.dispose();
      }

      // Materials can be a single material or an array
      const materials = Array.isArray(object.material)
        ? object.material
        : [object.material];

      for (const material of materials) {
        if (!material) continue;

        // Dispose every texture map attached to the material
        const mat = material as THREE.MeshStandardMaterial;
        const mapKeys: (keyof THREE.MeshStandardMaterial)[] = [
          'map',
          'lightMap',
          'bumpMap',
          'normalMap',
          'displacementMap',
          'roughnessMap',
          'metalnessMap',
          'alphaMap',
          'aoMap',
          'emissiveMap',
          'envMap',
        ];

        for (const key of mapKeys) {
          const texture = mat[key];
          if (texture && texture instanceof THREE.Texture) {
            texture.dispose();
          }
        }

        material.dispose();
      }
    }
  });

  renderer.dispose();
  renderer.forceContextLoss();
}

/* ─────────────────────────────────────────────
   Resize Handler
   ───────────────────────────────────────────── */

/**
 * Updates the camera aspect ratio and renderer size to match the
 * given container's current dimensions. Call this inside a
 * ResizeObserver or window resize listener.
 *
 * @param container  The DOM element the renderer canvas lives inside.
 *                   Falls back to `window` dimensions if omitted.
 */
export function handleResize(
  camera: THREE.PerspectiveCamera,
  renderer: THREE.WebGLRenderer,
  container?: HTMLElement
): void {
  const width = container ? container.clientWidth : window.innerWidth;
  const height = container ? container.clientHeight : window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}
