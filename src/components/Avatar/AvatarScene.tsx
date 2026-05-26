import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm'

const AvatarScene = () => {
  const mountRef = useRef<HTMLDivElement>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!mountRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(30, 0.6, 0.1, 100)
    camera.position.set(0, 1.4, 4.5)

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    })
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.outputColorSpace = THREE.SRGBColorSpace
    mountRef.current.appendChild(renderer.domElement)

    // Lighting for anime look
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.5)
    mainLight.position.set(1, 2, 3)
    scene.add(mainLight)

    // Cyan rim light (signature look)
    const rimLight = new THREE.PointLight(0x00f5ff, 3, 10)
    rimLight.position.set(-2, 2, -1)
    scene.add(rimLight)

    // Blue fill light
    const fillLight = new THREE.PointLight(0x4444ff, 1, 10)
    fillLight.position.set(2, 0, -2)
    scene.add(fillLight)

    // Mouse tracking
    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Load VRM
    let currentVrm: any = null
    const loader = new GLTFLoader()
    loader.register((parser) => new VRMLoaderPlugin(parser))

    loader.load(
      './avatar/harsha-avatar.vrm', // changed to relative path for gh-pages support
      (gltf) => {
        const vrm = gltf.userData.vrm
        currentVrm = vrm
        VRMUtils.removeUnnecessaryJoints(gltf.scene)
        scene.add(vrm.scene)

        // Center avatar
        vrm.scene.position.set(0, -0.8, 0)

        // Entry animation
        vrm.scene.scale.set(0, 0, 0)
        let scaleProgress = 0
        const scaleIn = setInterval(() => {
          scaleProgress += 0.05
          const s = Math.min(1, scaleProgress)
          vrm.scene.scale.set(s, s, s)
          if (s >= 1) clearInterval(scaleIn)
        }, 16)

        // Add cyan particle aura
        const particleCount = 120
        const positions = new Float32Array(particleCount * 3)
        for (let i = 0; i < particleCount; i++) {
          const angle = (i / particleCount) * Math.PI * 2
          const radius = 0.9 + Math.random() * 0.3
          const height = Math.random() * 2.5 - 0.5
          positions[i * 3] = Math.cos(angle) * radius
          positions[i * 3 + 1] = height
          positions[i * 3 + 2] = Math.sin(angle) * radius
        }
        const particleGeo = new THREE.BufferGeometry()
        particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        const particleMat = new THREE.PointsMaterial({
          color: 0x00f5ff,
          size: 0.025,
          transparent: true,
          opacity: 0.7,
          blending: THREE.AdditiveBlending
        })
        const particles = new THREE.Points(particleGeo, particleMat)
        vrm.scene.add(particles)
        
        // Disable loading state
        setLoading(false)
      },
      (progress) => {
        console.log('Loading VRM:', (progress.loaded / progress.total * 100).toFixed(0) + '%')
      },
      (error) => {
        console.error('VRM load error:', error)
      }
    )

    // Animation loop
    let frameId: number
    const clock = new THREE.Clock()
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime()

      if (currentVrm) {
        // Floating animation
        currentVrm.scene.position.y = -0.8 + Math.sin(elapsed * 0.8) * 0.04

        // Mouse head tracking (smooth lerp)
        currentVrm.scene.rotation.y += (mouse.x * 0.3 - currentVrm.scene.rotation.y) * 0.05
        
        // Subtle breathing on X
        currentVrm.scene.rotation.x += (mouse.y * 0.1 - currentVrm.scene.rotation.x) * 0.05

        // Rotate particle aura
        const particles = currentVrm.scene.children.find(
          (c: any) => c instanceof THREE.Points
        )
        if (particles) particles.rotation.y = elapsed * 0.3

        // Pulse rim light
        rimLight.intensity = 2.5 + Math.sin(elapsed * 2) * 0.5

        currentVrm.update(clock.getDelta())
      }

      renderer.render(scene, camera)
    }
    animate()

    // Resize handler
    const handleResize = () => {
      if (!mountRef.current) return
      const w = mountRef.current.clientWidth
      const h = mountRef.current.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
      if (mountRef.current && renderer.domElement.parentNode === mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div 
      ref={mountRef} 
      style={{ 
        width: '100%', 
        height: '100%',
        minHeight: '600px',
        position: 'relative'
      }}
    >
      {loading && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#00f5ff', fontFamily: 'JetBrains Mono, monospace',
          fontSize: '14px', letterSpacing: '0.1em',
          zIndex: 10,
          pointerEvents: 'none'
        }}>
          LOADING AVATAR...
        </div>
      )}
    </div>
  )
}

export default AvatarScene
