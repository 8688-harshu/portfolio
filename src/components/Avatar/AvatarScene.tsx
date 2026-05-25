import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { createIdleAnimation, createMouseTracker } from './AvatarControls';
import { applyToonShading } from './toonShader';

/* -------------------------------------------------------------------------- */
/*  Fallback geometric humanoid                                               */
/* -------------------------------------------------------------------------- */

function createFallbackHumanoid(): THREE.Group {
  const group = new THREE.Group();

  const wireColor = 0x00f5ff;

  // Head material (MeshPhongMaterial with cyan emissive)
  const headMat = new THREE.MeshPhongMaterial({
    color: 0x050505,
    emissive: 0x00f5ff,
    emissiveIntensity: 0.5,
    wireframe: false,
    shininess: 100,
  });

  // Aura material (wireframe sphere slightly larger)
  const auraMat = new THREE.MeshBasicMaterial({
    color: wireColor,
    wireframe: true,
    transparent: true,
    opacity: 0.3,
  });

  // Body materials (wireframe capsule representation)
  const bodyWireMat = new THREE.MeshPhongMaterial({
    color: 0x000000,
    emissive: 0x0088ff,
    emissiveIntensity: 0.35,
    wireframe: true,
    transparent: true,
    opacity: 0.65,
  });

  const jointMat = new THREE.MeshBasicMaterial({
    color: wireColor,
    transparent: true,
    opacity: 0.9,
  });

  // ---- Head ----
  const headGeo = new THREE.IcosahedronGeometry(1.2, 1);
  const head = new THREE.Mesh(headGeo, headMat);
  head.position.y = 6.0;
  group.add(head);

  // ---- Aura ----
  const auraGeo = new THREE.SphereGeometry(1.35, 16, 16);
  const aura = new THREE.Mesh(auraGeo, auraMat);
  aura.position.y = 6.0;
  group.add(aura);

  // ---- Torso (Capsule instead of cylinder) ----
  const torsoGeo = new THREE.CapsuleGeometry(0.8, 2.4, 8, 16);
  const torso = new THREE.Mesh(torsoGeo, bodyWireMat);
  torso.position.y = 3.6;
  group.add(torso);

  // ---- Arms (Capsules) ----
  const armGeo = new THREE.CapsuleGeometry(0.25, 2.0, 8, 16);

  const leftArm = new THREE.Mesh(armGeo, bodyWireMat);
  leftArm.position.set(-1.4, 3.8, 0);
  leftArm.rotation.z = Math.PI / 6;
  group.add(leftArm);

  const rightArm = new THREE.Mesh(armGeo, bodyWireMat);
  rightArm.position.set(1.4, 3.8, 0);
  rightArm.rotation.z = -Math.PI / 6;
  group.add(rightArm);

  // ---- Legs (Capsules) ----
  const legGeo = new THREE.CapsuleGeometry(0.28, 2.2, 8, 16);

  const leftLeg = new THREE.Mesh(legGeo, bodyWireMat);
  leftLeg.position.set(-0.5, 1.2, 0);
  group.add(leftLeg);

  const rightLeg = new THREE.Mesh(legGeo, bodyWireMat);
  rightLeg.position.set(0.5, 1.2, 0);
  group.add(rightLeg);

  // ---- Joints (connection spheres) ----
  const jointGeo = new THREE.SphereGeometry(0.25, 8, 8);
  const jointPositions = [
    [0, 4.8, 0],       // neck
    [-1.0, 4.6, 0],    // left shoulder
    [1.0, 4.6, 0],     // right shoulder
    [-0.5, 2.4, 0],    // left hip
    [0.5, 2.4, 0],     // right hip
  ];

  jointPositions.forEach(([x, y, z]) => {
    const joint = new THREE.Mesh(jointGeo, jointMat);
    joint.position.set(x, y, z);
    group.add(joint);
  });

  return group;
}

/* -------------------------------------------------------------------------- */
/*  AvatarScene Component                                                     */
/* -------------------------------------------------------------------------- */

