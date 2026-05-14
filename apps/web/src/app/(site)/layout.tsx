import { Footer } from '@/components/site/footer'
import { Header } from '@/components/site/header'
import type { ReactNode } from 'react'

export default function SiteLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
