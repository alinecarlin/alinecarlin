import type { Transition, Variants } from 'framer-motion'

const easeOutExpo = [0.22, 1, 0.36, 1] as const

export const motionTransitions = {
  smooth: {
    duration: 0.7,
    ease: easeOutExpo
  },
  slow: {
    duration: 0.9,
    ease: easeOutExpo
  }
} satisfies Record<string, Transition>

export const motionViewport = {
  once: true,
  amount: 0.16,
  margin: '0px 0px -10% 0px'
} as const

export const staggerViewport = {
  once: true,
  amount: 0.04,
  margin: '0px 0px -6% 0px'
} as const

export const motionPresets = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionTransitions.smooth
    }
  },
  blurReveal: {
    hidden: { opacity: 0, y: 18, filter: 'blur(10px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: motionTransitions.slow
    }
  },
  scaleReveal: {
    hidden: { opacity: 0, scale: 0.96, y: 16 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: motionTransitions.smooth
    }
  },
  staggerContainer: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.08
      }
    }
  },
  staggerItem: {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionTransitions.smooth
    }
  },
  softParallax: {
    hidden: { opacity: 0, y: 34 },
    visible: {
      opacity: 1,
      y: 0,
      transition: motionTransitions.slow
    }
  }
} satisfies Record<string, Variants>

export const premiumHover = {
  rest: {
    y: 0,
    scale: 1
  },
  hover: {
    y: -6,
    scale: 1.01,
    transition: {
      duration: 0.35,
      ease: easeOutExpo
    }
  }
} satisfies Variants
