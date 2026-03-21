<template>
  <section ref="sectionRef" class="pillars">
    <div class="pillars-inner">
      <div class="pillars-header">
        <p class="pillars-overline reveal">The Ecosystem</p>
        <h2 class="pillars-title word-reveal">The Curated Monolith</h2>
        <div class="pillars-rule" aria-hidden="true" />
        <p class="pillars-sub reveal">Six districts along one road, each built to serve a different dimension of creative practice.</p>
      </div>

      <div class="pillars-grid">
        <div
          v-for="(pillar, i) in pillars"
          :key="pillar.name"
          class="pillar-card reveal"
          :class="{ 'pillar-elevated': i === 1 || i === 4 }"
        >
          <span class="pillar-icon material-symbols-outlined">{{ pillar.icon }}</span>
          <h3 class="pillar-name">{{ pillar.name }}</h3>
          <p class="pillar-desc">{{ pillar.description }}</p>
          <NuxtLink :to="pillar.to" class="pillar-link">{{ pillar.action }} →</NuxtLink>
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

const pillars = [
  {
    name: 'Meraki Road',
    icon: 'route',
    description: 'The central social artery connecting creators through high-prestige discourse.',
    action: 'Explore',
    to: '/the-road',
  },
  {
    name: 'Ikigai Lab',
    icon: 'biotech',
    description: 'Incubating purpose through experimental creative technologies and practice.',
    action: 'Incubate',
    to: '/districts',
  },
  {
    name: 'Institute',
    icon: 'school',
    description: 'The pedagogical heart for advanced artistic theory and professional mastery.',
    action: 'Enroll',
    to: '/districts',
  },
  {
    name: 'Publishing',
    icon: 'menu_book',
    description: 'Archiving the voices that define our generation through curated editions.',
    action: 'Browse',
    to: '/districts',
  },
  {
    name: 'Pavilion',
    icon: 'gallery_thumbnail',
    description: 'The digital gallery for premier exhibitions and verified archival works.',
    action: 'View Gallery',
    to: '/districts',
  },
  {
    name: 'The Bridge',
    icon: 'shortcut',
    description: 'The transactional conduit for global creative commerce and partnerships.',
    action: 'Connect',
    to: '/districts',
  },
]
</script>

<style scoped>
.pillars {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-surface);
  border-top: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
}

.pillars-inner {
  max-width: 1440px;
  margin: 0 auto;
}

.pillars-header {
  text-align: center;
  margin-bottom: var(--space-24);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pillars-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.pillars-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-6);
}

.pillars-rule {
  width: 64px;
  height: 1px;
  background: var(--rule-color);
  margin-bottom: var(--space-6);
}

.pillars-sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  max-width: 40rem;
  line-height: var(--leading-relaxed);
}

/* 3x2 bordered grid */
.pillars-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border: 1px solid var(--rule-color);
}

.pillar-card {
  padding: var(--space-12);
  border-right: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  transition: background-color 0.5s var(--ease-out);
}

.pillar-card:nth-child(3n) {
  border-right: none;
}

.pillar-card:nth-child(n+4) {
  border-bottom: none;
}

.pillar-card:hover {
  background: var(--color-background);
}

.pillar-elevated {
  background: var(--color-surface);
}

.pillar-icon {
  font-size: 1.75rem;
  color: var(--color-gold);
  margin-bottom: var(--space-12);
  display: block;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.pillar-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-ink);
  margin-bottom: var(--space-4);
}

.pillar-desc {
  font-size: var(--text-overline);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.pillar-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: padding-left 0.3s var(--ease-out);
}

.pillar-link:hover {
  padding-left: var(--space-2);
}

@media (max-width: 1024px) {
  .pillars-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .pillar-card:nth-child(3n) {
    border-right: 1px solid var(--rule-color);
  }

  .pillar-card:nth-child(2n) {
    border-right: none;
  }

  .pillar-card:nth-child(n+4) {
    border-bottom: 1px solid var(--rule-color);
  }

  .pillar-card:nth-child(n+5) {
    border-bottom: none;
  }
}

@media (max-width: 640px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .pillar-card {
    border-right: none;
  }

  .pillar-card:last-child {
    border-bottom: none;
  }
}
</style>
