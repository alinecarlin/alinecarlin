import { Reveal, VisualFrame, motionPresets } from '@alinecarlin/ui'
import Image from 'next/image'

import type { MediaKitHero } from '../types/media-kit.types'
import { MediaKitAction } from './media-kit-action'

export function MediaKitHero({ hero }: { hero: MediaKitHero }) {
  return (
    <section className="container-page grid items-center gap-12 pt-8 pb-14 sm:pt-10 sm:pb-18 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:pt-14 lg:pb-24">
      <div className="relative z-10 max-w-3xl">
        <Reveal variants={motionPresets.blurReveal}>
          <p className="eyebrow">{hero.eyebrow}</p>
        </Reveal>

        <Reveal variants={motionPresets.blurReveal} delay={0.04}>
          <h1 className="mt-5 text-5xl leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl xl:text-8xl">
            {hero.title}
          </h1>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="text-muted-foreground mt-6 max-w-2xl text-base leading-8 sm:mt-7 sm:text-lg">
            {hero.description}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            {hero.ctas.map(cta => (
              <MediaKitAction key={cta.href + cta.label} cta={cta} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="border-border/70 mt-8 flex flex-wrap gap-2 rounded-full border bg-white/58 p-2 shadow-[0_18px_70px_-58px_hsl(var(--foreground)/0.38)] backdrop-blur sm:mt-10 sm:w-fit">
            {['Campanhas digitais', 'Eventos', 'Vídeo'].map(item => (
              <span
                key={item}
                className="text-foreground/72 rounded-full bg-white/72 px-3 py-2 text-xs leading-none font-semibold sm:px-4"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal variants={motionPresets.scaleReveal} className="relative mx-auto w-full max-w-156">
        <div className="relative h-[min(116vw,32rem)] overflow-visible sm:h-152 lg:h-184">
          <div
            aria-hidden="true"
            className="absolute -right-4 -bottom-5 h-[48%] w-[76%] rounded-[2rem] bg-[linear-gradient(135deg,hsl(var(--brand-cyan)/0.14),hsl(var(--brand-blue)/0.06)_58%,hsl(var(--brand-orange)/0.08)_100%)] sm:-right-8 sm:-bottom-8 sm:rounded-[2.75rem]"
          />

          <VisualFrame
            className="border-border/60 bg-foreground absolute inset-y-0 right-0 left-8 rounded-[1.85rem] border shadow-[0_42px_120px_-78px_hsl(var(--foreground)/0.7)] sm:left-18 sm:rounded-[2.4rem]"
            contentClassName="size-full overflow-hidden"
          >
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 48vw, 88vw"
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,hsl(var(--foreground)/0.74)_100%)]" />
            <div className="absolute right-5 bottom-5 left-5 text-white sm:right-7 sm:bottom-7 sm:left-7">
              <p className="max-w-72 font-serif text-2xl leading-tight sm:text-4xl">
                Presença comercial para marcas em movimento.
              </p>
            </div>
          </VisualFrame>

          <div className="absolute bottom-6 left-0 z-10 max-w-56 rounded-[1.35rem] border border-white/80 bg-white/88 p-4 shadow-[0_18px_64px_-46px_hsl(var(--foreground)/0.42)] backdrop-blur-xl sm:bottom-10 sm:max-w-72 sm:rounded-[1.75rem] sm:p-5">
            <p className="text-foreground/45 text-xs font-semibold tracking-[0.22em] uppercase">Propostas</p>
            <p className="mt-2 font-serif text-lg leading-tight sm:text-2xl">
              Campanhas, ativações e conteúdo em vídeo.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
