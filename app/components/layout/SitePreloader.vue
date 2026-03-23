<template>
  <div v-if="visible" ref="preloaderRef" class="ritual" :class="{ 'ritual--exit': exiting }" @click="enter">
    <!-- Vignette overlay -->
    <div class="ritual-vignette" />
    <!-- Paper texture -->
    <div class="ritual-texture" />

    <!-- Central monolith -->
    <section class="ritual-center">
      <h1 class="ritual-title">MERAKI ROAD</h1>
      <p class="ritual-tagline">WHERE CRAFT MEETS CULTURE</p>
      <div class="ritual-divider" />
      <a class="ritual-enter" href="#">ENTRANCE</a>
    </section>

    <!-- District list at bottom -->
    <aside class="ritual-districts">
      <span v-for="(d, i) in districts" :key="d">
        <template v-if="i > 0"><span class="ritual-dot">·</span></template>
        {{ d }}
      </span>
    </aside>

    <!-- Footer -->
    <footer class="ritual-footer">
      <span>© MMXXVI MERAKI ROAD</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{ complete: [] }>()

const preloaderRef = ref<HTMLElement | null>(null)
const visible = ref(true)
const exiting = ref(false)

const districts = [
  'I. MERAKI ROAD',
  'II. IKIGAI LAB',
  'III. MERAKI INSTITUTE',
  'IV. PUBLISHING HOUSE',
  'V. MERAKI STUDIO',
  'VI. THE PROVENANCE',
  'VII. THE PAVILION',
  'VIII. THE BRIDGE',
  'IX. THE SEAL',
  'X. THE CIRCUIT',
  'XI. THE COLLECTIVE',
  'XII. FASHION ATELIER',
]

onMounted(() => {
  try {
    if (sessionStorage.getItem('meraki-preloader-shown')) {
      visible.value = false
      emit('complete')
      return
    }
  } catch {}

  document.body.style.overflow = 'hidden'

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    setTimeout(() => finish(), 500)
  }
})

function enter() {
  exiting.value = true
  setTimeout(() => finish(), 800)
}

function finish() {
  visible.value = false
  document.body.style.overflow = ''
  try { sessionStorage.setItem('meraki-preloader-shown', '1') } catch {}
  emit('complete')
}
</script>

<style scoped>
.ritual {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #0e0e10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
}

.ritual-vignette {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle, transparent 20%, rgba(14,14,16,0.95) 100%);
  pointer-events: none;
  z-index: 0;
}

.ritual-texture {
  position: absolute;
  inset: 0;
  opacity: 0.06;
  z-index: 0;
  background-image: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(231, 194, 117, 0.03) 2px,
    rgba(231, 194, 117, 0.03) 3px
  );
}

.ritual-center {
  position: relative;
  z-index: 10;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  animation: ritualFadeIn 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
}

.ritual-title {
  font-family: var(--font-display);
  font-style: italic;
  font-weight: 300;
  font-size: clamp(4rem, 12vw, 10rem);
  line-height: 0.9;
  letter-spacing: -0.03em;
  color: #e5e1e4;
  text-shadow: 0 0 30px rgba(231, 194, 117, 0.2);
  margin: 0;
  user-select: none;
}

.ritual-tagline {
  font-family: var(--font-body);
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.6em;
  text-transform: uppercase;
  color: rgba(229, 225, 228, 0.4);
  margin: 1.5rem 0 0;
}

.ritual-divider {
  width: 0;
  height: 1px;
  background: var(--color-gold, #B8964E);
  margin: 2rem 0;
  animation: dividerGrow 0.8s cubic-bezier(0.19, 1, 0.22, 1) 1s forwards;
}

.ritual-enter {
  font-family: var(--font-body);
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--color-gold, #B8964E);
  text-decoration: none;
  padding: 0.5rem 1rem;
  opacity: 0;
  animation: ritualFadeIn 0.6s ease 1.5s forwards;
  transition: letter-spacing 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
}

.ritual-enter::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 50%;
  width: 0;
  height: 1px;
  background: var(--color-gold, #B8964E);
  transition: width 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  transform: translateX(-50%);
}

.ritual-enter:hover {
  letter-spacing: 0.6em;
}

.ritual-enter:hover::after {
  width: 120%;
}

.ritual-districts {
  position: absolute;
  bottom: 6rem;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  padding: 0 3rem;
  opacity: 0;
  animation: ritualFadeIn 0.8s ease 2s forwards;
}

.ritual-districts span {
  font-family: var(--font-body);
  font-size: 9px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(229, 225, 228, 0.15);
  white-space: nowrap;
}

.ritual-dot {
  color: var(--color-gold, #B8964E);
  margin: 0 0.25rem;
}

.ritual-footer {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  z-index: 10;
  text-align: center;
  opacity: 0;
  animation: ritualFadeIn 0.5s ease 2.5s forwards;
}

.ritual-footer span {
  font-family: var(--font-body);
  font-size: 9px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(229, 225, 228, 0.2);
}

/* Exit */
.ritual--exit {
  animation: ritualExit 0.8s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

/* Keyframes */
@keyframes ritualFadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes dividerGrow {
  from { width: 0; }
  to { width: clamp(120px, 20vw, 240px); }
}

@keyframes ritualExit {
  0% { opacity: 1; }
  100% { opacity: 0; transform: scale(1.02); visibility: hidden; pointer-events: none; }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .ritual-center,
  .ritual-enter,
  .ritual-districts,
  .ritual-footer { animation: none; opacity: 1; }
  .ritual-divider { animation: none; width: clamp(120px, 20vw, 240px); }
  .ritual--exit { animation: none; transition: opacity 0.3s ease; }
}

/* Mobile */
@media (max-width: 768px) {
  .ritual-districts { display: none; }
  .ritual-title { font-size: clamp(2.5rem, 15vw, 5rem); }
}
</style>
