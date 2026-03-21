<template>
  <div ref="pageRef">
    <!-- Hero -->
    <section class="dg-hero section-dark">
      <div class="section-wide dg-hero-content">
        <p class="overline reveal">Explore</p>
        <h1 class="dg-hero-title word-reveal">The Districts</h1>
        <p class="dg-hero-sub reveal">
          Eleven districts, each with its own mandate. One shared infrastructure.
        </p>
      </div>
    </section>

    <!-- Editorial Grid -->
    <section ref="gridSection" class="dg-section">
      <div class="section-wide dg-body">
        <div class="dg-grid">
          <NuxtLink
            v-for="(d, i) in districts"
            :key="d.slug"
            :to="'/districts/' + d.slug"
            class="dg-card"
            :class="['dg-' + d.layout, 'dg-status--' + d.status]"
            :style="{ '--color-accent': d.accentColor, '--color-accent-accessible': d.accentColorAccessible }"
          >
            <div class="dg-image-wrap reveal-image">
              <NuxtImg
                class="dg-image"
                :src="d.image"
                :alt="`${d.name} — ${d.type}`"
                loading="lazy"
                decoding="async"
                width="600"
                height="400"
              />
              <span class="dg-badge" :class="'badge--' + d.status">
                {{ d.status === 'active' ? 'Active' : d.status === 'coming-soon' ? 'Coming soon' : 'In development' }}
              </span>
            </div>
            <div class="dg-content reveal">
              <div class="dg-meta">
                <span class="dg-number">{{ d.number }}</span>
                <span class="dg-dot" aria-hidden="true" />
                <span class="dg-type">{{ d.type }}</span>
              </div>
              <h3 class="dg-name">{{ d.name }}</h3>
              <p class="dg-desc">{{ d.description }}</p>

              <!-- Pull quote on hero/wide cards that are active or coming-soon -->
              <blockquote
                v-if="(d.layout === 'hero' || d.layout === 'wide') && d.status !== 'development'"
                class="dg-quote"
              >
                &ldquo;{{ d.pullQuote }}&rdquo;
              </blockquote>

              <!-- Offering tags on active hero/wide cards -->
              <div v-if="d.status === 'active' && (d.layout === 'hero' || d.layout === 'wide')" class="dg-tags">
                <span v-for="(o, j) in d.offerings" :key="j" class="dg-tag">{{ o }}</span>
              </div>

              <span v-if="d.statusNote" class="dg-note">{{ d.statusNote }}</span>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <section class="dg-footer section">
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
import { useTilt } from '~/composables/useInteractions'
import { useWordReveal } from '~/composables/useWordReveal'
import { districts } from '~/composables/useDistricts'

const pageRef = ref<HTMLElement | null>(null)
const gridSection = ref<HTMLElement | null>(null)

useGsapScrollReveal(pageRef, '.reveal', { stagger: 0.06 })
useWordReveal(pageRef, '.word-reveal')
useTilt(gridSection, '.dg-card', { maxRotation: 2 })

let ctx: gsap.Context | null = null

onMounted(async () => {
  if (!gridSection.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gridSection.value.querySelectorAll('.reveal-image').forEach((el) => {
      ;(el as HTMLElement).style.clipPath = 'inset(0)'
    })
    return
  }

  await waitForAncestorAnimations(gridSection.value)
  if (!gridSection.value) return

  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.reveal-image')

    // Group by visual row for grid-aware stagger
    const rows: Map<number, { el: HTMLElement; left: number }[]> = new Map()
    cards.forEach((el) => {
      const rect = el.getBoundingClientRect()
      const rowKey = Math.round(rect.top / 50) * 50
      if (!rows.has(rowKey)) rows.set(rowKey, [])
      rows.get(rowKey)!.push({ el, left: rect.left })
    })

    const sortedRows = [...rows.entries()].sort((a, b) => a[0] - b[0])

    sortedRows.forEach(([, rowCards]) => {
      rowCards.sort((a, b) => a.left - b.left)
      rowCards.forEach((card, colIndex) => {
        const isLeftCard = colIndex === 0
        const fromClip = isLeftCard
          ? 'inset(0 100% 0 0)'
          : 'inset(0 0 0 100%)'

        gsap.fromTo(card.el,
          { clipPath: fromClip },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.1,
            delay: colIndex * 0.15,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: card.el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        )
      })
    })
  }, gridSection.value)
})

onUnmounted(() => {
  ctx?.revert()
})

useHead({
  title: 'Districts \u2014 Meraki Road',
  meta: [
    { name: 'description', content: 'Navigate the eleven districts of Meraki Road. A cultural ecosystem built for AI-native creators.' },
  ],
})
</script>

<style scoped>
/* ─── Hero ─── */
.dg-hero {
  position: relative;
  overflow: hidden;
  padding: calc(var(--space-32) + 3rem) var(--content-padding) var(--space-16);
  text-align: center;
}

.dg-hero-title {
  font-size: var(--text-display);
  line-height: var(--leading-tight);
  letter-spacing: var(--tracking-hero);
  color: var(--color-dark-text);
  margin-top: var(--space-4);
}

.dg-hero-sub {
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  max-width: 44ch;
  margin: var(--space-4) auto 0;
  line-height: var(--leading-relaxed);
}

/* ─── Grid Section ─── */
.dg-section {
  background: var(--color-background);
}

.dg-body {
  padding: var(--space-16) var(--content-padding) var(--space-24);
}

/* ─── 12-Column Editorial Grid ─── */
.dg-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: clamp(1rem, 2vw, 1.5rem);
}

