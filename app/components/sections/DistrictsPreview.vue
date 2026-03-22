<template>
  <section ref="section" class="districts-preview section-dark">
    <div class="section-wide dp-inner">
      <div class="dp-header">
        <p class="overline reveal">The Districts</p>
        <h2 class="dp-title word-reveal">Twelve districts, one road.</h2>
        <p class="dp-sub reveal">
          Each district operates independently within a shared creative infrastructure.
        </p>
      </div>

      <div class="dp-strip">
        <div class="dp-line" aria-hidden="true" />
        <div class="dp-districts">
          <NuxtLink
            v-for="d in districts"
            :key="d.slug"
            :to="'/districts/' + d.slug"
            class="dp-district reveal"
            :style="{ '--color-accent': d.accentColor }"
          >
            <span class="dp-marker" />
            <span class="dp-number">{{ d.number }}</span>
            <span class="dp-name">{{ d.name }}</span>
          </NuxtLink>
        </div>
      </div>

      <div class="dp-cta reveal">
        <NuxtLink to="/districts" class="dp-link">Explore all districts &rarr;</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.04 })
useWordReveal(section, '.word-reveal')
</script>

<style scoped>
.districts-preview {
  padding: var(--space-24) 0;
}

.dp-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

.dp-title {
  margin-top: var(--space-4);
  font-size: var(--text-h1);
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
}

.dp-sub {
  margin-top: var(--space-4);
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  max-width: 50ch;
  margin-left: auto;
  margin-right: auto;
  line-height: var(--leading-relaxed);
}

/* ─── Strip: horizontal line with districts ─── */
.dp-strip {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.dp-line {
  position: absolute;
  top: 3px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--color-gold) 10%, var(--color-gold) 90%, transparent);
  opacity: 0.25;
}

.dp-districts {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: var(--space-6) var(--space-4);
  padding-top: var(--space-8);
}

.dp-district {
  display: flex;
  align-items: baseline;
  gap: var(--space-2);
  text-decoration: none;
  color: inherit;
  background-image: none;
  padding: var(--space-2) 0;
  position: relative;
  transition: color var(--duration-fast) ease;
}

.dp-district:hover .dp-name {
  color: var(--color-accent);
}

.dp-district:hover .dp-marker {
  opacity: 1;
  box-shadow: 0 0 8px color-mix(in srgb, var(--color-accent) 50%, transparent);
}

.dp-marker {
  width: 6px;
  height: 6px;
  background: var(--color-accent);
  flex-shrink: 0;
  opacity: 0.5;
  transition: opacity var(--duration-fast) ease, box-shadow var(--duration-fast) ease;
}

.dp-number {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-wide);
  flex-shrink: 0;
}

.dp-name {
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-weight: 400;
  color: var(--color-dark-secondary);
  transition: color var(--duration-fast) ease;
  white-space: nowrap;
}

/* ─── CTA ─── */
.dp-cta {
  margin-top: var(--space-12);
  text-align: center;
}

.dp-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-fast) ease;
}

.dp-link:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .dp-districts {
    grid-template-columns: repeat(2, 1fr);
  }

  .dp-header {
    text-align: left;
  }

  .dp-sub {
    margin-left: 0;
  }
}
</style>
