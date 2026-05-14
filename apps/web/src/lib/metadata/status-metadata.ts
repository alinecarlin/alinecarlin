import type { Metadata } from 'next'

type StatusMetadataInput = {
  title: string
  description: string
  path: string
  nofollow?: boolean
}

const socialImage = {
  url: '/og-image.webp',
  width: 1200,
  height: 630,
  alt: 'Aline Carlin — Mídia Criativa, Presença Digital e Comunicação'
}

export function createStatusMetadata({ title, description, path, nofollow = false }: StatusMetadataInput): Metadata {
  return {
    title,
    description,

    alternates: {
      canonical: path
    },

    openGraph: {
      title: `${title} | Aline Carlin`,
      description,
      url: path,
      siteName: 'Aline Carlin',
      locale: 'pt_BR',
      type: 'website',
      images: [socialImage]
    },

    twitter: {
      card: 'summary_large_image',
      title: `${title} | Aline Carlin`,
      description,
      images: [socialImage.url]
    },

    robots: {
      index: false,
      follow: !nofollow,
      googleBot: {
        index: false,
        follow: !nofollow
      }
    }
  }
}
