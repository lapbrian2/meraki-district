<template>
  <div>
    <HeroSection />
    <ManifestoSection />
    <SectionDivider />

    <!-- Featured Artists -->
    <section ref="artistsSection" class="featured-artists">
      <div class="fa-header">
        <p class="fa-overline reveal">Featured</p>
        <h2 class="word-reveal">The Creators</h2>
        <p class="fa-subtitle">Six practitioners building at the intersection of craft and computation.</p>
      </div>
      <!-- Hero artist: first creator, horizontal layout -->
      <div class="fa-hero" @click="activeArtist = featuredArtists[0]">
        <div class="fa-hero-image reveal-image parallax-container">
          <NuxtImg :src="featuredArtists[0].image" :alt="featuredArtists[0].name" loading="lazy" decoding="async" width="600" height="800" />
          <div class="fa-overlay"><span class="fa-peek">View artist</span></div>
          <div class="fa-quote-overlay">
            <p class="fa-quote-text"><em>"{{ featuredArtists[0].bio.split('.')[0] }}."</em></p>
            <p class="fa-quote-attr">{{ featuredArtists[0].name }}</p>
          </div>
        </div>
        <div class="fa-hero-info reveal">
          <span class="fa-index">01</span>
          <span class="fa-discipline">{{ featuredArtists[0].discipline }}</span>
          <h3>{{ featuredArtists[0].name }}</h3>
          <p class="fa-hero-bio">{{ featuredArtists[0].bio }}</p>
        </div>
      </div>

      <!-- Remaining artists -->
      <div class="fa-grid">
        <div
          v-for="(artist, i) in featuredArtists.slice(1)"
          :key="i + 1"
          class="fa-card"
          @click="activeArtist = artist"
        >
          <div class="fa-image reveal-image parallax-container">
            <NuxtImg :src="artist.image" :alt="artist.name" loading="lazy" decoding="async" width="400" height="533" />
            <div class="fa-overlay">
              <span class="fa-peek">View artist</span>
            </div>
          </div>
          <div class="fa-info reveal">
            <span class="fa-index">{{ String(i + 2).padStart(2, '0') }}</span>
            <span class="fa-discipline">{{ artist.discipline }}</span>
            <h3>{{ artist.name }}</h3>
            <p>{{ artist.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <MarqueeStrip />
    <CreatorPathwaySection />
    <PhilosophySection />
    <FeaturedSection />
    <SealSection />
    <CtaSectionNew />

    <!-- Lightbox -->
    <LightboxOverlay
      :open="!!activeArtist"
      :image="activeArtist?.image"
      :overline="activeArtist?.discipline"
      :title="activeArtist?.name || ''"
      :body="activeArtist?.bio || ''"
      @close="activeArtist = null"
    />

  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useMagnetic } from '~/composables/useInteractions'

const artistsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(artistsSection, '.reveal', { stagger: 0.1 })
useWordReveal(artistsSection, '.word-reveal')
useMagnetic(artistsSection, '.fa-card', { strength: 0.15 })

// Clip-path image reveals for artist cards
let artistCtx: gsap.Context | null = null

onMounted(async () => {
  if (!artistsSection.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    artistsSection.value.querySelectorAll('.reveal-image').forEach((el) => {
      ;(el as HTMLElement).style.clipPath = 'inset(0)'
    })
    return
  }

  await waitForAncestorAnimations(artistsSection.value)
  if (!artistsSection.value) return

  gsap.registerPlugin(ScrollTrigger)

  artistCtx = gsap.context(() => {
    const images = gsap.utils.toArray<HTMLElement>('.reveal-image')
    images.forEach((el, i) => {
      gsap.fromTo(el,
        { clipPath: 'inset(100% 0 0 0)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.1,
          delay: (i % 3) * 0.15,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, artistsSection.value)
})

onUnmounted(() => {
  artistCtx?.revert()
})

useHead({
  title: 'Meraki Road \u2014 Where craft meets culture',
  meta: [
    { name: 'description', content: 'Eleven districts, one road. A new standard for creative practice built for AI-native creators.' },
    { property: 'og:title', content: 'Meraki Road \u2014 Where craft meets culture' },
  ],
})

useSeoMeta({
  ogTitle: 'Meraki Road \u2014 Where craft meets culture',
  ogDescription: 'Eleven districts, one road. A new standard for creative practice built for AI-native creators.',
  twitterTitle: 'Meraki Road \u2014 Where craft meets culture',
  twitterDescription: 'Eleven districts, one road. A new standard for creative practice built for AI-native creators.',
})

interface Artist {
  name: string
  discipline: string
  bio: string
  image: string
}

const activeArtist = ref<Artist | null>(null)

// Lock scroll when lightbox is open
watch(activeArtist, (a) => {
  if (import.meta.client) {
    document.body.style.overflow = a ? 'hidden' : ''
  }
})

// Featured artists
const featuredArtists: Artist[] = [
  {
    name: 'Sable Chen',
    discipline: 'Visual Art & AI',
    bio: 'Working at the intersection of machine vision and traditional painting. Her neural portraits explore the negotiation between what the model sees and what the hand knows\u2014each piece a conversation between two forms of intelligence.',
    image: '/images/districts/voight-studio.webp',
  },
  {
    name: 'Tom\u00e1s Vega',
    discipline: 'Generative Architecture',
    bio: 'Computational designer building impossible structures that exist between algorithm and intuition. His parametric pavilions collapse the boundary between built environment and generative art.',
    image: '/images/districts/meridian.webp',
  },
  {
    name: 'Maren Aoki',
    discipline: 'Creative Technology',
    bio: 'Former systems architect turned interactive artist. Her installations translate human presence into light, sound, and data\u2014making the invisible infrastructure of connection tangible.',
    image: '/images/districts/the-provenance.webp',
  },
  {
    name: 'Khalil Okonkwo',
    discipline: 'Digital Sculpture',
    bio: 'Sculptor working in volumetric capture and photogrammetry. His pieces preserve disappearing cultural artifacts as living 3D archives\u2014part preservation, part meditation on impermanence.',
    image: '/images/districts/common-ground.webp',
  },
  {
    name: 'In\u00e9s Moreau',
    discipline: 'Motion & Film',
    bio: 'Director and motion designer whose work lives in the space between documentary and generative cinema. Her AI-assisted short films have been selected for international exhibition and festival programmes.',
    image: '/images/districts/basecamp.webp',
  },
  {
    name: 'Zuri Nakamura',
    discipline: 'Mixed Media & Sound',
    bio: 'Sound artist and visual composer who treats frequency as material. Her immersive environments pair generative audio with physical installations, creating spaces that listen back.',
    image: '/images/districts/the-mint.webp',
  },
]
</script>

<style scoped>
.featured-artists {
  padding: var(--space-12) var(--content-padding);
  max-width: 1200px;
  margin: 0 auto;
}

.fa-header { text-align: center; margin-bottom: var(--space-8); }

.fa-overline {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-gold);
  margin-bottom: 0.5rem;
}

.fa-header h2 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2rem, 4vw, 3rem);
  letter-spacing: -0.02em;
  margin-bottom: 0.5rem;
}

.fa-subtitle {
  font-size: 0.9375rem;
  color: var(--color-text-secondary, #71717A);
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Hero artist: full-width horizontal layout */
.fa-hero {
  display: grid;
  grid-template-columns: 2fr 3fr;
  border: 1px solid var(--color-rule, rgba(184,150,78,0.15));
  overflow: hidden;
  cursor: pointer;
  margin-bottom: clamp(1rem, 2vw, 1.5rem);
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.fa-hero:hover {
  border-color: var(--color-gold);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.fa-hero:hover .fa-hero-image img { transform: scale(1.08) translateY(-2%); }
.fa-hero:hover .fa-overlay { opacity: 1; }
.fa-hero:hover .fa-hero-info h3 { background-size: 100% 1px; }

.fa-hero-image {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  position: relative;
}

.fa-hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(1);
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1), filter 0.6s ease;
}

.fa-hero:hover .fa-hero-image img {
  filter: grayscale(0);
}

.fa-hero-info {
  padding: var(--space-8) var(--space-8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
}

.fa-hero-info h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: var(--text-h2);
  margin-bottom: var(--space-4);
  line-height: var(--leading-snug);
  display: inline;
  background-image: linear-gradient(var(--color-gold), var(--color-gold));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s var(--ease-out);
}

.fa-hero-bio {
  font-size: var(--text-body);
  color: var(--color-text-secondary, #71717A);
  line-height: var(--leading-relaxed);
  margin-top: var(--space-4);
}

.fa-hero-info .fa-index {
  position: static;
  margin-bottom: var(--space-4);
  opacity: 0.3;
}

.fa-hero-info .fa-discipline {
  margin-bottom: var(--space-2);
}

/* Remaining artists grid */
.fa-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: clamp(0.75rem, 1.5vw, 1rem);
}

.fa-card {
  background: var(--color-background, #FAFAF9);
  border: 1px solid var(--color-rule, rgba(184,150,78,0.15));
  overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease;
  cursor: pointer;
}

.fa-card:hover { background: var(--color-surface, #F4F4F5); border-color: var(--color-gold); }
.fa-card:hover .fa-image img { transform: scale(1.08) translateY(-2%); }
.fa-card:hover .fa-overlay { opacity: 1; }

.fa-image {
  aspect-ratio: 3/4;
  overflow: hidden;
  position: relative;
}

.fa-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(1);
  transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1), filter 0.6s ease;
}

.fa-card:hover .fa-image img {
  filter: grayscale(0);
}

.fa-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9, 9, 11, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.fa-peek {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(250, 250, 249, 0.9);
  border: 1px solid rgba(250, 250, 249, 0.4);
  padding: 0.4rem 1rem;
  backdrop-filter: blur(4px);
}

.fa-info {
  padding: 1rem 1.25rem 1.5rem;
  position: relative;
}

.fa-index {
  position: absolute;
  top: 1rem;
  right: 1.25rem;
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-gold);
  letter-spacing: var(--tracking-mega-wide);
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.fa-card:hover .fa-index { opacity: 1; }

.fa-discipline {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-gold);
  display: block;
  margin-bottom: 0.3rem;
}

.fa-info h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 0.3rem;
  line-height: 1.15;
  display: inline;
  background-image: linear-gradient(var(--color-gold), var(--color-gold));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.4s var(--ease-out);
}

.fa-card:hover .fa-info h3 {
  background-size: 100% 1px;
}

.fa-info p {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #71717A);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 0.4rem;
}

/* Quote overlay on hero artist image */
.fa-quote-overlay {
  position: absolute;
  bottom: calc(var(--space-8) * -0.5);
  left: calc(var(--space-6) * -0.5);
  background: var(--color-surface);
  padding: var(--space-6) var(--space-8);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  max-width: 320px;
  z-index: 2;
}

.fa-quote-text {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  line-height: var(--leading-snug);
  color: var(--color-text);
  margin-bottom: var(--space-3);
}

.fa-quote-attr {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
}

@media (max-width: 1024px) {
  .fa-grid { grid-template-columns: repeat(3, 1fr); }
}

@media (max-width: 768px) {
  .fa-hero {
    grid-template-columns: 1fr;
  }

  .fa-hero-image {
    aspect-ratio: 3 / 2;
  }

  .fa-hero-info h3 {
    font-size: var(--text-h3);
  }

  .fa-grid { grid-template-columns: repeat(2, 1fr); }

  .fa-quote-overlay { display: none; }
}

@media (max-width: 480px) {
  .fa-grid { grid-template-columns: 1fr; }
}
</style>
