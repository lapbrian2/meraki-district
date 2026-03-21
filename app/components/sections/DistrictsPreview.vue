<template>
  <section ref="section" class="roadmap section-dark">
    <div class="section-wide roadmap-inner">
      <div class="roadmap-header">
        <p class="overline reveal">The Ecosystem</p>
        <h2 class="word-reveal">Eleven districts, one road.</h2>
      </div>

      <!-- The Road: alternating cards with connecting line -->
      <div ref="trackEl" class="road-track">
        <!-- Central gold line -->
        <div class="road-line-wrap" aria-hidden="true">
          <div ref="roadLine" class="road-line" />
        </div>

        <div
          v-for="(d, i) in districts"
          :key="d.slug"
          class="road-stop"
          :class="{ 'stop-left': i % 2 === 0, 'stop-right': i % 2 === 1 }"
          :style="{ '--color-accent': d.accentColor }"
        >
          <!-- Marker on the line -->
          <div class="stop-marker" />

          <!-- Card -->
          <NuxtLink :to="`/districts/${d.slug}`" class="stop-card reveal">
            <div class="stop-image">
              <NuxtImg :src="d.image" :alt="d.name" loading="lazy" decoding="async" width="480" height="300" />
            </div>
            <div class="stop-info">
              <span class="stop-number">{{ d.number }}</span>
              <span class="stop-type">{{ d.type }}</span>
              <h3 class="stop-name">{{ d.name }}</h3>
              <p class="stop-desc">{{ d.description }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <div class="roadmap-cta reveal">
        <NuxtLink to="/districts" class="roadmap-link">Explore all districts &rarr;</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const section = ref<HTMLElement | null>(null)
const trackEl = ref<HTMLElement | null>(null)
const roadLine = ref<HTMLElement | null>(null)

useGsapScrollReveal(section, '.reveal', { stagger: 0.06 })
useWordReveal(section, '.word-reveal')

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!section.value || !roadLine.value) return

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reducedMotion) return

  await waitForAncestorAnimations(section.value)
  if (!section.value || !roadLine.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // Draw the gold line as you scroll through the track
    gsap.fromTo(roadLine.value!,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: trackEl.value,
          start: 'top 70%',
          end: 'bottom 50%',
          scrub: 0.6,
        },
      }
    )

    // Clip-path reveal on each card image
    const images = gsap.utils.toArray<HTMLElement>('.stop-image')
    images.forEach((img, i) => {
      const isLeft = i % 2 === 0
      gsap.fromTo(img,
        { clipPath: isLeft ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: img,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      )
    })

    // Markers pulse in
    const markers = gsap.utils.toArray<HTMLElement>('.stop-marker')
    markers.forEach((marker) => {
      gsap.fromTo(marker,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: marker,
            start: 'top 80%',
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
</script>

<style scoped>
.roadmap {
  padding: var(--space-32) 0 var(--space-16);
  overflow: hidden;
}

.roadmap-header {
  margin-bottom: var(--space-16);
  text-align: center;
}

.roadmap-header h2 {
  margin-top: var(--space-4);
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
}

/* ─── Track: the road itself ─── */
.road-track {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: var(--space-8) 0;
}

/* Central gold line */
.road-line-wrap {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 1.5px;
  transform: translateX(-50%);
}

.road-line {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    transparent 0%,
    var(--color-gold) 3%,
    var(--color-gold) 97%,
    transparent 100%
  );
  opacity: 0.3;
  transform-origin: top center;
}

/* ─── Each stop along the road ─── */
.road-stop {
  position: relative;
  display: flex;
  margin-bottom: var(--space-12);
  padding: 0 calc(50% + var(--space-12)) 0 0;
}

.road-stop:last-child {
  margin-bottom: 0;
}

.stop-left {
  padding: 0 calc(50% + var(--space-12)) 0 0;
  justify-content: flex-end;
}

.stop-right {
  padding: 0 0 0 calc(50% + var(--space-12));
  justify-content: flex-start;
}

/* ─── Marker on the center line ─── */
.stop-marker {
  position: absolute;
  left: 50%;
  top: var(--space-8);
  width: 10px;
  height: 10px;
  background: var(--color-accent);
  transform: translateX(-50%);
  z-index: 3;
  box-shadow:
    0 0 8px color-mix(in srgb, var(--color-accent) 50%, transparent),
    0 0 20px color-mix(in srgb, var(--color-accent) 20%, transparent);
}

/* ─── Card ─── */
.stop-card {
  display: block;
  max-width: 420px;
  width: 100%;
  text-decoration: none;
  color: inherit;
  background-image: none;
  background: var(--color-dark-bg);
  border: 1px solid rgba(250, 250, 249, 0.06);
  overflow: hidden;
  transition: border-color var(--duration-normal) ease,
              box-shadow var(--duration-normal) ease;
}

.stop-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.3);
}

.stop-card:hover .stop-image img {
  transform: scale(1.04);
}

.stop-card:hover .stop-name {
  color: var(--color-accent);
}

/* ─── Image ─── */
.stop-image {
  aspect-ratio: 16 / 10;
  overflow: hidden;
}

.stop-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s var(--ease-out);
}

/* ─── Info ─── */
.stop-info {
  padding: var(--space-4) var(--space-6) var(--space-6);
  position: relative;
}

.stop-number {
  position: absolute;
  top: var(--space-4);
  right: var(--space-6);
  font-family: var(--font-mono);
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 300;
  letter-spacing: var(--tracking-ultra-wide);
  color: var(--color-accent);
  opacity: 0.12;
  line-height: 1;
}

.stop-type {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-accent);
  display: block;
  margin-bottom: var(--space-1);
}

.stop-name {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  color: var(--color-dark-text);
  line-height: var(--leading-snug);
  margin-bottom: var(--space-2);
  transition: color var(--duration-normal) ease;
}

.stop-desc {
  font-size: var(--text-small);
  color: var(--color-dark-muted);
  line-height: var(--leading-normal);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* ─── CTA ─── */
.roadmap-cta {
  margin-top: var(--space-16);
  text-align: center;
}

.roadmap-link {
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  background-image: none;
  transition: opacity var(--duration-fast) ease;
}

.roadmap-link:hover {
  opacity: 0.7;
}

/* ─── Mobile ─── */
@media (max-width: 768px) {
  .roadmap {
    padding: var(--space-16) 0;
  }

  .roadmap-header {
    text-align: left;
    margin-bottom: var(--space-12);
  }

  .roadmap-header h2 {
    font-size: var(--text-h1);
  }

  .road-line-wrap {
    left: var(--space-4);
    transform: none;
  }

  .road-stop,
  .stop-left,
  .stop-right {
    padding: 0 0 0 var(--space-12);
    justify-content: flex-start;
  }

  .stop-marker {
    left: var(--space-4);
    transform: translateX(-50%);
  }

  .stop-card {
    max-width: none;
  }
}

/* ─── Tablet ─── */
@media (min-width: 769px) and (max-width: 1024px) {
  .road-track {
    max-width: 800px;
  }

  .stop-card {
    max-width: 340px;
  }
}
</style>
