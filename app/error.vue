<template>
  <div class="lost-manuscript">
    <!-- Ghost 404 watermark -->
    <span class="lost-watermark" aria-hidden="true">{{ error?.statusCode || 500 }}</span>

    <!-- Warm vignette -->
    <div class="lost-vignette" aria-hidden="true" />

    <div class="lost-content">
      <p class="lost-overline">{{ overlineText }}</p>
      <h1 class="lost-heading"><em>{{ headingText }}</em></h1>
      <p class="lost-body">{{ bodyText }}</p>
      <div class="lost-links">
        <NuxtLink to="/" class="lost-link lost-link--primary" @click="handleClear('/')">Return to the road</NuxtLink>
        <NuxtLink v-if="code === 404" to="/districts" class="lost-link" @click="handleClear('/districts')">Explore the districts</NuxtLink>
        <NuxtLink v-else to="/" class="lost-link" @click="handleClear('/')">Try again</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ error: { statusCode: number; message: string } }>()

const code = props.error?.statusCode || 500

const overlineText = computed(() => {
  if (code === 404) return 'UNWRITTEN'
  if (code === 403) return 'RESTRICTED'
  return 'INTERRUPTED'
})

const headingText = computed(() => {
  if (code === 404) return 'This page hasn\u2019t been written yet.'
  if (code === 403) return 'This corridor is not yet open.'
  return 'Something came undone.'
})

const bodyText = computed(() => {
  if (code === 404) return 'You\u2019ve found a room that\u2019s still being built. The road has many corridors \u2014 some are just quieter than others.'
  if (code === 403) return 'This area is reserved. If you believe you should have access, reach out directly.'
  return 'An unexpected fault in the manuscript. The page you were reading may have shifted, or the binding gave way.'
})

useHead({
  title: `${code} \u2014 Meraki Road`,
  meta: [
    { name: 'robots', content: 'noindex' },
  ],
})

const handleClear = (path = '/') => clearNuxtError({ redirect: path })
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

/* Ghost watermark */
.lost-watermark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: var(--font-display);
  font-size: 40vw;
  font-weight: 200;
  font-style: italic;
  line-height: 1;
  color: rgba(250, 250, 249, 0.03);
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.05em;
}

/* Warm vignette */
.lost-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, transparent 40%, rgba(184, 150, 78, 0.06) 100%);
  pointer-events: none;
}

/* Content */
.lost-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 520px;
}

.lost-overline {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-mega-wide);
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: var(--space-6);
}

.lost-heading {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 300;
  font-style: normal;
  line-height: var(--leading-snug);
  color: var(--color-dark-text);
  margin-bottom: var(--space-8);
  letter-spacing: var(--tracking-tight);
}

.lost-heading em {
  font-style: italic;
  font-variation-settings: 'WONK' 1, 'SOFT' 80;
}

.lost-body {
  font-family: var(--font-body);
  font-size: var(--text-body);
  color: var(--color-dark-muted);
  line-height: var(--leading-relaxed);
  max-width: 40ch;
  margin: 0 auto var(--space-12);
}

.lost-links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.lost-link {
  font-family: var(--font-body);
  font-size: var(--text-small);
  letter-spacing: var(--tracking-wide);
  color: var(--color-dark-muted);
  text-decoration: none;
  background-image: none;
  border-bottom: 1px solid rgba(184, 150, 78, 0.3);
  padding-bottom: 2px;
  transition: color var(--duration-normal) ease,
              border-color var(--duration-normal) ease;
}

.lost-link:hover {
  color: var(--color-gold);
  border-color: var(--color-gold);
}

.lost-link--primary {
  color: var(--color-gold);
  border-color: var(--color-gold);
}

.lost-link--primary:hover {
  color: var(--color-dark-text);
  border-color: var(--color-dark-text);
}
</style>
