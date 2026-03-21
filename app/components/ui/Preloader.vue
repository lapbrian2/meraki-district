<template>
  <ClientOnly>
    <Teleport to="body">
      <div v-if="!done" ref="preloader" class="preloader" aria-hidden="true">
        <div class="preloader-content">
          <span class="preloader-logo"><em>Meraki District</em></span>
          <div class="preloader-rule" />
        </div>
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'

const preloaderDone = useState('preloaderDone', () => false)
const done = ref(false)
const preloader = ref<HTMLElement | null>(null)

onMounted(() => {
  // Skip if already played this session
  if (preloaderDone.value) {
    done.value = true
    return
  }

  // Skip for reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    preloaderDone.value = true
    done.value = true
    return
  }

  // Stop Lenis during preloader
  try {
    const { $lenis } = useNuxtApp()
    if ($lenis) $lenis.stop()
  } catch { /* Lenis may not be available */ }

  nextTick(() => {
    if (!preloader.value) return

    const tl = gsap.timeline({
      onComplete: () => {
        preloaderDone.value = true
        done.value = true
        // Restart Lenis
        try {
          const { $lenis } = useNuxtApp()
          if ($lenis) $lenis.start()
        } catch { /* ignore */ }
      },
    })

    tl.from('.preloader-logo', {
      opacity: 0,
      y: 15,
      duration: 0.6,
      ease: 'power3.out',
    })
    .from('.preloader-rule', {
      scaleX: 0,
      duration: 0.4,
      ease: 'power2.inOut',
    }, '-=0.1')
    .to({}, { duration: 0.3 }) // hold
    .to(preloader.value, {
      clipPath: 'inset(0 0 100% 0)',
      duration: 0.6,
      ease: 'power3.inOut',
    })
  })
})
</script>

<style scoped>
.preloader {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: var(--color-ink, #09090B);
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: inset(0 0 0 0);
}

.preloader-content {
  text-align: center;
}

.preloader-logo {
  display: block;
  font-family: var(--font-display);
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  font-weight: 300;
  color: var(--color-dark-text, #FAFAF9);
  letter-spacing: var(--tracking-wide);
  margin-bottom: var(--space-4);
}

.preloader-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin: 0 auto;
  transform-origin: center;
}
</style>
