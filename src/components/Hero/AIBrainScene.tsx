import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* ═══════════════════════════════════════════════════════════════════════════
 *  MINIMAL AI SPHERE — Clean. Elegant. Premium.
 * ═══════════════════════════════════════════════════════════════════════════ */

const AIBrainScene = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const container = mountRef.current

    /* ── Renderer ─────────────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    )
    camera.position.set(0, 0, 5.5)

    /* ── Lighting (minimal) ───────────────────────────────────────────── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.2))
    const cyanLight = new THREE.PointLight(0x00f5ff, 1.5)
    cyanLight.position.set(-3, 2, 2)
    scene.add(cyanLight)
    const whiteLight = new THREE.PointLight(0xffffff, 0.4)
    whiteLight.position.set(3, -1, 3)
    scene.add(whiteLight)

    /* ── Master group ─────────────────────────────────────────────────── */
    const master = new THREE.Group()
    scene.add(master)

    /* ═══ ELEMENT 1: CENTRAL SPHERE ═══════════════════════════════════ */
    const sphereGroup = new THREE.Group()
    master.add(sphereGroup)

    // Inner solid sphere
    const innerGeo = new THREE.SphereGeometry(1.2, 64, 64)
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x000814,
      emissive: 0x00f5ff,
      emissiveIntensity: 0.15,
      roughness: 0.1,
      metalness: 0.9,
    })
    sphereGroup.add(new THREE.Mesh(innerGeo, innerMat))

    // Outer wireframe sphere
    const outerGeo = new THREE.SphereGeometry(1.25, 24, 24)
    const outerMat = new THREE.MeshBasicMaterial({
      color: 0x00f5ff,
      wireframe: true,
      transparent: true,
      opacity: 0.12,
    })
    sphereGroup.add(new THREE.Mesh(outerGeo, outerMat))

    /* ═══ ELEMENT 2: THREE ORBIT LINES ════════════════════════════════ */
    interface Orbit {
      group: THREE.Group
      dot: THREE.Mesh
      radius: number
      speed: number
      dotCycleDuration: number
      dotAngle: number
    }

    const orbitConfigs = [
      { radius: 1.8, tiltX: Math.PI * 0.15, tiltZ: 0, opacity: 0.25, speed: 0.004, cycle: 4 },
      { radius: 2.1, tiltX: Math.PI * 0.5, tiltZ: Math.PI * 0.3, opacity: 0.15, speed: -0.003, cycle: 6 },
      { radius: 2.5, tiltX: Math.PI * 0.7, tiltZ: Math.PI * 0.6, opacity: 0.08, speed: 0.002, cycle: 8 },
    ]

    const orbits: Orbit[] = []

    for (const cfg of orbitConfigs) {
      const group = new THREE.Group()
      group.rotation.x = cfg.tiltX
      group.rotation.z = cfg.tiltZ

      // Ring line (360 points = smooth circle)
      const ringPts: THREE.Vector3[] = []
      for (let i = 0; i <= 360; i++) {
        const a = (i / 360) * Math.PI * 2
        ringPts.push(new THREE.Vector3(
          Math.cos(a) * cfg.radius,
          0,
          Math.sin(a) * cfg.radius,
        ))
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPts)
      group.add(new THREE.Line(ringGeo, new THREE.LineBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: cfg.opacity,
      })))

      // Traveling dot
      const dotGeo = new THREE.SphereGeometry(0.035, 12, 12)
      const dotMat = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
      })
      // Add a glow layer
      const dotGlow = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 12, 12),
        new THREE.MeshBasicMaterial({
          color: 0x00f5ff,
          transparent: true,
          opacity: 0.25,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      )
      const dot = new THREE.Mesh(dotGeo, dotMat)
      dot.add(dotGlow)
      dot.position.set(cfg.radius, 0, 0)
      group.add(dot)

      master.add(group)

      orbits.push({
        group,
        dot,
        radius: cfg.radius,
        speed: cfg.speed,
        dotCycleDuration: cfg.cycle,
        dotAngle: 0,
      })
    }

    /* ═══ ELEMENT 3: SUBTLE PARTICLE FIELD ════════════════════════════ */
    const pCount = 80
    const pPos = new Float32Array(pCount * 3)
    for (let i = 0; i < pCount; i++) {
      // Random point in sphere, radius 3.5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const r = 1.8 + Math.random() * 1.7 // 1.8–3.5 range (outside the orbits)
      pPos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pPos[i * 3 + 2] = r * Math.cos(phi)
    }
    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.018,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    master.add(new THREE.Points(pGeo, pMat))

    /* ═══ ELEMENT 4: SOFT GLOW HALO ══════════════════════════════════ */
    const haloGeo = new THREE.PlaneGeometry(3, 3)
    const haloMat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {},
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        void main() {
          vec2 center = vUv - 0.5;
          float dist = length(center) * 2.0;
          float alpha = smoothstep(1.0, 0.0, dist) * 0.08;
          gl_FragColor = vec4(0.0, 0.96, 1.0, alpha);
        }
      `,
    })
    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.position.z = -0.5
    scene.add(halo) // Added to scene, not master, so it doesn't rotate

    /* ═══ ELEMENT 5: 4 CLEAN DATA LINES ══════════════════════════════ */
    interface DataLine {
      line: THREE.Line
      marker: THREE.Mesh
      lineMat: THREE.LineBasicMaterial
      markerMat: THREE.MeshBasicMaterial
      phaseOffset: number
    }

    const dataLines: DataLine[] = []
    const lineDirections = [
      new THREE.Vector3(0, 1, 0),   // top
      new THREE.Vector3(1, 0, 0),   // right
      new THREE.Vector3(0, -1, 0),  // bottom
      new THREE.Vector3(-1, 0, 0),  // left
    ]

    for (let i = 0; i < 4; i++) {
      const dir = lineDirections[i]
      const start = dir.clone().multiplyScalar(1.25) // sphere surface
      const end = dir.clone().multiplyScalar(1.25 + 0.8) // 0.8 units out

      const lineMat = new THREE.LineBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.4,
      })
      const lineGeo = new THREE.BufferGeometry().setFromPoints([start, end])
      const line = new THREE.Line(lineGeo, lineMat)
      sphereGroup.add(line)

      // End marker — small square
      const markerMat = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.4,
      })
      const marker = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.04, 0.04), markerMat)
      marker.position.copy(end)
      sphereGroup.add(marker)

      dataLines.push({
        line, marker, lineMat, markerMat,
        phaseOffset: (i * Math.PI) / 2, // top=0, right=π/2, bottom=π, left=3π/2
      })
    }

    /* ═══ MOUSE INTERACTION ══════════════════════════════════════════ */
    const mouse = { x: 0, y: 0 }
    const currentTilt = { x: 0, y: 0 }
    const maxTilt = (8 * Math.PI) / 180 // 8 degrees

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouseMove)

    /* ═══ RESPONSIVE SCALE ═══════════════════════════════════════════ */
    const getScale = () => window.innerWidth < 768 ? 0.7 : 1.0

    /* ═══ ANIMATION LOOP ═════════════════════════════════════════════ */
    const clock = new THREE.Clock()
    let frameId: number

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      /* ── Sphere rotation ── */
      sphereGroup.rotation.y += 0.0015

      /* ── Mouse tilt (smooth) ── */
      const targetTiltX = mouse.y * maxTilt
      const targetTiltY = mouse.x * maxTilt
      currentTilt.x += (targetTiltX - currentTilt.x) * 0.03
      currentTilt.y += (targetTiltY - currentTilt.y) * 0.03
      master.rotation.x = currentTilt.x
      master.rotation.y = currentTilt.y

      /* ── Orbit line rotation + traveling dots ── */
      for (const orb of orbits) {
        orb.group.rotation.y += orb.speed
        orb.dotAngle = ((elapsed % orb.dotCycleDuration) / orb.dotCycleDuration) * Math.PI * 2
        orb.dot.position.set(
          Math.cos(orb.dotAngle) * orb.radius,
          0,
          Math.sin(orb.dotAngle) * orb.radius,
        )
      }

      /* ── Data line pulse ── */
      for (const dl of dataLines) {
        const opacity = 0.2 + (Math.sin(elapsed * 1.5 + dl.phaseOffset) * 0.5 + 0.5) * 0.4
        dl.lineMat.opacity = opacity
        dl.markerMat.opacity = opacity
      }

      /* ── Halo faces camera ── */
      halo.lookAt(camera.position)

      /* ── Scale for mobile ── */
      const s = getScale()
      master.scale.setScalar(s)

      renderer.render(scene, camera)
    }

    animate()

    /* ── Resize ────────────────────────────────────────────────────── */
    const onResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    /* ── Cleanup ───────────────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)

      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh || (child as THREE.Line).isLine) {
          const obj = child as THREE.Mesh
          obj.geometry?.dispose()
          const m = obj.material
          if (Array.isArray(m)) m.forEach((mm) => mm.dispose())
          else (m as THREE.Material)?.dispose()
        }
      })
      pGeo.dispose()
      pMat.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: '100%', height: '100%', position: 'relative' }}
    />
  )
}

export default AIBrainScene
