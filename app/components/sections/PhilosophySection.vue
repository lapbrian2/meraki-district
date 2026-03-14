<template>
  <section ref="section" class="philosophy section section-dark">
    <div class="philosophy-bg-wrap">
      <img
        src="/images/philosophy-bg.jpg"
        alt=""
        class="philosophy-bg-image"
        loading="lazy"
      />
      <div class="philosophy-bg-overlay" />
    </div>
    <div class="section-narrow">
      <p class="overline reveal">Philosophy</p>
      <blockquote class="philosophy-quote reveal">
        <p>We believe AI reveals who was actually creative all along.</p>
      </blockquote>
      <div class="philosophy-exposition">
        <p class="reveal">
          When the tools become accessible to everyone, the only differentiator
          is taste, judgment, and the willingness to go deeper than the first
          good output.
        </p>
        <p class="reveal">
          Every institution in Meraki District operates on a single principle: the work comes first. We build for creators who treat mastery as a daily practice.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
</script>

<style scoped>
.philosophy {
  padding-top: var(--space-32);
  padding-bottom: var(--space-32);
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
  height: 100%;
  object-fit: cover;
  opacity: 0.12;
}

.philosophy-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(24, 24, 27, 0.6) 0%,
    rgba(24, 24, 27, 0.3) 50%,
    rgba(24, 24, 27, 0.7) 100%
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
