<template>
  <div ref="pageRef">
    <!-- Hero -->
    <section class="road-hero section-dark">
      <div class="section-default road-hero-content">
        <p class="overline reveal">Explore</p>
        <h1 class="road-hero-title word-reveal">The Districts</h1>
        <p class="road-hero-sub reveal">
          Eleven districts, each with its own mandate. One shared infrastructure.
        </p>
      </div>
    </section>

    <!-- The Road -->
    <section ref="trackSection" class="road-section section-dark">
      <div class="road-track">
        <!-- Central gold line -->
        <div class="road-line-wrap" aria-hidden="true">
          <div ref="roadLine" class="road-line" />
        </div>

        <!-- District stops — size varies by status -->
        <div
          v-for="(d, i) in districts"
          :key="d.slug"
          class="road-stop"
          :class="[
            i % 2 === 0 ? 'stop-left' : 'stop-right',
            'stop--' + d.status,
          ]"
          :style="{ '--color-accent': d.accentColor, '--color-accent-accessible': d.accentColorAccessible }"
        >
          <div class="stop-marker" />
          <div class="stop-connector" />

          <NuxtLink :to="'/districts/' + d.slug" class="stop-card reveal">
            <!-- Image -->
            <div class="stop-image">
              <NuxtImg :src="d.image" :alt="d.name" loading="lazy" decoding="async" width="600" height="400" />
              <span class="stop-badge" :class="'badge--' + d.status">
                {{ d.status === 'active' ? 'Active' : d.status === 'coming-soon' ? 'Coming soon' : 'In development' }}
              </span>
            </div>

            <!-- Info -->
            <div class="stop-body">
              <div class="stop-meta">
                <span class="stop-number">{{ d.number }}</span>
                <span class="stop-type">{{ d.type }}</span>
              </div>
              <h3 class="stop-name">{{ d.name }}</h3>
              <p class="stop-desc">{{ d.description }}</p>

              <!-- Pull quote — visible on active/coming-soon cards -->
              <blockquote v-if="d.status !== 'development'" class="stop-quote">
                &ldquo;{{ d.pullQuote }}&rdquo;
              </blockquote>

              <!-- Offerings — visible on active cards -->
              <div v-if="d.status === 'active'" class="stop-offerings">
                <span v-for="(o, j) in d.offerings" :key="j" class="stop-tag">{{ o }}</span>
              </div>

              <span v-if="d.statusNote" class="stop-note">{{ d.statusNote }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer links -->
    <section class="road-footer section">
      <div class="section-default">
        <div class="rf-grid">
          <NuxtLink to="/the-road" class="rf-card rf-dark reveal">
            <span class="rf-type">Publishing & Editorial</span>
            <h3>The Road</h3>
            <p>Essays, dispatches, and cultural criticism for creators who think deeply.</p>
            <span class="rf-link">Read &rarr;</span>
          </NuxtLink>
          <NuxtLink to="/about" class="rf-card reveal">
            <span class="rf-type">About</span>
            <h3>Our Story</h3>
            <p>The origin, the founders, and the principles.</p>
            <span class="rf-link">Learn more &rarr;</span>
          </NuxtLink>
          <NuxtLink to="/apply" class="rf-card rf-accent reveal">
            <span class="rf-type">Join</span>
            <h3>Express Interest</h3>
            <p>For creators ready to go further.</p>
            <span class="rf-link">Apply &rarr;</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGsapScrollReveal, waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const pageRef = ref<HTMLElement | null>(null)
const trackSection = ref<HTMLElement | null>(null)
const roadLine = ref<HTMLElement | null>(null)

useGsapScrollReveal(pageRef, '.reveal', { stagger: 0.06 })
useWordReveal(pageRef, '.word-reveal')

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!pageRef.value || !roadLine.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  await waitForAncestorAnimations(pageRef.value)
  if (!pageRef.value || !roadLine.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    // Draw the gold line
    gsap.fromTo(roadLine.value!,
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: trackSection.value,
          start: 'top 60%',
          end: 'bottom 50%',
          scrub: 0.6,
        },
      }
    )

    // Clip-path image reveals — direction matches card side
    gsap.utils.toArray<HTMLElement>('.stop-image').forEach((img, i) => {
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

    // Markers bounce in
    gsap.utils.toArray<HTMLElement>('.stop-marker').forEach((marker) => {
      gsap.fromTo(marker,
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1,
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
  }, pageRef.value)
})

onUnmounted(() => {
  ctx?.revert()
})

useHead({
  title: 'Districts \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'Navigate the eleven districts of Meraki Road. Find your way into a cultural ecosystem built for AI-native creators.' },
  ],
})
</script>