export default function AvatarScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    /* ---- Renderer ---- */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    /* ---- Scene ---- */
    const scene = new THREE.Scene();

    /* ---- Camera ---- */
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 4.5);
    camera.lookAt(0, 0, 0);

    /* ---- Lighting ---- */
    const ambient = new THREE.AmbientLight(0x0a0a0a);
    scene.add(ambient);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(2, 3, 2);
    scene.add(dirLight);

    // 3 PointLights as requested
    const pLightCyan = new THREE.PointLight(0x00f5ff, 2.5, 15);
    pLightCyan.position.set(3, 3, 3);
    scene.add(pLightCyan);

    const pLightWhite = new THREE.PointLight(0xffffff, 1.5, 15);
    pLightWhite.position.set(-3, 3, -3);
    scene.add(pLightWhite);

    const pLightDeepBlue = new THREE.PointLight(0x0044ff, 2.0, 15);
    pLightDeepBlue.position.set(0, -3, 3);
    scene.add(pLightDeepBlue);

    /* ---- Decoupled Rotation Structure ---- */
    const rotationGroup = new THREE.Group();
    const orbitGroup = new THREE.Group();
    rotationGroup.add(orbitGroup);
    scene.add(rotationGroup);

    /* ---- Orbiting Particle Ring ---- */
    const pCount = 100;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pAngles = new Float32Array(pCount);
    const pSpeeds = new Float32Array(pCount);
    const pRadii = new Float32Array(pCount);
    const pYPos = new Float32Array(pCount);

    for (let i = 0; i < pCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 1.3 + Math.random() * 0.6;
      const y = (Math.random() - 0.5) * 0.3;

      pAngles[i] = angle;
      pRadii[i] = radius;
      pYPos[i] = y;
      pSpeeds[i] = 0.2 + Math.random() * 0.3;

      const i3 = i * 3;
      pPos[i3] = Math.cos(angle) * radius;
      pPos[i3 + 1] = y;
      pPos[i3 + 2] = Math.sin(angle) * radius;
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
    const pMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.035,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const particleRing = new THREE.Points(pGeo, pMat);
    // Add to orbitGroup so it aligns with the shifted position of the model
    orbitGroup.add(particleRing);

    /* ---- Avatar model ---- */
    let model: THREE.Object3D;
    let mixer: THREE.AnimationMixer | null = null;
    let idleUpdate: ReturnType<typeof createIdleAnimation> | null = null;
    let mouseTracker: ReturnType<typeof createMouseTracker> | null = null;

    function setupModel(obj: THREE.Object3D) {
      model = obj;
      orbitGroup.add(model);
      idleUpdate = createIdleAnimation(model);
      mouseTracker = createMouseTracker(rotationGroup, container!);
    }

    // Try loading GLB, fall back to upgraded geometric humanoid
    let disposed = false;

    (async () => {
      try {
        const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');
        const loader = new GLTFLoader();

        loader.load(
          '/avatar/harsha-avatar.glb',
          (gltf) => {
            if (disposed) return;

            const avatarModel = gltf.scene;
            applyToonShading(avatarModel);

            // Fit model (scaled down from 2.0 to 1.4 for proper spacing)
            const box = new THREE.Box3().setFromObject(avatarModel);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 1.4 / maxDim;
            avatarModel.scale.setScalar(scale);

            const center = box.getCenter(new THREE.Vector3());
            avatarModel.position.sub(center.multiplyScalar(scale));

            // Animations
            if (gltf.animations.length > 0) {
              mixer = new THREE.AnimationMixer(avatarModel);
              const idleClip = gltf.animations[0];
              const action = mixer.clipAction(idleClip);
              action.play();
            }

            setupModel(avatarModel);
          },
          undefined,
          (_err) => {
            if (disposed) return;
            const fallback = createFallbackHumanoid();
            // Fit fallback model (scaled down from 2.0 to 1.4)
            const box = new THREE.Box3().setFromObject(fallback);
            const size = box.getSize(new THREE.Vector3());
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 1.4 / maxDim;
            fallback.scale.setScalar(scale);
            const center = box.getCenter(new THREE.Vector3());
            fallback.position.sub(center.multiplyScalar(scale));

            setupModel(fallback);
          }
        );
      } catch {
        if (!disposed) {
          const fallback = createFallbackHumanoid();
          const box = new THREE.Box3().setFromObject(fallback);
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const scale = 1.4 / maxDim;
          fallback.scale.setScalar(scale);
          const center = box.getCenter(new THREE.Vector3());
          fallback.position.sub(center.multiplyScalar(scale));

          setupModel(fallback);
        }
      }
    })();

    // Initialize orbitGroup offset responsively based on viewport width
    const setResponsiveOffset = () => {
      if (window.innerWidth < 768) {
        orbitGroup.position.set(0, 0, 0);
      } else {
        orbitGroup.position.set(0.35, -0.15, 0); // Shift right and slightly down
      }
    };
    setResponsiveOffset();

    /* ---- Resize ---- */
    function onResize() {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      setResponsiveOffset();
    }
    window.addEventListener('resize', onResize);

    /* ---- Animation loop ---- */
    const clock = new THREE.Clock();
    let rafId: number;

    function animate() {
      rafId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);
      if (idleUpdate) idleUpdate();
      if (mouseTracker) mouseTracker.update();

      // Continuous rotation on Y axis (0.003 rad/frame)
      orbitGroup.rotation.y += 0.003;

      // Update particle ring orbit
      const posAttr = pGeo.getAttribute('position') as THREE.BufferAttribute;
      for (let i = 0; i < pCount; i++) {
        pAngles[i] += pSpeeds[i] * delta;
        const i3 = i * 3;
        posAttr.array[i3] = Math.cos(pAngles[i]) * pRadii[i];
        posAttr.array[i3 + 1] = pYPos[i];
        posAttr.array[i3 + 2] = Math.sin(pAngles[i]) * pRadii[i];
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    }

    animate();

    /* ---- Cleanup ---- */
    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);

      if (mouseTracker) mouseTracker.cleanup();

      // Dispose scene objects
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.geometry?.dispose();
          if (Array.isArray(mesh.material)) {
            mesh.material.forEach((m) => m.dispose());
          } else {
            mesh.material?.dispose();
          }
        }
      });

      pGeo.dispose();
      pMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      data-cursor="avatar"
      className="w-full h-full"
      style={{ minHeight: '300px' }}
    />
  );
}
