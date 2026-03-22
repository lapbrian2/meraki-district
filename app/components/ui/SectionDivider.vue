<template>
  <div ref="divider" class="divider" aria-hidden="true">
    <span class="divider-line" />
    <span v-if="ornament" class="divider-ornament">{{ ornament }}</span>
    <span v-if="ornament" class="divider-line" />
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'

withDefaults(defineProps<{ ornament?: string }>(), { ornament: '' })

const divider = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!divider.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(divider.value)
  if (!divider.value) return

  ctx = gsap.context(() => {
    const lines = divider.value!.querySelectorAll('.divider-line')
    const ornament = divider.value!.querySelector('.divider-ornament')

    lines.forEach((line, i) => {
      const hasOrnament = divider.value!.querySelector('.divider-ornament')
      gsap.from(line, {
        scaleX: 0,
        duration: 1.2,
        ease: 'power2.inOut',
        transformOrigin: hasOrnament
          ? (i === 0 ? 'right center' : 'left center')
          : 'center center',
        scrollTrigger: {
          trigger: divider.value,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    })

    if (ornament) {
      gsap.from(ornament, {
        opacity: 0,
        scale: 0.8,
        duration: 0.5,
        delay: 0.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: divider.value,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    }
  }, divider.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.divider {
  display: flex;
  align-items: center;
  gap: var(--space-6);
  max-width: var(--width-narrow);
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-gold) 20%,
    var(--color-gold) 80%,
    transparent
  );
  opacity: 0.5;
}

.divider-ornament {
  font-family: var(--font-display);
  font-size: var(--text-small);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-widest);
  flex-shrink: 0;
}
</style>
