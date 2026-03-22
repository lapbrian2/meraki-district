<template>
  <section ref="section" class="talent-index section-dark">
    <div class="section-wide">
      <!-- Header -->
      <div class="ti-header reveal">
        <div class="ti-header-left">
          <p class="ti-overline"><span class="section-number">04.</span> Verification</p>
          <h2 class="ti-heading word-reveal">Talent Index</h2>
        </div>
        <p class="ti-subtitle">
          A curated registry of verified practitioners<br />
          across the Meraki Road districts.
        </p>
      </div>

      <!-- Creator rows -->
      <div class="ti-list">
        <div
          v-for="(creator, i) in creators"
          :key="creator.name"
          class="ti-row reveal"
          :data-tier="creator.tier.toLowerCase()"
        >
          <div class="ti-row-left">
            <span class="ti-number">{{ String(i + 1).padStart(3, '0') }}</span>
            <div class="ti-name-block">
              <span class="ti-name">{{ creator.name }}</span>
              <span class="ti-discipline">{{ creator.discipline }}</span>
            </div>
          </div>
          <div class="ti-row-right">
            <span :class="['ti-badge', 'ti-badge--' + creator.tier.toLowerCase()]">
              <span
                class="material-symbols-outlined ti-badge-icon"
                :style="{ fontVariationSettings: (creator.tier === 'Fellow' || creator.tier === 'Legacy') ? '\'FILL\' 1' : '\'FILL\' 0' }"
              >verified</span>
              {{ creator.tier }}
            </span>
            <span class="ti-affiliation">{{ creator.affiliation }}</span>
            <span class="material-symbols-outlined ti-arrow">arrow_forward</span>
          </div>
        </div>
      </div>

      <!-- Bottom link -->
      <div class="ti-footer reveal">
        <NuxtLink to="/apply" class="ti-apply-link">
          Apply for Verification &rarr;
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useGsapScrollReveal } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.08 })
useWordReveal(section, '.word-reveal', { stagger: 0.06 })

interface Creator {
  name: string
  discipline: string
  tier: 'Associate' | 'Verified' | 'Fellow' | 'Legacy'
  affiliation: string
}

const creators: Creator[] = [
  { name: 'Sable Chen', discipline: 'Visual Art & AI', tier: 'Legacy', affiliation: 'Ikigai Lab' },
  { name: 'Tom\u00E1s Vega', discipline: 'Architecture & Computation', tier: 'Verified', affiliation: 'Institute' },
  { name: 'Maren Aoki', discipline: 'Sound Design', tier: 'Fellow', affiliation: 'Meraki Road' },
  { name: 'Khalil Okonkwo', discipline: 'Interactive Narrative', tier: 'Associate', affiliation: 'Publishing' },
  { name: 'In\u00E9s Moreau', discipline: 'Data Sculpture', tier: 'Fellow', affiliation: 'Ikigai Lab' },
  { name: 'Zuri Nakamura', discipline: 'Generative Systems', tier: 'Verified', affiliation: 'Institute' },
]
</script>

<style scoped>
.talent-index {
  padding: var(--space-32) var(--content-padding);
  background-color: var(--color-background);
}

.section-number {
  font-family: var(--font-mono);
  color: var(--color-gold);
  margin-right: 0.5em;
}

/* ─── Header ─── */
.ti-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: var(--space-16);
  padding-bottom: var(--space-8);
  border-bottom: 1px solid var(--rule-color);
}

.ti-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.ti-heading {
  font-size: var(--text-display);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-hero);
  line-height: var(--leading-display);
}

.ti-subtitle {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  text-align: right;
  line-height: var(--leading-normal);
  max-width: 28ch;
}

/* ─── Creator rows ─── */
.ti-list {
  display: flex;
  flex-direction: column;
}

.ti-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-6) 0;
  border-bottom: 1px solid var(--rule-color);
  cursor: pointer;
  transition: background-color var(--duration-normal) ease;
}

.ti-row:hover {
  background-color: rgba(231, 194, 117, 0.02);
  box-shadow: inset 3px 0 0 var(--color-gold);
}

.ti-row-left {
  display: flex;
  align-items: baseline;
  gap: var(--space-6);
}

.ti-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  min-width: 3ch;
}

.ti-name-block {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.ti-name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-tight);
  line-height: var(--leading-tight);
}

.ti-discipline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-dark-muted);
}

/* ─── Row right ─── */
.ti-row-right {
  display: flex;
  align-items: center;
  gap: var(--space-8);
}

/* ─── Tier badges ─── */
.ti-badge {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-3);
  border: 1px solid var(--rule-color);
  color: var(--color-dark-muted);
}

.ti-badge-icon {
  font-size: 14px;
}

/* Associate — entry level, muted */
.ti-badge--associate {
  border-color: rgba(161, 161, 170, 0.15);
  color: var(--color-dark-muted);
}

/* Verified — proven, gold accent */
.ti-badge--verified {
  border-color: rgba(184, 150, 78, 0.2);
  color: var(--color-gold);
}

.ti-badge--verified .ti-badge-icon {
  color: var(--color-gold);
}

/* Fellow — distinguished, gold fill */
.ti-badge--fellow {
  background: rgba(184, 150, 78, 0.15);
  border-color: rgba(184, 150, 78, 0.3);
  color: var(--color-gold);
}

.ti-badge--fellow .ti-badge-icon {
  color: var(--color-gold);
}

/* Legacy — highest honor, double border + gradient text */
.ti-badge--legacy {
  border: 2px solid rgba(184, 150, 78, 0.4);
  box-shadow: inset 0 0 0 1px rgba(184, 150, 78, 0.2), 0 0 16px -4px rgba(184, 150, 78, 0.15);
  background: transparent;
  color: var(--color-gold);
  background-image: linear-gradient(135deg, var(--color-gold) 0%, #D4B96A 50%, var(--color-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.ti-badge--legacy .ti-badge-icon {
  color: var(--color-gold);
  -webkit-text-fill-color: var(--color-gold);
}

.ti-affiliation {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  min-width: 10ch;
}

.ti-arrow {
  font-size: 18px;
  color: var(--color-dark-muted);
  opacity: 0;
  transform: translateX(-4px);
  transition: opacity var(--duration-normal) ease,
              transform var(--duration-normal) ease;
}

.ti-row:hover .ti-arrow {
  opacity: 1;
  transform: translateX(0);
}

.ti-row:hover .ti-name {
  color: var(--color-gold);
  transition: color var(--duration-normal) ease;
}

/* ─── Footer link ─── */
.ti-footer {
  display: flex;
  justify-content: center;
  padding-top: var(--space-12);
}

.ti-apply-link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
  color: var(--color-dark-muted);
  background-image: none;
  transition: color var(--duration-normal) ease;
}

.ti-apply-link:hover {
  color: var(--color-gold);
}

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .talent-index {
    padding: var(--space-16) var(--content-padding);
  }

  .ti-header {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-4);
  }

  .ti-subtitle {
    text-align: left;
    max-width: none;
  }

  .ti-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
    padding: var(--space-5) 0;
  }

  .ti-row-right {
    padding-left: calc(3ch + var(--space-6));
    gap: var(--space-4);
    flex-wrap: wrap;
  }

  .ti-arrow {
    display: none;
  }

  .ti-name {
    font-size: var(--text-h3);
  }
}
</style>
