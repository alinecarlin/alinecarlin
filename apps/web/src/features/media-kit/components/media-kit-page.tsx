'use client'

import { useMediaKitData } from '../hooks/use-media-kit-data'
import type { MediaKitData } from '../types/media-kit.types'
import { MediaKitCases } from './media-kit-cases'
import { MediaKitCollaborationFormats } from './media-kit-collaboration-formats'
import { MediaKitFinalCta } from './media-kit-final-cta'
import { MediaKitHero } from './media-kit-hero'
import { MediaKitIgamingExperienceSection } from './media-kit-igaming-experience'
import { MediaKitMetrics } from './media-kit-metrics'
import { MediaKitProfile } from './media-kit-profile'
import { MediaKitServices } from './media-kit-services'
import { MediaKitTestimonials } from './media-kit-testimonials'

export function MediaKitPage({ initialData }: { initialData: MediaKitData }) {
  const { data } = useMediaKitData(initialData)

  return (
    <main id="top" className="bg-background text-foreground relative min-h-screen overflow-x-clip">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-184 bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--surface-warm))_42%,hsl(var(--surface-soft))_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(hsl(var(--foreground)/0.08)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.08)_1px,transparent_1px)] bg-size-[80px_80px] opacity-[0.14]"
      />

      <MediaKitHero hero={data.hero} />
      <MediaKitMetrics metrics={data.metrics} />
      <MediaKitProfile profile={data.profile} />
      <MediaKitServices areas={data.commercialAreas} />
      <MediaKitCollaborationFormats formats={data.collaborationFormats} />
      <MediaKitIgamingExperienceSection experience={data.igamingExperience} />
      <MediaKitCases cases={data.cases} />
      <MediaKitTestimonials testimonials={data.testimonials} />
      <MediaKitFinalCta finalCta={data.finalCta} />
    </main>
  )
}
