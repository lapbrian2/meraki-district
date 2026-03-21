<template>
  <div ref="watermarkRef" class="ghost-watermark" aria-hidden="true">
    <span v-for="(word, i) in words" :key="i" :style="positions[i]">{{ word }}</span>
  </div>
</template>

<script setup lang="ts">
const words = ['PRECISION', 'INTEGRITY', 'MASTERY', 'CRAFT', 'VISION']
const positions = [
  { top: '8%', left: '-5%' },
  { top: '28%', left: '40%' },
  { top: '48%', left: '-10%' },
  { top: '68%', left: '50%' },
  { top: '88%', left: '5%' },
]

const watermarkRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (import.meta.client) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = watermarkRef.value
    if (!el) return
    window.addEventListener('scroll', () => {
      const offset = window.scrollY * 0.08
      el.style.transform = `translateY(${offset}px)`
    }, { passive: true })
  }
})
</script>

<style scoped>
.ghost-watermark {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
}

.ghost-watermark span {
  position: absolute;
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(60px, 8vw, 120px);
  font-weight: 300;
  opacity: 0.02;
  color: var(--color-gold);
  white-space: nowrap;
  user-select: none;
}

@media (max-width: 768px) {
  .ghost-watermark {
    display: none;
  }
}
</style>
