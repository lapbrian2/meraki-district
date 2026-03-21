<template>
  <section ref="section" class="roadmap section-dark">
    <div class="section-wide roadmap-inner">
      <div class="roadmap-header">
        <p class="overline reveal">The Ecosystem</p>
        <h2 class="word-reveal">Eleven districts, one road.</h2>
      </div>

      <div ref="mapEl" class="roadmap-map">
        <!-- SVG road path -->
        <svg
          ref="svgEl"
          class="roadmap-svg"
          :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <!-- Glow behind the road -->
          <defs>
            <filter id="road-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
            </filter>
          </defs>
          <path
            :d="roadD"
            fill="none"
            stroke="var(--color-gold)"
            stroke-width="3"
            stroke-linecap="round"
            class="road-glow"
            :filter="'url(#road-glow)'"
          />
          <path
            ref="roadPath"
            :d="roadD"
            fill="none"
            stroke="var(--color-gold)"
            stroke-width="1.5"
            stroke-linecap="round"
            class="road-line"
          />
        </svg>

        <!-- District nodes -->
        <div
          v-for="(d, i) in districts"
          :key="d.slug"
          class="roadmap-node"
          :class="{ 'node-left': i % 2 === 0, 'node-right': i % 2 === 1 }"
          :style="nodeStyle(i, d)"
        >
          <!-- Connector line from node to road -->
          <div class="node-connector" />
          <div class="node-marker" />
          <NuxtLink :to="`/districts/${d.slug}`" class="node-card">
            <span class="node-number">{{ d.number }}</span>
            <div class="node-content">
              <span class="node-type">{{ d.type }}</span>
              <h3 class="node-name">{{ d.name }}</h3>
              <p class="node-desc">{{ d.description }}</p>
              <span class="node-link">Visit district &rarr;</span>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="roadmap-cta reveal">
        <NuxtLink to="/districts" class="roadmap-link">Explore all districts &rarr;</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'
import type { District } from '~/composables/useDistricts'

const section = ref<HTMLElement | null>(null)
const mapEl = ref<HTMLElement | null>(null)
const svgEl = ref<SVGSVGElement | null>(null)
const roadPath = ref<SVGPathElement | null>(null)

useGsapScrollReveal(section, '.reveal', { stagger: 0.08 })
useWordReveal(section, '.word-reveal')

// SVG dimensions — generous vertical space per node
const svgWidth = 1000
const svgHeight = 2200
const nodeCount = districts.length
const topPad = 80
const bottomPad = 80
const usableHeight = svgHeight - topPad - bottomPad
const segmentHeight = usableHeight / (nodeCount - 1)

