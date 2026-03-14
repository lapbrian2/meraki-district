<template>
  <div class="scroll-progress" aria-hidden="true" :style="{ transform: 'scaleX(' + progress + ')' }" />
</template>

<script setup lang="ts">
const progress = ref(0)

function onScroll() {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  progress.value = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.scroll-progress {
  height: 2px;
  background: var(--color-gold);
  transform-origin: left;
  transform: scaleX(0);
  pointer-events: none;
  will-change: transform;
}
</style>
