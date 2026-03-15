<template>
  <section ref="section" class="founders section">
    <div class="section-wide">
      <div class="founders-grid">
        <article
          v-for="founder in founders"
          :key="founder.name"
          class="founder-card"
        >
          <div class="founder-image-wrap reveal-image">
            <img
              class="founder-image"
              :src="founder.image"
              :alt="`Portrait of ${founder.name}, ${founder.role}`"
              loading="lazy"
            />
          </div>
          <div class="founder-content reveal">
            <h2 class="founder-name">{{ founder.name }}</h2>
            <p class="founder-role">{{ founder.role }}</p>
            <p class="founder-bio">{{ founder.bio }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useTilt } from '~/composables/useInteractions'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
useTilt(section, '.founder-card', { maxRotation: 2 })

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    section.value.querySelectorAll('.reveal-image').forEach((el) => {
      ;(el as HTMLElement).style.clipPath = 'inset(0)'
    })
    return
  }

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    gsap.utils.toArray<HTMLElement>('.reveal-image').forEach((el, i) => {
      // Alternate wipe direction: first from left, second from right
      const fromClip = i === 0
        ? 'inset(0 100% 0 0)'   // wipe from left
        : 'inset(0 0 0 100%)'   // wipe from right

      gsap.fromTo(el,
        { clipPath: fromClip },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.2,
          ease: 'power3.inOut',
          delay: i * 0.2,
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })
  }, section.value)
})

onUnmounted(() => {
  ctx?.revert()
})

const founders = [
  {
    name: 'Brian Lapinski',
    role: 'Co-founder',
    bio: "Brian builds systems. A developer who treats AI as a creative partner, he recognises the infrastructure that creative practice requires. Meraki District grew from his conviction that the creators defining this era need quarters that match their ambition\u2014they need quarters that match their ambition.",
    image: '/images/founders/brian.jpg',
  },
  {
    name: 'Rachel Gaia',
    role: 'Co-founder',
    bio: "Rachel builds worlds. A classically trained musician turned design entrepreneur turned AI-native artist, she\u2019s spent decades learning what it means to make something worth experiencing. At Meraki District, she shapes the creative vision and editorial voice that gives the ecosystem its identity.",
    image: '/images/founders/rachel.webp',
  },
]
</script>

<style scoped>
.founders {
  background-color: var(--color-background);
}

.founders-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-12);
}

.founder-image-wrap {
  overflow: hidden;
  margin-bottom: var(--space-6);
}

.founder-image {
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out);
}

.founder-card:hover .founder-image {
  transform: scale(1.02);
}

.founder-name {
  font-size: var(--text-h2);
  margin-bottom: var(--space-1);
}

.founder-role {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-6);
}

.founder-bio {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  max-width: 45ch;
}

@media (max-width: 768px) {
  .founders-grid {
    grid-template-columns: 1fr;
    gap: var(--space-16);
  }

  .founder-image {
    aspect-ratio: 4 / 3;
  }
}
</style>
