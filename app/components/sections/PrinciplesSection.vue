<template>
  <section ref="section" class="principles section">
    <div class="section-default">
      <p class="overline reveal">How We Work</p>
      <h2 class="principles-title reveal">Guiding principles</h2>

      <div class="principles-grid">
        <article
          v-for="principle in principles"
          :key="principle.title"
          class="principle-card reveal"
        >
          <span class="principle-number">{{ principle.number }}</span>
          <h3 class="principle-title">{{ principle.title }}</h3>
          <p class="principle-body">{{ principle.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.1 })

const principles = [
  {
    number: '01',
    title: 'Craft over convenience',
    body: 'We treat AI as a medium that demands mastery. The tool is available to everyone. The craft takes dedicated practice.',
  },
  {
    number: '02',
    title: 'Depth over output',
    body: 'We\u2019d rather publish one thing worth reading than ten things worth scrolling past. Volume is easy. Substance is the work.',
  },
  {
    number: '03',
    title: 'Earned, not purchased',
    body: 'Our credentials, our community, our standards\u2014they carry weight because they require demonstrated practice and real contribution.',
  },
]
</script>

<style scoped>
.principles {
  background-color: var(--color-surface);
}

.principles-title {
  margin-top: var(--space-4);
  margin-bottom: var(--space-16);
}

.principles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-12);
}

.principle-card {
  padding-top: var(--space-8);
  border-top: 1px solid var(--rule-color);
}

.principle-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  display: block;
  margin-bottom: var(--space-4);
}

.principle-title {
  font-size: var(--text-h3);
  margin-bottom: var(--space-4);
}

.principle-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .principles-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }
}
</style>
