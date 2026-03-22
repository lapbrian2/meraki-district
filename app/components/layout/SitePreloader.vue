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
      <p class="preloader-protocol">Establishing archival connection&hellip;</p>
    </div>
    <div class="preloader-curtain preloader-curtain--top" />
    <div class="preloader-curtain preloader-curtain--bottom" />
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

  // Wait for fonts to load, then start exit
  const fontReady = document.fonts.ready.then(() => {
    // Minimum 2s so the animation plays, max 3s so it never blocks too long
    const elapsed = performance.now()
    const remaining = Math.max(0, 2000 - elapsed)
    return new Promise(resolve => setTimeout(resolve, remaining))
  })

  fontReady.then(() => {
    exiting.value = true
    setTimeout(() => {
      finish()
    }, 1400) // curtain reveal duration
  })

  // Safety net — never block longer than 3.5s even if fonts fail
  setTimeout(() => {
    if (visible.value) {
      exiting.value = true
      setTimeout(finish, 1400)
    }
  }, 3500)
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
  background: var(--color-background);
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
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-tight);
  line-height: 1;
  margin: 0;
  display: flex;
}

.preloader-letter {
  opacity: 0;
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

.preloader-protocol {
  font-family: var(--font-mono, 'JetBrains Mono', monospace);
  font-size: 0.625rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  color: var(--color-dark-muted, #71717A);
  margin: 1.25rem 0 0;
  opacity: 0;
  animation: protocolFade 0.4s ease 2.6s forwards;
}

/* Curtain reveal panels */
.preloader-curtain {
  position: absolute;
  left: 0;
  right: 0;
  height: 50%;
  background: var(--color-background);
  z-index: 1;
  transform: scaleY(0);
}

.preloader-curtain--top {
  top: 0;
  transform-origin: top center;
}

.preloader-curtain--bottom {
  bottom: 0;
  transform-origin: bottom center;
}

/* Exit: curtains slide apart to reveal page */
.preloader--exit .preloader-content {
  animation: contentFade 0.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

.preloader--exit .preloader-curtain {
  transform: scaleY(1);
  animation: curtainReveal 0.8s cubic-bezier(0.76, 0, 0.24, 1) 0.4s forwards;
}

.preloader--exit {
  animation: preloaderFinal 0.1s linear 1.2s forwards;
}

/* ─── Keyframes ─── */

@keyframes inkAbsorb {
  from {
    opacity: 0;
    filter: blur(4px);
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
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

@keyframes protocolFade {
  from {
    opacity: 0;
    filter: blur(3px);
  }
  to {
    opacity: 0.5;
    filter: blur(0);
  }
}

@keyframes contentFade {
  from {
    opacity: 1;
    filter: blur(0);
  }
  to {
    opacity: 0;
    filter: blur(6px);
  }
}

@keyframes curtainReveal {
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
}

@keyframes preloaderFinal {
  to {
    visibility: hidden;
    pointer-events: none;
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

  .preloader-protocol {
    opacity: 0.5;
    animation: none;
  }

  .preloader--exit {
    animation: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .preloader--exit .preloader-content {
    animation: none;
  }

  .preloader--exit .preloader-curtain {
    animation: none;
    display: none;
  }
}
</style>
