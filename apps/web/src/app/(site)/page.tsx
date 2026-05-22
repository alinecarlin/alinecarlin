import { HomePage } from '@/features/home/components/home-page'
import { homeMock } from '@/features/home/data/home.mock'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aline Carlin — Comunicadora Criativa e Produtora Audiovisual',
  description:
    'Presença de marca, conteúdo digital, eventos, entrevistas e produção audiovisual para campanhas, marcas e projetos digitais.'
}

export default function Page() {
  return <HomePage initialData={homeMock} />
}
