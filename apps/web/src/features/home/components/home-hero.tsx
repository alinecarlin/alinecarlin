import { Reveal, motionPresets } from '@alinecarlin/ui'
import Image from 'next/image'

import type { HomeHero, HomeStat } from '../types/home.types'
import { HomeAction } from './home-action'

export function HomeHero({ hero, stats }: { hero: HomeHero; stats: HomeStat[] }) {
  return (
    <section className="container-page grid min-h-[calc(100svh-80px)] items-center gap-10 pt-10 pb-16 lg:grid-cols-[0.96fr_1.04fr] lg:gap-14 lg:pt-14 lg:pb-24">
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
          <p className="text-muted-foreground mt-7 max-w-2xl text-base leading-8 sm:text-lg">{hero.description}</p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            {hero.ctas.map(cta => (
              <HomeAction key={cta.href} cta={cta} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="border-border/70 mt-12 grid overflow-hidden rounded-3xl border bg-white/64 shadow-[0_24px_80px_-58px_hsl(var(--foreground)/0.38)] backdrop-blur md:grid-cols-3">
            {stats.map(stat => (
              <div
                key={stat.value}
                className="border-border/70 flex min-h-28 flex-col justify-between gap-4 border-b p-5 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
              >
                <span className="text-gradient-brand font-serif text-3xl leading-none italic">{stat.value}</span>
                <span className="text-foreground/72 text-sm leading-5 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal variants={motionPresets.scaleReveal} className="relative mx-auto w-full max-w-150">
        <div className="relative grid min-h-136 items-end sm:min-h-160 lg:min-h-180">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[2rem] bg-[linear-gradient(135deg,hsl(var(--brand-orange)/0.18),hsl(var(--brand-pink)/0.14)_34%,hsl(var(--brand-blue)/0.13)_70%,hsl(var(--brand-cyan)/0.16))]"
          />

          <div className="border-border/70 bg-foreground absolute top-0 right-0 left-12 h-[78%] overflow-hidden rounded-[2rem] border shadow-[0_42px_120px_-76px_hsl(var(--foreground)/0.72)] sm:left-20">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1254}
              height={1254}
              priority
              sizes="(min-width: 1024px) 48vw, 88vw"
              className="size-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_44%,hsl(var(--foreground)/0.68)_100%)]" />
            <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4 text-white">
              <p className="max-w-48 font-serif text-2xl leading-tight sm:text-3xl">Media Kit oficial</p>
              <span className="hidden rounded-full border border-white/22 bg-white/12 px-4 py-2 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur sm:inline-flex">
                2026
              </span>
            </div>
          </div>

          <div className="border-border/70 relative z-10 ml-0 w-[62%] overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_26px_90px_-58px_hsl(var(--brand-purple)/0.62)] sm:w-[52%]">
            <Image
              src={hero.secondaryImage.src}
              alt={hero.secondaryImage.alt}
              width={1254}
              height={1254}
              sizes="(min-width: 1024px) 24vw, 52vw"
              className="aspect-[0.92/1] w-full object-cover object-center"
            />
          </div>

          <div className="absolute right-3 bottom-8 z-20 max-w-64 rounded-3xl border border-white/70 bg-white/82 p-4 shadow-[0_18px_70px_-46px_hsl(var(--foreground)/0.46)] backdrop-blur">
            <p className="text-foreground/54 text-xs font-semibold tracking-[0.2em] uppercase">Imagem · Conteúdo</p>
            <p className="mt-2 font-serif text-xl leading-tight">Presença visual estratégica para marcas e projetos.</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
