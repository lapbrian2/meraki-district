<template>
  <div ref="pageRef" class="lost-manuscript">
    <!-- Ghost 404 watermark — massive faded number -->
    <span class="lost-watermark" aria-hidden="true">{{ error?.statusCode || 500 }}</span>

    <!-- Atmospheric layers -->
    <div class="lost-vignette" aria-hidden="true" />
    <div class="lost-warm-edge" aria-hidden="true" />
    <div class="lost-grain" aria-hidden="true" />

    <!-- Floating marginalia — scattered page fragments -->
    <div class="lost-marginalia" aria-hidden="true">
      <span class="marginalia-glyph marginalia-glyph--1">&#x2766;</span>
      <span class="marginalia-glyph marginalia-glyph--2">&#x2767;</span>
      <span class="marginalia-glyph marginalia-glyph--3">&sect;</span>
      <span class="marginalia-glyph marginalia-glyph--4">&#x2042;</span>
    </div>

    <div class="lost-content">
      <!-- Overline badge -->
      <p class="lost-overline">
        <span class="lost-overline-rule" aria-hidden="true" />
        {{ overlineText }}
        <span class="lost-overline-rule" aria-hidden="true" />
      </p>

      <!-- Heading -->
      <h1 class="lost-heading">
        <em>{{ headingText }}</em>
      </h1>

      <!-- Body -->
      <p class="lost-body">{{ bodyText }}</p>

      <!-- Error code footnote -->
      <p class="lost-footnote">
        <span class="lost-footnote-marker">*</span>
        Error {{ code }} &mdash; {{ footnoteText }}
      </p>

      <!-- Navigation links -->
      <div class="lost-links">
        <NuxtLink to="/" class="lost-link lost-link--primary" @click="handleClear('/')">
          <span class="lost-link-text">Return to the road</span>
          <span class="lost-link-arrow">&rarr;</span>
        </NuxtLink>
        <NuxtLink v-if="code === 404" to="/districts" class="lost-link" @click="handleClear('/districts')">
          <span class="lost-link-text">Explore the districts</span>
          <span class="lost-link-arrow">&rarr;</span>
        </NuxtLink>
        <NuxtLink v-else to="/" class="lost-link" @click="handleClear('/')">
          <span class="lost-link-text">Try again</span>
          <span class="lost-link-arrow">&rarr;</span>
        </NuxtLink>
      </div>

      <!-- Decorative colophon rule -->
      <div class="lost-colophon" aria-hidden="true">
        <span class="lost-colophon-dot" />
        <span class="lost-colophon-line" />
        <span class="lost-colophon-dot" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string } }>()

const code = props.error?.statusCode || 500

const overlineText = computed(() => {
  if (code === 404) return 'Unwritten'
  if (code === 403) return 'Restricted'
  return 'Interrupted'
})

const headingText = computed(() => {
  if (code === 404) return 'This page hasn\u2019t been written yet.'
  if (code === 403) return 'This corridor is not yet open.'
  return 'Something came undone.'
})

const bodyText = computed(() => {
  if (code === 404) return 'You\u2019ve wandered into a room still being built. The road has many corridors \u2014 some are just quieter than others.'
  if (code === 403) return 'This area is reserved. If you believe you should have access, reach out directly.'
  return 'An unexpected fault in the manuscript. The page you were reading may have shifted, or the binding gave way.'
})

const footnoteText = computed(() => {
  if (code === 404) return 'page not found in the archive'
  if (code === 403) return 'access restricted by the curator'
  return 'a fault in the binding'
})

useHead({
  title: `${code} \u2014 Meraki Road`,
  meta: [
    { name: 'robots', content: 'noindex' },
  ],
})

const handleClear = (path = '/') => clearNuxtError({ redirect: path })

// Parallax drift on the marginalia glyphs
const pageRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (!pageRef.value) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const glyphs = pageRef.value.querySelectorAll('.marginalia-glyph')
  const handleMouseMove = (e: MouseEvent) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 2
    const cy = (e.clientY / window.innerHeight - 0.5) * 2
    glyphs.forEach((g, i) => {
      const strength = 8 + i * 4
      const el = g as HTMLElement
      el.style.transform = `translate(${cx * strength}px, ${cy * strength}px)`
    })
  }
  window.addEventListener('mousemove', handleMouseMove, { passive: true })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
  })
})
</script>

