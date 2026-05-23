import { Reveal, motionPresets } from '@alinecarlin/ui'

import type { HomeMediaKitCta } from '../types/home.types'
import { HomeAction } from './home-action'

export function HomeMediaKitCtaSection({ mediaKitCta }: { mediaKitCta: HomeMediaKitCta }) {
  return (
    <section className="container-page pb-18 sm:pb-20 lg:pb-28">
      <Reveal
        variants={motionPresets.blurReveal}
        className="bg-foreground relative overflow-hidden rounded-[1.5rem] p-6 text-white shadow-[0_38px_120px_-72px_hsl(var(--foreground)/0.72)] sm:rounded-[2rem] md:p-10 lg:p-14"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--brand-orange)/0.38),hsl(var(--brand-pink)/0.28)_32%,hsl(var(--brand-purple)/0.24)_62%,hsl(var(--brand-cyan)/0.28))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground)/0.66),hsl(var(--foreground)/0.28)_54%,hsl(var(--foreground)/0.08))]"
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">{mediaKitCta.eyebrow}</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-5xl lg:text-6xl">{mediaKitCta.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">{mediaKitCta.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <HomeAction cta={mediaKitCta.cta} className="border-white/10" />
            <HomeAction
              cta={mediaKitCta.secondaryCta}
              className="border-white/18 bg-white/10 text-white hover:bg-white/16"
            />
          </div>
        </div>
      </Reveal>
    </section>
  )
}
