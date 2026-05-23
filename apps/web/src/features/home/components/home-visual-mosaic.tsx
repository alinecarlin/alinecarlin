import { Reveal, StaggerReveal, motionPresets } from '@alinecarlin/ui'
import { motion } from 'framer-motion'
import Image from 'next/image'

import type { HomeEditorialCallout } from '../types/home.types'

export function HomeVisualMosaic({ callouts }: { callouts: HomeEditorialCallout[] }) {
  return (
    <section className="container-page py-14 sm:py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal variants={motionPresets.blurReveal} className="lg:sticky lg:top-28">
          <p className="eyebrow">Câmera, eventos e bastidores</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl lg:text-6xl">
            Da frente das câmeras ao ritmo de produção.
          </h2>
          <p className="text-muted-foreground mt-6 max-w-xl text-base leading-8">
            Aline transita entre apresentação, entrevista, registro de experiência e bastidor com leitura visual e
            postura profissional.
          </p>
        </Reveal>

        <StaggerReveal className="grid gap-4 sm:grid-cols-2">
          {callouts.map((callout, index) => (
            <motion.article
              key={callout.title}
              variants={motionPresets.staggerItem}
              className={index % 2 === 1 ? 'sm:translate-y-12' : undefined}
            >
              <div className="group bg-foreground relative min-h-76 overflow-hidden rounded-3xl border border-white/70 shadow-[0_28px_92px_-64px_hsl(var(--foreground)/0.64)] sm:min-h-86">
                <Image
                  src={callout.image.src}
                  alt={callout.image.alt}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 46vw, 88vw"
                  className="size-full min-h-76 object-cover object-center transition duration-700 group-hover:scale-[1.035] sm:min-h-86"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,hsl(var(--foreground)/0.04)_0%,hsl(var(--foreground)/0.2)_42%,hsl(var(--foreground)/0.82)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white sm:p-6">
                  <h3 className="font-serif text-2xl leading-tight sm:text-3xl">{callout.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/76">{callout.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
