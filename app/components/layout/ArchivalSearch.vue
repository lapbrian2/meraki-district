<template>
  <Teleport to="body">
    <Transition name="search-fade">
      <div v-if="open" class="search-overlay" @click.self="close">
        <div class="search-modal" role="dialog" aria-modal="true" aria-label="Search the archive">
          <div class="search-input-wrap">
            <span class="search-icon material-symbols-outlined" aria-hidden="true">search</span>
            <span class="ink-pulse-cursor" aria-hidden="true" />
            <input
              ref="inputRef"
              v-model="query"
              type="text"
              class="search-input"
              placeholder="Search the archive..."
              autocomplete="off"
              @keydown="onKeydown"
            />
            <button v-if="query" class="search-clear" aria-label="Clear search" @click="query = ''">&#xd7;</button>
          </div>

          <div class="search-results" ref="resultsRef">
            <!-- No query: browse links -->
            <div v-if="!query.trim()" class="search-browse">
              <p class="browse-label">Browse</p>
              <div class="browse-links">
                <button
                  v-for="(link, i) in browseLinks"
                  :key="link.path"
                  class="browse-link"
                  :class="{ selected: selectedIndex === i }"
                  @click="go(link.path)"
                  @mouseenter="selectedIndex = i"
                >
                  <span class="browse-link-icon material-symbols-outlined" aria-hidden="true">{{ link.icon }}</span>
                  <span class="browse-link-text">{{ link.label }}</span>
                  <span class="browse-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
              </div>
            </div>

            <!-- Results -->
            <div v-else-if="results.length" class="search-results-list">
              <!-- District results -->
              <div v-if="districtResults.length" class="result-group">
                <p class="result-group-label">Districts</p>
                <button
                  v-for="item in districtResults"
                  :key="'d-' + item.slug"
                  class="result-card"
                  :class="{ selected: selectedIndex === item._index }"
                  @click="go('/districts/' + item.slug)"
                  @mouseenter="selectedIndex = item._index"
                >
                  <span class="result-badge">{{ item.number }}</span>
                  <div class="result-info">
                    <span class="result-title">{{ item.name }}</span>
                    <span class="result-meta">{{ item.type }} &middot; {{ item.subtitle }}</span>
                  </div>
                  <span class="result-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
              </div>

              <!-- Page results -->
              <div v-if="pageResults.length" class="result-group">
                <p class="result-group-label">Pages</p>
                <button
                  v-for="item in pageResults"
                  :key="'p-' + item.path"
                  class="result-card"
                  :class="{ selected: selectedIndex === item._index }"
                  @click="go(item.path)"
                  @mouseenter="selectedIndex = item._index"
                >
                  <span class="result-page-icon material-symbols-outlined" aria-hidden="true">{{ item.icon }}</span>
                  <div class="result-info">
                    <span class="result-title">{{ item.title }}</span>
                    <span class="result-meta">{{ item.description }}</span>
                  </div>
                  <span class="result-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
              </div>

              <!-- Creator results -->
              <div v-if="creatorResults.length" class="result-group">
                <p class="result-group-label">Creators</p>
                <button
                  v-for="item in creatorResults"
                  :key="'c-' + item.name"
                  class="result-card"
                  :class="{ selected: selectedIndex === item._index }"
                  @click="go('/#creators')"
                  @mouseenter="selectedIndex = item._index"
                >
                  <span class="result-discipline">{{ item.discipline }}</span>
                  <div class="result-info">
                    <span class="result-title">{{ item.name }}</span>
                    <span class="result-meta">{{ item.snippet }}</span>
                  </div>
                  <span class="result-arrow material-symbols-outlined" aria-hidden="true">arrow_forward</span>
                </button>
              </div>
            </div>

            <!-- No results -->
            <div v-else class="search-empty">
              <p class="empty-message">No entries found in the archive.</p>
              <p class="empty-suggestion">Try searching for a district, page, or creator — or browse:</p>
              <div class="empty-links">
                <button class="empty-link" @click="go('/districts')">Districts</button>
                <button class="empty-link" @click="go('/the-road')">Publishing</button>
                <button class="empty-link" @click="go('/apply')">Apply</button>
              </div>
            </div>
          </div>

          <div class="search-footer">
            <span class="search-hint"><kbd>{{ metaKey }}K</kbd> to search &middot; <kbd>ESC</kbd> to close</span>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useDistricts } from '~/composables/useDistricts'
