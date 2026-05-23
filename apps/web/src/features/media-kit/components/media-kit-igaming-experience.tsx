import { Reveal, motionPresets } from '@alinecarlin/ui'
import { ArrowUpRight, Check } from 'lucide-react'

import type { MediaKitIgamingExperience } from '../types/media-kit.types'

export function MediaKitIgamingExperienceSection({ experience }: { experience: MediaKitIgamingExperience }) {
  return (
    <section className="container-page py-14 sm:py-16 lg:py-22">
      <Reveal
        variants={motionPresets.blurReveal}
        className="bg-foreground relative overflow-hidden rounded-[1.5rem] p-6 text-white shadow-[0_34px_110px_-72px_hsl(var(--foreground)/0.72)] sm:rounded-[2rem] md:p-10 lg:p-12"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--brand-purple)/0.35),hsl(var(--brand-blue)/0.24)_52%,hsl(var(--brand-cyan)/0.22)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground)/0.72),hsl(var(--foreground)/0.32)_62%,transparent)]"
        />

        <div className="relative z-10 grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">Diferencial de mídia</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">{experience.title}</h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/78">{experience.description}</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-3">
              {experience.points.map(point => (
                <li key={point} className="flex items-center gap-3 text-sm font-medium text-white/84">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-white/12 text-white">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ArrowUpRight className="absolute right-6 bottom-6 size-8 text-white/24" aria-hidden="true" />
      </Reveal>
    </section>
  )
}
