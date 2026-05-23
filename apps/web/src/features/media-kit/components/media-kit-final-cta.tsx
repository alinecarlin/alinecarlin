import { Reveal, motionPresets } from '@alinecarlin/ui'

import type { MediaKitFinalCta } from '../types/media-kit.types'
import { MediaKitAction } from './media-kit-action'

export function MediaKitFinalCta({ finalCta }: { finalCta: MediaKitFinalCta }) {
  return (
    <section className="container-page pb-18 sm:pb-20 lg:pb-28">
      <Reveal
        variants={motionPresets.blurReveal}
        className="bg-foreground relative overflow-hidden rounded-[1.5rem] p-6 text-white shadow-[0_38px_120px_-72px_hsl(var(--foreground)/0.72)] sm:rounded-[2rem] md:p-10 lg:p-14"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(135deg,hsl(var(--brand-orange)/0.36),hsl(var(--brand-pink)/0.28)_34%,hsl(var(--brand-purple)/0.25)_64%,hsl(var(--brand-cyan)/0.24))]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,hsl(var(--foreground)/0.66),hsl(var(--foreground)/0.28)_54%,hsl(var(--foreground)/0.08))]"
        />

        <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.22em] text-white/70 uppercase">Contato comercial</p>
            <h2 className="mt-5 text-3xl leading-tight sm:text-5xl lg:text-6xl">{finalCta.title}</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">{finalCta.description}</p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            {finalCta.ctas.map(cta => (
              <MediaKitAction
                key={cta.label}
                cta={cta}
                className={
                  cta.variant === 'secondary'
                    ? 'border-white/18 bg-white/10 text-white hover:bg-white/16'
                    : 'border-white/10'
                }
              />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
