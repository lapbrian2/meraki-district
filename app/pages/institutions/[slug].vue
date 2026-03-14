<template>
  <div v-if="institution" ref="root">
    <section class="inst-hero">
      <div class="inst-hero-image-wrap">
        <img
          :src="institution.image"
          :alt="`${institution.name} — ${institution.type}`"
          class="inst-hero-image"
        />
        <div class="inst-hero-overlay" />
      </div>
      <div class="inst-hero-content section-default">
        <p class="overline">{{ institution.type }}</p>
        <h1 class="inst-hero-title">{{ institution.name }}</h1>
        <span class="inst-hero-number">{{ institution.number }}</span>
      </div>
    </section>

    <section ref="section" class="inst-detail section">
      <div class="section-narrow">
        <div class="inst-rule" aria-hidden="true" />
        <p class="inst-long reveal">{{ institution.longDescription }}</p>

        <div class="inst-status reveal">
          <div class="inst-status-marker" />
          <div>
            <p class="inst-status-label">Status</p>
            <p class="inst-status-text">
              This institution is currently in development. We’re building
              something worth waiting for.
            </p>
          </div>
        </div>

        <div class="inst-cta reveal">
          <p class="inst-cta-text">
            Want to be notified when {{ institution.name }} opens?
          </p>
          <NuxtLink to="/apply" class="inst-cta-button">Join the waitlist</NuxtLink>
        </div>
      </div>
    </section>

    <SectionDivider />

    <section class="inst-nav section">
      <div class="section-default inst-nav-inner">
        <NuxtLink
          v-if="prev"
          :to="prevUrl"
          class="inst-nav-link"
        >
          <span class="inst-nav-label">Previous</span>
          <span class="inst-nav-name">{{ prev.name }}</span>
        </NuxtLink>
        <div v-else />
        <NuxtLink
          v-if="next"
          :to="nextUrl"
          class="inst-nav-link inst-nav-right"
        >
          <span class="inst-nav-label">Next</span>
          <span class="inst-nav-name">{{ next.name }}</span>
        </NuxtLink>
      </div>
    </section>
  </div>
  <div v-else class="not-found section">
    <div class="section-narrow">
      <h1>Institution not found</h1>
      <p>
        <NuxtLink to="/institutions">Back to all institutions</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { waitForAncestorAnimations } from '~/composables/useGsapScrollReveal'
import { institutions, useInstitution } from '~/composables/useInstitutions'

const route = useRoute()

// Reactive — updates when navigating between institution pages
const slug = computed(() => route.params.slug as string)
const institution = computed(() => useInstitution(slug.value))
const currentIndex = computed(() => institutions.findIndex(i => i.slug === slug.value))
const prev = computed(() => currentIndex.value > 0 ? institutions[currentIndex.value - 1] : null)
const next = computed(() => currentIndex.value < institutions.length - 1 ? institutions[currentIndex.value + 1] : null)
const prevUrl = computed(() => prev.value ? '/institutions/' + prev.value.slug : '')
const nextUrl = computed(() => next.value ? '/institutions/' + next.value.slug : '')

useHead(computed(() => ({
  title: institution.value ? institution.value.name + ' — Meraki District' : 'Meraki District',
  meta: institution.value ? [
    { name: 'description', content: institution.value.description },
    { property: 'og:title', content: institution.value.name + ' — Meraki District' },
    { property: 'og:description', content: institution.value.description },
    { name: 'twitter:title', content: institution.value.name + ' — Meraki District' },
    { name: 'twitter:description', content: institution.value.description },
  ] : [],
})))

const root = ref<HTMLElement | null>(null)
const section = ref<HTMLElement | null>(null)
let ctx: gsap.Context | null = null

function initAnimations() {
  if (!root.value || !section.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  gsap.registerPlugin(ScrollTrigger)

  // Clean up previous animations
  ctx?.revert()

  ctx = gsap.context(() => {
    // Scroll reveal for .reveal elements
    gsap.fromTo('.reveal',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section.value,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.from('.inst-rule', {
      scaleX: 0,
      duration: 0.8,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.inst-rule',
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    })

    gsap.from('.inst-hero-image', {
      scale: 1.08,
      duration: 1.6,
      ease: 'power3.out',
    })
  }, root.value)
}

onMounted(async () => {
  if (!root.value) return
  await waitForAncestorAnimations(root.value)
  if (!root.value) return
  initAnimations()
})

// Re-init animations when navigating between institutions
watch(slug, async () => {
  ctx?.revert()
  await nextTick()
  await nextTick()
  window.scrollTo(0, 0)
  initAnimations()
})

onUnmounted(() => {
  ctx?.revert()
})
</script>

<style scoped>
/* Hero */
.inst-hero {
  position: relative;
  height: 70vh;
  min-height: 400px;
  max-height: 700px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
}

.inst-hero-image-wrap {
  position: absolute;
  inset: 0;
}

.inst-hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.inst-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(9, 9, 11, 0.85) 0%,
    rgba(9, 9, 11, 0.3) 50%,
    rgba(9, 9, 11, 0.05) 100%
  );
}

