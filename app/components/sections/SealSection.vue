<template>
  <section ref="section" class="seal section">
    <div class="section-default">
      <p class="overline reveal">The Seal</p>
      <h2 class="word-reveal">Earned through practice</h2>
      <p class="seal-intro reveal">
        A four-tier credentialing system that recognises genuine creative mastery.
        Each level requires demonstrated practice, peer review, and real contribution.
      </p>

      <div class="seal-tiers">
        <template v-for="(tier, index) in tiers" :key="tier.name">
          <div class="seal-tier">
            <div class="seal-ordinal" :style="{ color: tier.color }">
              {{ tier.ordinal }}
            </div>
            <div class="seal-tier-body">
              <h4 class="seal-tier-name">{{ tier.name }}</h4>
              <p class="seal-tier-desc">{{ tier.description }}</p>
            </div>
          </div>
          <div v-if="index < tiers.length - 1" class="seal-rule" aria-hidden="true" />
        </template>
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
useGsapScrollReveal(section, '.reveal', { stagger: 0.1 })
useWordReveal(section, '.word-reveal')

let ctx: gsap.Context | null = null

const tiers = [
  {
    name: 'Associate',
    ordinal: 'I',
    color: 'var(--color-text-muted)',
    description: 'Entry to the ecosystem. Complete foundational coursework and demonstrate active practice.',
  },
  {
    name: 'Verified',
    ordinal: 'II',
    color: 'var(--color-text-secondary)',
    description: 'Peer-reviewed portfolio. Consistent output quality and contribution to the community.',
  },
  {
    name: 'Master',
    ordinal: 'III',
    color: 'var(--color-gold)',
    description: 'Recognised expertise. Published work, mentorship track record, and institutional impact.',
  },
  {
    name: 'Fellow',
    ordinal: 'IV',
    color: 'var(--color-gold)',
    description: 'Highest distinction. Sustained excellence and significant contribution to the field.',
  },
]

onMounted(async () => {
  if (!section.value) return

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const tierEls = section.value!.querySelectorAll('.seal-tier')
    const ruleEls = section.value!.querySelectorAll('.seal-rule')

    // Each tier animates individually
    tierEls.forEach((tier, i) => {
      const ordinal = tier.querySelector('.seal-ordinal')
      const body = tier.querySelector('.seal-tier-body')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: tier,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(ordinal, {
        opacity: 0,
        scale: 0.8,
        duration: 0.7,
        ease: 'power3.out',
      }, 0)
      .from(body, {
        opacity: 0,
        x: 30,
        duration: 0.7,
        ease: 'power3.out',
      }, 0.1)
    })

    // Gold rules draw in
    ruleEls.forEach((rule) => {
      gsap.from(rule, {
        scaleX: 0,
        duration: 0.9,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: rule,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
.seal h2 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

.seal-intro {
  color: var(--color-text-muted);
  margin-bottom: var(--space-16);
  line-height: var(--leading-relaxed);
}

.seal-tiers {
  display: flex;
  flex-direction: column;
}

.seal-tier {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: var(--space-8);
  padding: var(--space-8) 0;
  align-items: baseline;
}

.seal-ordinal {
  font-family: var(--font-display);
  font-size: var(--text-h1);
  font-weight: 300;
  line-height: 1;
  letter-spacing: var(--tracking-tight);
  transition: color var(--duration-normal) ease;
}

.seal-tier:hover .seal-ordinal {
  color: var(--color-gold) !important;
}

.seal-tier-name {
  font-size: var(--text-h3);
  margin-bottom: var(--space-3);
  font-weight: 400;
  letter-spacing: var(--tracking-snug);
}

.seal-tier-desc {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 50ch;
}

.seal-rule {
  height: 1px;
  background: linear-gradient(to right, var(--color-gold), var(--color-border));
  transform-origin: left center;
}

@media (max-width: 768px) {
  .seal-tier {
    grid-template-columns: 56px 1fr;
    gap: var(--space-4);
    padding: var(--space-6) 0;
  }

  .seal-ordinal {
    font-size: var(--text-h2);
  }

  .seal-tier-name {
    font-size: var(--text-h4);
  }

  .seal-tier-desc {
    font-size: var(--text-small);
  }
}
</style>
