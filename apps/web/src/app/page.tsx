import alineAvatarDark from '@alinecarlin/assets/aline-avatar-dark.png'
import alineAvatarLight from '@alinecarlin/assets/aline-avatar-light.png'
import { ArrowRight, Layers, Mail, Sparkles } from 'lucide-react'
import Image from 'next/image'
import type { ReactNode, SVGProps } from 'react'

const CONTACT_EMAIL = 'contato@alinecarlin.com'

const pillars = [
  {
    label: 'Presença & Imagem',
    description: 'Atuação em frente às câmeras para campanhas, vídeos, marcas e projetos audiovisuais.'
  },
  {
    label: 'Conteúdo & Redes',
    description: 'Criação de conteúdo digital com estética, estratégia, retenção e conexão com público.'
  },
  {
    label: 'Eventos & Comunicação',
    description: 'Coberturas, entrevistas, bastidores, ativações e comunicação em ambientes dinâmicos.'
  }
] as const

const progressItems = [
  {
    value: '01',
    label: 'Media kit'
  },
  {
    value: '02',
    label: 'Portfólio digital'
  },
  {
    value: '03',
    label: 'Presença comercial'
  }
] as const

function IconFrame({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/70 bg-white/70 text-brand-purple shadow-[0_10px_30px_-18px_hsl(var(--brand-purple)/0.45)] backdrop-blur">
      {children}
    </span>
  )
}

