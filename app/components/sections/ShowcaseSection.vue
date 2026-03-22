<template>
  <section ref="sectionRef" class="showcase section-dark">
    <div class="showcase-inner">
      <!-- Header row -->
      <div class="showcase-header reveal">
        <div class="showcase-header-left">
          <p class="overline"><span class="section-number">02.</span> Exhibition</p>
          <h2 class="showcase-title word-reveal">The Showcase</h2>
          <p class="showcase-sub">Selected works from creators shaping the next wave of visual culture.</p>
        </div>
        <div class="showcase-header-right">
          <NuxtLink to="/pavilion" class="showcase-archive-btn">
            View Full Archive
          </NuxtLink>
        </div>
      </div>

      <div class="showcase-rule" aria-hidden="true" />

      <!-- Gallery grid -->
      <div class="showcase-grid">
        <!-- Left item: portrait, offset down -->
        <div class="showcase-item showcase-item--left reveal">
          <div class="showcase-image showcase-image--portrait">
            <NuxtImg
              :src="items[0].image"
              :alt="items[0].title"
              loading="lazy"
              decoding="async"
              width="520"
              height="700"
              @load="onImageLoad"
            />
          </div>
          <p class="showcase-item-overline">{{ items[0].category }}</p>
          <h3 class="showcase-item-title">{{ items[0].title }}</h3>
          <p class="showcase-item-desc">{{ items[0].description }}</p>
          <div v-if="items[0].quote" class="showcase-quote-overlay">
            <p class="showcase-quote-text"><em>"{{ items[0].quote }}"</em></p>
          </div>
        </div>

        <!-- Right item: landscape, full-bleed -->
        <div class="showcase-item showcase-item--right reveal">
          <div class="showcase-image showcase-image--landscape">
            <NuxtImg
              :src="items[1].image"
              :alt="items[1].title"
              loading="lazy"
              decoding="async"
              width="800"
              height="500"
              @load="onImageLoad"
            />
          </div>
          <div class="showcase-item-row">
            <div>
              <p class="showcase-item-overline">{{ items[1].category }}</p>
              <h3 class="showcase-item-title">{{ items[1].title }}</h3>
            </div>
            <NuxtLink to="/pavilion" class="showcase-arrow" aria-label="View work">
              <span class="material-symbols-outlined">arrow_forward</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const sectionRef = ref<HTMLElement | null>(null)
useGsapScrollReveal(sectionRef, '.reveal', { stagger: 0.14 })
useWordReveal(sectionRef, '.word-reveal')

interface ShowcaseItem {
  image: string
  category: string
  title: string
  description?: string
  quote?: string
}

const items: ShowcaseItem[] = [
  {
    image: '/images/artist-1.webp',
    category: 'Visual Arts',
    title: 'Fragments of Stillness',
    description: 'A meditation on impermanence through layered mixed media — ink, plaster, and reclaimed paper.',
    quote: 'The silence between marks is where the real work happens.',
  },
  {
    image: '/images/artist-2.webp',
    category: 'Digital Sculpture',
    title: 'Architectures of Feeling',
  },
]

function onImageLoad(e: Event) {
  const el = e.target as HTMLElement | null
  el?.classList.add('loaded')
}

onMounted(() => {
  sectionRef.value?.querySelectorAll('.showcase-image img').forEach(img => {
    if ((img as HTMLImageElement).complete) img.classList.add('loaded')
  })
})
</script>

<style scoped>
.showcase {
  padding: var(--space-32) var(--content-padding);
  background: var(--color-dark-bg);
  color: var(--color-dark-text);
}

.showcase-inner {
  max-width: 1440px;
  margin: 0 auto;
}

.section-number {
  font-family: var(--font-mono);
  color: var(--color-gold);
  margin-right: 0.5em;
}

/* ─── Header ─── */
.showcase-header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-8);
}

.showcase-header-left {
  flex: 1;
}

.showcase-header-left .overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-4);
}

.showcase-title {
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-4);
}

.showcase-sub {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  max-width: 36rem;
  line-height: var(--leading-relaxed);
}

.showcase-archive-btn {
  display: inline-block;
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-text);
  border: 1px solid var(--color-dark-muted);
  padding: var(--space-3) var(--space-6);
  background-image: none;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
  white-space: nowrap;
}

.showcase-archive-btn:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  box-shadow: 0 4px 20px -4px rgba(184, 150, 78, 0.2);
}

.showcase-rule {
  width: 100%;
  height: 1px;
  background: rgba(250, 250, 249, 0.12);
  margin: var(--space-12) 0;
}

/* ─── Grid ─── */
.showcase-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: var(--space-8);
  align-items: start;
}

.showcase-item--left {
  padding-top: var(--space-16);
}

/* ─── Images ─── */
.showcase-image {
  overflow: hidden;
  margin-bottom: var(--space-6);
  position: relative;
  border: 1px solid rgba(184, 150, 78, 0.08);
}

.showcase-image::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  transition: box-shadow 0.8s ease;
}

.showcase-item:hover .showcase-image::after {
  box-shadow: inset 0 0 40px rgba(0, 0, 0, 0.3);
}

.showcase-image--portrait {
  aspect-ratio: 3 / 4;
}

.showcase-image--landscape {
  aspect-ratio: 8 / 5;
}

.showcase-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1);
  filter: sepia(5%) contrast(1.02);
  transition: opacity 0.8s ease, transform 1.5s ease, filter 1.2s cubic-bezier(0.23, 1, 0.32, 1);
}

.showcase-image img.loaded {
  opacity: 1;
}

.showcase-item:hover .showcase-image img.loaded {
  transform: scale(1.04);
  filter: grayscale(0) sepia(0) brightness(1) contrast(1.05);
}

/* ─── Item text ─── */
.showcase-item-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.showcase-item-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
}

.showcase-item-desc {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 28rem;
}

/* ─── Quote overlay ─── */
.showcase-quote-overlay {
  margin-top: var(--space-6);
  padding-left: var(--space-6);
  border-left: 1px solid var(--color-gold);
}

.showcase-quote-text {
  font-family: var(--font-display);
  font-size: var(--text-body);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-dark-muted);
}

/* ─── Right item info row ─── */
.showcase-item-row {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--space-6);
}

.showcase-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border: 1px solid rgba(250, 250, 249, 0.12);
  color: var(--color-dark-text);
  background-image: none;
  transition: border-color var(--duration-normal) ease,
              color var(--duration-normal) ease;
  flex-shrink: 0;
}

.showcase-arrow .material-symbols-outlined {
  font-size: 1.25rem;
  font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
}

.showcase-arrow:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .showcase-grid {
    grid-template-columns: 1fr 1fr;
  }

  .showcase-item--left {
    padding-top: 0;
  }
}

@media (max-width: 640px) {
  .showcase-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-6);
  }

  .showcase-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .showcase-image--portrait {
    aspect-ratio: 4 / 3;
  }
}
</style>