<style scoped>
/* ─── Hero ─── */
.road-hero {
  padding: calc(var(--space-32) + 3rem) 0 var(--space-16);
  text-align: center;
}

.road-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.road-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  max-width: 44ch;
  margin: var(--space-4) auto 0;
  line-height: var(--leading-relaxed);
}

/* ─── Road Track ─── */
.road-section {
  padding: var(--space-8) 0 var(--space-24);
}

.road-track {
  position: relative;
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 var(--content-padding);
}

/* Center line with glow */
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
  background: linear-gradient(to bottom, transparent 0%, var(--color-gold) 2%, var(--color-gold) 98%, transparent 100%);
  opacity: 0.3;
  transform-origin: top center;
  box-shadow: 0 0 15px color-mix(in srgb, var(--color-gold) 12%, transparent);
}

/* ─── Stop (each district) ─── */
.road-stop {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: var(--space-16);
}

.road-stop:last-child {
  margin-bottom: 0;
}

.stop-left {
  align-items: flex-start;
  padding-right: calc(50% + var(--space-12));
}

.stop-right {
  align-items: flex-end;
  padding-left: calc(50% + var(--space-12));
}

/* ─── Marker ─── */
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
    0 0 10px color-mix(in srgb, var(--color-accent) 50%, transparent),
    0 0 24px color-mix(in srgb, var(--color-accent) 20%, transparent);
}

/* ─── Connector from card to line ─── */
.stop-connector {
  position: absolute;
  top: calc(var(--space-8) + 4px);
  height: 1px;
  opacity: 0.2;
  z-index: 2;
}

.stop-left .stop-connector {
  left: calc(50% + 6px);
  right: calc(50% + var(--space-12));
  background: linear-gradient(to left, var(--color-accent), transparent);
}

.stop-right .stop-connector {
  right: calc(50% + 6px);
  left: calc(50% + var(--space-12));
  background: linear-gradient(to right, var(--color-accent), transparent);
}

/* ─── Card ─── */
.stop-card {
  display: block;
  width: 100%;
  text-decoration: none;
  color: inherit;
  background-image: none;
  background: color-mix(in srgb, var(--color-dark-bg) 85%, transparent);
  border: 1px solid rgba(250, 250, 249, 0.06);
  overflow: hidden;
  transition: border-color var(--duration-normal) ease,
              box-shadow var(--duration-normal) ease,
              transform var(--duration-normal) var(--ease-out);
}

.stop-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.35);
  transform: translateY(-4px);
}

.stop-card:hover .stop-image img {
  transform: scale(1.04);
}

.stop-card:hover .stop-name {
  color: var(--color-accent);
}

/* ─── Status-based card sizing ─── */
/* Active districts: larger, more content */
.stop--active .stop-card {
  max-width: 480px;
}

.stop--active .stop-image {
  aspect-ratio: 16 / 9;
}

/* Coming soon: medium */
.stop--coming-soon .stop-card {
  max-width: 440px;
}

.stop--coming-soon .stop-image {
  aspect-ratio: 16 / 10;
}

/* Development: compact */
.stop--development .stop-card {
  max-width: 400px;
}

.stop--development .stop-image {
  aspect-ratio: 2 / 1;
}

.stop--development .stop-image img {
  opacity: 0.7;
}

/* ─── Image ─── */
.stop-image {
  overflow: hidden;
  position: relative;
}

.stop-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s var(--ease-out);
}

