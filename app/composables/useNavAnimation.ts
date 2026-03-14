import { gsap } from 'gsap'
import { onMounted, onUnmounted, watch, type Ref } from 'vue'

interface UseNavAnimationOptions {
  navRef: Ref<HTMLElement | null>
  overlayRef: Ref<HTMLElement | null>
  mobileOpen: Ref<boolean>
}

/**
 * Encapsulates all nav GSAP animations:
 * - Initial entrance (once per session via useState)
 * - Mobile overlay open/close with clip-path circle reveal
 * - Lenis stop/start integration
 * - gsap.context cleanup
 * - prefers-reduced-motion guard
 */
export function useNavAnimation(options: UseNavAnimationOptions) {
  const { navRef, overlayRef, mobileOpen } = options
  let ctx: gsap.Context | null = null
  let openTl: gsap.core.Timeline | null = null
  const hasAnimated = useState('navAnimated', () => false)

  onMounted(() => {
    if (!navRef.value) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    ctx = gsap.context(() => {
      // Entrance animation - once per session
      if (!hasAnimated.value) {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        tl.from('.nav-logo', { opacity: 0, y: -10, duration: 0.6 }, 0.8)
          .from('.nav-link', {
            opacity: 0, y: -8, duration: 0.5,
            stagger: 0.08,
          }, 1.0)
          .from('.nav-apply', { opacity: 0, y: -8, duration: 0.5 }, 1.2)

        hasAnimated.value = true
      }
    }, navRef.value)
  })

  // Mobile overlay open/close
  watch(mobileOpen, (open) => {
    if (!overlayRef.value) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Lenis integration
    if (import.meta.client) {
      try {
        const { $lenis } = useNuxtApp()
        if ($lenis) {
          if (open) $lenis.stop()
          else $lenis.start()
        }
      } catch { /* Lenis may not be available */ }
    }

    if (reducedMotion) {
      if (overlayRef.value) {
        overlayRef.value.style.visibility = open ? 'visible' : 'hidden'
        overlayRef.value.style.clipPath = open
          ? 'circle(150% at calc(100% - 2rem) 1.5rem)'
          : 'circle(0% at calc(100% - 2rem) 1.5rem)'
      }
      return
    }

    // Kill any running timeline
    if (openTl) {
      openTl.kill()
      openTl = null
    }

    if (open) {
      openTl = gsap.timeline()

      gsap.set(overlayRef.value, { visibility: 'visible' })

      openTl
        .to(overlayRef.value, {
          clipPath: 'circle(150% at calc(100% - 2rem) 1.5rem)',
          duration: 0.6,
          ease: 'power3.inOut',
        })
        .from('.mobile-link-mask', {
          yPercent: 100,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
        }, '-=0.2')
        .from('.mobile-rule', {
          scaleX: 0,
          duration: 0.6,
          ease: 'power2.inOut',
        }, '-=0.4')
        .from('.mobile-apply', {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: 'power3.out',
        }, '-=0.3')
    } else {
      openTl = gsap.timeline({
        onComplete: () => {
          if (overlayRef.value) {
            overlayRef.value.style.visibility = 'hidden'
          }
        },
      })

      openTl.to(overlayRef.value, {
        clipPath: 'circle(0% at calc(100% - 2rem) 1.5rem)',
        duration: 0.5,
        ease: 'power3.inOut',
      })
    }
  })

  onUnmounted(() => {
    ctx?.revert()
    if (openTl) {
      openTl.kill()
      openTl = null
    }
  })
}
