import { Card, CardDescription, CardHeader, CardTitle, StaggerReveal, motionPresets } from '@alinecarlin/ui'
import { motion } from 'framer-motion'

import type { MediaKitTestimonial } from '../types/media-kit.types'

export function MediaKitTestimonials({ testimonials }: { testimonials: MediaKitTestimonial[] }) {
  return (
    <section className="container-page py-14 sm:py-16 lg:py-20">
      <StaggerReveal className="grid gap-5 lg:grid-cols-2">
        {testimonials.map(testimonial => (
          <motion.div key={testimonial.quote} variants={motionPresets.staggerItem}>
            <Card className="border-border/70 h-full rounded-3xl bg-white/72 py-0 shadow-[0_22px_72px_-58px_hsl(var(--foreground)/0.38)]">
              <CardHeader className="px-6 py-6 sm:px-8 sm:py-8">
                <CardDescription className="text-xs font-semibold tracking-[0.18em] uppercase">
                  Depoimento
                </CardDescription>
                <CardTitle className="font-serif text-2xl leading-snug sm:text-3xl">“{testimonial.quote}”</CardTitle>
                <p className="text-muted-foreground text-sm leading-7">
                  {testimonial.author} · {testimonial.role}
                </p>
              </CardHeader>
            </Card>
          </motion.div>
        ))}
      </StaggerReveal>
    </section>
  )
}
