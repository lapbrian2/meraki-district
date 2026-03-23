<template>
  <svg
    :width="size"
    :height="size"
    :viewBox="'0 0 ' + viewBox + ' ' + viewBox"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="seal-mark"
    :class="`seal-mark--${tier}`"
    :aria-label="`${tier} seal`"
    role="img"
  >
    <!-- Associate — circle + single horizontal line -->
    <template v-if="tier === 'associate'">
      <circle
        :cx="cx" :cy="cy" :r="r"
        stroke="#71717A"
        stroke-width="1.5"
        fill="none"
      />
      <line
        :x1="cx - r + 4" :y1="cy"
        :x2="cx + r - 4" :y2="cy"
        stroke="#71717A"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </template>

    <!-- Verified — circle + checkmark -->
    <template v-if="tier === 'verified'">
      <circle
        :cx="cx" :cy="cy" :r="r"
        stroke="var(--color-gold)"
        stroke-width="1.5"
        fill="none"
      />
      <polyline
        :points="checkPoints"
        stroke="var(--color-gold)"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
    </template>

    <!-- Fellow — circle with star/asterisk (6 radiating lines) -->
    <template v-if="tier === 'fellow'">
      <circle
        :cx="cx" :cy="cy" :r="r"
        stroke="var(--color-gold)"
        stroke-width="2"
        fill="rgba(184, 150, 78, 0.10)"
      />
      <line
        v-for="(line, i) in asteriskLines"
        :key="i"
        :x1="line.x1" :y1="line.y1"
        :x2="line.x2" :y2="line.y2"
        stroke="var(--color-gold)"
        stroke-width="2"
        stroke-linecap="round"
      />
    </template>

    <!-- Legacy — double circle + diamond + glow -->
    <template v-if="tier === 'legacy'">
      <defs>
        <filter :id="`glow-${uid}`" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle
        :cx="cx" :cy="cy" :r="r"
        stroke="var(--color-gold)"
        stroke-width="2"
        fill="rgba(184, 150, 78, 0.15)"
        :filter="`url(#glow-${uid})`"
      />
      <circle
        :cx="cx" :cy="cy" :r="r - 3"
        stroke="var(--color-gold)"
        stroke-width="1"
        fill="none"
      />
      <polygon
        :points="diamondPoints"
        fill="var(--color-gold)"
        opacity="0.8"
      />
    </template>
  </svg>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  tier: 'associate' | 'verified' | 'fellow' | 'legacy'
  size?: number
}>(), {
  size: 32,
})

const uid = Math.random().toString(36).slice(2, 8)

const viewBox = 32
const cx = 16
const cy = 16
const r = 13

/* Verified checkmark — geometric, positioned inside the circle */
const checkPoints = computed(() => {
  const x0 = cx - 5
  const y0 = cy + 1
  const x1 = cx - 1
  const y1 = cy + 5
  const x2 = cx + 6
  const y2 = cy - 4
  return `${x0},${y0} ${x1},${y1} ${x2},${y2}`
})

/* Fellow asterisk — 6 lines radiating from center */
const asteriskLines = computed(() => {
  const lines = []
  const inner = 3
  const outer = r - 4
  for (let i = 0; i < 6; i++) {
    const angle = (i * 60) * (Math.PI / 180)
    lines.push({
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
    })
  }
  return lines
})

/* Legacy diamond — centered rhombus */
const diamondPoints = computed(() => {
  const d = 4
  return `${cx},${cy - d} ${cx + d},${cy} ${cx},${cy + d} ${cx - d},${cy}`
})
</script>

<style scoped>
.seal-mark {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
</style>
