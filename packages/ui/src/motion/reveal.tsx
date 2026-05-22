'use client'

import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from 'framer-motion'

import { motionPresets, motionViewport } from './motion-presets'

export type RevealProps = HTMLMotionProps<'div'> & {
  variants?: Variants
  delay?: number
}

export function Reveal({ variants = motionPresets.fadeUp, delay = 0, transition, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const visibleTransition = delay > 0 ? { ...transition, delay } : transition

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={motionViewport}
      variants={shouldReduceMotion ? undefined : variants}
      transition={visibleTransition}
      {...props}
    />
  )
}

export function StaggerReveal({ variants = motionPresets.staggerContainer, ...props }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? false : 'hidden'}
      whileInView={shouldReduceMotion ? undefined : 'visible'}
      viewport={motionViewport}
      variants={shouldReduceMotion ? undefined : variants}
      {...props}
    />
  )
}
