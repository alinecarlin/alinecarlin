import { Card, CardDescription, CardHeader, CardTitle, StaggerReveal, motionPresets } from '@alinecarlin/ui'
import { motion } from 'framer-motion'

import type { MediaKitCollaborationFormat } from '../types/media-kit.types'
import { MediaKitSectionHeading } from './media-kit-section-heading'

export function MediaKitCollaborationFormats({ formats }: { formats: MediaKitCollaborationFormat[] }) {
  return (
    <section id="formatos" className="container-page py-14 sm:py-16 lg:py-24">
      <MediaKitSectionHeading
        eyebrow="Formatos de colaboração"
        title="Entregas flexíveis para campanhas, ativações e conteúdo."
        description="Cada formato pode ser ajustado ao canal, ao ritmo da ação e ao objetivo comercial do projeto."
        align="center"
      />

      <StaggerReveal className="mt-10 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-3">
        {formats.map((format, index) => (
          <motion.div key={format.title} variants={motionPresets.staggerItem}>
            <Card className="border-border/70 h-full rounded-3xl bg-white/72 py-0 shadow-[0_18px_70px_-58px_hsl(var(--foreground)/0.36)] transition duration-300 hover:-translate-y-1 hover:bg-white">
              <CardHeader className="px-5 py-5 sm:px-6 sm:py-6">
                <span className="text-gradient-brand font-serif text-2xl leading-none italic">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <CardTitle className="font-serif text-[1.35rem] leading-tight sm:text-2xl">{format.title}</CardTitle>
                <CardDescription className="text-sm leading-7">{format.description}</CardDescription>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </StaggerReveal>
    </section>
  )
}
