import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Aline Carlin | Site em construção',
    template: '%s | Aline Carlin'
  },
  description:
    'O novo site pessoal de Aline Carlin está em construção. Arquitetura, conteúdo, imagem e presença digital em uma experiência premium.',
  applicationName: 'Aline Carlin',
  authors: [{ name: 'Aline Carlin' }],
  creator: 'Aline Carlin',
  publisher: 'Aline Carlin',
  keywords: [
    'Aline Carlin',
    'arquitetura',
    'portfólio de arquitetura',
    'marca pessoal',
    'influenciadora',
    'modelo',
    'conteúdo digital',
    'Linnea'
  ],
  metadataBase: new URL('https://alinecarlin.com'),
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Aline Carlin | Site em construção',
    description: 'Arquitetura, conteúdo, imagem e presença digital em uma experiência premium.',
    url: '/',
    siteName: 'Aline Carlin',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aline Carlin | Site em construção',
    description: 'Arquitetura, conteúdo, imagem e presença digital em uma experiência premium.'
  },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false
    }
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