import { useArchivalSearch } from '~/composables/useArchivalSearch'

const { isOpen: open, close: closeSearch } = useArchivalSearch()
const query = ref('')
const selectedIndex = ref(0)
const inputRef = ref<HTMLInputElement | null>(null)
const resultsRef = ref<HTMLElement | null>(null)

const { districts } = useDistricts()

// Detect platform for shortcut label
const metaKey = ref('Ctrl+')
onMounted(() => {
  if (navigator.platform?.includes('Mac') || navigator.userAgent?.includes('Mac')) {
    metaKey.value = '\u2318'
  }
})

// --- Data sources ---

const sitePages = [
  { title: 'Home', path: '/', description: 'The front door to Meraki Road.', icon: 'home' },
  { title: 'About', path: '/about', description: 'The origin, the philosophy, the people.', icon: 'info' },
  { title: 'Apply', path: '/apply', description: 'Submit your practice for consideration.', icon: 'edit_note' },
  { title: 'Community', path: '/community', description: 'Where practitioners find their people.', icon: 'groups' },
  { title: 'Bridge', path: '/bridge', description: 'Connecting disciplines across Meraki Road.', icon: 'hub' },
  { title: 'Institute', path: '/institute', description: 'Structured learning for serious practitioners.', icon: 'school' },
  { title: 'Pavilion', path: '/pavilion', description: 'A showcase space for featured work.', icon: 'gallery_thumbnail' },
  { title: 'Meraki Publishing House', path: '/the-road', description: 'Long-form writing and cultural criticism.', icon: 'article' },
  { title: 'Districts', path: '/districts', description: 'All twelve districts of Meraki Road.', icon: 'map' },
]

const creators = [
  { name: 'Sable Chen', discipline: 'Visual Art & AI', snippet: 'Machine vision meets traditional painting. Neural portraits as conversation.' },
  { name: 'Tom\u00e1s Vega', discipline: 'Generative Architecture', snippet: 'Computational designer building impossible structures between algorithm and intuition.' },
  { name: 'Maren Aoki', discipline: 'Creative Technology', snippet: 'Translating human presence into light, sound, and data.' },
  { name: 'Khalil Okonkwo', discipline: 'Digital Sculpture', snippet: 'Volumetric capture preserving cultural artifacts as living 3D archives.' },
  { name: 'In\u00e9s Moreau', discipline: 'Motion & Film', snippet: 'Documentary meets generative cinema. AI-assisted short films for exhibition.' },
  { name: 'Zuri Nakamura', discipline: 'Mixed Media & Sound', snippet: 'Sound artist treating frequency as material. Spaces that listen back.' },
]

const browseLinks = [
  { label: 'Districts', path: '/districts', icon: 'map' },
  { label: 'Publishing', path: '/the-road', icon: 'article' },
  { label: 'Apply', path: '/apply', icon: 'edit_note' },
]

// --- Search logic ---

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9\s]/g, '')
}

const rawDistrictResults = computed(() => {
  if (!query.value.trim()) return []
  const q = normalize(query.value)
  return districts.filter(d =>
    normalize(d.name).includes(q) ||
    normalize(d.type).includes(q) ||
    normalize(d.subtitle).includes(q) ||
    normalize(d.slug).includes(q)
  )
})

const rawPageResults = computed(() => {
  if (!query.value.trim()) return []
  const q = normalize(query.value)
  return sitePages.filter(p =>
    normalize(p.title).includes(q) ||
    normalize(p.description).includes(q)
  )
})

