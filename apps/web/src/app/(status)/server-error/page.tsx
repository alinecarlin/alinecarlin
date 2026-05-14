import { StatusPage } from '@/components/status/status-page'
import { serverErrorStatusPage } from '@/components/status/status-page-data'
import { createStatusMetadata } from '@/lib/metadata/status-metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createStatusMetadata({
  title: 'Erro no servidor',
  description: 'Não conseguimos carregar esta página agora. Tente novamente ou volte para a página inicial.',
  path: '/server-error'
})

export default function ServerErrorPage() {
  return <StatusPage {...serverErrorStatusPage} />
}
