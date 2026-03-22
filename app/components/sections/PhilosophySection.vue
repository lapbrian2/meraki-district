<template>
  <section ref="section" class="philosophy section section-dark">
    <div class="philosophy-bg-wrap">
      <NuxtImg
        src="/images/philosophy-bg.webp"
        alt=""
        class="philosophy-bg-image"
        loading="lazy"
        decoding="async"
        width="1920"
        height="1080"
      />
      <div class="philosophy-bg-overlay" />
    </div>
    <div class="section-narrow">
      <p class="overline reveal">Philosophy</p>
      <blockquote class="philosophy-quote word-reveal">
        <p>We believe AI reveals who was actually creative all along.</p>
      </blockquote>
      <div class="philosophy-exposition">
        <p class="reveal">
          When the tools become accessible to everyone, the only differentiator
          is taste, judgment, and the willingness to go deeper than the first
          good output.
        </p>
        <p class="reveal">
          Every district in Meraki Road operates on a single principle: the work comes first. We build for creators who treat mastery as a daily practice.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useParallax } from '~/composables/useParallax'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
useParallax(section, '.philosophy-bg-image', { speed: 0.12 })
useWordReveal(section, '.word-reveal', { stagger: 0.08 })
</script>

<style scoped>
.philosophy {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
  position: relative;
  overflow: hidden;
}

.philosophy-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.philosophy-bg-image {
  width: 100%;
  height: 130%;
  top: -15%;
  position: relative;
  object-fit: cover;
  opacity: 0.1;
  filter: sepia(15%) contrast(1.1);
  will-change: transform;
}

.philosophy-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    color-mix(in srgb, var(--color-graphite) 60%, transparent) 0%,
    color-mix(in srgb, var(--color-graphite) 30%, transparent) 50%,
    color-mix(in srgb, var(--color-graphite) 70%, transparent) 100%
  );
}

.section-narrow {
  position: relative;
  z-index: 1;
}

.philosophy-quote {
  border-left: 2px solid var(--color-gold);
  padding-left: var(--space-8);
  margin: var(--space-12) 0;
  position: relative;
}

.philosophy-quote::before {
  content: '';
  position: absolute;
  left: -2px;
  top: 0;
  bottom: 0;
  width: 2px;
  box-shadow: 0 0 20px rgba(184, 150, 78, 0.3), 0 0 40px rgba(184, 150, 78, 0.1);
  pointer-events: none;
}

.philosophy-quote p {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  max-width: none;
}

.philosophy-exposition {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);
}

.philosophy-exposition p {
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .philosophy {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }

  .philosophy-quote {
    padding-left: var(--space-4);
    margin: var(--space-8) 0;
  }

  .philosophy-quote p {
    font-size: var(--text-h2);
  }
}
</style>