/* ─── Card ─── */
.dg-card {
  position: relative;
  background-image: none;
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s var(--ease-out);
}

.dg-card:hover {
  border-color: var(--color-accent);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
  transform: translateY(-3px);
}

.dg-card:hover .dg-image { transform: scale(1.04); }
.dg-card:hover .dg-type { color: var(--color-accent); }
.dg-card:hover .dg-name::after { transform: scaleX(1); }

/* ─── Layout variants (same as DistrictsGrid) ─── */
.dg-hero { grid-column: 1 / -1; }
.dg-hero .dg-image { aspect-ratio: 21 / 9; }

.dg-wide { grid-column: span 7; }
.dg-wide .dg-image { aspect-ratio: 3 / 2; }

.dg-narrow { grid-column: span 5; }
.dg-narrow .dg-image { aspect-ratio: 4 / 5; }

.dg-half { grid-column: span 6; }
.dg-half .dg-image { aspect-ratio: 4 / 3; }

/* ─── Status dimming for development districts ─── */
.dg-status--development .dg-image { opacity: 0.65; }

/* ─── Image ─── */
.dg-image-wrap {
  overflow: hidden;
  position: relative;
}

.dg-image {
  width: 100%;
  object-fit: cover;
  transition: transform 0.6s var(--ease-out);
}

/* ─── Status badge ─── */
.dg-badge {
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

.badge--active { color: #fff; background: rgba(22, 163, 74, 0.7); }
.badge--coming-soon { color: #fff; background: rgba(184, 150, 78, 0.6); }
.badge--development { color: rgba(250, 250, 249, 0.6); background: rgba(250, 250, 249, 0.08); }

/* ─── Content ─── */
.dg-content {
  padding: var(--space-3) var(--space-5) var(--space-5);
}

.dg-hero .dg-content {
  padding: var(--space-4) var(--space-6) var(--space-6);
}

.dg-meta {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin-bottom: var(--space-1);
}

.dg-number {
  font-family: var(--font-mono);
  font-size: var(--text-small);
  font-weight: 500;
  color: var(--color-accent-accessible);
  letter-spacing: var(--tracking-mega-wide);
}

.dg-dot {
  width: 3px;
  height: 3px;
  background: var(--color-text-muted);
  opacity: 0.5;
}

.dg-type {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-accent-accessible);
  transition: color var(--duration-fast) ease;
}

.dg-name {
  font-size: var(--text-h3);
  margin-bottom: var(--space-1);
  position: relative;
  display: inline-block;
}

.dg-hero .dg-name { font-size: var(--text-h2); }

.dg-name::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--color-accent);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--ease-out);
}

.dg-desc {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

.dg-hero .dg-desc {
  max-width: 55ch;
}

/* ─── Pull quote (hero/wide + active/coming-soon only) ─── */
.dg-quote {
  font-family: var(--font-display);
  font-size: var(--text-small);
  font-style: italic;
  font-weight: 300;
  color: var(--color-text);
  line-height: var(--leading-relaxed);
  margin-top: var(--space-3);
  padding-left: var(--space-4);
  border-left: 2px solid var(--color-accent);
  opacity: 0.7;
}

/* ─── Offering tags (active hero/wide only) ─── */
.dg-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
  margin-top: var(--space-3);
}

.dg-tag {
  font-size: 0.5625rem;
  color: var(--color-text-muted);
  padding: 0.15rem var(--space-2);
  border: 1px solid var(--color-border);
  letter-spacing: var(--tracking-wide);
  text-transform: uppercase;
}

/* ─── Status note ─── */
.dg-note {
  display: block;
  font-size: var(--text-caption);
  color: var(--color-accent-accessible);
  margin-top: var(--space-2);
}

/* ─── Footer ─── */
.dg-footer { padding: var(--space-16) 0; }

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

.rf-card h3 { font-family: var(--font-display); font-size: var(--text-h4); font-weight: 400; margin-bottom: var(--space-2); }
.rf-card p { font-size: var(--text-small); color: var(--color-text-muted); line-height: var(--leading-normal); margin-bottom: var(--space-4); }
.rf-link { font-size: var(--text-overline); text-transform: uppercase; letter-spacing: var(--tracking-widest); color: var(--color-gold); }
.rf-dark { background: var(--color-dark-bg); color: var(--color-dark-text); }
.rf-dark:hover { background: var(--color-graphite); }
.rf-dark p { color: var(--color-dark-muted); }
.rf-accent { border-left: 2px solid var(--color-gold); }
.rf-accent h3 { color: var(--color-gold-accessible); }

/* ─── Responsive ─── */
@media (max-width: 768px) {
  .dg-hero-title { font-size: var(--text-h1); }
  .dg-hero { text-align: left; padding-top: calc(var(--space-16) + 3rem); }
  .dg-hero-sub { margin-left: 0; }

  .dg-grid {
    grid-template-columns: 1fr;
    gap: var(--space-8);
  }

  .dg-hero, .dg-wide, .dg-narrow, .dg-half { grid-column: 1 / -1; }
  .dg-image { aspect-ratio: 3 / 2 !important; }

  .rf-grid { grid-template-columns: 1fr; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .dg-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }

  .dg-hero { grid-column: 1 / -1; }
  .dg-wide, .dg-narrow, .dg-half { grid-column: span 1; }

  .rf-grid { grid-template-columns: 1fr 1fr; }
  .rf-dark { grid-column: 1 / -1; }
}
</style>
