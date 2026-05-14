import maintenanceBg from '@alinecarlin/assets/maintenance-bg.png'
import notFoundBg from '@alinecarlin/assets/not-found-bg.png'
import restrictedAccessBg from '@alinecarlin/assets/restricted-access-bg.png'
import serverErrorBg from '@alinecarlin/assets/server-error-bg.png'

import type { StatusPageProps } from './status-page'

export const notFoundStatusPage = {
  eyebrow: '404',
  title: 'Página não encontrada',
  description:
    'O caminho que você tentou acessar não existe ou foi movido. Volte para a página inicial ou explore o Media Kit da Aline.',
  image: notFoundBg,
  imageAlt:
    'Ilustração editorial de Aline Carlin procurando uma página com uma lupa, cards de navegação e aviso de arquivo não encontrado.',
  primaryAction: {
    label: 'Voltar para Home',
    href: '/'
  },
  secondaryAction: {
    label: 'Ver Media Kit',
    href: '/media-kit'
  },
  variant: 'not-found',
  imageClassName: 'opacity-95'
} satisfies StatusPageProps

export const maintenanceStatusPage = {
  eyebrow: 'Em manutenção',
  title: 'Estamos ajustando a experiência',
  description:
    'Algumas áreas do site estão passando por atualização para manter a apresentação da marca mais clara, fluida e profissional.',
  image: maintenanceBg,
  imageAlt:
    'Ilustração editorial de Aline Carlin em frente a um laptop com elementos de manutenção e ajuste técnico ao redor.',
  primaryAction: {
    label: 'Voltar para Home',
    href: '/'
  },
  secondaryAction: {
    label: 'Entrar em contato',
    href: '/contato'
  },
  variant: 'maintenance',
  imageClassName: 'opacity-95'
} satisfies StatusPageProps

export const restrictedAccessStatusPage = {
  eyebrow: 'Acesso restrito',
  title: 'Esta área não está disponível',
  description:
    'O conteúdo que você tentou acessar pode ser privado, estar em revisão ou exigir uma permissão específica.',
  image: restrictedAccessBg,
  imageAlt:
    'Ilustração editorial de Aline Carlin sinalizando pausa, com escudo, cadeado e elementos de acesso restrito.',
  primaryAction: {
    label: 'Voltar para Home',
    href: '/'
  },
  secondaryAction: {
    label: 'Falar com Aline',
    href: '/contato'
  },
  variant: 'restricted-access',
  imageClassName: 'opacity-95'
} satisfies StatusPageProps

export const serverErrorStatusPage = {
  eyebrow: 'Erro no servidor',
  title: 'Algo saiu do fluxo esperado',
  description: 'Não conseguimos carregar esta página agora. Tente novamente ou volte para a página inicial.',
  image: serverErrorBg,
  imageAlt:
    'Ilustração editorial de Aline Carlin preocupada segurando um tablet, com servidores e alerta técnico ao fundo.',
  primaryAction: {
    label: 'Tentar novamente',
    reload: true
  },
  secondaryAction: {
    label: 'Voltar para Home',
    href: '/'
  },
  variant: 'server-error',
  imageClassName: 'opacity-95'
} satisfies StatusPageProps
