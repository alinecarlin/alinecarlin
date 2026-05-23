import { cn } from '#lib/utils'
import * as React from 'react'

function VisualFrame({
  className,
  glowClassName,
  contentClassName,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  glowClassName?: string
  contentClassName?: string
}) {
  return (
    <div className={cn('relative isolate', className)} {...props}>
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -inset-12 -z-10 rounded-[inherit] bg-[radial-gradient(circle_at_28%_18%,hsl(var(--brand-pink)/0.48),transparent_38%),radial-gradient(circle_at_76%_80%,hsl(var(--brand-cyan)/0.42),transparent_42%),linear-gradient(135deg,hsl(var(--brand-purple)/0.32),hsl(var(--brand-orange)/0.18))] opacity-90 blur-[56px] sm:-inset-16',
          glowClassName
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -inset-5 -z-10 rounded-[inherit] bg-[linear-gradient(135deg,hsl(var(--brand-pink)/0.22),hsl(var(--brand-cyan)/0.18)_52%,hsl(var(--brand-purple)/0.2))] opacity-70 blur-2xl sm:-inset-7',
          glowClassName
        )}
      />
      <div className={cn('relative z-10 rounded-[inherit]', contentClassName)}>{children}</div>
    </div>
  )
}

export { VisualFrame }
