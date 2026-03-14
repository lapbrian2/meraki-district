<template>
  <section ref="section" class="origin section section-dark">
    <div class="origin-bg-wrap">
      <img
        src="/images/origin-bg.jpg"
        alt=""
        class="origin-bg-image"
        loading="lazy"
      />
      <div class="origin-bg-overlay" />
    </div>
    <div class="section-narrow origin-content">
      <p class="overline reveal">The Origin</p>
      <h2 class="origin-title reveal">
        We couldn&rsquo;t find what we were looking for.
      </h2>
      <div class="origin-rule" aria-hidden="true" />
      <p class="origin-body reveal">
        Not another platform. Not another community with a Discord server and
        a course catalog. Something with weight. Something built like the
        institutions that shaped every creative discipline before this
        one&mdash;but designed for creators working at the frontier of what&rsquo;s
        possible.
      </p>
      <p class="origin-body reveal">
        The gap isn&rsquo;t talent. The gap isn&rsquo;t tools. The gap is infrastructure.
        Places that take this work seriously. Standards that mean something. A
        publishing house, a credential, a research practice, a gathering
        place&mdash;all built around the conviction that AI-native creative
        work is a legitimate discipline that deserves legitimate support.
      </p>
      <p class="origin-body reveal">
        We built it.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal')

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.from('.origin-rule', {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.origin-rule',
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
.origin {
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
  position: relative;
  overflow: hidden;
}

.origin-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.origin-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

.origin-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(24, 24, 27, 0.4) 0%,
    rgba(24, 24, 27, 0.1) 40%,
    rgba(24, 24, 27, 0.5) 100%
  );
}

.origin-content {
  position: relative;
  z-index: 1;
}

.origin-title {
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-top: var(--space-8);
  margin-bottom: var(--space-8);
  max-width: none;
}

.origin-rule {
  width: 32px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-8);
  transform-origin: left;
}

.origin-body {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.origin-body:last-child {
  margin-bottom: 0;
  color: var(--color-dark-text);
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  margin-top: var(--space-8);
}

@media (max-width: 768px) {
  .origin {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }
}
</style>
