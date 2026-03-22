import { onMounted, onUnmounted, type Ref } from 'vue'

/**
 * Cursor-aware magnification effect — the "Curator's Loupe."
 * The transform-origin follows the mouse position so the image
 * scales toward where the user is looking, like leaning into
 * a physical canvas with a loupe.
 *
 * Pairs with `.curator-loupe` CSS class for base styles.
 * This composable adds the dynamic transform-origin tracking.
 *
 * Disabled on touch devices and prefers-reduced-motion.
 */
export function useCuratorLoupe(
  container: Ref<HTMLElement | null>,
  selector = '.curator-loupe'
) {
  const cleanups: (() => void)[] = []

  onMounted(() => {
    if (!container.value) return
    if (!window.matchMedia('(hover: hover)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const elements = container.value.querySelectorAll<HTMLElement>(selector)

    elements.forEach((el) => {
      const media = el.querySelector<HTMLElement>('img, video')
      if (!media) return

      const onMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        media.style.transformOrigin = `${x}% ${y}%`
      }

      const onLeave = () => {
        media.style.transformOrigin = 'center center'
      }

      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)

      cleanups.push(() => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      })
    })
  })

  onUnmounted(() => {
    cleanups.forEach(fn => fn())
  })
}
