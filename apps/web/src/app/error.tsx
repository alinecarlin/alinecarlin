'use client'

import { StatusPage } from '@/components/status/status-page'
import { serverErrorStatusPage } from '@/components/status/status-page-data'
import { useEffect } from 'react'

export default function ErrorPage({
  error,
  unstable_retry
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <>
      <title>Erro no servidor | Aline Carlin</title>
      <StatusPage
        {...serverErrorStatusPage}
        primaryAction={{
          label: 'Tentar novamente',
          onClick: unstable_retry
        }}
      />
    </>
  )
}
