#!/usr/bin/env python3
"""Scaffold a Next app that follows this repository's apps/web pattern."""

from __future__ import annotations

import argparse
import json
import re
import shutil
from pathlib import Path


DEPENDENCIES = {
    "@alinecarlin/assets": "workspace:*",
    "@alinecarlin/ui": "workspace:*",
    "@tanstack/react-query": "^5.100.11",
    "framer-motion": "^12.39.0",
    "lucide-react": "^1.14.0",
    "next": "16.2.4",
    "react": "19.2.4",
    "react-dom": "19.2.4",
    "shadcn": "^4.7.0",
    "tw-animate-css": "^1.4.0",
}

DEV_DEPENDENCIES = {
    "@alinecarlin/config": "workspace:*",
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "tailwindcss": "^4",
}


def kebab_case(value: str) -> str:
    value = value.strip().lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-{2,}", "-", value).strip("-")
    return value


def title_from_name(name: str) -> str:
    return " ".join(part.capitalize() for part in name.split("-"))


def write_text(path: Path, content: str) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(content.strip() + "\n", encoding="utf-8")


def write_json(path: Path, data: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def package_json(app_name: str) -> dict:
    return {
        "name": app_name,
        "version": "0.1.0",
        "private": True,
        "scripts": {
            "dev": "next dev",
            "build": "next build",
            "start": "next start",
            "lint": "eslint --fix",
            "lint:check": "eslint",
            "typecheck": "tsc --noEmit",
        },
        "dependencies": DEPENDENCIES,
        "devDependencies": DEV_DEPENDENCIES,
    }


def update_root_scripts(root: Path, app_name: str) -> None:
    package_path = root / "package.json"
    if not package_path.exists():
        return

    data = json.loads(package_path.read_text(encoding="utf-8"))
    scripts = data.setdefault("scripts", {})
    additions = {
        f"dev:{app_name}": f"pnpm --dir apps/{app_name} dev",
        f"build:{app_name}": f"pnpm --dir apps/{app_name} build",
        f"start:{app_name}": f"pnpm --dir apps/{app_name} start",
        f"lint:{app_name}": f"pnpm --dir apps/{app_name} lint",
        f"lint:check:{app_name}": f"pnpm --dir apps/{app_name} lint:check",
        f"typecheck:{app_name}": f"pnpm --dir apps/{app_name} typecheck",
    }

    changed = False
    for key, value in additions.items():
        if key not in scripts:
            scripts[key] = value
            changed = True

    if changed:
        write_json(package_path, data)


def scaffold(root: Path, app_name: str, display_name: str, description: str, update_scripts: bool, force: bool) -> Path:
    app_dir = root / "apps" / app_name
    if app_dir.exists():
        if not force:
            raise SystemExit(f"Refusing to overwrite existing app: {app_dir}")
        shutil.rmtree(app_dir)

    write_json(app_dir / "package.json", package_json(app_name))
    write_json(
        app_dir / "tsconfig.json",
        {
            "extends": "@alinecarlin/config/typescript/next",
            "compilerOptions": {"paths": {"@/*": ["./src/*"]}},
            "include": [
                "next-env.d.ts",
                "**/*.ts",
                "**/*.tsx",
                ".next/types/**/*.ts",
                ".next/dev/types/**/*.ts",
                "**/*.mts",
            ],
            "exclude": ["node_modules"],
        },
    )

    write_text(
        app_dir / "eslint.config.mjs",
        """
import nextConfig from '@alinecarlin/config/eslint/next'

export default nextConfig
""",
    )
    write_text(
        app_dir / "next.config.ts",
        """
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@alinecarlin/ui', '@alinecarlin/assets']
}

export default nextConfig
""",
    )
    write_text(
        app_dir / "postcss.config.mjs",
        """
const config = {
  plugins: {
    '@tailwindcss/postcss': {}
  }
}

export default config
""",
    )
    write_text(
        app_dir / "next-env.d.ts",
        """
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited.
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.
""",
    )

    write_text(
        app_dir / "src/app/globals.css",
        """
@import "tailwindcss";
@import "tw-animate-css";
@import "shadcn/tailwind.css";

@source "../../../../packages/ui/src/";

@import "@alinecarlin/ui/styles/globals.css";

@layer base {
  :root {
    --app-font-sans: "Inter", system-ui, sans-serif;

    --background: 30 30% 99%;
    --foreground: 230 30% 12%;

    --card: 0 0% 100%;
    --card-foreground: 230 30% 12%;

    --popover: 0 0% 100%;
    --popover-foreground: 230 30% 12%;

    --primary: 330 85% 56%;
    --primary-foreground: 0 0% 100%;

    --secondary: 280 35% 96%;
    --secondary-foreground: 230 30% 12%;

    --muted: 320 25% 96%;
    --muted-foreground: 230 12% 45%;

    --accent: 280 60% 60%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 100%;

    --border: 320 25% 92%;
    --input: 320 25% 92%;
    --ring: 330 85% 56%;

    --radius: 1rem;
    --shadow-soft: 0 10px 30px -12px hsl(330 60% 40% / 0.18);
  }
}}
""",
    )

    write_text(
        app_dir / "src/components/providers/react-query-provider.tsx",
        """
'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState, type ReactNode } from 'react'

export function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5,
            gcTime: 1000 * 60 * 30,
            refetchOnWindowFocus: false,
            refetchOnReconnect: true,
            retry: 1
          }
        }
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
""",
    )

    write_text(
        app_dir / "src/app/layout.tsx",
        f"""
import './globals.css'
import {{ ReactQueryProvider }} from '@/components/providers/react-query-provider'
import type {{ Metadata }} from 'next'

export const metadata: Metadata = {{
  title: {{
    default: '{display_name}',
    template: `%s | {display_name}`
  }},
  description: '{description}',
  applicationName: '{display_name}',
  authors: [{{ name: '{display_name}' }}],
  creator: '{display_name}',
  publisher: '{display_name}',
  robots: {{
    index: true,
    follow: true
  }}
}}

export default function RootLayout({{ children }}: Readonly<{{ children: React.ReactNode }}>) {{
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="flex min-h-full flex-col">
        <ReactQueryProvider>{{children}}</ReactQueryProvider>
      </body>
    </html>
  )
}}
""",
    )

    write_text(
        app_dir / "src/app/error.tsx",
        """
'use client'

import { Button } from '@alinecarlin/ui'

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-muted-foreground text-sm font-medium">Erro</p>
        <h1 className="mt-3 text-3xl font-semibold">Nao foi possivel carregar esta pagina.</h1>
        <Button type="button" onClick={reset} className="mt-6">
          Tentar novamente
        </Button>
      </div>
    </main>
  )
}
""",
    )
    write_text(
        app_dir / "src/app/not-found.tsx",
        """
import { Button } from '@alinecarlin/ui'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="bg-background text-foreground flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-muted-foreground text-sm font-medium">404</p>
        <h1 className="mt-3 text-3xl font-semibold">Pagina nao encontrada.</h1>
        <Button asChild className="mt-6">
          <Link href="/">Voltar ao inicio</Link>
        </Button>
      </div>
    </main>
  )
}
""",
    )

    write_text(
        app_dir / "src/app/(site)/layout.tsx",
        """
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
""",
    )
    write_text(
        app_dir / "src/app/(site)/page.tsx",
        f"""
import {{ HomePage }} from '@/features/home/components/home-page'
import {{ homeMock }} from '@/features/home/data/home.mock'
import type {{ Metadata }} from 'next'

export const metadata: Metadata = {{
  title: '{display_name}',
  description: '{description}'
}}

export default function Page() {{
  return <HomePage initialData={{homeMock}} />
}}
""",
    )

    write_text(
        app_dir / "src/components/site/header.tsx",
        f"""
'use client'

import logo from '@alinecarlin/assets/logo.svg'
import {{ Button, cn }} from '@alinecarlin/ui'
import {{ Menu }} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {{ usePathname }} from 'next/navigation'

const nav = [
  {{ href: '/', label: 'Home' }}
] as const

export function Header() {{
  const pathname = usePathname()

  return (
    <header className="border-border/60 bg-background/75 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" aria-label="Ir para a pagina inicial" className="flex items-center gap-2">
          <Image src={{logo}} alt="{display_name}" width={{180}} height={{48}} priority className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Menu principal">
          {{nav.map(item => (
            <Link
              key={{item.href}}
              href={{item.href}}
              aria-current={{pathname === item.href ? 'page' : undefined}}
              className={{cn(
                'text-sm font-medium transition-colors',
                pathname === item.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              )}}
            >
              {{item.label}}
            </Link>
          ))}}
        </nav>

        <Button variant="ghost" size="icon-lg" className="md:hidden" aria-label="Abrir menu">
          <Menu className="size-6" />
        </Button>
      </div>
    </header>
  )
}}
""",
    )
    write_text(
        app_dir / "src/components/site/footer.tsx",
        f"""
export function Footer() {{
  return (
    <footer className="border-border/60 bg-background border-t">
      <div className="container-page text-muted-foreground flex min-h-20 items-center justify-between py-6 text-sm">
        <span>{display_name}</span>
        <span>Next app</span>
      </div>
    </footer>
  )
}}
""",
    )

    write_text(
        app_dir / "src/features/home/types/home.types.ts",
        """
export type HomeData = {
  hero: {
    eyebrow: string
    title: string
    description: string
    primaryAction: {
      label: string
      href: string
    }
  }
}
""",
    )
    write_text(
        app_dir / "src/features/home/data/home.mock.ts",
        f"""
import type {{ HomeData }} from '../types/home.types'

export const homeMock: HomeData = {{
  hero: {{
    eyebrow: '{display_name}',
    title: 'Novo app Next no padrao do monorepo',
    description: '{description}',
    primaryAction: {{
      label: 'Comecar',
      href: '/'
    }}
  }}
}}
""",
    )
    write_text(
        app_dir / "src/features/home/api/get-home-data.ts",
        """
import { homeMock } from '../data/home.mock'
import type { HomeData } from '../types/home.types'

export async function getHomeData(): Promise<HomeData> {
  return homeMock
}
""",
    )
    write_text(
        app_dir / "src/features/home/hooks/use-home-data.ts",
        """
'use client'

import { useQuery } from '@tanstack/react-query'

import { getHomeData } from '../api/get-home-data'
import { homeMock } from '../data/home.mock'
import type { HomeData } from '../types/home.types'

export const HOME_QUERY_KEY = ['home'] as const

export function useHomeData(initialData: HomeData = homeMock) {
  return useQuery({
    queryKey: HOME_QUERY_KEY,
    queryFn: getHomeData,
    initialData
  })
}
""",
    )
    write_text(
        app_dir / "src/features/home/components/home-page.tsx",
        """
'use client'

import { Button } from '@alinecarlin/ui'
import Link from 'next/link'

import { useHomeData } from '../hooks/use-home-data'
import type { HomeData } from '../types/home.types'

export function HomePage({ initialData }: { initialData: HomeData }) {
  const { data } = useHomeData(initialData)

  return (
    <main className="bg-background text-foreground min-h-screen">
      <section className="container-page flex min-h-[calc(100vh-10rem)] items-center py-20">
        <div className="max-w-3xl">
          <p className="text-primary text-sm font-semibold uppercase tracking-wide">{data.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-normal md:text-6xl">{data.hero.title}</h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">{data.hero.description}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href={data.hero.primaryAction.href}>{data.hero.primaryAction.label}</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
""",
    )

    if update_scripts:
        update_root_scripts(root, app_name)

    return app_dir


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--name", required=True, help="App folder/package name under apps/")
    parser.add_argument("--display-name", help="Human-readable application name")
    parser.add_argument("--description", default="A Next.js application scaffolded from the apps/web pattern.")
    parser.add_argument("--root", default=".", help="Repository root")
    parser.add_argument("--update-root-scripts", action="store_true", help="Add app-specific scripts to root package.json")
    parser.add_argument("--force", action="store_true", help="Overwrite an existing generated app directory")
    args = parser.parse_args()

    app_name = kebab_case(args.name)
    if not app_name:
        raise SystemExit("App name must contain at least one letter or digit.")

    display_name = args.display_name or title_from_name(app_name)
    app_dir = scaffold(
        root=Path(args.root).resolve(),
        app_name=app_name,
        display_name=display_name,
        description=args.description,
        update_scripts=args.update_root_scripts,
        force=args.force,
    )
    print(f"Created {app_dir}")


if __name__ == "__main__":
    main()
