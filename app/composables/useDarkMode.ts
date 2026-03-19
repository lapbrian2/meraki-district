/**
 * Dark mode toggle with system preference detection.
 * Persists choice to localStorage. Respects prefers-color-scheme
 * when no manual choice has been made.
 */
export function useDarkMode() {
  const theme = useState<'light' | 'dark' | 'system'>('theme', () => 'system')

  function applyTheme(value: 'light' | 'dark' | 'system') {
    if (!import.meta.client) return
    const root = document.documentElement
    if (value === 'system') {
      root.removeAttribute('data-theme')
    } else {
      root.setAttribute('data-theme', value)
    }
  }

  function toggle() {
    const current = theme.value
    if (current === 'system') {
      // If system is dark, toggling should go light. If light, go dark.
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      theme.value = isDark ? 'light' : 'dark'
    } else if (current === 'dark') {
      theme.value = 'light'
    } else {
      theme.value = 'dark'
    }
    applyTheme(theme.value)
    try { localStorage.setItem('meraki_theme', theme.value) } catch {}
  }

  const isDark = computed(() => {
    if (!import.meta.client) return false
    if (theme.value === 'dark') return true
    if (theme.value === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  // Initialize from localStorage on client
  if (import.meta.client) {
    const saved = localStorage.getItem('meraki_theme') as 'light' | 'dark' | 'system' | null
    if (saved && ['light', 'dark', 'system'].includes(saved)) {
      theme.value = saved
    }
    applyTheme(theme.value)
  }

  return { theme, isDark, toggle }
}
