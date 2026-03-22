<template>
  <div ref="pageRef" class="inst-page">
    <!-- 1. Hero -->
    <section class="inst-hero">
      <span class="stamped-overline reveal">The Map</span>
      <h1 class="inst-display word-reveal">The Institutions of Meraki District</h1>
      <p class="inst-subtitle reveal">
        A network of interconnected institutions designed to support creators
        and connect them with organizations seeking new creative voices.
      </p>
      <div class="inst-rule reveal" aria-hidden="true" />
    </section>

    <!-- 2. The Creator Pathway -->
    <section class="inst-pathway">
      <p class="inst-phase-label reveal">The Creator Pathway</p>
      <p class="inst-section-label reveal">
        <span class="inst-label-dot" />
        From Entry to Industry
      </p>

      <div class="pathway-track">
        <!-- Step 1: Meraki Road -->
        <div class="pathway-step reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-card">
            <span class="material-symbols-outlined pathway-icon">groups</span>
            <h3 class="pathway-name">Meraki Road</h3>
            <p class="pathway-desc">Join the community. Build your profile. Find your people.</p>
          </div>
        </div>

        <!-- Step 2: Ikigai Lab -->
        <div class="pathway-step reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-card">
            <span class="material-symbols-outlined pathway-icon">self_improvement</span>
            <h3 class="pathway-name">Ikigai Lab</h3>
            <p class="pathway-desc">Find your artistic intention and your why.</p>
          </div>
        </div>

        <!-- Step 3: Meraki Institute -->
        <div class="pathway-step reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-card">
            <span class="material-symbols-outlined pathway-icon">school</span>
            <h3 class="pathway-name">Meraki Institute</h3>
            <p class="pathway-desc">Master your craft for career opportunities.</p>
          </div>
        </div>

        <!-- Step 4: Meraki Studio -->
        <div class="pathway-step reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-card">
            <span class="material-symbols-outlined pathway-icon">precision_manufacturing</span>
            <h3 class="pathway-name">Meraki Studio</h3>
            <p class="pathway-desc">Produce the work. Commercial creative through Meraki Productions.</p>
          </div>
        </div>

        <!-- Step 5: The Provenance — GATE -->
        <div class="pathway-step pathway-step--gate reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-card pathway-card--provenance">
            <span class="material-symbols-outlined pathway-icon">verified</span>
            <h3 class="pathway-name">The Provenance</h3>
            <p class="pathway-desc">Every piece of work passes through here. Verify. Authenticate. Archive.</p>
          </div>
        </div>

        <!-- Step 6: Output Branches -->
        <div class="pathway-step pathway-step--branches reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-branches">
            <div class="pathway-branch">
              <div class="branch-connector" aria-hidden="true" />
              <div class="pathway-card pathway-card--branch">
                <span class="material-symbols-outlined pathway-icon">menu_book</span>
                <h4 class="pathway-branch-name">Publishing House</h4>
                <p class="pathway-branch-desc">Editorial visibility</p>
              </div>
            </div>
            <div class="pathway-branch">
              <div class="branch-connector" aria-hidden="true" />
              <div class="pathway-card pathway-card--branch">
                <span class="material-symbols-outlined pathway-icon">gallery_thumbnail</span>
                <h4 class="pathway-branch-name">Pavilion</h4>
                <p class="pathway-branch-desc">Exhibition and recognition</p>
              </div>
            </div>
            <div class="pathway-branch">
              <div class="branch-connector" aria-hidden="true" />
              <div class="pathway-card pathway-card--branch">
                <span class="material-symbols-outlined pathway-icon">storefront</span>
                <h4 class="pathway-branch-name">Pavilion Store / Meraki Mint</h4>
                <p class="pathway-branch-desc">Sell verified work</p>
              </div>
            </div>
            <div class="pathway-branch">
              <div class="branch-connector" aria-hidden="true" />
              <div class="pathway-card pathway-card--branch">
                <span class="material-symbols-outlined pathway-icon">public</span>
                <h4 class="pathway-branch-name">Circuit</h4>
                <p class="pathway-branch-desc">Tour globally</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Step 7: Seal System -->
        <div class="pathway-step reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-card">
            <span class="material-symbols-outlined pathway-icon">workspace_premium</span>
            <h3 class="pathway-name">The Meraki Seal System</h3>
            <p class="pathway-desc">Credential the creator.</p>
            <div class="seal-tiers">
              <span class="seal-base seal-associate">Associate</span>
              <span class="seal-tier-arrow" aria-hidden="true">&rarr;</span>
              <span class="seal-base seal-verified">Verified</span>
              <span class="seal-tier-arrow" aria-hidden="true">&rarr;</span>
              <span class="seal-base seal-fellow">Fellow</span>
              <span class="seal-tier-arrow" aria-hidden="true">&rarr;</span>
              <span class="seal-base seal-legacy">Legacy</span>
            </div>
          </div>
        </div>

        <!-- Step 8: Talent Index -->
        <div class="pathway-step reveal">
          <div class="pathway-connector" aria-hidden="true" />
          <div class="pathway-card">
            <span class="material-symbols-outlined pathway-icon">person_search</span>
            <h3 class="pathway-name">The Meraki Talent Index</h3>
            <p class="pathway-desc">Become visible to industry.</p>
          </div>
        </div>

        <!-- Step 9: The Bridge -->
        <div class="pathway-step pathway-step--last reveal">
          <div class="pathway-card">
            <span class="material-symbols-outlined pathway-icon">handshake</span>
            <h3 class="pathway-name">The Meraki Bridge</h3>
            <p class="pathway-desc">Connect with professional opportunities.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 3. Institution Directory -->
    <section class="inst-directory">
      <p class="inst-phase-label reveal">Institution Directory</p>
      <p class="inst-section-label reveal">
        <span class="inst-label-dot" />
        All Institutions
      </p>

      <div class="dir-grid">
        <NuxtLink
          v-for="inst in directory"
          :key="inst.name"
          :to="inst.to"
          class="dir-cell reveal"
        >
          <span class="material-symbols-outlined dir-icon">{{ inst.icon }}</span>
          <h3 class="dir-name">{{ inst.name }}</h3>
          <p class="dir-purpose">{{ inst.purpose }}</p>
          <span class="dir-link">Explore &rarr;</span>
        </NuxtLink>
      </div>
    </section>

    <!-- 4. Also Within the District -->
    <section class="inst-also">
      <p class="inst-phase-label reveal">Also Within the District</p>

      <div class="also-grid">
        <NuxtLink
          v-for="link in supporting"
          :key="link.to"
          :to="link.to"
          class="also-cell reveal"
        >
          <span class="also-label">{{ link.label }}</span>
          <span class="also-arrow">&rarr;</span>
        </NuxtLink>
      </div>
    </section>

    <!-- 5. CTA -->
    <section class="inst-cta">
      <div class="inst-cta-inner reveal">
        <p class="inst-cta-lead">Every institution serves the creator. Every creator strengthens the district.</p>
        <NuxtLink to="/apply" class="inst-cta-btn">Begin Your Journey &rarr;</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const pageRef = ref<HTMLElement | null>(null)

