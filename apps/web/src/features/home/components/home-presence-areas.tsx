import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StaggerReveal,
  motionPresets
} from '@alinecarlin/ui'
import { motion } from 'framer-motion'
import { Gamepad2, ImageIcon, LayoutGrid, Mic2, Share2, Video } from 'lucide-react'

import type { HomePresenceArea, HomePresenceIcon } from '../types/home.types'

const icons: Record<HomePresenceIcon, typeof ImageIcon> = {
  image: ImageIcon,
  network: Share2,
  mic: Mic2,
  video: Video,
  gamepad: Gamepad2,
  layout: LayoutGrid
}

export function HomePresenceAreas({ areas }: { areas: HomePresenceArea[] }) {
  return (
    <section className="border-border/60 border-y bg-white/46 py-14 backdrop-blur-sm sm:py-16 lg:py-22">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">Frentes de atuação</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">Áreas de trabalho com presença e direção.</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-base leading-8 lg:justify-self-end">
            Da câmera aos bastidores, Aline atua em formatos que combinam imagem, ritmo, ambiente e entrega comercial.
          </p>
        </div>

        <StaggerReveal className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = icons[area.icon]

            return (
              <motion.div key={area.title} variants={motionPresets.staggerItem}>
                <Card className="border-border/70 h-full rounded-3xl bg-white/72 py-0 shadow-[0_22px_72px_-58px_hsl(var(--foreground)/0.38)] transition duration-300 hover:-translate-y-1 hover:bg-white">
                  <CardHeader className="px-5 pt-5 sm:px-6 sm:pt-6">
                    <div className="flex items-start justify-between gap-5">
                      <span className="bg-gradient-brand inline-flex size-10 items-center justify-center rounded-full text-white shadow-(--shadow-soft) sm:size-11">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-gradient-brand font-serif text-2xl leading-none italic sm:text-3xl">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <CardTitle className="mt-5 font-serif text-[1.35rem] leading-tight sm:text-2xl">
                      {area.title}
                    </CardTitle>
                    <CardDescription className="text-sm leading-7">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-5 pb-5 sm:px-6 sm:pb-6">
                    <div className="h-px w-full bg-[linear-gradient(90deg,transparent,hsl(var(--border)),transparent)]" />
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </StaggerReveal>
      </div>
    </section>
  )
}