.inst-hero-content {
  position: relative;
  z-index: 1;
  padding-bottom: var(--space-12);
  width: 100%;
}

.inst-hero-content .overline {
  color: var(--color-gold);
  margin-bottom: var(--space-3);
}

.inst-hero-title {
  font-size: var(--text-display);
  color: var(--color-dark-text);
  line-height: var(--leading-tight);
}

.inst-hero-number {
  display: block;
  margin-top: var(--space-4);
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-dark-muted);
  letter-spacing: var(--tracking-widest);
}

/* Detail */
.inst-detail {
  padding-top: var(--space-24);
}

.inst-rule {
  width: 48px;
  height: 1px;
  background: var(--color-gold);
  margin-bottom: var(--space-12);
  transform-origin: left;
}

.inst-long {
  font-size: var(--text-body);
  color: var(--color-text);
  line-height: var(--leading-relaxed);
  max-width: 60ch;
}

/* Status */
.inst-status {
  display: flex;
  align-items: flex-start;
  gap: var(--space-6);
  margin-top: var(--space-16);
  padding: var(--space-8);
  border: 1px solid var(--color-border);
}

.inst-status-marker {
  width: 8px;
  height: 8px;
  border-radius: 0;
  background: var(--color-gold);
  flex-shrink: 0;
  margin-top: var(--space-1);
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

.inst-status-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold-accessible);
  margin-bottom: var(--space-2);
  max-width: none;
}

.inst-status-text {
  font-size: var(--text-small);
  color: var(--color-text-muted);
  line-height: var(--leading-normal);
}

/* CTA */
.inst-cta {
  margin-top: var(--space-16);
  padding-top: var(--space-8);
  border-top: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-8);
}

.inst-cta-text {
  font-size: var(--text-body);
  color: var(--color-text-muted);
}

.inst-cta-button {
  flex-shrink: 0;
  font-size: var(--text-small);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-ink);
  padding: var(--space-3) var(--space-8);
  border: 1px solid var(--color-ink);
  background-image: none;
  transition: border-color var(--duration-fast) ease,
              color var(--duration-fast) ease;
}

.inst-cta-button:hover {
  border-color: var(--color-gold);
  color: var(--color-gold);
}

.inst-cta-button:focus-visible {
  outline: 2px solid var(--color-gold);
  outline-offset: 4px;
}

/* Nav between institutions */
.inst-nav {
  padding-top: var(--space-12);
  padding-bottom: var(--space-12);
}

.inst-nav-inner {
  display: flex;
  justify-content: space-between;
  gap: var(--space-8);
}

.inst-nav-link {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  background-image: none;
}

.inst-nav-right {
  text-align: right;
  align-items: flex-end;
}

.inst-nav-label {
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-text-muted);
}

.inst-nav-name {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  color: var(--color-ink);
  transition: color var(--duration-fast) ease;
}

.inst-nav-link:hover .inst-nav-name {
  color: var(--color-gold);
}

/* Not found */
.not-found {
  padding-top: calc(var(--space-32) + 3rem);
  min-height: 60vh;
}

.not-found h1 {
  margin-bottom: var(--space-4);
}

/* Responsive */
@media (max-width: 768px) {
  .inst-hero {
    height: 50vh;
    min-height: 300px;
  }

  .inst-hero-content {
    padding-bottom: var(--space-8);
    padding-left: var(--content-padding);
    padding-right: var(--content-padding);
  }

  .inst-cta {
    flex-direction: column;
    align-items: stretch;
    text-align: center;
  }

  .inst-cta-button {
    width: 100%;
    text-align: center;
    padding: var(--space-4) var(--space-6);
  }

  .inst-nav-name {
    font-size: var(--text-h4);
  }

  .not-found {
    padding-top: calc(var(--space-16) + 3rem);
  }
}
</style>
