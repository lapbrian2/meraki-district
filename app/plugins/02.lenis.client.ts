import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin(() => {
  // Defensive: ensure ScrollTrigger is registered even if plugin order shifts
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    lerp: 0.06,
    duration: 1.4,
    smoothWheel: true,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time: number) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  return {
    provide: {
      lenis,
    },
  }
})
