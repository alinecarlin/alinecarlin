import {
  Card,
  CardContent,
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
    <section className="bg-[linear-gradient(180deg,hsl(var(--surface-soft)),hsl(var(--background)))] py-16 lg:py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center" variants={motionPresets.blurReveal}>
          <p className="eyebrow">Destaques profissionais</p>
          <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">
            Projetos pensados para campanhas, eventos e vídeo.
          </h2>
          <p className="text-muted-foreground mt-5 text-base leading-8">
            Exemplos de formatos comerciais para marcas que precisam de presença, estética e entrega audiovisual.
          </p>
        </Reveal>

        <StaggerReveal className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map(item => (
            <motion.div key={item.title} variants={motionPresets.staggerItem}>
              <Card className="border-border/70 h-full rounded-3xl bg-white/76 py-0 shadow-[0_24px_80px_-60px_hsl(var(--foreground)/0.4)] transition duration-300 hover:-translate-y-1 hover:bg-white">
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={1254}
                    height={1254}
                    sizes="(min-width: 1024px) 30vw, 90vw"
                    className="size-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 rounded-full border border-white/30 bg-white/18 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur">
                    {item.category}
                  </div>
                </div>
                <CardHeader className="px-6 pt-6">
                  <CardTitle className="font-serif text-2xl leading-tight">{item.title}</CardTitle>
                  <CardDescription className="text-sm leading-7">{item.description}</CardDescription>
                </CardHeader>
                {item.href ? (
                  <CardFooter className="border-border/60 bg-muted/36 px-6 py-5">
                    <Link
                      href={item.href}
                      className="text-primary inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3"
                    >
                      <span>Ver possibilidades</span>
                      <ArrowRight className="size-4" aria-hidden="true" />
                    </Link>
                  </CardFooter>
                ) : (
                  <CardContent className="pb-6" />
                )}
              </Card>
            </motion.div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  )
}
