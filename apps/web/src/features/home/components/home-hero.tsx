import { Reveal, motionPresets } from '@alinecarlin/ui'
import Image from 'next/image'

import type { HomeHero, HomeStat } from '../types/home.types'
import { HomeAction } from './home-action'

export function HomeHero({ hero, stats }: { hero: HomeHero; stats: HomeStat[] }) {
  return (
    <section className="container-page grid items-center gap-12 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:min-h-[calc(100svh-80px)] lg:grid-cols-[0.96fr_1.04fr] lg:gap-14 lg:pt-14 lg:pb-24">
      <div className="relative z-10 flex max-w-3xl flex-col items-start">
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
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            {hero.ctas.map(cta => (
              <HomeAction key={cta.href} cta={cta} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="border-border/70 mt-10 grid overflow-hidden rounded-3xl border bg-white/64 shadow-[0_24px_80px_-58px_hsl(var(--foreground)/0.38)] backdrop-blur sm:mt-12 md:grid-cols-3">
            {stats.map(stat => (
              <div
                key={stat.value}
                className="border-border/70 flex min-h-24 flex-col justify-between gap-4 border-b p-5 last:border-b-0 sm:min-h-28 md:border-r md:border-b-0 md:last:border-r-0"
              >
                <span className="text-gradient-brand font-serif text-3xl leading-none italic">{stat.value}</span>
                <span className="text-foreground/72 text-sm leading-5 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal variants={motionPresets.scaleReveal} className="relative mx-auto w-full max-w-150">
        <div className="relative grid h-[min(112vw,30rem)] items-end overflow-visible sm:h-152 lg:h-180">
          <div
            aria-hidden="true"
            className="absolute -right-3 -bottom-5 h-[42%] w-[78%] rounded-[2rem] bg-[linear-gradient(135deg,hsl(var(--brand-blue)/0.06),hsl(var(--brand-cyan)/0.12)_62%,hsl(var(--brand-orange)/0.05)_100%)] sm:-right-8 sm:-bottom-8 sm:rounded-[2.75rem]"
          />

          <div
            aria-hidden="true"
            className="absolute -top-3 left-7 h-[44%] w-[52%] rounded-[2rem] bg-[linear-gradient(135deg,hsl(var(--brand-orange)/0.12),hsl(var(--brand-pink)/0.06)_64%,transparent_100%)] sm:-top-6 sm:left-12 sm:h-[48%] sm:w-[48%] sm:rounded-[2.75rem]"
          />

          <div className="border-border/60 bg-foreground absolute top-0 right-0 left-8 h-[80%] overflow-hidden rounded-[1.75rem] border shadow-[0_36px_110px_-80px_hsl(var(--foreground)/0.7)] sm:left-20 sm:h-[82%] sm:rounded-[2.25rem]">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 48vw, 88vw"
              className="size-full object-cover object-center"
            />
          </div>

          <div className="border-border/60 relative z-10 mb-3 ml-0 w-[44%] overflow-hidden rounded-[1.25rem] border bg-white shadow-[0_24px_80px_-58px_hsl(var(--brand-purple)/0.5)] sm:mb-4 sm:ml-1 sm:w-[38%] sm:rounded-[1.75rem]">
            <Image
              src={hero.secondaryImage.src}
              alt={hero.secondaryImage.alt}
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 20vw, 44vw"
              className="aspect-[0.92/1] w-full object-cover object-center"
            />
          </div>

          <div className="absolute right-0 bottom-6 z-20 max-w-51 rounded-[1.25rem] border border-white/80 bg-white/88 p-3 shadow-[0_18px_64px_-46px_hsl(var(--foreground)/0.42)] backdrop-blur-xl sm:right-4 sm:bottom-12 sm:max-w-60 sm:rounded-[1.5rem] sm:p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-foreground/45 text-[0.68rem] font-semibold tracking-[0.22em] uppercase">
                Imagem · Conteúdo
              </p>

              <span className="text-foreground/40 text-[0.68rem] font-semibold">{new Date().getFullYear()}</span>
            </div>

            <p className="mt-2 font-serif text-base leading-tight tracking-tight sm:text-xl">
              Presença visual estratégica para marcas e projetos.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
