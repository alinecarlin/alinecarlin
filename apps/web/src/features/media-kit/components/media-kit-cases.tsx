import { Card, CardDescription, CardFooter, CardHeader, CardTitle, StaggerReveal, motionPresets } from '@alinecarlin/ui'
import { motion } from 'framer-motion'
import Image from 'next/image'

import type { MediaKitCase } from '../types/media-kit.types'
import { MediaKitSectionHeading } from './media-kit-section-heading'

export function MediaKitCases({ cases }: { cases: MediaKitCase[] }) {
  return (
    <section className="container-page py-14 sm:py-16 lg:py-24">
      <MediaKitSectionHeading
        eyebrow="Experiências"
        title="Projetos com câmera, bastidor e presença comercial."
        description="Experiências pensadas para gerar narrativa, presença e materiais úteis para canais digitais."
        align="center"
      />

      <StaggerReveal className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2 xl:grid-cols-4">
        {cases.map(item => (
          <motion.div key={item.title} variants={motionPresets.staggerItem}>
            <Card className="border-border/70 h-full rounded-3xl bg-white/76 py-0 shadow-[0_24px_80px_-60px_hsl(var(--foreground)/0.4)] transition duration-300 hover:-translate-y-1 hover:bg-white">
              <div className="relative aspect-16/11 overflow-hidden sm:aspect-4/5">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  width={1254}
                  height={1254}
                  sizes="(min-width: 1280px) 23vw, (min-width: 768px) 45vw, 90vw"
                  className="size-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,hsl(var(--foreground)/0.6)_100%)]" />
              </div>
              <CardHeader className="flex-1 px-5 pt-5 sm:px-6 sm:pt-6">
                <CardTitle className="font-serif text-[1.35rem] leading-tight sm:text-2xl">{item.title}</CardTitle>
                <CardDescription className="text-sm leading-7">{item.description}</CardDescription>
              </CardHeader>
              <CardFooter className="border-border/60 bg-muted/36 mt-auto px-5 py-4 sm:px-6">
                <span className="text-primary text-xs font-semibold tracking-[0.18em] uppercase">{item.category}</span>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </StaggerReveal>
    </section>
  )
}
