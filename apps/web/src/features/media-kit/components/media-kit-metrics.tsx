import { InstagramIcon, Reveal, StaggerReveal, TikTokIcon, YoutubeIcon, motionPresets } from '@alinecarlin/ui'
import { motion } from 'framer-motion'
import { Heart, TrendingUp } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

import type { MediaKitMetric } from '../types/media-kit.types'

type MetricIcon = ComponentType<SVGProps<SVGSVGElement>>

const icons: Record<MediaKitMetric['icon'], MetricIcon> = {
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
  youtube: YoutubeIcon,
  reach: TrendingUp,
  engagement: Heart
}

export function MediaKitMetrics({ metrics }: { metrics: MediaKitMetric[] }) {
  return (
    <section className="container-page py-6 sm:py-8 lg:-mt-8 lg:pb-16" aria-label="Presença digital">
      <Reveal
        variants={motionPresets.blurReveal}
        className="bg-foreground relative overflow-hidden rounded-[1.6rem] p-3 text-white shadow-[0_34px_120px_-74px_hsl(var(--foreground)/0.72)] sm:rounded-[2rem] sm:p-4 lg:p-5"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(110deg,hsl(var(--brand-pink)/0.88),hsl(var(--brand-purple)/0.76)_36%,hsl(var(--brand-blue)/0.82)_70%,hsl(var(--brand-cyan)/0.82)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,hsl(0_0%_100%/0.2),transparent_30%),radial-gradient(circle_at_88%_70%,hsl(0_0%_100%/0.14),transparent_34%)]"
        />

        <StaggerReveal className="relative z-10 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 lg:gap-3">
          {metrics.map(metric => {
            const Icon = icons[metric.icon]
            const isWideMobileItem = metric.icon === 'engagement'

            return (
              <motion.div
                key={metric.label}
                variants={motionPresets.staggerItem}
                className={`flex min-h-23 items-center gap-3 rounded-[1.15rem] px-3 py-3 backdrop-blur-xl transition duration-300 hover:bg-white/12 sm:min-h-24 sm:px-4 ${isWideMobileItem ? 'col-span-2 sm:col-span-1' : ''}`}
              >
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-white/16 text-white sm:size-12">
                  <Icon className="size-5 sm:size-6" stroke="currentColor" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-serif text-2xl leading-none tracking-normal sm:text-3xl">{metric.value}</p>
                  <p className="mt-1 text-xs leading-4 font-medium text-white/84 sm:text-sm sm:leading-5">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </StaggerReveal>
      </Reveal>
    </section>
  )
}
