'use client'

import logo from '@alinecarlin/assets/logo.svg'
import { Button, cn } from '@alinecarlin/ui'
import { ArrowRight, RotateCw } from 'lucide-react'
import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import type { CSSProperties } from 'react'

type StatusImageStyle = CSSProperties &
  Record<
    | '--status-image'
    | '--status-image-position'
    | '--status-image-position-lg'
    | '--status-image-size'
    | '--status-image-size-lg',
    string
  >

type LinkAction = {
  label: string
  href: string
  ariaLabel?: string
}

type ButtonAction = {
  label: string
  ariaLabel?: string
  onClick?: () => void
  reload?: boolean
}

export type StatusAction = LinkAction | ButtonAction

export type StatusPageProps = {
  eyebrow: string
  title: string
  description: string
  image: StaticImageData
  imageAlt: string
  primaryAction: StatusAction
  secondaryAction?: StatusAction
  variant?: 'maintenance' | 'not-found' | 'restricted-access' | 'server-error'
  imageBackgroundPosition?: string
  imageDesktopBackgroundPosition?: string
  imageBackgroundSize?: string
  imageDesktopBackgroundSize?: string
  imageClassName?: string
}

const variantBackgrounds = {
  maintenance:
    'bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--surface-warm))_45%,hsl(var(--surface-soft))_100%)]',
  'not-found':
    'bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--surface-soft))_50%,hsl(var(--surface-warm))_100%)]',
  'restricted-access':
    'bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--secondary))_44%,hsl(var(--surface-soft))_100%)]',
  'server-error':
    'bg-[linear-gradient(135deg,hsl(var(--background))_0%,hsl(var(--surface-warm))_38%,hsl(var(--muted))_100%)]'
} as const

function StatusPageAction({ action, tone }: { action: StatusAction; tone: 'primary' | 'secondary' }) {
  const router = useRouter()
  const isPrimary = tone === 'primary'
  const isRetryAction = !('href' in action) && Boolean(action.reload || action.onClick)
  const className = cn(
    'h-12 min-w-40 rounded-full px-6! text-sm font-semibold transition-all sm:w-auto',
    isPrimary
      ? 'bg-gradient-brand text-white shadow-(--shadow-soft) hover:shadow-(--shadow-glow)'
      : 'border-border/70 text-foreground hover:bg-muted bg-white/75 shadow-[0_12px_35px_-28px_hsl(var(--foreground)/0.32)] backdrop-blur'
  )

  const content = (
    <>
      <span>{action.label}</span>
      {isRetryAction ? <RotateCw data-icon="inline-end" aria-hidden="true" /> : null}
      {isPrimary && !isRetryAction ? <ArrowRight data-icon="inline-end" aria-hidden="true" /> : null}
    </>
  )

  if ('href' in action) {
    return (
      <Button asChild variant={isPrimary ? 'default' : 'outline'} size="lg" className={className}>
        <Link href={action.href} aria-label={action.ariaLabel}>
          {content}
        </Link>
      </Button>
    )
  }

  return (
    <Button
      type="button"
      variant={isPrimary ? 'default' : 'outline'}
      size="lg"
      className={className}
      aria-label={action.ariaLabel}
      onClick={() => {
        if (action.onClick) {
          action.onClick()
          return
        }

        if (action.reload) {
          router.refresh()
        }
      }}
    >
      {content}
    </Button>
  )
}

export function StatusPage({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
  variant = 'not-found',
  imageBackgroundPosition = 'center bottom',
  imageDesktopBackgroundPosition = 'right bottom',
  imageBackgroundSize = 'clamp(34rem, 160vw, 64rem) auto',
  imageDesktopBackgroundSize = 'contain',
  imageClassName
}: StatusPageProps) {
  const imageBackgroundStyle: StatusImageStyle = {
    '--status-image': `url("${image.src}")`,
    '--status-image-position': imageBackgroundPosition,
    '--status-image-position-lg': imageDesktopBackgroundPosition,
    '--status-image-size': imageBackgroundSize,
    '--status-image-size-lg': imageDesktopBackgroundSize
  }

  return (
    <main
      className={cn(
        'text-foreground relative isolate flex min-h-screen flex-col overflow-hidden',
        variantBackgrounds[variant]
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(hsl(var(--foreground)/0.12)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.12)_1px,transparent_1px)] bg-size-[72px_72px] opacity-[0.12]"
      />
      <div
        role="img"
        aria-label={imageAlt}
        className={cn(
          'pointer-events-none absolute inset-x-0 bottom-0 z-1 h-dvh min-h-124 [background-image:var(--status-image)] bg-size-(--status-image-size) bg-position-(--status-image-position) bg-no-repeat drop-shadow-[0_32px_48px_hsl(var(--foreground)/0.16)] select-none sm:min-h-144 lg:inset-y-0 lg:h-auto lg:bg-size-(--status-image-size-lg) lg:bg-position-(--status-image-position-lg)',
          imageClassName
        )}
        style={imageBackgroundStyle}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-2 bg-[linear-gradient(180deg,hsl(var(--background)/0.82)_0%,hsl(var(--background)/0.58)_32%,hsl(var(--background)/0.28)_58%,hsl(var(--background)/0.04)_100%)] lg:bg-[linear-gradient(90deg,hsl(var(--background)/0.78)_0%,hsl(var(--background)/0.52)_30%,hsl(var(--background)/0.22)_52%,transparent_78%)]"
      />
      <div aria-hidden="true" className="bg-gradient-brand absolute inset-x-0 top-0 z-4 h-1 opacity-85" />
      <div
        aria-hidden="true"
        className="text-foreground/[0.035] pointer-events-none absolute right-4 bottom-4 z-3 hidden font-serif text-[18rem] leading-none select-none lg:block"
      >
        AC
      </div>

      <header className="container-page relative z-10 flex items-center pt-6 lg:pt-8">
        <Link href="/" aria-label="Ir para a página inicial de Aline Carlin" className="inline-flex w-fit">
          <Image src={logo} alt="Aline Carlin" width={180} height={48} priority className="h-12 w-auto" />
        </Link>
      </header>

      <section className="container-page relative z-10 flex flex-1 items-start pt-[clamp(6rem,10vh,9rem)] pb-14 lg:items-center lg:pt-8 lg:pb-16">
        <div className="flex w-full max-w-xl flex-col items-start text-left">
          <p className="eyebrow">{eyebrow}</p>

          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.02] tracking-normal sm:text-5xl lg:text-6xl">{title}</h1>

          <p className="text-muted-foreground mt-5 max-w-xl text-base leading-8 sm:text-lg">{description}</p>

          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
            <StatusPageAction action={primaryAction} tone="primary" />
            {secondaryAction ? <StatusPageAction action={secondaryAction} tone="secondary" /> : null}
          </div>
        </div>
      </section>
    </main>
  )
}