function InstagramIcon({ className = 'h-5 w-5', ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" className={className} viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  )
}

export default function Page() {
  const currentYear = new Date().getFullYear()

  return (
    <main id="top" className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_18%,hsl(var(--brand-pink)/0.16),transparent_34%),radial-gradient(circle_at_18%_72%,hsl(var(--brand-cyan)/0.12),transparent_30%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--surface-soft)))]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 -top-56 -z-10 h-136 w-136 rounded-full bg-gradient-brand opacity-10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_18%,hsl(var(--brand-pink)/0.16),transparent_34%),radial-gradient(circle_at_18%_72%,hsl(var(--brand-cyan)/0.12),transparent_30%),linear-gradient(180deg,hsl(var(--background)),hsl(var(--surface-soft)))]"
      />

      <section className="container-page grid min-h-[calc(100svh-104px)] items-center gap-12 pb-12 pt-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:pb-20 lg:pt-10">
        <div className="relative z-10 max-w-2xl animate-fade-up">
          <div className="mb-8 inline-flex max-w-full items-center gap-3 rounded-full border border-border/70 bg-white/70 px-4 py-2 text-xs font-semibold uppercase leading-none tracking-[0.22em] text-foreground/60 shadow-[0_10px_30px_-22px_hsl(var(--foreground)/0.28)] backdrop-blur">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gradient-brand" />
            <span className="truncate">Site em construção</span>
          </div>

          <p className="eyebrow mb-5">Aline Carlin</p>

          <h1 className="max-w-4xl text-5xl leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl xl:text-8xl">
            Uma nova presença digital está sendo <span className="text-gradient-brand italic">criada.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
            O site oficial de Aline Carlin está em desenvolvimento para reunir imagem, comunicação, mídia criativa,
            produção audiovisual e arquitetura em uma experiência mais premium, editorial e estratégica.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn-gradient inline-flex items-center justify-center gap-2">
              <span>Entrar em contato</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </a>

            <a href="#frentes" className="btn-outline-brand inline-flex items-center justify-center">
              Conhecer a proposta
            </a>
          </div>

          <div
            id="status"
            className="scroll-mt-24 mt-12 grid max-w-2xl grid-cols-1 overflow-hidden rounded-2xl border border-border/70 bg-white/65 shadow-[0_18px_55px_-40px_hsl(var(--foreground)/0.35)] backdrop-blur sm:grid-cols-3"
          >
            {progressItems.map(item => (
              <div
                key={item.value}
                className="border-b border-border/70 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:px-6 sm:last:border-r-0"
              >
                <p className="text-gradient-brand text-sm font-bold leading-none">{item.value}</p>
                <p className="mt-2 text-sm font-medium leading-5 text-foreground/70">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-136 animate-fade-up lg:max-w-160">
          <div
            aria-hidden="true"
            className="absolute -left-8 top-16 h-72 w-72 rounded-full bg-gradient-brand opacity-20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-3 top-6 z-0 hidden select-none text-[13rem] font-serif leading-none text-foreground/[0.035] lg:block"
          >
            AC
          </div>

          <div className="relative z-10 rounded-[2.25rem] border border-white/70 bg-white/55 p-3 shadow-[0_35px_100px_-55px_hsl(var(--brand-purple)/0.55)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[linear-gradient(140deg,hsl(var(--foreground)),hsl(234_30%_10%))]">
              <Image
                src={alineAvatarDark}
                alt="Retrato editorial de Aline Carlin"
                width={1024}
                height={1024}
                priority
                className="aspect-[0.94/1] h-auto w-full object-cover object-center"
              />

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-foreground/70 via-foreground/20 to-transparent p-6 sm:p-8">
                <div className="flex items-end justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase leading-none tracking-[0.24em] text-white/70">
                      Em breve
                    </p>
                    <p className="mt-2 font-serif text-2xl leading-tight text-white sm:text-3xl">Media kit oficial</p>
                  </div>

                  <div className="hidden shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold leading-none text-white/85 backdrop-blur sm:block">
                    {currentYear}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-3 z-20 hidden max-w-[calc(100%-1.5rem)] items-center gap-4 rounded-2xl border border-border/70 bg-white/85 p-3 shadow-[0_20px_70px_-40px_hsl(var(--foreground)/0.45)] backdrop-blur-md sm:flex">
            <Image
              src={alineAvatarLight}
              alt="Avatar claro de Aline Carlin"
              width={88}
              height={88}
              className="h-16 w-16 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0 pr-3">
              <p className="truncate font-serif text-lg leading-none">Aline Carlin</p>
              <p className="mt-1 truncate text-xs leading-5 text-muted-foreground">
                Imagem · Conteúdo · Mídia Criativa
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="frentes"
        className="scroll-mt-24 border-y border-border/60 bg-white/45 py-14 backdrop-blur-sm lg:py-18"
      >
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">O que vem por aí</p>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Uma experiência comercial, editorial e estratégica.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar, index) => (
              <article
                key={pillar.label}
                className="group flex h-full flex-col rounded-[1.75rem] border border-border/70 bg-white/70 p-7 shadow-[0_18px_60px_-45px_hsl(var(--foreground)/0.35)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <IconFrame>
                    {index === 0 ? (
                      <Layers className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <Sparkles className="h-5 w-5" aria-hidden="true" />
                    )}
                  </IconFrame>

                  <span className="text-gradient-brand shrink-0 font-serif text-3xl leading-none italic">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-2xl leading-tight text-foreground">{pillar.label}</h3>

                <p className="mt-4 text-sm leading-7 text-muted-foreground">{pillar.description}</p>

                <div className="mt-7 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />

                <p className="mt-5 inline-flex items-center gap-2 text-sm font-semibold leading-none text-brand-purple">
                  <span>Em desenvolvimento</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="container-page scroll-mt-24 py-16 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-4xl bg-gradient-brand-soft blur-xl" />

            <div className="overflow-hidden rounded-4xl border border-border/70 bg-white/70 p-3 shadow-[0_24px_80px_-55px_hsl(var(--foreground)/0.35)]">
              <Image
                src={alineAvatarLight}
                alt="Avatar claro de Aline Carlin"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-[1.45rem] object-cover"
              />
            </div>
          </div>

          <div>
            <p className="eyebrow">Construção intencional</p>

            <h2 className="mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Não é só uma página temporária. É o início de uma{' '}
              <span className="text-gradient-brand italic">presença maior.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">
              Enquanto o site completo é finalizado, esta página apresenta a direção da marca: uma presença digital
              voltada para mídia criativa, frente de câmera, conteúdo, eventos, produção audiovisual e projetos com
              estética, estratégia e conexão com público.
            </p>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border/70 bg-white/70 p-5">
                <p className="text-sm font-semibold leading-none text-foreground">Presença mais premium</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Uma comunicação mais editorial, comercial e preparada para marcas, eventos e projetos digitais.
                </p>
              </div>

              <div className="rounded-2xl border border-border/70 bg-white/70 p-5">
                <p className="text-sm font-semibold leading-none text-foreground">Marca em evolução</p>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  Da presença pessoal ao media kit, com arquitetura como base estética e apoio profissional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="container-page scroll-mt-24 pb-8 lg:pb-12">
        <div className="relative overflow-hidden rounded-4xl bg-gradient-brand p-px shadow-[0_25px_80px_-50px_hsl(var(--brand-purple)/0.55)]">
          <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-foreground px-6 py-8 text-white sm:px-10 lg:px-12 lg:py-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,hsl(var(--brand-pink)/0.32),transparent_30%),radial-gradient(circle_at_90%_60%,hsl(var(--brand-blue)/0.34),transparent_34%)]"
            />

            <div
              aria-hidden="true"
              className="absolute -right-24 -top-20 text-[14rem] font-serif leading-none text-white/[0.035]"
            >
              AC
            </div>

            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase leading-none tracking-[0.24em] text-white/60">Contato</p>

                <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                  Vamos criar algo que realmente apareça.
                </h2>

                <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
                  O contato está aberto para marcas, eventos, campanhas, entrevistas, cobertura, produção audiovisual,
                  conteúdo digital, colaborações e oportunidades profissionais.
                </p>
              </div>

              <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold leading-none text-foreground transition hover:-translate-y-0.5"
                >
                  <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
                  <span>Enviar e-mail</span>
                </a>

                <a
                  href="https://www.instagram.com/aline.carlin"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold leading-none text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  <InstagramIcon className="h-5 w-5 shrink-0" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
