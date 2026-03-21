<template>
  <section ref="section" class="stats section-dark">
    <div class="section-default stats-inner">
      <div class="stats-grid">
        <div v-for="stat in stats" :key="stat.label" class="stat">
          <span class="stat-value">
            {{ stat.display }}{{ stat.suffix }}
          </span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'

interface Stat {
  target: number
  suffix: string
  label: string
  display: number
}

const stats = reactive<Stat[]>([
  { target: 11, suffix: '', label: 'Districts', display: 0 },
  { target: 4, suffix: '', label: 'Active Districts', display: 0 },
  { target: 200, suffix: '+', label: 'Creator Applications', display: 0 },
  { target: 1, suffix: '', label: 'Shared Infrastructure', display: 0 },
])

const section = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) {
    stats.forEach(s => { s.display = s.target })
    return
  }

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    stats.forEach((stat, i) => {
      const proxy = { value: 0 }
      gsap.to(proxy, {
        value: stat.target,
        duration: 2,
        delay: i * 0.15,
        ease: 'power2.out',
        snap: { value: 1 },
        scrollTrigger: {
          trigger: section.value,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        onUpdate: () => {
          stat.display = proxy.value
        },
      })
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.stats {
  padding: var(--space-16) 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: var(--color-border);
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}

.stat {
  background: var(--color-dark-bg);
  padding: var(--space-12) var(--space-8);
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.stat-value {
  font-family: var(--font-mono);
  font-size: var(--text-display);
  font-weight: 300;
  color: var(--color-dark-text);
  line-height: 1;
  letter-spacing: var(--tracking-tight);
}

.stat-label {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