const rawCreatorResults = computed(() => {
  if (!query.value.trim()) return []
  const q = normalize(query.value)
  return creators.filter(c =>
    normalize(c.name).includes(q) ||
    normalize(c.discipline).includes(q) ||
    normalize(c.snippet).includes(q)
  )
})

// Add global _index for keyboard navigation across all groups
const districtResults = computed(() => {
  let offset = 0
  return rawDistrictResults.value.map((d, i) => ({ ...d, _index: offset + i }))
})

const pageResults = computed(() => {
  let offset = rawDistrictResults.value.length
  return rawPageResults.value.map((p, i) => ({ ...p, _index: offset + i }))
})

const creatorResults = computed(() => {
  let offset = rawDistrictResults.value.length + rawPageResults.value.length
  return rawCreatorResults.value.map((c, i) => ({ ...c, _index: offset + i }))
})

// Flat result list for counting and keyboard nav
const results = computed(() => {
  return [
    ...districtResults.value.map(d => ({ kind: 'district' as const, slug: d.slug, _index: d._index })),
    ...pageResults.value.map(p => ({ kind: 'page' as const, path: p.path, _index: p._index })),
    ...creatorResults.value.map(c => ({ kind: 'creator' as const, name: c.name, _index: c._index })),
  ]
})

// Total selectable count (browse mode or results mode)
const selectableCount = computed(() => {
  if (!query.value.trim()) return browseLinks.length
  return results.value.length
})

// Reset selection when query changes
watch(query, () => {
  selectedIndex.value = 0
})

// --- Keyboard navigation ---

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value + 1) % Math.max(selectableCount.value, 1)
    scrollSelectedIntoView()
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = (selectedIndex.value - 1 + selectableCount.value) % Math.max(selectableCount.value, 1)
    scrollSelectedIntoView()
  } else if (e.key === 'Enter') {
    e.preventDefault()
    navigateSelected()
  } else if (e.key === 'Escape') {
    close()
  }
}

function scrollSelectedIntoView() {
  nextTick(() => {
    const el = resultsRef.value?.querySelector('.selected')
    if (el) el.scrollIntoView({ block: 'nearest' })
  })
}

function navigateSelected() {
  if (!query.value.trim()) {
    const link = browseLinks[selectedIndex.value]
    if (link) go(link.path)
    return
  }
  const item = results.value.find(r => r._index === selectedIndex.value)
  if (!item) return
  if (item.kind === 'district') go('/districts/' + item.slug)
  else if (item.kind === 'page') go(item.path)
  else if (item.kind === 'creator') go('/#creators')
}

function go(path: string) {
  close()
  navigateTo(path)
}

// --- Open / Close ---

function close() {
  closeSearch()
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
}

// Focus input + lock scroll when overlay opens
watch(open, (val) => {
  if (val) {
    query.value = ''
    selectedIndex.value = 0
    nextTick(() => {
      inputRef.value?.focus()
    })
    if (import.meta.client) {
      document.body.style.overflow = 'hidden'
    }
  } else {
    if (import.meta.client) {
      document.body.style.overflow = ''
    }
  }
})

// Global keyboard shortcut
function onGlobalKeydown(e: KeyboardEvent) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    if (open.value) {
      close()
    } else {
      open.value = true
    }
  }
  if (e.key === 'Escape' && open.value) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onGlobalKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onGlobalKeydown)
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* OVERLAY */
.search-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(10, 10, 10, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12vh;
  padding-left: var(--content-padding);
  padding-right: var(--content-padding);
}

/* Vignette overlay */
.search-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.4) 100%);
  pointer-events: none;
  z-index: -1;
}

/* Transition */
.search-fade-enter-active {
  transition: opacity 0.25s var(--ease-out);
}
.search-fade-leave-active {
  transition: opacity 0.2s ease;
}
.search-fade-enter-from,
.search-fade-leave-to {
  opacity: 0;
}
.search-fade-enter-active .search-modal {
  animation: search-scale-in 0.25s var(--ease-out) forwards;
}
.search-fade-leave-active .search-modal {
  animation: search-scale-out 0.2s ease forwards;
}

