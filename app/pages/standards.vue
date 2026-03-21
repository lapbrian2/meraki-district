<template>
  <div class="standards-page">

    <!-- ============================================
         HERO — Title + subtitle
    ============================================= -->
    <section ref="heroSection" class="standards-hero section section-dark">
      <div class="section-narrow standards-hero-inner">
        <p class="overline reveal">Non-Negotiable</p>
        <h1 class="standards-hero-title word-reveal">
          <em>Standards of Integrity &amp; Craft</em>
        </h1>
        <p class="standards-hero-sub reveal">
          The principles that govern every engagement, every district, and every
          piece of work published under the Meraki Road standard. These are not
          aspirations. They are commitments.
        </p>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         STANDARDS — Numbered list
    ============================================= -->
    <section ref="bodySection" class="standards-body section">
      <div class="section-narrow">
        <div class="standards-list">

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">01</span>
            <h2 class="standard-title"><em>Craft over convenience</em></h2>
            <p class="standard-desc">
              We do not take shortcuts disguised as efficiency. Every decision&mdash;from
              typeface selection to infrastructure architecture&mdash;is made with the same
              deliberation. The work takes as long as the work takes.
            </p>
          </article>

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">02</span>
            <h2 class="standard-title"><em>Demonstrated practice over claims</em></h2>
            <p class="standard-desc">
              Credentials at Meraki Road are earned through the work itself. No purchased
              certifications, no pay-to-play visibility, no shortcuts to standing. Show the
              work or say nothing.
            </p>
          </article>

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">03</span>
            <h2 class="standard-title"><em>Honest feedback over comfortable silence</em></h2>
            <p class="standard-desc">
              Critique is not cruelty. We owe each other the truth about the work&mdash;delivered
              with precision, received with discipline. A community that cannot give honest
              feedback cannot produce honest work.
            </p>
          </article>

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">04</span>
            <h2 class="standard-title"><em>Permanence over virality</em></h2>
            <p class="standard-desc">
              We build for the long term. The Provenance exists because creative work deserves
              a permanent record. We do not optimize for attention spans. We optimize for the
              attention the work deserves.
            </p>
          </article>

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">05</span>
            <h2 class="standard-title"><em>Independence over dependence</em></h2>
            <p class="standard-desc">
              Creators retain ownership of their work, their audience, and their revenue.
              Meraki Road is infrastructure, not a landlord. The moment a platform extracts
              more than it provides, the relationship is broken.
            </p>
          </article>

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">06</span>
            <h2 class="standard-title"><em>Depth over breadth</em></h2>
            <p class="standard-desc">
              We do not chase scale for its own sake. A smaller community of committed
              practitioners will always outperform a larger one held together by convenience.
              Growth follows quality. Never the reverse.
            </p>
          </article>

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">07</span>
            <h2 class="standard-title"><em>Transparency over mystique</em></h2>
            <p class="standard-desc">
              Our processes, pricing, and standards are visible. We document how decisions
              are made, who makes them, and why. Opacity is not sophistication&mdash;it is
              a failure of accountability.
            </p>
          </article>

          <article class="standard reveal">
            <span class="standard-number" aria-hidden="true">08</span>
            <h2 class="standard-title"><em>Stewardship over extraction</em></h2>
            <p class="standard-desc">
              Every district exists to serve the practitioners who use it. Revenue is
              reinvested into the ecosystem. Fair splits are non-negotiable. We succeed
              only when the creators within the system succeed.
            </p>
          </article>

        </div>
      </div>
    </section>

    <SectionDivider />

    <!-- ============================================
         CTA — Closing statement
    ============================================= -->
    <section ref="ctaSection" class="standards-cta section-dark">
      <div class="section-narrow standards-cta-inner">
        <h2 class="standards-cta-heading reveal">These standards are non-negotiable.</h2>
        <NuxtLink to="/apply" class="standards-cta-link reveal">Apply to Meraki Road &rarr;</NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

useHead({
  title: 'Standards of Integrity & Craft — Meraki Road',
  meta: [
    { name: 'description', content: 'The non-negotiable principles that govern every engagement, every district, and every piece of work published under the Meraki Road standard.' },
  ],
})

useSeoMeta({
  ogTitle: 'Standards of Integrity & Craft — Meraki Road',
  ogDescription: 'The non-negotiable principles that govern every engagement, every district, and every piece of work published under the Meraki Road standard.',
})

/* -- Hero --------------------------------------- */
const heroSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(heroSection, '.reveal')
useWordReveal(heroSection, '.word-reveal')

/* -- Body --------------------------------------- */
const bodySection = ref<HTMLElement | null>(null)
useGsapScrollReveal(bodySection, '.reveal', { stagger: 0.08 })

/* -- CTA ---------------------------------------- */
const ctaSection = ref<HTMLElement | null>(null)
useGsapScrollReveal(ctaSection, '.reveal', { stagger: 0.1 })
</script>

<style scoped>
/* ═══════════════════════════════════════════════════════════ */
/* STANDARDS PAGE                                              */
/* ═══════════════════════════════════════════════════════════ */

/* Hero */
.standards-hero {
  padding-top: calc(var(--space-48) + 2rem);
  padding-bottom: var(--space-24);
}

.standards-hero-inner {
  display: flex;
  flex-direction: column;
}

.standards-hero-title {
  font-family: var(--font-display);
  font-size: var(--text-display);
  font-weight: 300;
  line-height: var(--leading-display);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.standards-hero-title em {
  font-style: italic;
}

.standards-hero-sub {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* Standards List */
.standards-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.standard {
  padding: var(--space-12) 0;
  border-bottom: 1px solid var(--color-border);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  column-gap: var(--space-8);
  row-gap: var(--space-3);
}

.standard:first-child {
  border-top: 1px solid var(--color-border);
}

.standard-number {
  grid-row: 1 / -1;
  font-family: var(--font-mono);
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 200;
  color: var(--color-gold);
  line-height: 1;
  letter-spacing: var(--tracking-wide);
  opacity: 0.4;
  align-self: start;
  padding-top: var(--space-1);
}

.standard-title {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 400;
  color: var(--color-ink);
  line-height: var(--leading-snug);
}

.standard-title em {
  font-style: italic;
  font-variation-settings: 'WONK' 1, 'SOFT' 60;
}

.standard-desc {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-text-secondary);
  line-height: var(--leading-relaxed);
  max-width: 60ch;
}

/* CTA */
.standards-cta {
  padding: var(--space-32) 0;
}

.standards-cta-inner {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-8);
}

.standards-cta-heading {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.standards-cta-link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  text-decoration: none;
  border-bottom: 1px solid rgba(184, 150, 78, 0.4);
  padding-bottom: 2px;
  transition: border-color var(--duration-normal) ease;
}

.standards-cta-link:hover {
  border-color: var(--color-gold);
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .standards-hero {
    padding-top: calc(var(--space-32) + 2rem);
  }

  .standard {
    grid-template-columns: 1fr;
    row-gap: var(--space-2);
    padding: var(--space-8) 0;
  }

  .standard-number {
    grid-row: auto;
    font-size: 1.5rem;
  }

  .standards-cta-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
  }
}
</style>
