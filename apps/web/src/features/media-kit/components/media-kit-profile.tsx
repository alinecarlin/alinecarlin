import { Reveal, motionPresets } from '@alinecarlin/ui'
import { Check } from 'lucide-react'

import type { MediaKitProfile } from '../types/media-kit.types'

export function MediaKitProfile({ profile }: { profile: MediaKitProfile }) {
  return (
    <section className="container-page py-14 sm:py-16 lg:py-20">
      <Reveal
        variants={motionPresets.fadeUp}
        className="border-border/70 grid gap-8 rounded-3xl border bg-white/70 p-6 shadow-[0_24px_90px_-70px_hsl(var(--foreground)/0.42)] backdrop-blur md:p-8 lg:grid-cols-[1fr_0.86fr] lg:p-10"
      >
        <div>
          <p className="eyebrow">Perfil profissional</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">{profile.title}</h2>
          <p className="text-muted-foreground mt-6 text-base leading-8">{profile.description}</p>
        </div>

        <ul className="grid content-start gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {profile.highlights.map(highlight => (
            <li key={highlight} className="text-foreground/76 flex items-center gap-3 text-sm font-medium">
              <span className="bg-gradient-brand inline-flex size-7 shrink-0 items-center justify-center rounded-full text-white">
                <Check className="size-4" aria-hidden="true" />
              </span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
