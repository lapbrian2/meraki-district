<template>
  <div v-if="visible" class="archival-timeline" aria-hidden="true">
    <div class="timeline-line" />
    <div class="timeline-nib" :style="{ top: nibPosition + 'vh' }" />
    <div class="timeline-label" :style="{ top: nibPosition + 'vh' }">
      {{ currentLabel }}
    </div>
  </div>
</template>

<script setup lang="ts">
const nibPosition = ref(5)
const currentLabel = ref('01')
const visible = ref(false)

onMounted(() => {
  if (import.meta.client && window.innerWidth > 1024) {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    visible.value = true

    const sections = [
      'EST. 2026', 'OUR CONVICTION', 'THE CREATORS',
      'THE JOURNEY', 'PHILOSOPHY', 'THE ROAD', 'MEET ON'
    ]

    window.addEventListener('scroll', () => {
      const scrollPercent = window.scrollY / (document.body.scrollHeight - window.innerHeight)
      nibPosition.value = 5 + (scrollPercent * 90)
      const sectionIndex = Math.min(Math.floor(scrollPercent * sections.length), sections.length - 1)
      currentLabel.value = String(sectionIndex + 1).padStart(2, '0')
    }, { passive: true })
  }
})
</script>

<style scoped>
.archival-timeline {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 50;
  pointer-events: none;
}

.timeline-line {
  position: fixed;
  left: 20px;
  top: 5vh;
  width: 1px;
  height: 90vh;
  background: linear-gradient(to bottom, transparent, var(--color-gold) 10%, var(--color-gold) 90%, transparent);
  opacity: 0.2;
}

.timeline-nib {
  position: fixed;
  left: 16px;
  width: 9px;
  height: 9px;
  background: var(--color-gold);
  border-radius: 50%;
  transform: translateY(-50%);
  transition: top 0.1s linear;
  box-shadow: 0 0 8px rgba(184, 150, 78, 0.4);
}

.timeline-label {
  position: fixed;
  left: 34px;
  font-family: var(--font-body);
  font-size: 0.5625rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  color: var(--color-gold);
  transform: translateY(-50%);
  transition: top 0.1s linear;
  opacity: 0.6;
}
</style>
