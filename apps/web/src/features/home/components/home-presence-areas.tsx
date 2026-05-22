import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  StaggerReveal,
  motionPresets,
  cn
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
    <section className="border-border/60 border-y bg-white/46 py-16 backdrop-blur-sm lg:py-22">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="eyebrow">Frentes de atuação</p>
            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Presença, conteúdo e produção com direção.</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl text-base leading-8 lg:justify-self-end">
            A Home resume o território principal da marca: mídia criativa, presença em câmera, comunicação comercial e
            audiovisual. A arquitetura aparece como repertório visual complementar.
          </p>
        </div>

        <StaggerReveal className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = icons[area.icon]
            const isArchitecture = area.icon === 'layout'

            return (
              <motion.div key={area.title} variants={motionPresets.staggerItem}>
                <Card
                  className={cn(
                    'border-border/70 h-full rounded-3xl bg-white/72 py-0 shadow-[0_22px_72px_-58px_hsl(var(--foreground)/0.38)] transition duration-300 hover:-translate-y-1 hover:bg-white',
                    isArchitecture && 'bg-muted/55'
                  )}
                >
                  <CardHeader className="px-6 pt-6">
                    <div className="flex items-start justify-between gap-5">
                      <span className="bg-gradient-brand inline-flex size-11 items-center justify-center rounded-full text-white shadow-(--shadow-soft)">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span className="text-gradient-brand font-serif text-3xl leading-none italic">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <CardTitle className="mt-5 font-serif text-2xl leading-tight">{area.title}</CardTitle>
                    <CardDescription className="text-sm leading-7">{area.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
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
