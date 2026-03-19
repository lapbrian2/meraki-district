export default defineNuxtPlugin(() => {
  // Apply saved theme immediately to prevent flash of wrong color scheme
  try {
    const saved = localStorage.getItem('meraki_theme')
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved)
    }
  } catch {}
})
