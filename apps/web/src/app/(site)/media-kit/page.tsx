import { MediaKitPage } from '@/features/media-kit/components/media-kit-page'
import { mediaKitMock } from '@/features/media-kit/data/media-kit.mock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aline Carlin — Media Kit',
  description:
    'Presença de marca, comunicação em vídeo, conteúdo digital, eventos, entrevistas e produção audiovisual para campanhas e projetos digitais.'
}

export default function Page() {
  return <MediaKitPage initialData={mediaKitMock} />
}