// Build a serpentine road path with wider, smoother curves
const roadD = computed(() => {
  const centerX = svgWidth / 2
  const amplitude = 280
  const points: string[] = []

  // Start above the first node
  const firstX = centerX + amplitude * -1
  points.push(`M ${centerX} 0`)
  points.push(`C ${centerX} ${topPad * 0.5}, ${firstX} ${topPad * 0.7}, ${firstX} ${topPad}`)

  for (let i = 1; i < nodeCount; i++) {
    const prevY = topPad + segmentHeight * (i - 1)
    const y = topPad + segmentHeight * i
    const direction = i % 2 === 0 ? -1 : 1
    const prevDir = (i - 1) % 2 === 0 ? -1 : 1
    const x = centerX + amplitude * direction
    const prevX = centerX + amplitude * prevDir

    // Smooth S-curve control points
    const cp1x = prevX
    const cp1y = prevY + segmentHeight * 0.55
    const cp2x = x
    const cp2y = y - segmentHeight * 0.55

    points.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`)
  }

  // End: curve from last node back to center bottom
  const lastDir = (nodeCount - 1) % 2 === 0 ? -1 : 1
  const lastX = centerX + amplitude * lastDir
  const lastY = topPad + segmentHeight * (nodeCount - 1)
  points.push(`C ${lastX} ${lastY + bottomPad * 0.5}, ${centerX} ${svgHeight - bottomPad * 0.3}, ${centerX} ${svgHeight}`)

  return points.join(' ')
})

// Position nodes along the road
function nodeStyle(i: number, d: District) {
  const centerX = svgWidth / 2
  const amplitude = 280
  const y = topPad + segmentHeight * i
  const direction = i % 2 === 0 ? -1 : 1
  const x = centerX + amplitude * direction

  const topPercent = (y / svgHeight) * 100
  const leftPercent = (x / svgWidth) * 100

  return {
    top: `${topPercent}%`,
    left: `${leftPercent}%`,
    '--color-accent': d.accentColor,
    '--color-accent-accessible': d.accentColorAccessible,
  }
}

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value || !roadPath.value) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (reducedMotion) {
    section.value.querySelectorAll('.roadmap-node').forEach((el) => {
      ;(el as HTMLElement).style.opacity = '1'
    })
    return
  }

  await waitForAncestorAnimations(section.value)
  if (!section.value || !roadPath.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const path = roadPath.value!
    const glow = section.value!.querySelector('.road-glow') as SVGPathElement
    const totalLength = path.getTotalLength()

    // Set up dash for draw animation
    gsap.set(path, { strokeDasharray: totalLength, strokeDashoffset: totalLength })
    if (glow) gsap.set(glow, { strokeDasharray: totalLength, strokeDashoffset: totalLength })

    // Draw the road on scroll — synced to the map container
    const drawTl = gsap.timeline({
      scrollTrigger: {
        trigger: mapEl.value,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: 0.8,
      },
    })

    drawTl.to(path, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)
    if (glow) drawTl.to(glow, { strokeDashoffset: 0, ease: 'none', duration: 1 }, 0)

    // Fade in nodes — each tied to the road's progress reaching their position
    const nodes = gsap.utils.toArray<HTMLElement>('.roadmap-node')
    nodes.forEach((node, i) => {
      // Each node appears when the road draw reaches ~its vertical position
      const nodeProgress = i / (nodeCount - 1)
      // Convert to scroll position within the map
      const startOffset = nodeProgress * 80 // 0% to 80% of the map height

      gsap.fromTo(node,
        { opacity: 0, y: 25, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mapEl.value,
            start: () => `top+=${startOffset}% 60%`,
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.roadmap {
  padding: var(--space-32) 0 var(--space-16);
  overflow: hidden;
}

.roadmap-header {
  margin-bottom: var(--space-12);
  text-align: center;
}

.roadmap-header h2 {
  margin-top: var(--space-4);
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
}

/* Map container — tall enough for generous spacing */
.roadmap-map {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  aspect-ratio: 1000 / 2200;
}

.roadmap-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.road-line {
  opacity: 0.5;
}

.road-glow {
  opacity: 0.15;
}

/* ─── Node positioning ─── */
.roadmap-node {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  opacity: 0;
}

/* ─── Connector line from card to road ─── */
.node-connector {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-accent));
  opacity: 0.25;
}

.node-left .node-connector {
  right: -40px;
  background: linear-gradient(to left, transparent, var(--color-accent));
}

.node-right .node-connector {
  left: -40px;
}

/* ─── Marker dot on the road ─── */
.node-marker {
  position: absolute;
  width: 8px;
  height: 8px;
  background: var(--color-accent);
  border-radius: 0;
  top: 50%;
  z-index: 3;
  box-shadow:
    0 0 8px color-mix(in srgb, var(--color-accent) 50%, transparent),
    0 0 24px color-mix(in srgb, var(--color-accent) 20%, transparent);
  transition: transform var(--duration-normal) ease, box-shadow var(--duration-normal) ease;
}

.node-left .node-marker {
  right: -44px;
  transform: translateY(-50%);
}

.node-right .node-marker {
  left: -44px;
  transform: translateY(-50%);
}

.roadmap-node:hover .node-marker {
  transform: translateY(-50%) scale(1.4);
  box-shadow:
    0 0 12px color-mix(in srgb, var(--color-accent) 60%, transparent),
    0 0 32px color-mix(in srgb, var(--color-accent) 30%, transparent);
}

/* ─── Card ─── */
.node-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background-image: none;
  padding: var(--space-3) var(--space-6);
  max-width: 300px;
  position: relative;
  transition: transform var(--duration-normal) var(--ease-out);
}

.node-left .node-card {
  text-align: right;
  margin-right: var(--space-12);
}

.node-right .node-card {
  text-align: left;
  margin-left: var(--space-12);
}

.node-card:hover {
  transform: translateY(-3px);
}

.node-card:hover .node-name {
  color: var(--color-accent);
}

.node-card:hover .node-desc {
  opacity: 1;
  max-height: 100px;
  margin-top: var(--space-2);
}

.node-card:hover .node-link {
  opacity: 1;
  max-height: 30px;
  margin-top: var(--space-3);
}

.node-card:hover .node-number {
  opacity: 0.25;
}

/* ─── Number ─── */
.node-number {
  font-family: var(--font-mono);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 300;
  letter-spacing: var(--tracking-ultra-wide);
  color: var(--color-accent);
  opacity: 0.08;
  line-height: 0.9;
  display: block;
  transition: opacity var(--duration-normal) ease;
  pointer-events: none;
  margin-bottom: var(--space-1);
}

/* ─── Type label ─── */
.node-type {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-1);
}

/* ─── Name ─── */
.node-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 400;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  transition: color var(--duration-normal) ease;
}

/* ─── Description (expand on hover) ─── */
.node-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s var(--ease-out),
              opacity 0.3s ease,
              margin-top 0.3s ease;
}

/* ─── Visit link (expand on hover) ─── */
.node-link {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-accent);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  display: block;
  transition: max-height 0.3s var(--ease-out),
              opacity 0.3s ease,
              margin-top 0.3s ease;
}

/* ─── CTA ─── */
.roadmap-cta {
  margin-top: var(--space-12);
  text-align: center;
}

.roadmap-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-fast) ease;
}

.roadmap-link:hover {
  opacity: 0.7;
}

/* ─── Mobile: vertical road ─── */
@media (max-width: 768px) {
  .roadmap {
    padding: var(--space-16) 0;
  }

  .roadmap-header {
    text-align: left;
  }

  .roadmap-header h2 {
    font-size: var(--text-h1);
  }

  .roadmap-map {
    aspect-ratio: auto;
    height: auto;
    max-width: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-12);
    padding-left: var(--space-12);
    position: relative;
  }

  .roadmap-svg {
    display: none;
  }

  /* Vertical line on left */
  .roadmap-map::before {
    content: '';
    position: absolute;
    left: var(--space-4);
    top: 0;
    bottom: 0;
    width: 1.5px;
    background: var(--color-gold);
    opacity: 0.25;
  }

  .roadmap-node {
    position: relative;
    top: auto !important;
    left: auto !important;
    transform: none;
    opacity: 1;
  }

  .node-connector {
    display: none;
  }

  .node-marker {
    position: absolute;
    left: calc(-1 * var(--space-12) + var(--space-4) - 4px);
    top: var(--space-6);
    right: auto;
    transform: none;
  }

  .node-left .node-card,
  .node-right .node-card {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
    max-width: none;
  }

  .node-desc {
    max-height: none;
    opacity: 0.6;
    margin-top: var(--space-2);
  }

  .node-link {
    max-height: none;
    opacity: 1;
    margin-top: var(--space-2);
  }

  .node-number {
    font-size: 2rem;
    opacity: 0.12;
  }
}

/* ─── Tablet ─── */
@media (min-width: 769px) and (max-width: 1024px) {
  .roadmap-map {
    max-width: 800px;
  }

  .node-card {
    max-width: 260px;
  }

  .node-name {
    font-size: var(--text-h4);
  }
}
</style>
