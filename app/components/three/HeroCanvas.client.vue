<template>
  <canvas ref="canvasRef" class="hero-canvas" />
</template>

<script setup lang="ts">
import * as THREE from 'three'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const canvasRef = ref<HTMLCanvasElement | null>(null)
const { scene, camera, init, render, resize, dispose, prefersReducedMotion } = useThreeScene(canvasRef, {
  alpha: true,
  antialias: true,
})

const proxy = reactive({ scroll: 0, mouseX: 0, mouseY: 0 })

// Simplex noise GLSL (Ashima Arts — MIT license)
const noiseGLSL = `
vec3 mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 permute(vec4 x){return mod289(((x*34.0)+1.0)*x);}
vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=mod289(i);
  vec4 p=permute(permute(permute(i.z+vec4(0.0,i1.z,i2.z,1.0))+i.y+vec4(0.0,i1.y,i2.y,1.0))+i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=0.142857142857;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}`

const vertexShader = `${noiseGLSL}
uniform float uTime;
uniform float uScroll;
varying vec2 vUv;
varying float vElevation;
varying vec3 vNormal;
void main(){
  vUv=uv;vec3 pos=position;
  float n1=snoise(vec3(pos.x*0.3,pos.z*0.3,uTime*0.08+uScroll*0.3));
  float n2=snoise(vec3(pos.x*0.8,pos.z*0.8,uTime*0.15))*0.35;
  float elev=(n1+n2)*1.2;pos.y+=elev;vElevation=elev;
  float eps=0.05;
  float nx=snoise(vec3((pos.x+eps)*0.3,pos.z*0.3,uTime*0.08+uScroll*0.3))-snoise(vec3((pos.x-eps)*0.3,pos.z*0.3,uTime*0.08+uScroll*0.3));
  float nz=snoise(vec3(pos.x*0.3,(pos.z+eps)*0.3,uTime*0.08+uScroll*0.3))-snoise(vec3(pos.x*0.3,(pos.z-eps)*0.3,uTime*0.08+uScroll*0.3));
  vNormal=normalize(vec3(-nx*2.0,1.0,-nz*2.0));
  gl_Position=projectionMatrix*modelViewMatrix*vec4(pos,1.0);
}`

const fragmentShader = `
uniform float uTime;
uniform float uScroll;
varying vec2 vUv;
varying float vElevation;
varying vec3 vNormal;
void main(){
  vec3 ink=vec3(0.035,0.035,0.043);
  vec3 gold=vec3(0.722,0.588,0.306);
  vec3 warm=vec3(0.95,0.92,0.88);
  vec3 lightDir=normalize(vec3(0.5,1.0,0.3));
  float diff=max(dot(vNormal,lightDir),0.0);
  float ridge=smoothstep(0.3,1.2,vElevation);
  vec3 col=mix(ink,gold,ridge*0.2);
  col+=warm*diff*0.06;
  float dist=length(vUv-vec2(0.5));
  float vig=smoothstep(0.65,0.25,dist);
  float scrollFade=1.0-smoothstep(0.0,0.6,uScroll);
  gl_FragColor=vec4(col,vig*scrollFade*0.45);
}`

let material: THREE.ShaderMaterial | null = null
let rafId: number | null = null

onMounted(() => {
  try {
    const tier = init()
    if (!tier) return

    // Triangle budget: 64x64=8192, 48x48=4608, 32x32=2048 (all under 10k)
    const segments = tier === 'high' ? 64 : tier === 'medium' ? 48 : 32
    const geometry = new THREE.PlaneGeometry(12, 12, segments, segments)
    geometry.rotateX(-Math.PI * 0.5)

    material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: { uTime: { value: 0 }, uScroll: { value: 0 } },
      transparent: true,
      side: THREE.DoubleSide,
      depthWrite: false,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.y = -1.5
    scene.add(mesh)

    camera.position.set(0, 4, 6)
    camera.lookAt(0, 0, 0)

    // Scroll proxy
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.create({
      trigger: 'body',
      start: 'top top',
      end: '30% top',
      scrub: 1.5,
      onUpdate: (self) => { proxy.scroll = self.progress },
    })

    // prefers-reduced-motion: render once static, no animation loop
    if (prefersReducedMotion()) {
      material.uniforms.uTime.value = 1.0
      render()
      window.addEventListener('resize', resize)
      return
    }

    // Mouse parallax (skip on low-end)
    if (tier !== 'low') {
      window.addEventListener('mousemove', onMouseMove, { passive: true })
    }

    const clock = new THREE.Clock()
    function animate() {
      rafId = requestAnimationFrame(animate)
      if (material) {
        material.uniforms.uTime.value = clock.getElapsedTime()
        material.uniforms.uScroll.value = proxy.scroll
      }
      camera.position.x = proxy.mouseX * 0.3
      camera.position.z = 6 + proxy.mouseY * 0.2
      camera.lookAt(0, 0, 0)
      render()
    }
    animate()
    window.addEventListener('resize', resize)
  } catch (e) {
    console.warn('[HeroCanvas] WebGL init failed:', e)
  }
})

function onMouseMove(e: MouseEvent) {
  const x = (e.clientX / window.innerWidth - 0.5) * 2
  const y = (e.clientY / window.innerHeight - 0.5) * 2
  gsap.to(proxy, { mouseX: x, mouseY: y, duration: 1.5, ease: 'power2.out' })
}

onUnmounted(() => {
  if (rafId !== null) cancelAnimationFrame(rafId)
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('resize', resize)
  ScrollTrigger.getAll().forEach((t) => t.kill())
  dispose()
})
</script>

<style scoped>
.hero-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}
</style>
