<template>
  <section ref="section" class="manifesto section">
    <div class="section-narrow">
      <p class="overline reveal">Our Conviction</p>
      <h2 class="manifesto-text word-reveal">
        The future of creative practice demands quarters worthy of both human craft and machine capability.
      </h2>
      <div class="manifesto-rule" aria-hidden="true" />
      <p class="manifesto-body reveal">
        Meraki District is a cultural ecosystem. Ten quarters, each a world
        unto itself, united by a shared belief: that the most meaningful work
        comes from creators who have the infrastructure, the standards, and the space to pursue mastery.
      </p>
      <p class="manifesto-body reveal">
        The creators who will define this era treat AI as a craft. They measure their work by depth. They understand that when everyone has access to the same tools, the differentiator is taste, judgment, and the willingness to go further.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')
useWordReveal(section, '.word-reveal')

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.from('.manifesto-rule', {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.manifesto-rule',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.manifesto {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
}

.manifesto-text {
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-snug);
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
  max-width: none;
}

.manifesto-rule {
  width: 32px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.manifesto-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.manifesto-body:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .manifesto {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }

  .manifesto-text {
    margin-top: var(--space-4);
    margin-bottom: var(--space-6);
  }
}
</style>
