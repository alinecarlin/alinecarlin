import { Reveal, motionPresets } from '@alinecarlin/ui'

export function MediaKitSectionHeading({
  eyebrow,
  title,
  description,
  align = 'left'
}: {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}) {
  return (
    <Reveal
      variants={motionPresets.blurReveal}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl leading-tight sm:text-5xl">{title}</h2>
      {description ? <p className="text-muted-foreground mt-5 text-base leading-8">{description}</p> : null}
    </Reveal>
  )
}
