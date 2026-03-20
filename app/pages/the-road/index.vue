<template>
  <div>
    <section ref="heroSection" class="page-hero section section-dark">
      <div class="page-hero-bg-wrap">
        <img
          src="/images/the-road-hero.webp"
          alt=""
          class="page-hero-bg-image"
          loading="eager"
          fetchpriority="high"
        />
        <div class="page-hero-bg-overlay" />
      </div>
      <div class="section-default page-hero-content">
        <p class="overline reveal">Publishing &amp; Editorial</p>
        <h1 class="page-hero-title word-reveal">
          The Road
        </h1>
        <p class="page-hero-sub reveal">
          Long-form essays and cultural criticism shaped by creative practice.
        </p>
      </div>
    </section>

    <SectionDivider />

    <section ref="gridSection" class="articles section">
      <div class="section-default">
        <div v-if="articles && articles.length" class="articles-grid">
          <ArticleCard
            v-for="article in articles"
            :key="article.path"
            :article="article"
            :show-date="true"
            class="reveal"
          />
        </div>

        <!-- Editorial empty state -->
        <div v-else class="road-manifesto">
          <div class="road-manifesto-inner reveal">
            <div class="road-manifesto-rule" aria-hidden="true" />
            <blockquote class="road-manifesto-quote">
              <p>The tools are changing faster than the conversations about them.</p>
            </blockquote>
            <p class="road-manifesto-body">
              The Road is where Meraki Road thinks in public. Long-form essays,
              field dispatches, creator interviews, and cultural criticism for people
              who believe that making things well still matters&mdash;even when
              (especially when) the tools make it easy to make things fast.
            </p>
            <p class="road-manifesto-body">
              We&rsquo;re writing the first essays now. Expect dispatches on AI-native
              creative practice, profiles of builders who refuse to choose between
              ambition and integrity, and honest criticism of the work&mdash;ours included.
            </p>
            <div class="road-manifesto-cta">
              <p class="road-manifesto-label">Get notified when we publish</p>
              <NuxtLink to="/apply" class="road-manifesto-button">
                Join Meraki Road &rarr;
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <SectionDivider />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useParallax } from '~/composables/useParallax'
import { useWordReveal } from '~/composables/useWordReveal'
import { useTilt } from '~/composables/useInteractions'

const heroSection = ref<HTMLElement | null>(null)
const gridSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(heroSection, '.reveal')
useParallax(heroSection, '.page-hero-bg-image', { speed: 0.1 })
useWordReveal(heroSection, '.word-reveal')
useGsapScrollReveal(gridSection, '.reveal', { stagger: 0.12 })
useTilt(gridSection, '.article-card', { maxRotation: 3 })

const { data: articles } = await useAsyncData('the-road-listing', () =>
  queryCollection('theRoad')
    .where('published', '=', true)
    .order('date', 'DESC')
    .all()
)

useHead({
  title: 'The Road \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'Long-form storytelling and cultural criticism for the AI-native era.' },
  ],
})

useSeoMeta({
  ogTitle: 'The Road \u2014 Meraki Road',
  ogDescription: 'Long-form storytelling and cultural criticism for the AI-native era.',
  twitterTitle: 'The Road \u2014 Meraki Road',
  twitterDescription: 'Long-form storytelling and cultural criticism for the AI-native era.',
})
</script>

<style scoped>
.page-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-16);
  position: relative;
  overflow: hidden;
  min-height: 60vh;
  display: flex;
  align-items: flex-end;
}

.page-hero-bg-wrap {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.page-hero-bg-image {
  width: 100%;
  height: 130%;
  top: -15%;
  position: relative;
  object-fit: cover;
  opacity: 0.4;
  will-change: transform;
}

.page-hero-bg-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(9, 9, 11, 0.3) 0%,
    rgba(9, 9, 11, 0.15) 40%,
    rgba(9, 9, 11, 0.5) 70%,
    rgba(9, 9, 11, 0.8) 100%
  );
}

.page-hero-content {
  position: relative;
  z-index: 1;
}

.page-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-dark-text);
}

.page-hero-sub {
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

/* ── Editorial manifesto empty state ── */
.road-manifesto {
  max-width: var(--width-narrow);
  margin: 0 auto;
  padding: var(--space-16) 0 var(--space-24);
}

.road-manifesto-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-12);
}

.road-manifesto-quote {
  margin-bottom: var(--space-12);
}

.road-manifesto-quote p {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  color: var(--color-ink);
  max-width: none;
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.road-manifesto-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-8);
}

.road-manifesto-cta {
  margin-top: var(--space-16);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.road-manifesto-label {
  font-size: var(--text-small);
  color: var(--color-text-muted);
}

.road-manifesto-button {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-3) var(--space-8);
  border: 1px solid var(--color-ink);
  background-image: none;
  transition: border-color var(--duration-fast) ease, color var(--duration-fast) ease;
}

.road-manifesto-button:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

@media (min-width: 601px) and (max-width: 1024px) {
  .articles-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-8);
  }
}

@media (max-width: 600px) {
  .page-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
    min-height: 50vh;
  }

  .articles-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }

  .road-manifesto-quote p {
    font-size: var(--text-h3);
  }

  .road-manifesto-cta {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .road-manifesto-button {
    width: 100%;
    text-align: center;
  }
}
</style>
