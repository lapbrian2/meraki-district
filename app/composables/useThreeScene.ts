import * as THREE from 'three'

interface SceneOptions {
  alpha?: boolean
  antialias?: boolean
}

export function useThreeScene(canvas: Ref<HTMLCanvasElement | null>, opts: SceneOptions = {}) {
  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100)
  let renderer: THREE.WebGLRenderer | null = null
  let contextLost = false

  function getDeviceTier(): 'high' | 'medium' | 'low' {
    if (typeof navigator === 'undefined') return 'medium'
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      const gl = document.createElement('canvas').getContext('webgl')
      const ext = gl?.getExtension('WEBGL_debug_renderer_info')
      const gpu = ext ? gl?.getParameter(ext.UNMASKED_RENDERER_WEBGL) : ''
      if (/Mali-[TG]|Adreno 3|PowerVR/i.test(gpu || '')) return 'low'
      return 'medium'
    }
    return 'high'
  }

  function prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  function init() {
    if (!canvas.value) return null
    const tier = getDeviceTier()

    renderer = new THREE.WebGLRenderer({
      canvas: canvas.value,
      antialias: opts.antialias ?? tier === 'high',
      alpha: opts.alpha ?? true,
      powerPreference: 'high-performance',
    })

    const dpr = tier === 'high' ? Math.min(window.devicePixelRatio, 2)
      : tier === 'medium' ? Math.min(window.devicePixelRatio, 1.5)
      : 1.0

    renderer.setPixelRatio(dpr)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.outputColorSpace = THREE.SRGBColorSpace

    canvas.value.addEventListener('webglcontextlost', (e) => {
      e.preventDefault()
      contextLost = true
    })
    canvas.value.addEventListener('webglcontextrestored', () => {
      contextLost = false
    })

    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    return tier
  }

  function render() {
    if (!contextLost && renderer) {
      renderer.render(scene, camera)
    }
  }

  function resize() {
    if (!renderer) return
    const w = window.innerWidth
    const h = window.innerHeight
    camera.aspect = w / h
    camera.updateProjectionMatrix()
    renderer.setSize(w, h)
  }

  function dispose() {
    scene.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.geometry?.dispose()
        if (Array.isArray(obj.material)) {
          obj.material.forEach((m: any) => m.dispose())
        } else {
          obj.material?.dispose()
        }
      }
    })
    renderer?.dispose()
    renderer = null
  }

  return {
    scene,
    camera,
    init,
    render,
    resize,
    dispose,
    getDeviceTier,
    prefersReducedMotion,
    getRenderer: () => renderer,
    isContextLost: () => contextLost,
  }
}
