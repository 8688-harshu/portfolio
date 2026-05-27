import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/* ────────────────────────────────────────────────────────────────────────────
 *  NeuralNetworkScene — a living, breathing AI brain visualisation
 * ──────────────────────────────────────────────────────────────────────────── */

interface NodeInfo {
  mesh: THREE.Mesh
  layer: number
  position: THREE.Vector3
  baseEmissive: number
}

interface Signal {
  mesh: THREE.Mesh
  from: THREE.Vector3
  to: THREE.Vector3
  progress: number        // 0 → 1
  speed: number           // units per second
  targetNode: NodeInfo
}

const LAYER_X = [-2, -0.7, 0.7, 2]
const LAYER_COUNTS = [8, 24, 24, 8]
const NODE_SPACING = 0.35

const NeuralNetworkScene = () => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const container = mountRef.current

    /* ── renderer ──────────────────────────────────────────────────────── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(container.clientWidth, container.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    container.appendChild(renderer.domElement)

    /* ── scene & camera ────────────────────────────────────────────────── */
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100,
    )
    camera.position.set(0, 0, 5)

    /* ── lighting ──────────────────────────────────────────────────────── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.3))

    const cyanLight = new THREE.PointLight(0x00f5ff, 3, 20)
    cyanLight.position.set(0, 0, 0)
    scene.add(cyanLight)

    const topRight = new THREE.PointLight(0xffffff, 1, 20)
    topRight.position.set(3, 3, 3)
    scene.add(topRight)

    /* ── network parent (for rotation) ─────────────────────────────────── */
    const networkGroup = new THREE.Group()
    scene.add(networkGroup)

    /* ── create nodes ──────────────────────────────────────────────────── */
    const nodeGeo = new THREE.SphereGeometry(0.06, 16, 16)
    const allNodes: NodeInfo[] = []
    const layerNodes: NodeInfo[][] = [[], [], [], []]

    for (let layer = 0; layer < 4; layer++) {
      const count = LAYER_COUNTS[layer]
      const cols = layer === 0 || layer === 3 ? 2 : 4
      const rows = Math.ceil(count / cols)

      for (let i = 0; i < count; i++) {
        const col = i % cols
        const row = Math.floor(i / cols)

        const x = LAYER_X[layer]
        const y = (row - (rows - 1) / 2) * NODE_SPACING
        const z = (col - (cols - 1) / 2) * NODE_SPACING

        const mat = new THREE.MeshPhongMaterial({
          color: 0x00f5ff,
          emissive: 0x00f5ff,
          emissiveIntensity: 0.5,
          shininess: 100,
        })
        const mesh = new THREE.Mesh(nodeGeo, mat)
        mesh.position.set(x, y, z)
        networkGroup.add(mesh)

        const info: NodeInfo = {
          mesh,
          layer,
          position: new THREE.Vector3(x, y, z),
          baseEmissive: 0.5,
        }
        allNodes.push(info)
        layerNodes[layer].push(info)
      }
    }

    /* ── create connections ─────────────────────────────────────────────── */
    interface Connection { from: NodeInfo; to: NodeInfo; line: THREE.Line }
    const connections: Connection[] = []
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f5ff,
      transparent: true,
      opacity: 0.15,
    })

    for (let layer = 0; layer < 3; layer++) {
      const srcNodes = layerNodes[layer]
      const dstNodes = layerNodes[layer + 1]

      for (const src of srcNodes) {
        // find 3 nearest in next layer
        const sorted = [...dstNodes].sort(
          (a, b) => src.position.distanceTo(a.position) - src.position.distanceTo(b.position),
        )
        const nearest = sorted.slice(0, 3)

        for (const dst of nearest) {
          const geo = new THREE.BufferGeometry().setFromPoints([
            src.position.clone(),
            dst.position.clone(),
          ])
          const line = new THREE.Line(geo, lineMat)
          networkGroup.add(line)
          connections.push({ from: src, to: dst, line })
        }
      }
    }

    /* ── signal pulse system ───────────────────────────────────────────── */
    const signalGeo = new THREE.SphereGeometry(0.03, 8, 8)
    const signals: Signal[] = []
    const flashingNodes: { node: NodeInfo; time: number }[] = []

    function spawnSignal() {
      if (connections.length === 0) return
      const conn = connections[Math.floor(Math.random() * connections.length)]
      const mat = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 1,
      })
      const mesh = new THREE.Mesh(signalGeo, mat)
      mesh.position.copy(conn.from.position)
      networkGroup.add(mesh)

      signals.push({
        mesh,
        from: conn.from.position.clone(),
        to: conn.to.position.clone(),
        progress: 0,
        speed: 1 / 0.8,  // traverse in 0.8s
        targetNode: conn.to,
      })
    }

    // spawn signals at regular intervals
    let spawnAccum = 0

    /* ── floating particles ────────────────────────────────────────────── */
    const particleCount = 200
    const pPositions = new Float32Array(particleCount * 3)
    const pVelocities = new Float32Array(particleCount)
    const BOUNDS = 3.5

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = (Math.random() - 0.5) * BOUNDS * 2
      pPositions[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS * 2
      pPositions[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS * 2
      pVelocities[i] = 0.1 + Math.random() * 0.15
    }

    const pGeo = new THREE.BufferGeometry()
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))
    const pMat = new THREE.PointsMaterial({
      color: 0x00f5ff,
      size: 0.015,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particles = new THREE.Points(pGeo, pMat)
    scene.add(particles)

    /* ── mouse tracking ────────────────────────────────────────────────── */
    const mouse = { x: 0, y: 0 }
    const targetRotation = { x: 0, y: 0 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)

    /* ── animation loop ────────────────────────────────────────────────── */
    const clock = new THREE.Clock()
    let frameId: number

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const delta = clock.getDelta()

      /* — spawn signals (every 0.3s, keep 15-20 active) — */
      spawnAccum += delta
      while (spawnAccum >= 0.3) {
        spawnAccum -= 0.3
        if (signals.length < 20) spawnSignal()
      }

      /* — update signals — */
      for (let i = signals.length - 1; i >= 0; i--) {
        const sig = signals[i]
        sig.progress += sig.speed * delta

        if (sig.progress >= 1) {
          // arrived — flash target node
          networkGroup.remove(sig.mesh)
          ;(sig.mesh.material as THREE.MeshBasicMaterial).dispose()
          signals.splice(i, 1)

          flashingNodes.push({ node: sig.targetNode, time: 0 })
        } else {
          sig.mesh.position.lerpVectors(sig.from, sig.to, sig.progress)
          // subtle glow fade
          ;(sig.mesh.material as THREE.MeshBasicMaterial).opacity =
            1 - sig.progress * 0.3
        }
      }

      /* — flash nodes — */
      for (let i = flashingNodes.length - 1; i >= 0; i--) {
        const f = flashingNodes[i]
        f.time += delta
        const mat = f.node.mesh.material as THREE.MeshPhongMaterial

        if (f.time < 0.15) {
          // ramp up 0.5 → 2
          mat.emissiveIntensity = 0.5 + (f.time / 0.15) * 1.5
        } else if (f.time < 0.5) {
          // ramp down 2 → 0.5
          mat.emissiveIntensity = 2 - ((f.time - 0.15) / 0.35) * 1.5
        } else {
          mat.emissiveIntensity = f.node.baseEmissive
          flashingNodes.splice(i, 1)
        }
      }

      /* — slow Y rotation — */
      networkGroup.rotation.y += 0.003

      /* — mouse parallax tilt — */
      const maxTilt = (20 * Math.PI) / 180
      targetRotation.y = mouse.x * maxTilt
      targetRotation.x = mouse.y * maxTilt * 0.5

      networkGroup.rotation.x += (targetRotation.x - networkGroup.rotation.x) * 0.03
      // add mouse Y onto the continuous Y rotation via a lerped offset
      const mouseYOffset = mouse.x * maxTilt
      networkGroup.rotation.y += (mouseYOffset - 0) * 0.01

      /* — floating particles — */
      const posArr = pGeo.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        posArr[i * 3 + 1] += pVelocities[i] * delta
        if (posArr[i * 3 + 1] > BOUNDS) {
          posArr[i * 3 + 1] = -BOUNDS
          posArr[i * 3] = (Math.random() - 0.5) * BOUNDS * 2
          posArr[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS * 2
        }
      }
      pGeo.attributes.position.needsUpdate = true

      /* — pulse cyan light — */
      cyanLight.intensity = 2.5 + Math.sin(clock.getElapsedTime() * 2) * 0.5

      renderer.render(scene, camera)
    }

    animate()

    /* ── resize handler ────────────────────────────────────────────────── */
    const handleResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    /* ── cleanup ───────────────────────────────────────────────────────── */
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)

      // dispose signals
      for (const sig of signals) {
        ;(sig.mesh.material as THREE.Material).dispose()
        sig.mesh.geometry.dispose()
      }
      // dispose scene objects
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh || (child as THREE.Line).isLine) {
          const obj = child as THREE.Mesh
          obj.geometry?.dispose()
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose())
          } else {
            ;(obj.material as THREE.Material)?.dispose()
          }
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
      data-cursor="avatar"
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
      }}
    />
  )
}

export default NeuralNetworkScene
