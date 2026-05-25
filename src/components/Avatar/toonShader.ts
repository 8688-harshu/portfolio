import * as THREE from 'three';

/**
 * Creates a 3-stop gradient DataTexture for toon shading.
 * Stops: dark (0.15), mid (0.5), bright (0.9)
 */
function createGradientMap(): THREE.DataTexture {
  const width = 3;
  const height = 1;
  const data = new Uint8Array(width * height * 4);

  // Stop 0: dark
  data[0] = 38;
  data[1] = 38;
  data[2] = 38;
  data[3] = 255;

  // Stop 1: mid
  data[4] = 128;
  data[5] = 128;
  data[6] = 128;
  data[7] = 255;

  // Stop 2: bright
  data[8] = 230;
  data[9] = 230;
  data[10] = 230;
  data[11] = 255;

  const texture = new THREE.DataTexture(data, width, height, THREE.RGBAFormat);
  texture.minFilter = THREE.NearestFilter;
  texture.magFilter = THREE.NearestFilter;
  texture.needsUpdate = true;

  return texture;
}

/**
 * Creates a MeshToonMaterial with a custom gradient map and optional cyan emissive tint.
 */
export function createToonMaterial(baseColor: string = '#888888'): THREE.MeshToonMaterial {
  const gradientMap = createGradientMap();

  return new THREE.MeshToonMaterial({
    color: new THREE.Color(baseColor),
    gradientMap,
    emissive: new THREE.Color('#00f5ff'),
    emissiveIntensity: 0.05,
  });
}

/**
 * Creates a backside material used for outline rendering.
 */
export function createOutlineMaterial(): THREE.MeshBasicMaterial {
  return new THREE.MeshBasicMaterial({
    color: 0x000000,
    side: THREE.BackSide,
  });
}

/**
 * Creates a ShaderMaterial with rim lighting effect.
 */
export function createRimLightMaterial(
  baseColor: string = '#222222',
  rimColor: string = '#00f5ff',
  rimPower: number = 2.0
): THREE.ShaderMaterial {
  const vertexShader = /* glsl */ `
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vNormal = normalize(normalMatrix * normal);
      vViewDir = normalize(-mvPosition.xyz);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;

  const fragmentShader = /* glsl */ `
    uniform vec3 uRimColor;
    uniform float uRimPower;
    uniform vec3 uBaseColor;

    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
      float rim = pow(1.0 - max(dot(normalize(vNormal), normalize(vViewDir)), 0.0), uRimPower);
      vec3 color = mix(uBaseColor, uRimColor, rim);
      gl_FragColor = vec4(color, 1.0);
    }
  `;

  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uRimColor: { value: new THREE.Color(rimColor) },
      uRimPower: { value: rimPower },
      uBaseColor: { value: new THREE.Color(baseColor) },
    },
  });
}

/**
 * Traverses a loaded model, replaces all mesh materials with toon shading,
 * and adds outline meshes (backside-rendered clones scaled up slightly).
 */
export function applyToonShading(model: THREE.Object3D): void {
  const outlineMeshes: THREE.Mesh[] = [];

  model.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;

      // Determine base color from original material
      let baseColor = '#888888';
      if (mesh.material) {
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat.color) {
          baseColor = '#' + mat.color.getHexString();
        }
      }

      // Replace with toon material
      mesh.material = createToonMaterial(baseColor);

      // Create outline clone
      const outlineMesh = mesh.clone();
      outlineMesh.material = createOutlineMaterial();
      outlineMesh.scale.multiplyScalar(1.03);
      outlineMesh.renderOrder = -1;
      outlineMeshes.push(outlineMesh);
    }
  });

  // Attach outlines to the model
  outlineMeshes.forEach((outline) => {
    model.add(outline);
  });
}
