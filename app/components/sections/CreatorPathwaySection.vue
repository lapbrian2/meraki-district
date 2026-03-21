<template>
  <section ref="sectionRef" class="pathway section-dark">
    <div class="pathway-inner">
      <!-- Header -->
      <div class="pathway-header">
        <p class="overline reveal">The Journey</p>
        <h2 class="pathway-title word-reveal">The Creator Pathway</h2>
        <div class="pathway-rule" aria-hidden="true" />
        <p class="pathway-sub reveal">
          Six stages from first contact to professional opportunity — a deliberate arc designed for lasting creative growth.
        </p>
      </div>

      <!-- Step grid -->
      <div class="pathway-grid">
        <div class="pathway-line" aria-hidden="true" />
        <div
          v-for="(step, i) in steps"
          :key="step.name"
          class="pathway-card reveal"
        >
          <span class="pathway-number">{{ String(i + 1).padStart(2, '0') }}</span>
          <h3 class="pathway-step-name">{{ step.name }}</h3>
          <p class="pathway-step-desc">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const sectionRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionRef, '.reveal', { stagger: 0.08 })
useWordReveal(sectionRef, '.word-reveal')

const steps = [
  {
    name: 'Enter',
    description: 'Join Meraki Road and engage the community.',
  },
  {
    name: 'Discover',
    description: 'Find your creative direction through practice.',
  },
  {
    name: 'Develop',
    description: 'Deepen mastery within the ecosystem.',
  },
  {
    name: 'Publish',
    description: 'Share your work through curated channels.',
  },
  {
    name: 'Exhibit',
    description: 'Showcase in the digital galleries.',
  },
  {
    name: 'Connect',
    description: 'Bridge to professional opportunity.',
  },
]
</script>

<style scoped>
.pathway {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-dark-bg);
  color: var(--color-dark-text);
  border-top: 1px solid rgba(250, 250, 249, 0.12);
}

.pathway-inner {
  max-width: 1440px;
  margin: 0 auto;
}

/* ─── Header ─── */
.pathway-header {
  text-align: center;
  margin-bottom: var(--space-24);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pathway-header .overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.pathway-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.pathway-rule {
  width: 64px;
  height: 1px;
  background: rgba(250, 250, 249, 0.12);
  margin-bottom: var(--space-6);
}

.pathway-sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  max-width: 42rem;
  line-height: var(--leading-relaxed);
}

/* ─── Grid ─── */
.pathway-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  position: relative;
}

/* Decorative horizontal line through the middle */
.pathway-line {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(250, 250, 249, 0.12);
  pointer-events: none;
}

/* ─── Cards ─── */
.pathway-card {
  border: 1px solid rgba(250, 250, 249, 0.12);
  padding: var(--space-8) var(--space-6);
  text-align: center;
  background: var(--color-surface);
  position: relative;
  z-index: 1;
  transition: border-color var(--duration-normal) ease;
}

/* Collapse double borders between adjacent cards */
.pathway-card + .pathway-card {
  margin-left: -1px;
}

.pathway-card:hover {
  border-color: var(--color-gold);
}

.pathway-number {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 200;
  color: var(--color-gold);
  opacity: 0.2;
  line-height: 1;
  display: block;
  margin-bottom: var(--space-6);
}

.pathway-step-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.pathway-step-desc {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .pathway-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .pathway-line {
    display: none;
  }

  /* Reset collapsed margins for wrapped rows */
  .pathway-card:nth-child(n+2) {
    margin-left: 0;
  }

  /* Re-collapse within rows (cards 2,3 and 5,6 per row — offset by 1 for the .pathway-line element) */
  .pathway-card:nth-child(3n+1):not(:nth-child(2)) {
    margin-left: 0;
  }

  .pathway-card:nth-child(n+5) {
    margin-top: -1px;
  }
}

@media (max-width: 768px) {
  .pathway-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pathway-card:nth-child(n+4) {
    margin-top: -1px;
  }
}

@media (max-width: 480px) {
  .pathway-grid {
    grid-template-columns: 1fr;
  }

  .pathway-card + .pathway-card {
    margin-left: 0;
    margin-top: -1px;
  }
}
</style>
