import type { StaticImageData } from 'next/image'

export type MediaKitCta = {
  label: string
  href: string
  variant: 'primary' | 'secondary'
  ariaLabel?: string
}

export type MediaKitImage = {
  src: StaticImageData | string
  alt: string
}

export type MediaKitHero = {
  eyebrow: string
  title: string
  description: string
  image: MediaKitImage
  ctas: MediaKitCta[]
}

export type MediaKitProfile = {
  title: string
  description: string
  highlights: string[]
}

export type MediaKitCommercialArea = {
  title: string
  description: string
  icon: 'image' | 'network' | 'event' | 'mic' | 'video' | 'coverage'
}

export type MediaKitCollaborationFormat = {
  title: string
  description: string
}

export type MediaKitIgamingExperience = {
  title: string
  description: string
  points: string[]
}

export type MediaKitMetric = {
  label: string
  value: string
  description: string
  icon: 'instagram' | 'tiktok' | 'youtube' | 'reach' | 'engagement'
}

export type MediaKitCase = {
  title: string
  category: string
  description: string
  image: MediaKitImage
}

export type MediaKitTestimonial = {
  quote: string
  author: string
  role: string
}

export type MediaKitFinalCta = {
  title: string
  description: string
  ctas: MediaKitCta[]
}

export type MediaKitData = {
  hero: MediaKitHero
  profile: MediaKitProfile
  commercialAreas: MediaKitCommercialArea[]
  collaborationFormats: MediaKitCollaborationFormat[]
  igamingExperience: MediaKitIgamingExperience
  metrics: MediaKitMetric[]
  cases: MediaKitCase[]
  testimonials: MediaKitTestimonial[]
  finalCta: MediaKitFinalCta
}
