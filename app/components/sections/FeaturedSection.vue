<template>
  <section ref="section" class="featured section">
    <div class="section-default">
      <p class="overline reveal">From The Road</p>
      <h2 class="word-reveal">Featured thinking</h2>
      <p class="featured-intro reveal">
        Essays, dispatches, and frameworks from inside the ecosystem.
      </p>

      <div class="featured-grid">
        <article v-for="post in posts" :key="post.title" class="featured-card reveal">
          <div class="featured-image">
            <img :src="post.image" :alt="`${post.tag}: ${post.title}`" loading="lazy" @load="onImageLoad" />
          </div>
          <div class="featured-content">
            <span class="featured-tag">{{ post.tag }}</span>
            <h3>{{ post.title }}</h3>
            <p>{{ post.excerpt }}</p>
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
import { useWordReveal } from '~/composables/useWordReveal'

const section = ref<HTMLElement | null>(null)
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
useTilt(section, '.featured-card', { maxRotation: 3 })
useWordReveal(section, '.word-reveal')

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(section.value)
  if (!section.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const images = section.value!.querySelectorAll('.featured-image')

    images.forEach((img, i) => {
      // Alternate wipe directions across the 3 cards
      const directions = [
        'inset(0 100% 0 0)',  // from left
        'inset(100% 0 0 0)',  // from top
        'inset(0 0 0 100%)',  // from right
      ]

      gsap.fromTo(img,
        { clipPath: directions[i % 3] },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.1,
          delay: i * 0.15,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: img,
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

const posts = [
  {
    title: 'The Craft Premium',
    tag: 'Essay',
    excerpt: 'Why human-led creative work commands more value in an AI-saturated market. And what it takes to prove the difference.',
    image: '/images/featured/craft-premium.webp',
  },
  {
    title: 'Building in Public, Thinking in Private',
    tag: 'Practice',
    excerpt: 'The case for protecting your creative process from the content machine. Some work gains power by staying private.',
    image: '/images/featured/building-in-public.webp',
  },
  {
    title: 'Ten Institutions, One District',
    tag: 'Announcement',
    excerpt: 'Introducing Meraki District: why we built a cultural ecosystem for AI-native creators, and what comes next.',
    image: '/images/featured/ten-institutions.webp',
  },
]
function onImageLoad(e: Event) {
  (e.target as HTMLElement).classList.add("loaded")
}
</script>

<style scoped>
.featured h2 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

.featured-intro {
  color: var(--color-text-muted);
  margin-bottom: var(--space-12);
}

.featured-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
}

.featured-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.featured-image {
  aspect-ratio: 3 / 2;
  overflow: hidden;
  margin-bottom: var(--space-6);
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(0.97);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.featured-image img.loaded {
  opacity: 1;
  transform: scale(1);
}

.featured-card:hover .featured-image img.loaded {
  transform: scale(1.03);
}

.featured-tag {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-3);
  display: block;
}

.featured-content h3 {
  font-size: var(--text-h4);
  margin-bottom: var(--space-3);
  display: inline;
  background-image: linear-gradient(var(--color-gold), var(--color-gold));
  background-size: 0% 1px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size var(--duration-normal) ease;
}

.featured-card:hover .featured-content h3 {
  background-size: 100% 1px;
}

.featured-content p {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  margin-top: var(--space-3);
}

@media (max-width: 768px) {
  .featured-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}
</style>
