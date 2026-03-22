<template>
  <div class="manifesto-page">

    <!-- ============================================
         HERO — Overline + italic heading + subtitle
    ============================================= -->
    <section ref="heroSection" class="manifesto-hero section section-dark">
      <div class="section-narrow manifesto-hero-inner">
        <p class="overline reveal">Foundational Charter</p>
        <h1 class="manifesto-hero-title word-reveal">
          <em>The Manifesto</em>
        </h1>
        <p class="manifesto-hero-sub reveal">
          The cultural and ethical framework that governs every district,
          every credential, and every piece of work published under the
          Meraki Road standard.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         PREAMBLE — Manifesto body text
    ============================================= -->
    <section ref="preambleSection" class="manifesto-preamble section">
      <div class="section-default">
        <p class="overline reveal">Preamble</p>
        <div class="preamble-body">
          <p class="preamble-text reveal">
            We believe the best creative work is not produced in
            isolation&mdash;it&rsquo;s shaped by structure, sharpened by honest
            criticism, and sustained by a community that holds itself to a
            higher standard than the market demands. Meraki Road exists because
            none of that happens by accident.
          </p>
          <p class="preamble-text reveal">
            This is not a social network. It is not a marketplace. It is a
            network of twelve districts, each serving a distinct function in
            the creative lifecycle&mdash;from research to publication, from
            education to commerce, from credentialing to gathering. Together
            they form a single, coherent structure where practitioners can do
            their best work and have it seen by the people who matter.
          </p>
          <p class="preamble-text reveal">
            We built this for the creators who care more about craft than
            clout. For the ones who stayed in the studio when everyone else
            was chasing trends. The road was always here. We just gave it
            an address.
          </p>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         THE TWELVE DISTRICTS — Alternating full-width
    ============================================= -->
    <section ref="districtsSection" class="manifesto-districts section">
      <div class="section-wide">
        <div class="districts-header">
          <p class="overline reveal">The Twelve Districts</p>
          <h2 class="districts-title word-reveal"><em>Structure with Purpose</em></h2>
        </div>

        <div class="districts-list">
          <article
            v-for="(district, index) in districts"
            :key="district.slug"
            class="district-entry reveal"
            :class="{ 'district-entry--even': index % 2 === 1 }"
          >
            <div class="district-entry-inner">
              <div class="district-meta">
                <span class="district-number">{{ district.number }}</span>
                <span class="district-type">{{ district.type }}</span>
              </div>
              <h3 class="district-name"><em>{{ district.name }}</em></h3>
              <p class="district-role">{{ district.description }}</p>
              <p class="district-statement" :style="{ color: district.accentColor }">
                {{ district.pullQuote }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — "Commit to the Standard"
    ============================================= -->
    <section ref="ctaSection" class="manifesto-cta section-dark">
      <div class="section-narrow manifesto-cta-inner">
        <h2 class="cta-title word-reveal">Commit to the Standard.</h2>
        <div class="cta-buttons reveal">
          <NuxtLink to="/apply" class="cta-button cta-button--primary">
            Apply Now &rarr;
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { useMagnetic } from '~/composables/useInteractions'
import { useDistricts } from '~/composables/useDistricts'

/* -- SEO ---------------------------------------- */
useHead({
  title: 'Manifesto \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'The foundational charter of Meraki Road. Twelve districts, one standard.' },
  ],
})

useSeoMeta({
  ogTitle: 'Manifesto \u2014 Meraki Road',
  ogDescription: 'The foundational charter of Meraki Road. Twelve districts, one standard.',
  twitterTitle: 'Manifesto \u2014 Meraki Road',
  twitterDescription: 'The foundational charter of Meraki Road. Twelve districts, one standard.',
})

/* -- Data --------------------------------------- */
const { districts } = useDistricts()

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Preamble ----------------------------------- */
const preambleSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(preambleSection, '.reveal', { stagger: 0.12 })

/* -- Districts ---------------------------------- */
const districtsSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(districtsSection, '.reveal', { stagger: 0.08 })
useWordReveal(districtsSection, '.word-reveal')

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal')
useWordReveal(ctaSection, '.word-reveal', { stagger: 0.08 })
useMagnetic(ctaSection, '.cta-button', { strength: 0.25 })

/* -- Custom GSAP animations -------------------- */
let ctx: gsap.Context | null = null

