<template>
  <Teleport to="body">
    <Transition name="lightbox">
      <div v-if="open" class="lightbox-backdrop" @click.self="$emit('close')">
        <div class="lightbox-panel" ref="panel">

          <div class="lightbox-actions">
            <button v-if="canFullscreen" class="lightbox-action" @click="toggleFullscreen" :aria-label="isFullscreen ? 'Exit fullscreen' : 'Fullscreen'">
              <svg v-if="!isFullscreen" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M2 6V2h4M12 2h4v4M16 12v4h-4M6 16H2v-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6 2v4H2M12 6h4V2M12 16v-4h4M6 12H2v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <button class="lightbox-action" @click="$emit('close')" aria-label="Close">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" stroke-width="1.5"/>
              </svg>
            </button>
          </div>

          <div class="lightbox-image" v-if="image">
            <NuxtImg :src="image" :alt="title" width="450" height="600" />
          </div>

          <div class="lightbox-content">
            <span v-if="overline" class="lightbox-overline">{{ overline }}</span>
            <h2 class="lightbox-title">{{ title }}</h2>
            <p v-if="subtitle" class="lightbox-subtitle">{{ subtitle }}</p>
            <p class="lightbox-body">{{ body }}</p>
            <NuxtLink v-if="link" :to="link" class="lightbox-cta" @click="$emit('close')">
              {{ linkLabel || 'Explore' }} &rarr;
            </NuxtLink>
          </div>

        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import screenfull from 'screenfull'

defineProps<{
  open: boolean
  image?: string
  overline?: string
  title: string
  subtitle?: string
  body: string
  link?: string
  linkLabel?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const panel = ref<HTMLElement | null>(null)
const isFullscreen = ref(false)
const canFullscreen = ref(false)

function onFullscreenChange() {
  isFullscreen.value = screenfull.isFullscreen
}

function toggleFullscreen() {
  if (!panel.value || !screenfull.isEnabled) return
  screenfull.toggle(panel.value)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') {
    if (isFullscreen.value && screenfull.isEnabled) {
      screenfull.exit()
    } else {
      emit('close')
    }
  }
}

if (import.meta.client) {
  canFullscreen.value = screenfull.isEnabled
}

onMounted(() => {
  if (!import.meta.client) return
  window.addEventListener('keydown', onKeydown)
  if (screenfull.isEnabled) screenfull.on('change', onFullscreenChange)
})

onUnmounted(() => {
  if (!import.meta.client) return
  window.removeEventListener('keydown', onKeydown)
  if (screenfull.isEnabled) screenfull.off('change', onFullscreenChange)
})

// Move focus into lightbox when it opens
watch(() => panel.value, (el) => {
  if (el) {
    nextTick(() => {
      const btn = el.querySelector('button')
      if (btn) btn.focus()
    })
  }
})
</script>

<style scoped>
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(9, 9, 11, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 2rem;
}

.lightbox-panel {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 900px;
  width: 100%;
  max-height: 85vh;
  overflow: hidden;
  background: var(--color-background, #FAFAF9);
  border: 1px solid rgba(184, 150, 78, 0.2);
}

.lightbox-actions {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  display: flex;
  gap: 0.5rem;
}

.lightbox-action {
  background: rgba(9, 9, 11, 0.5);
  backdrop-filter: blur(8px);
  border: none;
  color: rgba(250, 250, 249, 0.85);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lightbox-action:hover {
  background: rgba(9, 9, 11, 0.8);
  color: var(--color-gold, #B8964E);
}

.lightbox-image {
  position: relative;
  overflow: hidden;
}

.lightbox-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  min-height: 300px;
}

.lightbox-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.lightbox-overline {
  font-size: 0.625rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--color-gold, #B8964E);
  margin-bottom: 0.5rem;
  display: block;
}

.lightbox-title {
  font-family: var(--font-display, 'Fraunces', serif);
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
}

.lightbox-subtitle {
  font-size: 0.8125rem;
  color: var(--color-text-secondary, #71717A);
  margin-bottom: 1rem;
}

.lightbox-body {
  font-size: 0.875rem;
  color: var(--color-text-secondary, #52525B);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.lightbox-cta {
  display: inline-block;
  font-size: 0.6875rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--color-gold, #B8964E);
  border: 1px solid rgba(184, 150, 78, 0.3);
  padding: 0.6rem 1.25rem;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.lightbox-cta:hover {
  background: rgba(184, 150, 78, 0.08);
  border-color: var(--color-gold, #B8964E);
}

/* Transitions */
.lightbox-enter-active {
  transition: opacity 0.3s ease;
}

.lightbox-enter-active .lightbox-panel {
  animation: lightbox-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.lightbox-leave-active {
  transition: opacity 0.25s ease;
}

.lightbox-leave-active .lightbox-panel {
  animation: lightbox-out 0.25s ease forwards;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

@keyframes lightbox-in {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

@keyframes lightbox-out {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.97) translateY(6px);
  }
}

/* Responsive */
@media (max-width: 700px) {
  .lightbox-panel {
    grid-template-columns: 1fr;
    max-height: 90vh;
    overflow-y: auto;
  }

  .lightbox-image img {
    max-height: 40vh;
  }

  .lightbox-content {
    padding: 1.5rem;
  }

  .lightbox-backdrop {
    padding: 1rem;
  }
}
</style>