/* ─── Status badge ─── */
.stop-badge {
  position: absolute;
  top: var(--space-3);
  right: var(--space-3);
  font-size: 0.5625rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  padding: 0.25rem 0.6rem;
  backdrop-filter: blur(12px);
  z-index: 2;
}

.badge--active {
  color: #fff;
  background: rgba(22, 163, 74, 0.7);
}

.badge--coming-soon {
  color: #fff;
  background: rgba(184, 150, 78, 0.6);
}

.badge--development {
  color: rgba(250, 250, 249, 0.7);
  background: rgba(250, 250, 249, 0.1);
}

/* ─── Body ─── */
.stop-body {
  padding: var(--space-5) var(--space-6) var(--space-6);
  position: relative;
}

.stop-meta {
  display: flex;
  align-items: baseline;
  gap: var(--space-3);
  margin-bottom: var(--space-2);
}

.stop-number {
  font-family: var(--font-mono);
  font-size: clamp(2rem, 4vw, 3rem);
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
}

.stop-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
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
}

/* ─── Pull quote (visible on active + coming-soon) ─── */
.stop-quote {
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-style: italic;
  font-weight: 300;
  color: var(--color-dark-text);
  line-height: var(--leading-relaxed);
  margin-top: var(--space-4);
  padding-left: var(--space-4);
  border-left: 2px solid var(--color-accent);
  opacity: 0.8;
}

/* ─── Offering tags (visible on active) ─── */
.stop-offerings {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin-top: var(--space-4);
}

.stop-tag {
  font-size: 0.625rem;
  color: var(--color-dark-muted);
  padding: var(--space-1) var(--space-3);
  border: 1px solid rgba(250, 250, 249, 0.1);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* ─── Status note ─── */
.stop-note {
  display: block;
  font-size: var(--text-caption);
  color: var(--color-accent);
  margin-top: var(--space-3);
}

/* ─── Footer links ─── */
.road-footer {
  padding: var(--space-16) 0;
}

.rf-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1px;
  background: var(--color-border);
}

.rf-card {
  display: block;
  background: var(--color-background);
  padding: var(--space-8);
  text-decoration: none;
  color: inherit;
  background-image: none;
  transition: background var(--duration-normal) ease;
}

.rf-card:hover { background: var(--color-surface); }

.rf-type {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold-accessible);
  display: block;
  margin-bottom: var(--space-3);
}

.rf-card h3 {
  font-family: var(--font-display);
  font-size: var(--text-h4);
  font-weight: 400;
  margin-bottom: var(--space-2);
}

.rf-card p {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
  margin-bottom: var(--space-4);
}

.rf-link {
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: var(--tracking-widest);
  color: var(--color-gold);
}

.rf-dark {
  background: var(--color-dark-bg);
  color: var(--color-dark-text);
}
.rf-dark:hover { background: var(--color-graphite); }
.rf-dark p { color: var(--color-dark-muted); }

.rf-accent {
  border-left: 2px solid var(--color-gold);
}
.rf-accent h3 { color: var(--color-gold-accessible); }

/* ─── Mobile ─── */
@media (max-width: 768px) {
  .road-hero {
    padding-top: calc(var(--space-16) + 3rem);
    text-align: left;
  }

  .road-hero-sub { margin-left: 0; }

  .road-line-wrap {
    left: var(--space-4);
    transform: none;
  }

  .stop-left,
  .stop-right {
    padding: 0 0 0 var(--space-12);
    align-items: flex-start;
  }

  .stop-marker {
    left: var(--space-4);
    transform: translateX(-50%);
  }

  .stop-connector { display: none; }

  .stop--active .stop-card,
  .stop--coming-soon .stop-card,
  .stop--development .stop-card {
    max-width: none;
  }

  .rf-grid { grid-template-columns: 1fr; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .road-track { max-width: 860px; }

  .stop--active .stop-card { max-width: 380px; }
  .stop--coming-soon .stop-card { max-width: 350px; }
  .stop--development .stop-card { max-width: 320px; }

  .rf-grid { grid-template-columns: 1fr 1fr; }
  .rf-dark { grid-column: 1 / -1; }
}
</style>
