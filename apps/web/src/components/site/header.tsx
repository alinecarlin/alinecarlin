'use client'

import logo from '@alinecarlin/assets/logo.svg'
import { Button } from '@alinecarlin/ui/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@alinecarlin/ui/components/ui/sheet'
import { cn } from '@alinecarlin/ui/lib/utils'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/media-kit', label: 'Media Kit' },
  { href: '/arquitetura', label: 'Arquitetura' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' }
] as const

function isActivePath(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="Ir para a página inicial de Aline Carlin" className="flex items-center gap-2">
          <Image src={logo} alt="Aline Carlin" width={180} height={48} priority className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Menu principal">
          {nav.map(item => {
            const active = isActivePath(pathname, item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'group relative py-2 text-sm font-medium transition-colors',
                  active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {item.label}

                <span
                  className={cn(
                    'bg-gradient-brand absolute inset-x-0 -bottom-0.5 h-0.5 origin-left rounded-full transition-transform',
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            size="lg"
            className="bg-gradient-brand rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-(--shadow-soft) transition-shadow hover:shadow-(--shadow-glow)"
          >
            <Link href="/contato">Falar com Aline</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="-mr-2 lg:hidden" aria-label="Abrir menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>

          <SheetContent
            side="right"
            className="w-[88vw] max-w-sm border-l border-border/70 bg-background/90 px-0 backdrop-blur-2xl"
          >
            <SheetHeader className="border-b border-border/60 px-6 pb-5 text-left">
              <SheetTitle asChild>
                <Link href="/" className="inline-flex w-fit items-center">
                  <Image src={logo} alt="Aline Carlin" width={180} height={48} className="h-12 w-auto" />
                </Link>
              </SheetTitle>
            </SheetHeader>

            <div className="flex h-full flex-col px-4 py-6">
              <nav className="flex flex-col gap-2" aria-label="Menu mobile">
                {nav.map(item => {
                  const active = isActivePath(pathname, item.href)

                  return (
                    <SheetClose asChild key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'rounded-2xl px-4 py-3 text-base font-medium transition-colors',
                          active
                            ? 'bg-accent text-foreground'
                            : 'text-muted-foreground hover:bg-accent/70 hover:text-foreground'
                        )}
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  )
                })}
              </nav>

              <div className="mt-6 rounded-3xl border border-border/70 bg-card/70 p-4 shadow-(--shadow-soft)">
                <p className="text-sm font-medium text-foreground">
                  Presença, mídia criativa e comunicação visual estratégica.
                </p>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Media kit, campanhas, eventos, audiovisual e oportunidades comerciais.
                </p>

                <SheetClose asChild>
                  <Button
                    asChild
                    className="bg-gradient-brand mt-5 w-full rounded-full text-white shadow-(--shadow-soft) hover:shadow-(--shadow-glow)"
                  >
                    <Link href="/contato">Falar com Aline</Link>
                  </Button>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
