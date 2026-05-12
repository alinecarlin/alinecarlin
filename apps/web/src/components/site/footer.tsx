import logo from '@alinecarlin/assets/logo.svg'
import { ArrowRight, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { SVGProps } from 'react'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/media-kit', label: 'Media Kit' },
  { href: '/arquitetura', label: 'Arquitetura' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' }
] as const

function InstagramIcon({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border/60 bg-linear-to-b from-background to-muted/40">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" aria-label="Ir para a página inicial de Aline Carlin" className="mb-4 inline-flex w-fit">
              <Image src={logo} alt="Aline Carlin" width={210} height={56} className="h-14 w-auto" />
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              Presença criativa para marcas, conteúdos, eventos e projetos visuais. Comunicação, imagem e repertório
              estético em um só lugar.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navegação
            </h4>

            <ul className="space-y-2 text-sm">
              {nav.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Contato
            </h4>

            <Link
              href="/contato"
              className="inline-flex items-center gap-2 text-sm font-medium text-gradient transition-all hover:gap-3"
            >
              Iniciar uma conversa
              <ArrowRight className="size-4" />
            </Link>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/alinecarlin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Aline Carlin"
                className="flex size-10 items-center justify-center rounded-full border border-border transition-all hover:border-transparent hover:gradient-cta hover:text-white"
              >
                <InstagramIcon />
              </a>

              <Link
                href="/contato"
                aria-label="Contato por e-mail"
                className="flex size-10 items-center justify-center rounded-full border border-border transition-all hover:border-transparent hover:gradient-cta hover:text-white"
              >
                <Mail className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Aline Carlin. Todos os direitos reservados.</p>
          <p>Presença criativa · Comunicação · Arquitetura</p>
        </div>
      </div>
    </footer>
  )
}
