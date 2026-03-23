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
  z-index: 1;
  overflow: hidden;
}

.ghost-watermark span {
  position: absolute;
  font-family: var(--font-display);
  font-style: italic;
  font-size: clamp(60px, 8vw, 120px);
  font-weight: 300;
  opacity: 0.06;
  color: var(--color-gold);
  white-space: nowrap;
  user-select: none;
  animation: ghostDrift 25s ease-in-out infinite alternate;
}

.ghost-watermark span:nth-child(2) { animation-delay: -5s; animation-duration: 30s; }
.ghost-watermark span:nth-child(3) { animation-delay: -10s; animation-duration: 22s; }
.ghost-watermark span:nth-child(4) { animation-delay: -15s; animation-duration: 28s; }
.ghost-watermark span:nth-child(5) { animation-delay: -8s; animation-duration: 32s; }

@keyframes ghostDrift {
  0% { transform: translateX(0) translateY(0); }
  25% { transform: translateX(30px) translateY(-15px); }
  50% { transform: translateX(-20px) translateY(10px); }
  75% { transform: translateX(15px) translateY(-8px); }
  100% { transform: translateX(-10px) translateY(20px); }
}

@media (prefers-reduced-motion: reduce) {
  .ghost-watermark span {
    animation: none;
  }
}

@media (max-width: 768px) {
  .ghost-watermark {
    display: none;
  }
}
</style>
