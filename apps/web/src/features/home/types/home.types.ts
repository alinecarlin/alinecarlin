import type { StaticImageData } from 'next/image'

export type HomeCta = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
  ariaLabel?: string
}

export type HomeImage = {
  src: StaticImageData | string
  alt: string
}

export type HomeHero = {
  eyebrow: string
  title: string
  description: string
  image: HomeImage
  secondaryImage: HomeImage
  ctas: HomeCta[]
}

export type HomePresenceIcon = 'image' | 'network' | 'mic' | 'video' | 'gamepad' | 'layout'

export type HomePresenceArea = {
  title: string
  description: string
  icon: HomePresenceIcon
}

export type HomeEditorialCallout = {
  title: string
  description: string
  image: HomeImage
}

export type HomeFeaturedItem = {
  title: string
  category: string
  description: string
  image: HomeImage
  href?: string
}

export type HomeStat = {
  value: string
  label: string
}

export type HomeArchitectureNote = {
  title: string
  description: string
  points: string[]
}

export type HomeMediaKitCta = {
  eyebrow: string
  title: string
  description: string
  cta: HomeCta
  secondaryCta: HomeCta
}

export type HomeData = {
  hero: HomeHero
  stats: HomeStat[]
  presenceAreas: HomePresenceArea[]
  editorialCallouts: HomeEditorialCallout[]
  featuredItems: HomeFeaturedItem[]
  architectureNote: HomeArchitectureNote
  mediaKitCta: HomeMediaKitCta
}