onMounted(async () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  if (heroSection.value) {
    await waitForAncestorAnimations(heroSection.value)
  }

  ctx = gsap.context(() => {
    /* District entries — staggered slide from alternating sides */
    const entries = districtsSection.value?.querySelectorAll('.district-entry')
    entries?.forEach((entry, i) => {
      const inner = entry.querySelector('.district-entry-inner')
      if (!inner) return

      const isEven = i % 2 === 1
      const xFrom = isEven ? 30 : -30

      gsap.from(inner, {
        x: xFrom,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: entry,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    })

    /* Pull quote gold pulse */
    const statements = districtsSection.value?.querySelectorAll('.district-statement')
    statements?.forEach((statement) => {
      gsap.from(statement, {
        opacity: 0,
        y: 10,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.3,
        scrollTrigger: {
          trigger: statement,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    })
  })
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
/* =============================================
   HERO — Centered
   ============================================= */
.manifesto-hero {
  padding-top: calc(var(--space-32) + 3rem);
  padding-bottom: var(--space-24);
  background-color: var(--color-background);
}

.manifesto-hero-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.manifesto-hero-title {
  font-size: var(--text-display);
  font-weight: 300;
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  margin-top: var(--space-4);
  margin-bottom: var(--space-8);
  color: var(--color-ink);
}

.manifesto-hero-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.manifesto-hero-sub {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
  text-align: center;
}

@media (max-width: 768px) {
  .manifesto-hero {
    padding-top: calc(var(--space-16) + 3rem);
    padding-bottom: var(--space-12);
  }

  .manifesto-hero-title {
    font-size: clamp(2.5rem, 10vw, var(--text-display));
  }
}

/* =============================================
   PREAMBLE — Left-aligned body copy
   ============================================= */
.manifesto-preamble {
  padding-top: var(--space-24);
  padding-bottom: var(--space-24);
  background-color: var(--color-surface);
}

.preamble-body {
  max-width: 65ch;
}

.preamble-text {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.preamble-text:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .manifesto-preamble {
    padding-top: var(--space-16);
    padding-bottom: var(--space-16);
  }
}

/* =============================================
   DISTRICTS — Alternating full-width cards
   ============================================= */
.manifesto-districts {
  background-color: var(--color-background);
}

.districts-header {
  margin-bottom: var(--space-16);
}

.districts-title {
  margin-top: var(--space-4);
  margin-bottom: 0;
}

.districts-title em {
  font-family: var(--font-display);
  font-style: italic;
}

.districts-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.district-entry {
  padding: var(--space-12) 0;
  border-top: 1px solid var(--rule-color);
}

.district-entry:last-child {
  border-bottom: 1px solid var(--rule-color);
}

.district-entry-inner {
  max-width: 65ch;
}

/* Odd = left-aligned (default), Even = right-aligned */
.district-entry--even .district-entry-inner {
  margin-left: auto;
  text-align: right;
}

.district-meta {
  display: flex;
  align-items: center;
  gap: var(--space-4);
  margin-bottom: var(--space-4);
}

.district-entry--even .district-meta {
  justify-content: flex-end;
}

.district-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-gold);
}

.district-type {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.district-name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
  margin-bottom: var(--space-3);
  color: var(--color-ink);
}

.district-name em {
  font-style: italic;
}

.district-role {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-4);
}

.district-statement {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 300;
  font-style: italic;
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

@media (max-width: 768px) {
  .district-entry {
    padding: var(--space-8) 0;
  }

  .district-entry--even .district-entry-inner {
    margin-left: 0;
    text-align: left;
  }

  .district-entry--even .district-meta {
    justify-content: flex-start;
  }

  .district-name {
    font-size: var(--text-h3);
  }
}

/* =============================================
   CTA — Centered with single button
   ============================================= */
.manifesto-cta {
  padding: var(--space-32) var(--content-padding);
}

.manifesto-cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-title {
  font-size: var(--text-display);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-12);
  letter-spacing: var(--tracking-hero);
}

.cta-buttons {
  display: flex;
  gap: var(--space-6);
  flex-wrap: wrap;
  justify-content: center;
}

.cta-button {
  display: inline-block;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  padding: var(--space-4) var(--space-12);
  background-image: none;
  background-color: transparent;
  transition:
    border-color var(--duration-normal) ease,
    color var(--duration-normal) ease,
    background-color var(--duration-normal) ease;
}

.cta-button--primary {
  color: var(--color-dark-text);
  border: 1px solid rgba(250, 250, 249, 0.2);
  border-left: 2px solid var(--color-gold);
}

.cta-button--primary:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
  background-color: rgba(184, 150, 78, 0.06);
}

.cta-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

@media (max-width: 768px) {
  .manifesto-cta {
    padding: var(--space-16) var(--content-padding);
  }

  .cta-title {
    font-size: clamp(2rem, 8vw, var(--text-display));
  }

  .cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