useGsapScrollReveal(pageRef, '.reveal', { stagger: 0.06 })
useWordReveal(pageRef, '.word-reveal')

const directory = [
  { icon: 'groups', name: 'Meraki Road', purpose: 'Community and creator profiles', to: '/' },
  { icon: 'self_improvement', name: 'Ikigai Lab', purpose: 'Artistic intention and purpose discovery', to: '/ikigai' },
  { icon: 'school', name: 'Meraki Institute', purpose: 'Structured learning and mastery paths', to: '/institute' },
  { icon: 'menu_book', name: 'Meraki Publishing House', purpose: 'Long-form editorial and cultural criticism', to: '/the-road' },
  { icon: 'precision_manufacturing', name: 'Meraki Studio', purpose: 'Production and commercial creative work', to: '/districts/voight-studio' },
  { icon: 'verified', name: 'The Provenance', purpose: 'Verification, authentication, and archival', to: '/districts/the-provenance' },
  { icon: 'gallery_thumbnail', name: 'The Meraki Pavilion', purpose: 'Exhibition and recognition of verified work', to: '/pavilion' },
  { icon: 'storefront', name: 'The Pavilion Store', purpose: 'Commerce for verified creative work', to: '/mint' },
  { icon: 'design_services', name: 'Meraki Fashion Atelier', purpose: 'Fashion design rooted in creative culture', to: '/atelier' },
  { icon: 'handshake', name: 'The Meraki Bridge', purpose: 'Professional opportunity connections', to: '/bridge' },
  { icon: 'public', name: 'The Meraki Circuit', purpose: 'Global touring and creative exchange', to: '/circuit' },
  { icon: 'workspace_premium', name: 'The Meraki Seal System', purpose: 'Four-tier creator credentialing', to: '/standards' },
]

