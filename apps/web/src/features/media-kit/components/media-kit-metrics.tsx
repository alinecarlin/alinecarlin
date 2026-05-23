import {
  EngagementIcon,
  InstagramIcon,
  ReachIcon,
  Reveal,
  StaggerReveal,
  TikTokIcon,
  YoutubeIcon,
  motionPresets
} from '@alinecarlin/ui'
import { motion } from 'framer-motion'
import type { ComponentType, SVGProps } from 'react'

import type { MediaKitMetric } from '../types/media-kit.types'

type MetricIcon = ComponentType<SVGProps<SVGSVGElement>>

const icons: Record<MediaKitMetric['icon'], MetricIcon> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
  reach: ReachIcon,
  engagement: EngagementIcon
}

export function MediaKitMetrics({ metrics }: { metrics: MediaKitMetric[] }) {
  return (
    <section className="container-page py-14 sm:py-16 lg:py-24">
      <Reveal variants={motionPresets.blurReveal} className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">Presença digital</p>
        <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
          Números que mostram alcance, consistência e conexão.
        </h2>
      </Reveal>

      <div className="bg-foreground relative mt-10 overflow-hidden rounded-[1.75rem] p-4 text-white shadow-[0_34px_120px_-74px_hsl(var(--foreground)/0.72)] sm:mt-12 sm:rounded-[2.25rem] sm:p-5 lg:p-6">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--brand-orange)/0.38),hsl(var(--brand-pink)/0.32)_28%,hsl(var(--brand-purple)/0.28)_58%,hsl(var(--brand-blue)/0.26)_78%,hsl(var(--brand-cyan)/0.3)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(0_0%_100%/0.18),transparent_32%),radial-gradient(circle_at_82%_68%,hsl(0_0%_100%/0.12),transparent_36%)]"
        />

        <StaggerReveal className="relative z-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {metrics.map(metric => {
            const Icon = icons[metric.icon]

            return (
              <motion.div
                key={metric.label}
                variants={motionPresets.staggerItem}
                className="flex min-h-56 flex-col rounded-[1.35rem] border border-white/16 bg-white/10 p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:bg-white/14"
              >
                <div className="mb-7 flex items-center justify-between gap-4">
                  <span className="inline-flex size-10 items-center justify-center rounded-full bg-white/14 text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="size-2 rounded-full bg-white/40" aria-hidden="true" />
                </div>

                <p className="font-serif text-4xl leading-none tracking-normal sm:text-5xl">{metric.value}</p>
                <div className="mt-auto pt-7">
                  <p className="text-sm font-semibold tracking-[0.14em] text-white/78 uppercase">{metric.label}</p>
                  <p className="mt-2 text-sm leading-6 text-white/64">{metric.description}</p>
                </div>
              </motion.div>
            )
          })}
        </StaggerReveal>
      </div>
    </section>
  )
}
