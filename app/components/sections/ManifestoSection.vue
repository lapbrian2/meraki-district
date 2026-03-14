<template>
  <section ref="section" class="manifesto section">
    <div class="section-narrow">
      <p class="overline reveal">Our Conviction</p>
      <h2 class="manifesto-text reveal">
        The future of creative practice is not about choosing between human craft
        and machine capability. It is about building institutions worthy of both.
      </h2>
      <div class="manifesto-rule" aria-hidden="true" />
      <p class="manifesto-body reveal">
        Meraki District is a cultural ecosystem. Ten institutions, each a world
        unto itself, united by a shared belief: that the most meaningful work
        happens when ambition meets integrity, and when creators have the space
        to pursue mastery without compromise.
      </p>
      <p class="manifesto-body reveal">
        We believe the creators who will define this era are the ones who treat
        AI as a craft, not a shortcut. Who measure their work by depth, not
        output. Who understand that when everyone has access to the same tools,
        the only thing left is taste, judgment, and the willingness to go further.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')

onMounted(() => {
  if (!section.value) return
  gsap.registerPlugin(ScrollTrigger)

  gsap.context(() => {
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
</script>

<style scoped>
.manifesto {
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
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
</style>
