<template>
  <section ref="section" class="definition section">
    <div class="section-narrow">
      <div class="definition-grid">
        <!-- Etymology -->
        <div class="definition-entry reveal">
          <span class="definition-label">meraki</span>
          <span class="definition-phonetic">/meh-RAH-kee/</span>
          <p class="definition-text">
            Greek. To do something with soul, creativity, or love; to put
            something of yourself into your work.
          </p>
        </div>

        <div class="definition-rule" aria-hidden="true" />

        <!-- The name -->
        <div class="definition-entry reveal">
          <span class="definition-label">Meraki Road</span>
          <span class="definition-phonetic">/meh-RAH-kee rohd/</span>
          <p class="definition-text">
            Twelve districts built for creators who hold ambition and integrity
            as a single standard. Where craft meets culture.
          </p>
        </div>

        <div class="definition-rule" aria-hidden="true" />

        <!-- Core conviction -->
        <div class="definition-entry reveal">
          <span class="definition-label">Core conviction</span>
          <p class="definition-text definition-text--accent">
            Closing the gap between creative excellence and
            financial possibility.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.15 })

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('.definition-rule').forEach((rule) => {
      gsap.from(rule, {
        scaleX: 0,
        duration: 0.8,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: rule,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.definition {
  padding: var(--space-24) var(--content-padding);
  border-top: 1px solid var(--rule-color);
}

.definition-grid {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.definition-entry {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.definition-label {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-text);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-snug);
}

.definition-phonetic {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-text-muted);
  letter-spacing: var(--tracking-wide);
}

.definition-text {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

.definition-text--accent {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-gold);
  max-width: 36ch;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  text-shadow: 0 0 40px rgba(184, 150, 78, 0.15);
}

.definition-rule {
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, rgba(184, 150, 78, 0.15), var(--rule-color), rgba(184, 150, 78, 0.15));
  transform-origin: left;
}

@media (max-width: 768px) {
  .definition {
    padding: var(--space-16) var(--content-padding);
  }

  .definition-label {
    font-size: var(--text-h4);
  }

  .definition-text--accent {
    font-size: var(--text-h4);
  }
}
</style>
