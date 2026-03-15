<template>
  <div class="district-nav">

    <div class="nav-hero">
      <p class="overline">Explore</p>
      <h1>The <span>District</span></h1>
      <p class="nav-subtitle">Ten quarters, one ecosystem. Find your way in.</p>
    </div>

    <!-- Quarters Grid -->
    <section class="nav-section">
      <div class="nav-section-header">
        <h2>Quarters</h2>
        <p>The ten pillars of Meraki District</p>
      </div>
      <div class="inst-grid">
        <NuxtLink
          v-for="inst in quarters"
          :key="inst.slug"
          :to="'/quarters/' + inst.slug"
          class="inst-card"
        >
          <div class="inst-img">
            <img :src="inst.image" :alt="inst.name" loading="lazy">
            <span class="inst-number">{{ inst.number }}</span>
          </div>
          <div class="inst-info">
            <span class="inst-type">{{ inst.type }}</span>
            <h3>{{ inst.name }}</h3>
            <p>{{ inst.description }}</p>
          </div>
          <span class="inst-arrow">&rarr;</span>
        </NuxtLink>
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

    <!-- Pages -->
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
          <p>Join the district. For creators ready to go further.</p>
          <span class="card-link">Apply now &rarr;</span>
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
const { quarters } = useQuarters()

useHead({
  title: 'Quarters \u2014 Meraki District',
  meta: [
    { name: 'description', content: 'Navigate the ten quarters of Meraki District. Find your way into a cultural ecosystem built for AI-native creators.' },
  ],
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
  padding: calc(var(--space-32) + 3rem) 0 var(--space-16);
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
.nav-section {
  margin-bottom: var(--space-24);
}

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
.inst-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--color-rule, rgba(184,150,78,0.15));
  border: 1px solid var(--color-rule, rgba(184,150,78,0.15));
}

.inst-card {
  display: flex;
  flex-direction: column;
  background: var(--color-background, #FAFAF9);
  text-decoration: none;
  color: inherit;
  position: relative;
  overflow: hidden;
  transition: background 0.3s ease;
}

.inst-card:hover {
  background: var(--color-surface, #F4F4F5);
}

.inst-card:hover .inst-img img {
  transform: scale(1.03);
}

.inst-card:hover .inst-arrow {
  opacity: 1;
  transform: translateX(0);
}

.inst-img {
  aspect-ratio: 16/10;
  overflow: hidden;
  position: relative;
}

.inst-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.inst-number {
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
}

.inst-info {
  padding: 1rem 1.25rem 1.25rem;
}

.inst-type {
  font-size: 0.5625rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--color-gold);
  margin-bottom: 0.3rem;
  display: block;
}

.inst-info h3 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.25rem;
  margin-bottom: 0.3rem;
  line-height: 1.15;
}

.inst-info p {
  font-size: 0.75rem;
  color: var(--color-text-secondary, #71717A);
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.inst-arrow {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  font-size: 1rem;
  color: var(--color-gold);
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.3s ease;
}

/* Editorial Card */
.editorial-card {
  display: block;
  background: var(--color-ink, #09090B);
  color: var(--color-background, #FAFAF9);
  text-decoration: none;
  padding: var(--space-16);
  transition: background 0.3s ease;
}

.editorial-card:hover {
  background: var(--color-graphite, #18181B);
}

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
  color: var(--color-text-secondary, #A1A1AA);
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

/* Responsive */
@media (max-width: 768px) {
  .inst-grid { grid-template-columns: 1fr; }
  .links-grid { grid-template-columns: 1fr; }
}
</style>