<style scoped>
.lost-manuscript {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background);
  position: relative;
  overflow: hidden;
  padding: var(--space-12) var(--content-padding);
}

/* ─── Atmospheric layers ─── */
.lost-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 30%, rgba(9, 9, 11, 0.4) 100%);
  pointer-events: none;
  z-index: 0;
}

.lost-warm-edge {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 0%, rgba(184, 150, 78, 0.04) 100%);
  pointer-events: none;
  z-index: 0;
}

.lost-grain {
  position: absolute;
  inset: 0;
  opacity: 0.03;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
  background-size: 128px 128px;
  pointer-events: none;
  z-index: 0;
}

/* ─── Ghost watermark ─── */
.lost-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: clamp(20rem, 40vw, 36rem);
  font-weight: 200;
  font-style: italic;
  line-height: 1;
  color: rgba(250, 250, 249, 0.025);
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.05em;
  z-index: 0;
}

/* ─── Floating marginalia glyphs ─── */
.lost-marginalia {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.marginalia-glyph {
  position: absolute;
  font-family: var(--font-display);
  color: rgba(184, 150, 78, 0.06);
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.marginalia-glyph--1 {
  top: 15%;
  left: 10%;
  font-size: 4rem;
}

.marginalia-glyph--2 {
  top: 25%;
  right: 12%;
  font-size: 3rem;
}

.marginalia-glyph--3 {
  bottom: 20%;
  left: 18%;
  font-size: 5rem;
  opacity: 0.7;
}

.marginalia-glyph--4 {
  bottom: 30%;
  right: 15%;
  font-size: 2.5rem;
}

/* ─── Content ─── */
.lost-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 560px;
}

/* ─── Overline with rules ─── */
.lost-overline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-4);
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-ultra-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-8);
}

.lost-overline-rule {
  display: block;
  width: 32px;
  height: 1px;
  background: rgba(184, 150, 78, 0.4);
}

/* ─── Heading ─── */
.lost-heading {
  font-family: var(--font-display);
  font-size: clamp(2.25rem, 5.5vw, 3.75rem);
  font-weight: 200;
  font-style: normal;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  letter-spacing: var(--tracking-tight);
}

.lost-heading em {
  font-style: italic;
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
  text-shadow: 0 0 60px rgba(184, 150, 78, 0.08);
}

/* ─── Body text ─── */
.lost-body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 42ch;
  margin: 0 auto var(--space-6);
}

/* ─── Footnote ─── */
.lost-footnote {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  color: var(--color-text-muted);
  opacity: 0.5;
  margin-bottom: var(--space-16);
}

.lost-footnote-marker {
  color: var(--color-gold);
  margin-right: 2px;
}

/* ─── Links ─── */
.lost-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  margin-bottom: var(--space-12);
}

.lost-link {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  text-decoration: none;
  background-image: none;
  padding-bottom: 3px;
  border-bottom: 1px solid rgba(184, 150, 78, 0.25);
  transition: color var(--duration-normal) ease,
              border-color var(--duration-normal) ease,
              gap var(--duration-normal) var(--ease-out);
}

.lost-link:hover {
  color: var(--color-gold);
  border-color: var(--color-gold);
  gap: var(--space-4);
}

.lost-link-arrow {
  font-size: 0.875rem;
  transition: transform var(--duration-normal) var(--ease-out);
}

.lost-link:hover .lost-link-arrow {
  transform: translateX(2px);
}

.lost-link--primary {
  color: var(--color-gold);
  border-color: rgba(184, 150, 78, 0.5);
}

.lost-link--primary:hover {
  color: var(--color-dark-text);
  border-color: var(--color-dark-text);
}

/* ─── Colophon rule ─── */
.lost-colophon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--space-3);
  opacity: 0.2;
}

.lost-colophon-dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--color-gold);
}

.lost-colophon-line {
  width: 40px;
  height: 1px;
  background: var(--color-gold);
}

/* ─── Reduced motion ─── */
@media (prefers-reduced-motion: reduce) {
  .marginalia-glyph {
    transition: none;
  }

  .lost-link {
    transition: none;
  }

  .lost-link-arrow {
    transition: none;
  }
}

/* ─── Mobile ─── */
@media (max-width: 768px) {
  .lost-marginalia {
    display: none;
  }

  .lost-overline-rule {
    width: 20px;
  }
}
</style>