const supporting = [
  { label: 'Community', to: '/community' },
  { label: 'Founders', to: '/founders' },
  { label: 'Manifesto', to: '/manifesto' },
  { label: 'Typography', to: '/typography' },
  { label: 'The Collective', to: '/collective' },
  { label: 'Apply', to: '/apply' },
]

useHead({
  title: 'Institutions — Meraki District',
  meta: [
    { name: 'description', content: 'A visual map of every institution in Meraki District — the creator pathway from entry to industry.' },
  ],
})
</script>

<style scoped>
.inst-page {
  background: var(--color-background);
  color: var(--color-ink, #FAFAF9);
}

/* ─── Hero ─── */
.inst-hero {
  padding: calc(var(--space-32) + 4rem) var(--content-padding) var(--space-16);
  max-width: 64rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.inst-display {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(2.25rem, 5vw, 4rem);
  line-height: 1.05;
  letter-spacing: var(--tracking-tight);
  justify-content: center;
  text-shadow: 0 2px 40px rgba(184,150,78,0.15);
}

.inst-subtitle {
  font-size: 1.0625rem;
  font-weight: 300;
  color: var(--color-text-muted);
  line-height: 1.65;
  max-width: 52ch;
  margin: 0 auto;
}

.inst-rule {
  width: 4rem;
  height: 1px;
  background: var(--rule-color);
  margin-top: var(--space-4);
}

/* ─── Shared Section Labels ─── */
.inst-phase-label {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-h3);
  color: var(--color-gold);
  margin-bottom: var(--space-3);
  letter-spacing: var(--tracking-snug);
}

.inst-section-label {
  font-size: var(--text-overline);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-text-muted);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: var(--space-8);
}

.inst-label-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-gold);
}

/* ─── Creator Pathway ─── */
.inst-pathway {
  padding: var(--space-16) var(--content-padding);
  max-width: 64rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.pathway-track {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pathway-step {
  position: relative;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pathway-connector {
  width: 1px;
  height: 3rem;
  background: var(--color-gold);
  opacity: 0.4;
  transform-origin: top;
}

.pathway-card {
  width: 100%;
  padding: var(--space-6) var(--space-8);
  border: 1px solid var(--rule-color);
  background: rgba(255,255,255,0.02);
  text-align: center;
  transition: border-color 0.35s ease, background 0.35s ease;
}

.pathway-card:hover {
  border-color: rgba(184,150,78,0.3);
  background: rgba(184,150,78,0.03);
}

.pathway-icon {
  font-size: 1.75rem;
  color: var(--color-gold);
  display: block;
  margin-bottom: var(--space-3);
}

.pathway-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-h3);
  color: var(--color-ink, #FAFAF9);
  margin-bottom: var(--space-2);
}

.pathway-desc {
  font-size: var(--text-small);
  font-weight: 300;
  color: var(--color-text-muted);
  line-height: 1.6;
  max-width: 40ch;
  margin: 0 auto;
}

/* Provenance — the gate */
.pathway-step--gate {
  max-width: 100%;
}

.pathway-card--provenance {
  border: 1px solid var(--color-gold);
  background: rgba(184,150,78,0.05);
  max-width: 640px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-12);
  box-shadow: 0 0 60px -20px rgba(184,150,78,0.15);
}

.pathway-card--provenance:hover {
  background: rgba(184,150,78,0.08);
  border-color: var(--color-gold);
}

.pathway-card--provenance .pathway-icon {
  font-size: 2.25rem;
}

.pathway-card--provenance .pathway-name {
  font-size: var(--text-h2);
}

/* Output Branches */
.pathway-step--branches {
  max-width: 100%;
}

.pathway-branches {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-4);
  width: 100%;
}

.pathway-branch {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.branch-connector {
  width: 1px;
  height: 2rem;
  background: var(--color-gold);
  opacity: 0.3;
}

.pathway-card--branch {
  padding: var(--space-4) var(--space-3);
  border: 1px solid var(--rule-color);
  background: rgba(255,255,255,0.02);
  text-align: center;
  transition: border-color 0.35s ease, background 0.35s ease;
  height: 100%;
}

.pathway-card--branch:hover {
  border-color: rgba(184,150,78,0.3);
  background: rgba(184,150,78,0.03);
}

.pathway-card--branch .pathway-icon {
  font-size: 1.25rem;
  margin-bottom: var(--space-2);
}

.pathway-branch-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-small);
  color: var(--color-ink, #FAFAF9);
  margin-bottom: var(--space-1);
}

.pathway-branch-desc {
  font-size: var(--text-caption);
  font-weight: 300;
  color: var(--color-text-muted);
  line-height: 1.5;
}

