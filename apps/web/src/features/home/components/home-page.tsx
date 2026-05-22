'use client'

import { useHomeData } from '../hooks/use-home-data'
import type { HomeData } from '../types/home.types'
import { HomeArchitectureNoteSection } from './home-architecture-note'
import { HomeFeaturedWork } from './home-featured-work'
import { HomeHero } from './home-hero'
import { HomeMediaKitCtaSection } from './home-media-kit-cta'
import { HomePresenceAreas } from './home-presence-areas'
import { HomeVisualMosaic } from './home-visual-mosaic'

export function HomePage({ initialData }: { initialData: HomeData }) {
  const { data } = useHomeData(initialData)

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

      <HomeHero hero={data.hero} stats={data.stats} />
      <HomePresenceAreas areas={data.presenceAreas} />
      <HomeVisualMosaic callouts={data.editorialCallouts} />
      <HomeFeaturedWork items={data.featuredItems} />
      <HomeArchitectureNoteSection note={data.architectureNote} />
      <HomeMediaKitCtaSection mediaKitCta={data.mediaKitCta} />
    </main>
  )
}
