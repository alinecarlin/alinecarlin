import { StatusPage } from '@/components/status/status-page'
import { restrictedAccessStatusPage } from '@/components/status/status-page-data'
import { createStatusMetadata } from '@/lib/metadata/status-metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createStatusMetadata({
  title: 'Acesso restrito',
  description:
    'O conteúdo que você tentou acessar pode ser privado, estar em revisão ou exigir uma permissão específica.',
  path: '/restricted-access'
})

export default function RestrictedAccessPage() {
  return <StatusPage {...restrictedAccessStatusPage} />
}
