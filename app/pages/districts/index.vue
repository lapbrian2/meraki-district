<template>
  <div class="district-nav">

    <div class="nav-hero">
      <p class="overline">Explore</p>
      <h1>The <span>Districts</span></h1>
      <p class="nav-subtitle">Eleven districts, each with its own mandate. One shared infrastructure.</p>
    </div>

    <!-- Districts Grid -->
    <section class="nav-section">
      <div class="nav-section-header">
        <h2>Districts</h2>
        <p>Each district operates independently within a shared creative infrastructure.</p>
      </div>
      <div class="q-grid">
        <div
          v-for="d in districts"
          :key="d.slug"
          class="q-card"
          @click="openDistrict(d)"
        >
          <div class="q-img">
            <NuxtImg :src="d.image" :alt="d.name" loading="lazy" decoding="async" width="600" height="375" />
            <span class="q-number">{{ d.number }}</span>
            <div class="q-overlay">
              <span class="q-peek">View details</span>
            </div>
          </div>
          <div class="q-info">
            <span class="q-type">{{ d.type }}</span>
            <h3>{{ d.name }}</h3>
            <p>{{ d.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Editorial -->
    <section class="nav-section">
      <div class="nav-section-header">
        <h2>The Road</h2>
        <p>Long-form storytelling and cultural criticism</p>
      </div>
      <NuxtLink to="/the-road" class="editorial-card">
        <div class="editorial-content">
          <span class="card-type">Publishing & Editorial</span>
          <h3>Explore The Road</h3>
          <p>Essays, dispatches, interviews, and cultural criticism for creators who think deeply about their practice.</p>
          <span class="card-link">Read &rarr;</span>
        </div>
      </NuxtLink>
    </section>

    <!-- Quick Links -->
    <section class="nav-section">
      <div class="nav-section-header">
        <h2>Quick Links</h2>
      </div>
      <div class="links-grid">
        <NuxtLink to="/about" class="link-card">
          <h3>About</h3>
          <p>Our origin story, founders, and principles.</p>
          <span class="card-link">Learn more &rarr;</span>
        </NuxtLink>
        <NuxtLink to="/apply" class="link-card link-card--accent">
          <h3>Apply</h3>
          <p>Join Meraki Road. For creators ready to go further.</p>
          <span class="card-link">Apply now &rarr;</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Lightbox -->
    <LightboxOverlay
      :open="!!activeDistrict"
      :image="activeDistrict?.image"
      :overline="activeDistrict?.type"
      :title="activeDistrict?.name || ''"
      :subtitle="'District ' + (activeDistrict?.number || '')"
      :body="activeDistrict?.longDescription || ''"
      :link="activeDistrict ? '/districts/' + activeDistrict.slug : ''"
      link-label="Visit district"
      @close="activeDistrict = null"
    />

  </div>
</template>

<script setup lang="ts">
import type { District } from '~/composables/useDistricts'

const { districts } = useDistricts()
const activeDistrict = ref<District | null>(null)

function openDistrict(d: District) {
  activeDistrict.value = d
}

useHead({
  title: 'Districts \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'Navigate the eleven districts of Meraki Road. Find your way into a cultural ecosystem built for AI-native creators.' },
  ],
})

// Lock scroll when lightbox is open
watch(activeDistrict, (d) => {
  if (import.meta.client) {
    document.body.style.overflow = d ? 'hidden' : ''
  }
})
</script>

<style scoped>
.district-nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--content-padding) var(--space-24);
}

/* Hero */
.nav-hero {
  text-align: center;
  padding: calc(var(--space-32) + 3rem) 0 var(--space-8);
}

.overline {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--color-gold);
  margin-bottom: 0.75rem;
}

.nav-hero h1 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: clamp(2.5rem, 5vw, 4rem);
  letter-spacing: -0.02em;
  margin-bottom: 0.75rem;
}

.nav-hero h1 span { color: var(--color-gold); }

