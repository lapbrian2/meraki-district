<template>
  <div ref="marqueeEl" class="marquee" aria-hidden="true">
    <div class="marquee-track">
      <span v-for="i in 2" :key="i" class="marquee-content">
        <span v-for="word in words" :key="`${i}-${word}`" class="marquee-word">
          {{ word }}<span class="marquee-dot">&middot;</span>
        </span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const words = ['The work comes first', 'Mastery is a daily practice', 'Credentials are earned', 'Craft meets culture']

const marqueeEl = ref<HTMLElement | null>(null)
let tickerFn: (() => void) | null = null

onMounted(() => {
  if (!marqueeEl.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const track = marqueeEl.value.querySelector('.marquee-track') as HTMLElement
  if (!track) return

  const { $lenis } = useNuxtApp()

  const content = track.querySelector('.marquee-content') as HTMLElement
  const contentWidth = content.offsetWidth

  let xPos = 0
  const baseSpeed = 0.5

  tickerFn = () => {
    const velocity = ($lenis as any)?.velocity ?? 0
    const speedBoost = 1 + Math.min(Math.abs(velocity) * 0.04, 3)
    xPos -= baseSpeed * speedBoost

    if (Math.abs(xPos) >= contentWidth) {
      xPos += contentWidth
    }

    gsap.set(track, { x: xPos })
  }

  gsap.ticker.add(tickerFn)
})

onUnmounted(() => {
  if (tickerFn) gsap.ticker.remove(tickerFn)
})
</script>

<style scoped>
.marquee {
  overflow: hidden;
  padding: var(--space-6) 0;
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  background: var(--color-background);
}

.marquee-track {
  display: flex;
  width: max-content;
}

.marquee-content {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.marquee-word {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  white-space: nowrap;
  text-transform: uppercase;
}

.marquee-dot {
  display: inline-block;
  margin: 0 var(--space-8);
  color: var(--color-gold);
  font-size: var(--text-h2);
}

@media (max-width: 768px) {
  .marquee {
    padding: var(--space-4) 0;
  }

  .marquee-word {
    font-size: var(--text-h4);
  }

  .marquee-dot {
    font-size: var(--text-h3);
    margin: 0 var(--space-4);
  }
}
</style>