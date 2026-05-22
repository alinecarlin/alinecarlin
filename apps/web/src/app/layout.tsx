import './globals.css'
import { ReactQueryProvider } from '@/components/providers/react-query-provider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Aline Carlin | Mídia Criativa, Presença Digital e Comunicação',
    template: '%s | Aline Carlin'
  },

  description:
    'Aline Carlin é criadora, comunicadora e profissional de mídia criativa, com atuação em presença digital, produção audiovisual, eventos, campanhas e arquitetura como repertório estético complementar.',

  applicationName: 'Aline Carlin',

  authors: [{ name: 'Aline Carlin' }],

  creator: 'Aline Carlin',

  publisher: 'Aline Carlin',

  keywords: [
    'Aline Carlin',
    'mídia criativa',
    'presença digital',
    'comunicação digital',
    'produção audiovisual',
    'criadora de conteúdo',
    'presença de marca',
    'eventos',
    'campanhas digitais',
    'media kit',
    'portfólio criativo',
    'arquitetura',
    'portfólio de arquitetura'
  ],

  metadataBase: new URL('https://alinecarlin.com'),

  alternates: {
    canonical: '/'
  },

  openGraph: {
    title: 'Aline Carlin | Mídia Criativa, Presença Digital e Comunicação',
    description:
      'Criadora e comunicadora com atuação em mídia criativa, produção audiovisual, eventos, campanhas digitais e arquitetura como repertório estético complementar.',
    url: '/',
    siteName: 'Aline Carlin',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Aline Carlin — Mídia Criativa, Presença Digital e Comunicação'
      }
    ]
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Aline Carlin | Mídia Criativa, Presença Digital e Comunicação',
    description:
      'Criadora e comunicadora com atuação em mídia criativa, produção audiovisual, eventos, campanhas digitais e presença de marca.',
    images: ['/og-image.webp']
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  )
}