/* Seal tiers inline */
.seal-tiers {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-2);
  margin-top: var(--space-4);
  flex-wrap: wrap;
}

.seal-tier-arrow {
  color: var(--color-text-muted);
  opacity: 0.4;
  font-size: 0.75rem;
}

/* Last step — no trailing connector */
.pathway-step--last .pathway-connector {
  display: none;
}

/* ─── Institution Directory Grid ─── */
.inst-directory {
  padding: var(--space-16) var(--content-padding);
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.dir-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.dir-cell {
  padding: var(--space-8) var(--space-6);
  border-right: 1px solid var(--rule-color);
  border-bottom: 1px solid var(--rule-color);
  background-image: none;
  transition: background 0.35s ease;
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.dir-cell:nth-child(3n) {
  border-right: none;
}

.dir-cell:nth-last-child(-n+3) {
  border-bottom: none;
}

.dir-cell:hover {
  background: rgba(184,150,78,0.04);
}

.dir-icon {
  font-size: 1.5rem;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.dir-name {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: var(--text-h4);
  color: var(--color-ink, #FAFAF9);
  margin-bottom: var(--space-2);
  transition: color 0.3s ease;
}

.dir-cell:hover .dir-name {
  color: var(--color-gold);
}

.dir-purpose {
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-wide);
  color: var(--color-text-muted);
  line-height: 1.5;
  margin-bottom: var(--space-4);
}

.dir-link {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-top: auto;
  transition: letter-spacing 0.3s var(--ease-out);
}

.dir-cell:hover .dir-link {
  letter-spacing: 0.18em;
}

/* ─── Also Within the District ─── */
.inst-also {
  padding: var(--space-16) var(--content-padding);
  max-width: 76rem;
  margin: 0 auto;
  border-top: 1px solid var(--rule-color);
}

.also-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
}

.also-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4) var(--space-5);
  border: 1px solid var(--rule-color);
  background-image: none;
  text-decoration: none;
  transition: border-color 0.3s ease, background 0.3s ease;
}

.also-cell:hover {
  border-color: rgba(184,150,78,0.3);
  background: rgba(184,150,78,0.03);
}

.also-label {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-text-muted);
  transition: color 0.3s ease;
}

.also-cell:hover .also-label {
  color: var(--color-ink, #FAFAF9);
}

.also-arrow {
  color: var(--color-gold);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.also-cell:hover .also-arrow {
  opacity: 1;
}

/* ─── CTA ─── */
.inst-cta {
  padding: var(--space-32) var(--content-padding);
  text-align: center;
  border-top: 1px solid var(--rule-color);
}

.inst-cta-inner {
  max-width: 44rem;
  margin: 0 auto;
}

.inst-cta-lead {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(1.5rem, 3vw, 2.25rem);
  line-height: var(--leading-snug);
  color: var(--color-ink, #FAFAF9);
  margin-bottom: var(--space-8);
}

.inst-cta-btn {
  display: inline-block;
  padding: var(--space-4) var(--space-10);
  background: var(--color-gold);
  color: var(--color-background);
  font-size: var(--text-overline);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  background-image: none;
  transition: opacity 0.3s ease;
}

.inst-cta-btn:hover {
  opacity: 0.85;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .pathway-branches {
    grid-template-columns: repeat(2, 1fr);
  }

  .dir-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .dir-cell:nth-child(3n) {
    border-right: 1px solid var(--rule-color);
  }

  .dir-cell:nth-child(2n) {
    border-right: none;
  }

  .dir-cell:nth-last-child(-n+3) {
    border-bottom: 1px solid var(--rule-color);
  }

  .dir-cell:nth-last-child(-n+2) {
    border-bottom: none;
  }

  .also-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .inst-hero {
    padding-top: calc(var(--space-16) + 3rem);
  }

  .pathway-branches {
    grid-template-columns: 1fr;
    max-width: 320px;
    margin: 0 auto;
  }

  .pathway-card {
    padding: var(--space-5) var(--space-5);
  }

  .pathway-card--provenance {
    padding: var(--space-6) var(--space-5);
  }

  .dir-grid {
    grid-template-columns: 1fr;
  }

  .dir-cell {
    border-right: none !important;
  }

  .dir-cell:nth-last-child(-n+3) {
    border-bottom: 1px solid var(--rule-color);
  }

  .dir-cell:last-child {
    border-bottom: none;
  }

  .also-grid {
    grid-template-columns: 1fr;
  }

  .inst-cta-btn {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .seal-tiers {
    gap: var(--space-1);
  }

  .seal-tier-arrow {
    font-size: 0.625rem;
  }
}
</style>
