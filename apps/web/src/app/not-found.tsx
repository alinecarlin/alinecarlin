import { StatusPage } from '@/components/status/status-page'
import { notFoundStatusPage } from '@/components/status/status-page-data'
import { createStatusMetadata } from '@/lib/metadata/status-metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createStatusMetadata({
  title: 'Página não encontrada',
  description:
    'A página que você tentou acessar não existe ou foi movida. Volte para a página inicial ou explore o Media Kit da Aline Carlin.',
  path: '/not-found'
})

export default function NotFound() {
  return <StatusPage {...notFoundStatusPage} />
}
