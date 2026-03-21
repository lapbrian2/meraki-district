<template>
  <section ref="section" class="featured section">
    <div class="section-default">
      <p class="overline reveal">From The Road</p>
      <h2 class="word-reveal">Featured thinking</h2>
      <p class="featured-intro reveal">
        Essays, dispatches, and frameworks from practitioners inside the ecosystem.
      </p>

      <div v-if="posts && posts.length" class="featured-layout">
        <!-- Hero essay: first post, horizontal layout -->
        <NuxtLink
          :to="posts[0].path"
          class="featured-hero reveal"
        >
          <div class="featured-hero-image featured-image">
            <NuxtImg :src="posts[0].image" :alt="`${posts[0].tag}: ${posts[0].title}`" loading="lazy" decoding="async" width="700" height="467" @load="onImageLoad" />
          </div>
          <div class="featured-hero-content">
            <span class="featured-tag">{{ posts[0].tag }}</span>
            <h3>{{ posts[0].title }}</h3>
            <p>{{ posts[0].excerpt }}</p>
            <span class="featured-read">Read essay &rarr;</span>
          </div>
        </NuxtLink>

        <!-- Remaining essays -->
        <div v-if="posts.length > 1" class="featured-grid">
          <NuxtLink
            v-for="post in posts.slice(1)"
            :key="post.path"
            :to="post.path"
            class="featured-card reveal"
          >
            <div class="featured-image">
              <NuxtImg :src="post.image" :alt="`${post.tag}: ${post.title}`" loading="lazy" decoding="async" width="400" height="267" @load="onImageLoad" />
            </div>
            <div class="featured-content">
              <span class="featured-tag">{{ post.tag }}</span>
              <h3>{{ post.title }}</h3>
              <p>{{ post.excerpt }}</p>
            </div>
          </NuxtLink>
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
useGsapScrollReveal(section, '.reveal', { stagger: 0.12 })
useTilt(section, '.featured-card', { maxRotation: 3 })
useWordReveal(section, '.word-reveal')

const { data: posts } = await useAsyncData('featured-posts', () =>
  queryCollection('theRoad')
    .where('featured', '=', true)
    .where('published', '=', true)
    .order('date', 'DESC')
    .limit(3)
    .all()
)

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

function onImageLoad(e: Event) {
  // NuxtImg SSR fast-path emits new Event('load') with no target
  const el = e.target as HTMLElement | null
  el?.classList.add('loaded')
}

// Catch SSR-cached images that fired load before hydration
onMounted(() => {
  section.value?.querySelectorAll('.featured-image img').forEach(img => {
    if ((img as HTMLImageElement).complete) img.classList.add('loaded')
  })
})
</script>

<style scoped>
.featured h2 {
  margin-top: var(--space-4);
  margin-bottom: var(--space-4);
}

.featured-intro {
  color: var(--color-text-muted);
  margin-bottom: var(--space-8);
}

/* ─── Hero essay: horizontal layout ─── */
.featured-hero {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: var(--space-8);
  margin-bottom: var(--space-8);
  cursor: pointer;
  background-image: none;
  padding: var(--space-6);
  border: 1px solid var(--color-border);
  transition: border-color var(--duration-normal) ease, box-shadow var(--duration-normal) ease;
}

.featured-hero:hover {
  border-color: var(--color-gold);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
}

.featured-hero:hover .featured-image img.loaded { transform: scale(1.03); }
.featured-hero:hover .featured-hero-content h3 { color: var(--color-gold-accessible); }
.featured-hero:hover .featured-read { opacity: 1; }

.featured-hero-image {
  aspect-ratio: 3 / 2;
  margin-bottom: 0;
}

.featured-hero-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-hero-content h3 {
  font-size: var(--text-h2);
  margin-bottom: var(--space-4);
  transition: color var(--duration-normal) ease;
}

.featured-hero-content p {
  font-size: var(--text-body);
  color: var(--color-text-muted);
  line-height: var(--leading-relaxed);
  margin-bottom: var(--space-6);
}

.featured-read {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
  opacity: 0.6;
  transition: opacity var(--duration-fast) ease;
}

/* ─── Remaining essays: standard grid ─── */
.featured-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

.featured-card {
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-image: none;
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
  display: inline-block;
  position: relative;
}

.featured-content h3::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-gold);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform var(--duration-normal) var(--ease-out);
}

.featured-card:hover .featured-content h3::after {
  transform: scaleX(1);
}

.featured-content p {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  margin-top: var(--space-3);
}

@media (max-width: 768px) {
  .featured-hero {
    grid-template-columns: 1fr;
    padding: 0;
    border: none;
    gap: var(--space-4);
  }

  .featured-hero-content h3 {
    font-size: var(--text-h3);
  }

  .featured-grid {
    grid-template-columns: 1fr;
    gap: var(--space-12);
  }
}
</style>
