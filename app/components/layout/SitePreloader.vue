<template>
  <div v-if="visible" ref="preloaderRef" class="preloader" :class="{ 'preloader--exit': exiting }">
    <div class="preloader-content">
      <h1 class="preloader-title">
        <span
          v-for="(letter, i) in letters"
          :key="i"
          class="preloader-letter"
          :style="{ animationDelay: `${i * 120}ms` }"
        >{{ letter }}</span>
      </h1>
      <div class="preloader-line" />
      <p class="preloader-subtitle">ROAD</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  complete: []
}>()

const preloaderRef = ref<HTMLElement | null>(null)
const visible = ref(true)
const exiting = ref(false)
const letters = 'MERAKI'.split('')

// Skip if already shown this session
const alreadyShown = ref(false)

onMounted(() => {
  try {
    if (sessionStorage.getItem('meraki-preloader-shown')) {
      alreadyShown.value = true
      visible.value = false
      emit('complete')
      return
    }
  } catch {
    // sessionStorage unavailable (private browsing) — show preloader anyway
  }

  // Block body scroll during preloader
  document.body.style.overflow = 'hidden'

  // Check for reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReduced) {
    // Show content briefly, then exit quickly
    setTimeout(() => {
      finish()
    }, 500)
    return
  }

  // Start exit sequence at 3.0s (let it breathe)
  setTimeout(() => {
    exiting.value = true
  }, 3000)

  // Remove from DOM after exit animation completes (3.0s delay + 1.2s slide)
  setTimeout(() => {
    finish()
  }, 4200)
})

function finish() {
  visible.value = false
  document.body.style.overflow = ''

  try {
    sessionStorage.setItem('meraki-preloader-shown', '1')
  } catch {
    // sessionStorage unavailable — silently ignore
  }

  emit('complete')
}
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0a0a0a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.preloader-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.preloader-title {
  font-family: var(--font-display);
  font-size: clamp(3rem, 8vw, 6rem);
  font-style: italic;
  font-weight: 300;
  color: var(--color-dark-text, #FAFAF9);
  letter-spacing: var(--tracking-tight);
  line-height: 1;
  margin: 0;
  display: flex;
}

.preloader-letter {
  opacity: 0;
  filter: blur(4px);
  animation: inkAbsorb 0.9s cubic-bezier(0.19, 1, 0.22, 1) forwards;
  display: inline-block;
}

.preloader-line {
  width: clamp(120px, 20vw, 200px);
  height: 1px;
  background: var(--color-gold);
  margin-top: 1rem;
  transform: scaleX(0);
  transform-origin: center;
  animation: lineGrow 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.8s forwards;
}

.preloader-subtitle {
  font-family: var(--font-body);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--color-dark-secondary, #D4D4D8);
  margin: 0.75rem 0 0;
  opacity: 0;
  animation: subtitleFade 0.5s ease 2.3s forwards;
}

/* Exit: entire preloader slides up */
.preloader--exit {
  animation: slideUp 1.2s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

/* ─── Keyframes ─── */

@keyframes inkAbsorb {
  from {
    opacity: 0;
    filter: blur(4px);
  }
  to {
    opacity: 1;
    filter: blur(0);
  }
}

@keyframes lineGrow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}

@keyframes subtitleFade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-100%);
  }
}

/* ─── Reduced Motion ─── */

@media (prefers-reduced-motion: reduce) {
  .preloader-letter {
    opacity: 1;
    filter: none;
    animation: none;
  }

  .preloader-line {
    transform: scaleX(1);
    animation: none;
  }

  .preloader-subtitle {
    opacity: 1;
    animation: none;
  }

  .preloader--exit {
    animation: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
}
</style>
