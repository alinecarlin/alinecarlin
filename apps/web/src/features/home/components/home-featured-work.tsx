import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Reveal,
  StaggerReveal,
  motionPresets
} from '@alinecarlin/ui'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import type { HomeFeaturedItem } from '../types/home.types'

export function HomeFeaturedWork({ items }: { items: HomeFeaturedItem[] }) {
  return (
    <section className="bg-[linear-gradient(180deg,hsl(var(--surface-soft)),hsl(var(--background)))] py-14 sm:py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center" variants={motionPresets.blurReveal}>
          <p className="eyebrow">Formatos de participação</p>
          <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">
            Entregas para campanhas, eventos e projetos digitais.
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-8">
            Participações desenhadas para gerar registro, narrativa e presença nos canais certos.
          </p>
        </Reveal>

        <StaggerReveal className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map(item => (
            <motion.div key={item.title} variants={motionPresets.staggerItem}>
              <Card className="border-border/70 h-full rounded-3xl bg-white/76 py-0 shadow-[0_24px_80px_-60px_hsl(var(--foreground)/0.4)] transition duration-300 hover:-translate-y-1 hover:bg-white">
                <div className="relative aspect-16/11 overflow-hidden sm:aspect-4/5">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={1254}
                    height={1254}
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="size-full object-cover object-center"
                  />
                </div>
                <CardHeader className="flex-1 px-6 pt-6">
                  <CardTitle className="font-serif text-[1.45rem] leading-tight sm:text-2xl">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-7">{item.description}</CardDescription>
                </CardHeader>
                <CardFooter className="border-border/60 bg-muted/36 mt-auto flex items-center justify-between gap-4 px-6 py-5">
                  <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">
                    {item.category}
                  </span>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="text-primary inline-flex shrink-0 items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                    >
                      <span>Ver</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  ) : null}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
