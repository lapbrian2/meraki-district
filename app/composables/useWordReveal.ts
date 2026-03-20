import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { onMounted, onUnmounted, type Ref } from 'vue'
import { waitForAncestorAnimations } from './useGsapScrollReveal'

interface WordRevealOptions {
  stagger?: number
  duration?: number
  y?: number
  start?: string
}

/**
 * Splits heading text into individual words and reveals them
 * with a staggered rise-up animation on scroll.
 *
 * Elements with .word-reveal class get their text split into
 * wrapped spans that slide up from below (overflow hidden mask).
 * This replaces the standard .reveal fade — don't use both on
 * the same element.
 */
export function useWordReveal(
  container: Ref<HTMLElement | null>,
  selector: string = '.word-reveal',
  options: WordRevealOptions = {}
) {
  const {
    stagger = 0.07,
    duration = 1.1,
    y = 70,
    start = 'top 85%',
  } = options

  let ctx: gsap.Context | null = null

  onMounted(async () => {
    if (!container.value) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      container.value.querySelectorAll(selector).forEach((el) => {
        ;(el as HTMLElement).style.opacity = '1'
      })
      return
    }

    await waitForAncestorAnimations(container.value)
    if (!container.value) return

    gsap.registerPlugin(ScrollTrigger)

    // Split text into word spans before animating
    container.value.querySelectorAll(selector).forEach((el) => {
      const text = el.textContent || ''
      const words = text.trim().split(/\s+/)
      ;(el as HTMLElement).style.display = 'flex'
      ;(el as HTMLElement).style.flexWrap = 'wrap'
      ;(el as HTMLElement).style.columnGap = '0.27em'
      el.innerHTML = words.map(word => {
        const safe = word.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
        return '<span class="wr-mask" style="display:inline-flex;overflow:hidden;vertical-align:bottom;padding-bottom:0.1em">' +
          '<span class="wr-word" style="display:inline-block;will-change:transform">' + safe + '</span>' +
          '</span>'
      }).join('')
    })

    ctx = gsap.context(() => {
      container.value!.querySelectorAll(selector).forEach((el) => {
        const wordEls = el.querySelectorAll('.wr-word')
        gsap.fromTo(wordEls,
          { yPercent: y },
          {
            yPercent: 0,
            duration,
            stagger,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start,
              toggleActions: 'play none none none',
              invalidateOnRefresh: true,
            },
          }
        )
      })
    }, container.value)
  })

  onUnmounted(() => {
    ctx?.revert()
  })
}
