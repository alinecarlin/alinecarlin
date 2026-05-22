import { Reveal, motionPresets } from '@alinecarlin/ui'
import { Check } from 'lucide-react'

import type { HomeArchitectureNote } from '../types/home.types'

export function HomeArchitectureNoteSection({ note }: { note: HomeArchitectureNote }) {
  return (
    <section className="container-page py-16 lg:py-22">
      <Reveal
        variants={motionPresets.fadeUp}
        className="border-border/70 grid gap-8 rounded-3xl border bg-white/68 p-6 shadow-[0_24px_90px_-70px_hsl(var(--foreground)/0.42)] backdrop-blur md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10"
      >
        <div>
          <p className="eyebrow">Repertório visual</p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">{note.title}</h2>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-muted-foreground text-base leading-8">{note.description}</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {note.points.map(point => (
              <li key={point} className="text-foreground/76 flex items-center gap-3 text-sm font-medium">
                <span className="bg-gradient-brand inline-flex size-7 shrink-0 items-center justify-center rounded-full text-white">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  )
}