.nav-subtitle {
  font-size: 1rem;
  color: var(--color-text-secondary, #71717A);
  max-width: 440px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Sections */
.nav-section { margin-bottom: var(--space-12); }

.nav-section-header {
  margin-bottom: var(--space-8);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-rule, rgba(184,150,78,0.15));
}

.nav-section-header h2 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 1.75rem;
  margin-bottom: 0.25rem;
}

.nav-section-header p {
  font-size: 0.8125rem;
  color: var(--color-text-secondary, #71717A);
}

/* Quarter Grid */
.q-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
}

.q-card {
  background: var(--color-background, #FAFAF9);
  border: 1px solid var(--color-rule, rgba(184,150,78,0.15));
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease, border-color 0.3s ease;
}

.q-card:hover { background: var(--color-surface, #F4F4F5); border-color: var(--color-gold); box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06); }
.q-card:hover .q-img img { transform: scale(1.03); }
.q-card:hover .q-overlay { opacity: 1; }

.q-img {
  aspect-ratio: 16/10;
  overflow: hidden;
  position: relative;
}

.q-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.q-number {
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  font-size: 0.5625rem;
  letter-spacing: 0.14em;
  color: rgba(250, 250, 249, 0.85);
  background: rgba(9, 9, 11, 0.55);
  backdrop-filter: blur(8px);
  padding: 0.2rem 0.5rem;
  text-transform: uppercase;
  z-index: 2;
}

.q-overlay {
  position: absolute;
  inset: 0;
  background: rgba(9, 9, 11, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.q-peek {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: rgba(250, 250, 249, 0.9);
  border: 1px solid rgba(250, 250, 249, 0.4);
  padding: 0.4rem 1rem;
  backdrop-filter: blur(4px);
}

.q-info { padding: 0.75rem 1rem 1rem; }

.q-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-gold);
  margin-bottom: 0.3rem;
  display: block;
}

.q-info h3 {
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

.q-card:hover .q-info h3 {
  background-size: 100% 1px;
}

.q-info p {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #71717A);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Editorial Card */
.editorial-card {
  display: block;
  background: var(--color-dark-bg, #09090B);
  color: var(--color-dark-text, #FAFAF9);
  text-decoration: none;
  padding: var(--space-8) var(--space-12);
  transition: background 0.3s ease;
}

.editorial-card:hover { background: var(--color-graphite, #18181B); }

.card-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-gold);
  display: block;
  margin-bottom: 0.5rem;
}

.editorial-content h3 {
  font-family: var(--font-display);
  font-weight: 300;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.editorial-content p {
  font-size: 0.875rem;
  color: var(--color-dark-muted, #A1A1AA);
  line-height: 1.6;
  max-width: 600px;
  margin-bottom: 1rem;
}

.card-link {
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-gold);
}

/* Links Grid */
.links-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.link-card {
  display: block;
  border: 1px solid var(--color-rule, rgba(184,150,78,0.15));
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.link-card:hover {
  border-color: var(--color-gold);
  background: rgba(184, 150, 78, 0.04);
}

.link-card h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 0.4rem;
}

.link-card p {
  font-size: 0.8125rem;
  color: var(--color-text-secondary, #71717A);
  line-height: 1.5;
  margin-bottom: 0.75rem;
}

.link-card--accent {
  border-color: rgba(184, 150, 78, 0.3);
  background: rgba(184, 150, 78, 0.04);
}

.link-card--accent h3 { color: var(--color-gold); }

/* Last card spans full width when odd count */
.q-card:last-child:nth-child(odd) {
  grid-column: 1 / -1;
}

.q-card:last-child:nth-child(odd) .q-img {
  aspect-ratio: 21 / 10;
}

/* Responsive */
@media (max-width: 768px) {
  .q-grid { grid-template-columns: 1fr; }
  .links-grid { grid-template-columns: 1fr; }
  .q-card:last-child:nth-child(odd) .q-img {
    aspect-ratio: 16 / 10;
  }
}
</style>
