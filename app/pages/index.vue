<template>
  <div>
    <HeroSection />
    <ManifestoSection />
    <SectionDivider />

    <!-- Featured Artists (replaces InstitutionsGrid) -->
    <section class="featured-artists">
      <div class="fa-header">
        <p class="fa-overline">Featured</p>
        <h2>The Creators</h2>
        <p class="fa-subtitle">Artists and builders shaping the future of AI-native practice.</p>
      </div>
      <div class="fa-grid">
        <div v-for="artist in featuredArtists" :key="artist.name" class="fa-card">
          <div class="fa-image">
            <img :src="artist.image" :alt="artist.name" loading="lazy">
          </div>
          <div class="fa-info">
            <span class="fa-discipline">{{ artist.discipline }}</span>
            <h3>{{ artist.name }}</h3>
            <p>{{ artist.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <MarqueeStrip />
    <PhilosophySection />
    <FeaturedSection />
    <SealSection />
    <CtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Meraki District \u2014 Where craft meets culture',
  meta: [
    { name: 'description', content: 'A cultural ecosystem for AI-native creators. Ten institutions, one district, a new standard for creative practice.' },
    { property: 'og:title', content: 'Meraki District \u2014 Where craft meets culture' },
  ],
})

useSeoMeta({
  ogTitle: 'Meraki District \u2014 Where craft meets culture',
  ogDescription: 'A cultural ecosystem for AI-native creators. Ten institutions, one district, a new standard for creative practice.',
  twitterTitle: 'Meraki District \u2014 Where craft meets culture',
  twitterDescription: 'A cultural ecosystem for AI-native creators. Ten institutions, one district, a new standard for creative practice.',
})

// Featured artists — replace with real data when ready
const featuredArtists = [
  {
    name: 'Artist Name',
    discipline: 'Visual Art & AI',
    bio: 'A brief description of the artist and their practice within the Meraki District ecosystem.',
    image: '/images/institutions/voight-studio.webp',
  },
  {
    name: 'Artist Name',
    discipline: 'Generative Design',
    bio: 'A brief description of the artist and their practice within the Meraki District ecosystem.',
    image: '/images/institutions/meridian.webp',
  },
  {
    name: 'Artist Name',
    discipline: 'Creative Technology',
    bio: 'A brief description of the artist and their practice within the Meraki District ecosystem.',
    image: '/images/institutions/the-provenance.webp',
  },
  {
    name: 'Artist Name',
    discipline: 'Digital Sculpture',
    bio: 'A brief description of the artist and their practice within the Meraki District ecosystem.',
    image: '/images/institutions/common-ground.webp',
  },
  {
    name: 'Artist Name',
    discipline: 'Motion & Film',
    bio: 'A brief description of the artist and their practice within the Meraki District ecosystem.',
    image: '/images/institutions/basecamp.webp',
  },
  {
    name: 'Artist Name',
    discipline: 'Mixed Media',
    bio: 'A brief description of the artist and their practice within the Meraki District ecosystem.',
    image: '/images/institutions/the-mint.webp',
  },
]
</script>

<style scoped>
/* Featured Artists Section */
.featured-artists {
  padding: var(--space-16) var(--content-padding);
  max-width: 1200px;
  margin: 0 auto;
}

.fa-header {
  text-align: center;
  margin-bottom: var(--space-16);
}

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

.fa-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--color-rule, rgba(184,150,78,0.15));
  border: 1px solid var(--color-rule, rgba(184,150,78,0.15));
}

.fa-card {
  background: var(--color-background, #FAFAF9);
  overflow: hidden;
  transition: background 0.3s ease;
}

.fa-card:hover {
  background: var(--color-surface, #F4F4F5);
}

.fa-card:hover .fa-image img {
  transform: scale(1.03);
}

.fa-image {
  aspect-ratio: 3/4;
  overflow: hidden;
}

.fa-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.fa-info {
  padding: 1rem 1.25rem 1.5rem;
}

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
}

.fa-info p {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #71717A);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .fa-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .fa-grid { grid-template-columns: 1fr; }
}
</style>
