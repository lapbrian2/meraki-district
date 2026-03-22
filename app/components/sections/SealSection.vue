<template>
  <section ref="section" class="seal section-dark">
    <div class="seal-inner section-default">

      <div class="seal-header">
        <p class="seal-overline reveal">The Seal</p>
        <h2 class="seal-title word-reveal">Earned through practice</h2>
        <p class="seal-intro reveal">
          A four-tier credentialing system that recognises genuine creative mastery.
          Each level requires demonstrated practice, peer review, and real contribution.
        </p>
      </div>

      <div class="seal-tiers">
        <div class="seal-progress-track" aria-hidden="true">
          <div class="seal-progress-fill" ref="progressFill" />
        </div>

        <div
          v-for="(tier, index) in tiers"
          :key="tier.name"
          class="seal-tier"
          :class="[
            { 'seal-tier--gold': tier.accent },
            'seal-tier--' + tier.name.toLowerCase()
          ]"
        >
          <div class="seal-tier-marker" aria-hidden="true" />
          <div class="seal-tier-ordinal">{{ tier.ordinal }}</div>
          <div class="seal-tier-content">
            <span class="seal-tier-level">Tier {{ tier.ordinal }}</span>
            <h3 class="seal-tier-name">{{ tier.name }}</h3>
            <span class="seal-base" :class="'seal-' + tier.name.toLowerCase()">{{ tier.name }}</span>
            <p class="seal-tier-desc">{{ tier.description }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'

const section = ref<HTMLElement | null>(null)
const progressFill = ref<HTMLElement | null>(null)

useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
useWordReveal(section, '.word-reveal')

let ctx: gsap.Context | null = null

const tiers = [
  {
    name: 'Associate',
    ordinal: 'I',
    accent: false,
    description: 'Entry to the districts. Complete foundational coursework and demonstrate active practice. The first step toward recognition.',
  },
  {
    name: 'Verified',
    ordinal: 'II',
    accent: false,
    description: 'Peer-reviewed portfolio. Consistent output quality, meaningful contribution to the community, and a body of work that speaks for itself.',
  },
  {
    name: 'Master',
    ordinal: 'III',
    accent: true,
    description: 'Recognised expertise. Published work, a mentorship track record, and demonstrated impact. The standard bearers.',
  },
  {
    name: 'Fellow',
    ordinal: 'IV',
    accent: true,
    description: 'Highest distinction. Sustained excellence and significant contribution to the field. Reserved for those whose practice has shaped the practice of others.',
  },
]

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  ctx = gsap.context(() => {
    // Progress line fills as you scroll through tiers
    if (progressFill.value) {
      gsap.fromTo(progressFill.value,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '.seal-tiers',
            start: 'top 80%',
            end: 'bottom 40%',
            scrub: 0.6,
          },
        }
      )
    }

    // Each tier entrance
    const tierEls = section.value!.querySelectorAll('.seal-tier')
    tierEls.forEach((tier, i) => {
      const ordinal = tier.querySelector('.seal-tier-ordinal')
      const content = tier.querySelector('.seal-tier-content')
      const marker = tier.querySelector('.seal-tier-marker')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tier,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(marker, {
        scale: 0,
        duration: 0.4,
        ease: 'back.out(2)',
      }, 0)
      .from(ordinal, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.1)
      .from(content, {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: 'power3.out',
      }, 0.2)
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.seal {
  padding: var(--space-32) 0;
}

.seal-inner {
  position: relative;
}

/* Header */
.seal-header {
  margin-bottom: var(--space-24);
}

.seal-overline {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.seal-title {
  color: var(--color-dark-text);
  margin-bottom: var(--space-6);
}

.seal-intro {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 55ch;
}

/* Tiers container */
.seal-tiers {
  position: relative;
  padding-left: 3rem;
}

/* Seal badge overrides (base styles in variables.css) */
.seal-base {
  border-style: solid;
  margin-bottom: var(--space-4);
  margin-top: var(--space-2);
}

.seal-master { border-color: var(--color-gold); color: var(--color-gold); background: rgba(184, 150, 78, 0.12); }

/* Vertical progress track */
.seal-progress-track {
  position: absolute;
  left: 5px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(250, 250, 249, 0.12);
}

.seal-progress-fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(161, 161, 170, 0.4), var(--color-gold), rgba(184, 150, 78, 0.8));
  transform-origin: top center;
  box-shadow: 0 0 8px rgba(184, 150, 78, 0.3);
}

/* Individual tier */
.seal-tier {
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: var(--space-8);
  padding: var(--space-12) 0;
  padding-left: var(--space-6);
  border-bottom: 1px solid rgba(250, 250, 249, 0.06);
  border-left: 2px solid transparent;
  transition: border-left-color 0.6s ease;
}

.seal-tier:last-child {
  border-bottom: none;
}

/* Per-tier left accent borders */
.seal-tier--associate {
  border-left-color: rgba(161, 161, 170, 0.25);
}

.seal-tier--verified {
  border-left-color: rgba(184, 150, 78, 0.3);
}

.seal-tier--master {
  border-left-color: var(--color-gold);
}

.seal-tier--fellow {
  border-left-color: var(--color-gold);
}

/* Node marker on the progress line */
.seal-tier-marker {
  position: absolute;
  left: -3rem;
  top: var(--space-12);
  width: 12px;
  height: 12px;
  background: rgba(250, 250, 249, 0.15);
  transform: translateX(-3px);
  transition: background 0.6s ease, box-shadow 0.6s ease;
}

.seal-tier--gold .seal-tier-marker {
  background: var(--color-gold);
  box-shadow: 0 0 12px rgba(184, 150, 78, 0.4);
}

/* Ordinal (massive display) */
.seal-tier-ordinal {
  font-family: var(--font-display);
  font-size: clamp(3.5rem, 7vw, 5.5rem);
  font-weight: 300;
  line-height: 0.85;
  color: rgba(250, 250, 249, 0.08);
  letter-spacing: -0.02em;
  min-width: 100px;
  transition: color 0.6s ease;
  font-variation-settings: 'WONK' 1, 'SOFT' 70;
}

.seal-tier:hover .seal-tier-ordinal {
  color: rgba(250, 250, 249, 0.18);
}

.seal-tier--gold .seal-tier-ordinal {
  color: rgba(184, 150, 78, 0.2);
}

.seal-tier--gold:hover .seal-tier-ordinal {
  color: rgba(184, 150, 78, 0.4);
}

/* Content */
.seal-tier-content {
  padding-top: 0.5rem;
}

.seal-tier-level {
  font-size: 0.625rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-dark-muted);
  display: block;
  margin-bottom: var(--space-2);
}

.seal-tier--gold .seal-tier-level {
  color: var(--color-gold);
}

.seal-tier-name {
  font-family: var(--font-display);
  font-size: var(--text-h2);
  font-weight: 300;
  color: var(--color-dark-text);
  margin-bottom: var(--space-3);
  line-height: var(--leading-snug);
  letter-spacing: var(--tracking-tight);
}

.seal-tier-desc {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

/* Responsive */
@media (max-width: 768px) {
  .seal-tiers {
    padding-left: 2rem;
  }

  .seal-tier-marker {
    left: -2rem;
  }

  .seal-tier {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .seal-tier-ordinal {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
    min-width: auto;
  }

  .seal-tier-name {
    font-size: var(--text-h3);
  }

  .seal-tier-desc {
    font-size: var(--text-small);
  }
}
</style>
