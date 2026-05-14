import { StatusPage } from '@/components/status/status-page'
import { maintenanceStatusPage } from '@/components/status/status-page-data'
import { createStatusMetadata } from '@/lib/metadata/status-metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = createStatusMetadata({
  title: 'Em manutenção',
  description:
    'Algumas áreas do site estão passando por atualização para manter a apresentação da marca mais clara, fluida e profissional.',
  path: '/maintenance'
})

export default function MaintenancePage() {
  return <StatusPage {...maintenanceStatusPage} />
}
