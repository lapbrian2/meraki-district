/**
 * Shared mobile nav state — allows MobileBottomNav and AppNav
 * to control the same overlay without prop drilling.
 * Uses Nuxt useState for SSR-safe cross-component reactivity.
 */
export function useMobileNav() {
  const mobileOpen = useState('mobileNavOpen', () => false)

  function openMobile() {
    mobileOpen.value = true
  }

  function closeMobile() {
    mobileOpen.value = false
  }

  function toggleMobile() {
    mobileOpen.value = !mobileOpen.value
  }

  return { mobileOpen, openMobile, closeMobile, toggleMobile }
}