@keyframes search-scale-in {
  from {
    opacity: 0;
    transform: scale(0.98) translateY(8px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
@keyframes search-scale-out {
  from {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
  to {
    opacity: 0;
    transform: scale(0.98) translateY(8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .search-fade-enter-active .search-modal,
  .search-fade-leave-active .search-modal {
    animation: none;
  }
}

/* MODAL */
.search-modal {
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  max-height: 70vh;
}

/* INPUT */
.search-input-wrap {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding-bottom: var(--space-4);
  border-bottom: 1px solid var(--color-gold);
}

.search-icon {
  color: var(--color-gold);
  font-size: 1.25rem;
  opacity: 0.6;
}

/* Ink pulse cursor */
.ink-pulse-cursor {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-gold);
  opacity: 0.8;
  flex-shrink: 0;
  animation: inkPulse 2.5s ease-in-out infinite;
}

@keyframes inkPulse {
  0%   { transform: scale(1);   opacity: 0.8; }
  50%  { transform: scale(1.4); opacity: 0.3; }
  100% { transform: scale(1);   opacity: 0.8; }
}

@media (prefers-reduced-motion: reduce) {
  .ink-pulse-cursor {
    animation: none;
    opacity: 0.6;
  }
}

.search-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 300;
  font-style: italic;
  color: var(--color-dark-text);
  letter-spacing: var(--tracking-snug);
  caret-color: var(--color-gold);
}

.search-input::placeholder {
  color: rgba(250, 250, 249, 0.3);
  font-style: italic;
}

.search-clear {
  color: rgba(250, 250, 249, 0.4);
  font-size: 1.5rem;
  line-height: 1;
  padding: var(--space-1) var(--space-2);
  transition: color 0.15s ease;
}

.search-clear:hover {
  color: var(--color-dark-text);
}

/* RESULTS CONTAINER */
.search-results {
  flex: 1;
  overflow-y: auto;
  padding: var(--space-6) 0 var(--space-4);
  scrollbar-width: thin;
  scrollbar-color: var(--color-gold) transparent;
}

.search-results::-webkit-scrollbar {
  width: 4px;
}

.search-results::-webkit-scrollbar-track {
  background: transparent;
}

.search-results::-webkit-scrollbar-thumb {
  background: var(--color-gold);
  border-radius: 2px;
}

/* BROWSE (no query) */
.browse-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: rgba(250, 250, 249, 0.35);
  margin-bottom: var(--space-3);
}

.browse-links {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.browse-link {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  padding: var(--space-3) var(--space-4);
  border-left: 2px solid transparent;
  transition: border-color 0.15s ease, background 0.15s ease;
  text-align: left;
}

.browse-link.selected,
.browse-link:hover {
  border-left-color: var(--color-gold);
  background: rgba(184, 150, 78, 0.05);
}

.browse-link-icon {
  color: var(--color-gold);
  font-size: 1.125rem;
  opacity: 0.6;
}

.browse-link-text {
  flex: 1;
  font-family: var(--font-body);
  font-size: var(--text-body);
  font-weight: 400;
  color: rgba(250, 250, 249, 0.8);
}

.browse-arrow {
  font-size: 1rem;
  color: rgba(250, 250, 249, 0.2);
  transition: color 0.15s ease, transform 0.15s ease;
}

.browse-link.selected .browse-arrow,
.browse-link:hover .browse-arrow {
  color: var(--color-gold);
  transform: translateX(2px);
}

/* RESULT GROUPS */
.result-group {
  margin-bottom: var(--space-6);
}

.result-group:last-child {
  margin-bottom: 0;
}

.result-group-label {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: rgba(250, 250, 249, 0.35);
  margin-bottom: var(--space-2);
  padding-left: var(--space-4);
}

/* RESULT CARDS */
.result-card {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border-left: 2px solid transparent;
  text-align: left;
  position: relative;
  transition: border-color 1.2s cubic-bezier(0.2, 0, 0.2, 1),
              background 1.2s cubic-bezier(0.2, 0, 0.2, 1);
}

.result-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(184, 150, 78, 0.15), transparent 70%);
  opacity: 0;
  transition: opacity 1.2s cubic-bezier(0.2, 0, 0.2, 1);
  pointer-events: none;
}

.result-card.selected::before,
.result-card:hover::before {
  opacity: 1;
}

.result-card.selected,
.result-card:hover {
  border-left-color: var(--color-gold);
  background: rgba(184, 150, 78, 0.05);
}

@media (prefers-reduced-motion: reduce) {
  .result-card,
  .result-card::before {
    transition: none;
  }
}

.result-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  border: 1px solid rgba(184, 150, 78, 0.3);
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  color: var(--color-gold);
  letter-spacing: 0.05em;
}

.result-page-icon {
  color: rgba(250, 250, 249, 0.4);
  font-size: 1.125rem;
  min-width: 28px;
  text-align: center;
}

.result-discipline {
  font-family: var(--font-body);
  font-size: 0.625rem;
  font-weight: 600;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  min-width: 28px;
  opacity: 0.8;
}

.result-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.result-title {
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: 500;
  color: rgba(250, 250, 249, 0.9);
}

.result-meta {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  color: rgba(250, 250, 249, 0.4);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.result-arrow {
  font-size: 1rem;
  color: rgba(250, 250, 249, 0.15);
  transition: color 0.15s ease, transform 0.15s ease;
  flex-shrink: 0;
}

.result-card.selected .result-arrow,
.result-card:hover .result-arrow {
  color: var(--color-gold);
  transform: translateX(2px);
}

/* EMPTY STATE */
.search-empty {
  text-align: center;
  padding: var(--space-8) 0;
}

.empty-message {
  font-family: var(--font-display);
  font-size: var(--text-h3);
  font-weight: 300;
  font-style: italic;
  color: rgba(250, 250, 249, 0.5);
  margin-bottom: var(--space-3);
}

.empty-suggestion {
  font-family: var(--font-body);
  font-size: var(--text-small);
  color: rgba(250, 250, 249, 0.3);
  margin-bottom: var(--space-4);
}

.empty-links {
  display: flex;
  gap: var(--space-4);
  justify-content: center;
}

.empty-link {
  font-family: var(--font-body);
  font-size: var(--text-overline);
  font-weight: 500;
  letter-spacing: var(--tracking-widest);
  text-transform: uppercase;
  color: var(--color-gold);
  opacity: 0.7;
  padding-bottom: var(--space-1);
  border-bottom: 1px solid rgba(184, 150, 78, 0.3);
  transition: opacity 0.15s ease;
}

.empty-link:hover {
  opacity: 1;
}

/* FOOTER */
.search-footer {
  padding-top: var(--space-4);
  border-top: 1px solid rgba(250, 250, 249, 0.06);
  text-align: center;
}

.search-hint {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  color: rgba(250, 250, 249, 0.25);
}

.search-hint kbd {
  font-family: var(--font-mono);
  font-size: 0.6875rem;
  padding: 2px 8px;
  border: 1px solid rgba(184, 150, 78, 0.2);
  border-radius: 4px;
  color: rgba(250, 250, 249, 0.35);
}

/* RESPONSIVE */
@media (max-width: 640px) {
  .search-overlay {
    padding-top: var(--space-8);
    align-items: flex-start;
  }

  .search-modal {
    max-height: 85vh;
  }

  .search-input {
    font-size: 1.25rem;
  }

  .result-meta {
    font-size: 0.6875rem;
  }

  .result-discipline {
    display: none;
  }

  .empty-links {
    flex-direction: column;
    align-items: center;
  }
}
</style>
