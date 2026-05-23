import { Button, cn } from '@alinecarlin/ui'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import type { MediaKitCta } from '../types/media-kit.types'

export function MediaKitAction({ cta, className }: { cta: MediaKitCta; className?: string }) {
  const isPrimary = cta.variant === 'primary'

  return (
    <Button
      asChild
      size="lg"
      variant={isPrimary ? 'default' : 'outline'}
      className={cn(
        'h-12 w-full rounded-full px-6! text-sm font-semibold sm:h-13 sm:w-auto sm:px-7!',
        isPrimary
          ? 'bg-gradient-brand text-white shadow-(--shadow-soft) hover:shadow-(--shadow-glow)'
          : 'border-border/70 text-foreground hover:bg-muted bg-white/72 shadow-[0_14px_40px_-30px_hsl(var(--foreground)/0.36)] backdrop-blur',
        className
      )}
    >
      <Link href={cta.href} aria-label={cta.ariaLabel}>
        <span>{cta.label}</span>
        <ArrowRight data-icon="inline-end" aria-hidden="true" />
      </Link>
    </Button>
  )
}
