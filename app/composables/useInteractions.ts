import { gsap } from 'gsap'
import { onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Check if device supports hover (not touch-only).
 * Tilt and magnetic effects are pointless on touch screens.
 */
function supportsHover(): boolean {
  return window.matchMedia('(hover: hover)').matches
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

interface TiltOptions {
  maxRotation?: number
  perspective?: number
}

/**
 * Adds a subtle 3D tilt effect to cards on mousemove.
 * The card tilts toward the cursor position within the element.
 * Disabled on touch devices and reduced-motion preferences.
 */
export function useTilt(
  container: Ref<HTMLElement | null>,
  selector: string,
  options: TiltOptions = {}
) {
  const { maxRotation = 4, perspective = 800 } = options
  const cleanups: (() => void)[] = []

  onMounted(() => {
    if (!container.value || !supportsHover()) return

    const cards = container.value.querySelectorAll<HTMLElement>(selector)

    cards.forEach((card) => {
      card.style.transformStyle = 'preserve-3d'

      const parent = card.parentElement
      if (parent) parent.style.perspective = perspective + 'px'

      const onMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        gsap.to(card, {
          rotateX: -y * maxRotation * 2,
          rotateY: x * maxRotation * 2,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      const onLeave = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'power3.out',
          overwrite: 'auto',
        })
      }

      card.addEventListener('mousemove', onMove)
      card.addEventListener('mouseleave', onLeave)

      cleanups.push(() => {
        card.removeEventListener('mousemove', onMove)
        card.removeEventListener('mouseleave', onLeave)
      })
    })
  })

  onUnmounted(() => {
    cleanups.forEach(fn => fn())
  })
}

interface MagneticOptions {
  strength?: number
}

/**
 * Makes buttons subtly follow the cursor within their bounds,
 * creating a magnetic pull effect. On leave, the button snaps
 * back with a slight elastic bounce.
 */
export function useMagnetic(
  container: Ref<HTMLElement | null>,
  selector: string,
  options: MagneticOptions = {}
) {
  const { strength = 0.3 } = options
  const cleanups: (() => void)[] = []

  onMounted(() => {
    if (!container.value || !supportsHover()) return

    const buttons = container.value.querySelectorAll<HTMLElement>(selector)

    buttons.forEach((btn) => {
      const onMove = (e: MouseEvent) => {
        const rect = btn.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        gsap.to(btn, {
          x: (e.clientX - centerX) * strength,
          y: (e.clientY - centerY) * strength,
          duration: 0.3,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      const onLeave = () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.4)',
          overwrite: 'auto',
        })
      }

      btn.addEventListener('mousemove', onMove)
      btn.addEventListener('mouseleave', onLeave)

      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMove)
        btn.removeEventListener('mouseleave', onLeave)
      })
    })
  })

  onUnmounted(() => {
    cleanups.forEach(fn => fn())
  })
}
