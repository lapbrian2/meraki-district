<template>
  <section ref="section" class="principles section">
    <div class="section-default">
      <div class="principles-layout">
        <div class="principles-sticky">
          <p class="overline reveal">How We Work</p>
          <h2 class="principles-title word-reveal">Guiding principles</h2>
          <p class="principles-intro reveal">
            Three convictions that shape every decision at Meraki Road &mdash; from
            what we publish to who we invite.
          </p>
        </div>

        <div class="principles-scroll">
          <article
            v-for="principle in principles"
            :key="principle.title"
            class="principle-card"
          >
            <span class="principle-number">{{ principle.number }}</span>
            <h3 class="principle-title">{{ principle.title }}</h3>
            <p class="principle-body">{{ principle.body }}</p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useTilt } from '~/composables/useInteractions'
import { useWordReveal } from '~/composables/useWordReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.1 })
useTilt(section, '.principle-card', { maxRotation: 2 })
useWordReveal(section, '.word-reveal')

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  ctx = gsap.context(() => {
    const cards = section.value!.querySelectorAll('.principle-card')

    cards.forEach((card) => {
      const number = card.querySelector('.principle-number')
      const title = card.querySelector('.principle-title')
      const body = card.querySelector('.principle-body')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })

      // Border draws in from left
      tl.fromTo(card, 
        { '--border-scale': 0 },
        { '--border-scale': 1, duration: 0.8, ease: 'power2.inOut' },
      0)
      // Number scales in
      .from(number, {
        opacity: 0, scale: 0.5, duration: 0.5, ease: 'power3.out',
      }, 0.2)
      // Title slides up
      .from(title, {
        opacity: 0, y: 20, duration: 0.6, ease: 'power3.out',
      }, 0.3)
      // Body fades in
      .from(body, {
        opacity: 0, y: 15, duration: 0.6, ease: 'power3.out',
      }, 0.4)
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})

const principles = [
  {
    number: '01',
    title: 'Craft over convenience',
    body: 'We treat AI as a medium that demands mastery. The tool is available to everyone. The craft takes dedicated practice.',
  },
  {
    number: '02',
    title: 'Depth over output',
    body: 'We’d rather publish one thing worth reading than ten things worth scrolling past. Volume is easy. Substance is the work.',
  },
  {
    number: '03',
    title: 'Earned, not purchased',
    body: 'Our credentials, our community, our standards—they carry weight because they require demonstrated practice and real contribution.',
  },
]
</script>

<style scoped>
.principles {
  background-color: var(--color-surface);
}

.principles-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-16);
  align-items: start;
}

.principles-sticky {
  position: sticky;
  top: calc(var(--space-16) + 3rem);
}

.principles-title {
  margin-top: var(--space-4);
  margin-bottom: var(--space-6);
}

.principles-intro {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 36ch;
}

.principles-scroll {
  display: flex;
  flex-direction: column;
  gap: var(--space-12);
}

.principle-card {
  padding-top: var(--space-8);
  border-top: 1px solid transparent;
  background-image: linear-gradient(var(--color-gold), var(--color-gold));
  background-size: calc(var(--border-scale, 0) * 100%) 1px;
  background-position: top left;
  background-repeat: no-repeat;
  cursor: default;
}

.principle-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  color: var(--color-text-muted);
  display: block;
  margin-bottom: var(--space-4);
  transition: color var(--duration-normal) ease, transform var(--duration-normal) ease;
}

.principle-card:hover .principle-number {
  color: var(--color-gold);
  transform: scale(1.15);
  transform-origin: left center;
}

.principle-title {
  font-size: var(--text-h3);
  margin-bottom: var(--space-4);
  transition: color var(--duration-normal) ease;
}

.principle-card:hover .principle-title {
  color: var(--color-gold-accessible);
}

.principle-body {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
}

@media (max-width: 768px) {
  .principles-layout {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .principles-sticky {
    position: static;
  }

  .principles-scroll {
    gap: var(--space-8);
  }
}
</style>
