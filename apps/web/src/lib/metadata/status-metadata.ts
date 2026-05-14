import type { Metadata } from 'next'

type StatusMetadataInput = {
  title: string
  description: string
  path: string
  nofollow?: boolean
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
      url: path
    },

    twitter: {
      title: `${title} | Aline Carlin`,
      description
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
