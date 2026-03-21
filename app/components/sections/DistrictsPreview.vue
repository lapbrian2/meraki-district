<template>
  <section ref="section" class="roadmap section-dark">
    <div class="section-wide roadmap-inner">
      <div class="roadmap-header">
        <p class="overline reveal">The Ecosystem</p>
        <h2 class="word-reveal">Eleven districts, one road.</h2>
      </div>

      <div class="roadmap-map">
        <!-- SVG road path -->
        <svg
          ref="svgEl"
          class="roadmap-svg"
          :viewBox="`0 0 ${svgWidth} ${svgHeight}`"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
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
const svgEl = ref<SVGSVGElement | null>(null)
const roadPath = ref<SVGPathElement | null>(null)

useGsapScrollReveal(section, '.reveal', { stagger: 0.08 })
useWordReveal(section, '.word-reveal')

// SVG dimensions
const svgWidth = 1200
const svgHeight = 1100
const nodeCount = districts.length
const segmentHeight = svgHeight / (nodeCount + 1)

// Build a serpentine road path
const roadD = computed(() => {
  const centerX = svgWidth / 2
  const amplitude = 220 // how far left/right the road swings
  const points: string[] = []

  // Start at top center
  points.push(`M ${centerX} 0`)

  for (let i = 0; i < nodeCount; i++) {
    const y = segmentHeight * (i + 1)
    const direction = i % 2 === 0 ? -1 : 1
    const x = centerX + amplitude * direction

    // Control points for smooth S-curves
    const prevY = i === 0 ? 0 : segmentHeight * i
    const cp1x = i === 0 ? centerX : centerX + amplitude * -direction
    const cp1y = prevY + segmentHeight * 0.6
    const cp2x = x
    const cp2y = y - segmentHeight * 0.4

    points.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`)
  }

  // End at bottom center
  const lastY = segmentHeight * nodeCount
  const lastDir = (nodeCount - 1) % 2 === 0 ? -1 : 1
  const lastX = centerX + amplitude * lastDir
  points.push(`C ${lastX} ${lastY + segmentHeight * 0.4}, ${centerX} ${svgHeight - segmentHeight * 0.3}, ${centerX} ${svgHeight}`)

  return points.join(' ')
})

// Position nodes along the road
function nodeStyle(i: number, d: District) {
  const centerX = svgWidth / 2
  const amplitude = 220
  const y = segmentHeight * (i + 1)
  const direction = i % 2 === 0 ? -1 : 1
  const x = centerX + amplitude * direction

  // Convert SVG coords to percentages
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
    // Show everything immediately
    section.value.querySelectorAll('.roadmap-node').forEach((el) => {
      ;(el as HTMLElement).style.opacity = '1'
      ;(el as HTMLElement).style.transform = 'translate(-50%, -50%)'
    })
    return
  }

  await waitForAncestorAnimations(section.value)
  if (!section.value || !roadPath.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const path = roadPath.value!
    const totalLength = path.getTotalLength()

    // Set up dash for draw animation
    gsap.set(path, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    })

    // Draw the road on scroll
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: section.value,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
      },
    })

    // Fade in nodes sequentially
    const nodes = gsap.utils.toArray<HTMLElement>('.roadmap-node')
    nodes.forEach((node, i) => {
      gsap.fromTo(node,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section.value,
            start: () => `top+=${(i / nodeCount) * 60 + 15}% top`,
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
  padding: var(--space-32) 0;
  overflow: hidden;
}

.roadmap-header {
  margin-bottom: var(--space-16);
}

.roadmap-header h2 {
  margin-top: var(--space-4);
  font-size: var(--text-h1);
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
}

/* Map container */
.roadmap-map {
  position: relative;
  width: 100%;
  aspect-ratio: 1200 / 1100;
  max-height: 1100px;
}

.roadmap-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.road-line {
  opacity: 0.4;
}

/* Node positioning */
.roadmap-node {
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 2;
  opacity: 0;
}

/* Marker dot on the road */
.node-marker {
  position: absolute;
  width: 10px;
  height: 10px;
  background: var(--color-accent);
  border-radius: 0;
  top: 50%;
  z-index: 3;
  box-shadow: 0 0 12px color-mix(in srgb, var(--color-accent) 40%, transparent);
}

.node-left .node-marker {
  right: -28px;
  transform: translateY(-50%);
}

.node-right .node-marker {
  left: -28px;
  transform: translateY(-50%);
}

/* Card */
.node-card {
  display: block;
  text-decoration: none;
  color: inherit;
  background-image: none;
  padding: var(--space-4) var(--space-6);
  max-width: 320px;
  position: relative;
  transition: transform var(--duration-normal) var(--ease-out);
}

.node-left .node-card {
  text-align: right;
  margin-right: var(--space-8);
}

.node-right .node-card {
  text-align: left;
  margin-left: var(--space-8);
}

.node-card:hover {
  transform: translateY(-2px);
}

.node-card:hover .node-name {
  color: var(--color-accent);
}

.node-card:hover .node-desc {
  opacity: 1;
  max-height: 80px;
  margin-top: var(--space-2);
}

.node-card:hover .node-link {
  opacity: 1;
  max-height: 30px;
  margin-top: var(--space-2);
}

.node-card:hover .node-number {
  opacity: 0.2;
}

/* Number */
.node-number {
  font-family: var(--font-mono);
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 300;
  letter-spacing: var(--tracking-ultra-wide);
  color: var(--color-accent);
  opacity: 0.1;
  line-height: 1;
  display: block;
  transition: opacity var(--duration-normal) ease;
  pointer-events: none;
}

/* Type label */
.node-type {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-1);
}

/* Name */
.node-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  transition: color var(--duration-normal) ease;
}

/* Description (hidden until hover) */
.node-desc {
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 0.4s var(--ease-out),
              opacity 0.3s ease,
              margin-top 0.3s ease;
}

/* Visit link (hidden until hover) */
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

/* CTA */
.roadmap-cta {
  margin-top: var(--space-16);
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

  .roadmap-map {
    aspect-ratio: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
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
    opacity: 0.3;
  }

  .roadmap-node {
    position: relative;
    top: auto !important;
    left: auto !important;
    transform: none;
    opacity: 1;
  }

  .node-marker {
    position: absolute;
    left: calc(-1 * var(--space-12) + var(--space-4) - 5px);
    top: var(--space-4);
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
    opacity: 0.7;
    margin-top: var(--space-2);
  }

  .node-link {
    max-height: none;
    opacity: 1;
    margin-top: var(--space-2);
  }

  .node-number {
    font-size: 2rem;
    opacity: 0.15;
  }
}

/* ─── Tablet ─── */
@media (min-width: 769px) and (max-width: 1024px) {
  .roadmap-map {
    aspect-ratio: 1200 / 1300;
    max-height: 1300px;
  }
}
</style>
