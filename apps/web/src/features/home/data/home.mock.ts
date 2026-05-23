import alineAvatarDark from '@alinecarlin/assets/aline-avatar-dark.webp'
import alineAvatarLight from '@alinecarlin/assets/aline-avatar-light.webp'

import type { HomeData } from '../types/home.types'

export const homeMock = {
  hero: {
    eyebrow: 'Comunicação · Imagem · Audiovisual',
    title: 'Aline Carlin',
    description:
      'Comunicação, imagem e produção audiovisual para marcas, eventos e projetos digitais. Presença em câmera, criação de conteúdo, entrevistas, campanhas e bastidores com estética, clareza e intenção.',
    image: {
      src: alineAvatarDark,
      alt: 'Retrato editorial de Aline Carlin com presença de câmera'
    },
    secondaryImage: {
      src: alineAvatarLight,
      alt: 'Retrato claro de Aline Carlin em composição editorial'
    },
    ctas: [
      {
        label: 'Ver Media Kit',
        href: '/media-kit',
        variant: 'primary',
        ariaLabel: 'Ver Media Kit de Aline Carlin'
      },
      {
        label: 'Entrar em contato',
        href: '/contato',
        variant: 'secondary',
        ariaLabel: 'Entrar em contato com Aline Carlin'
      }
    ]
  },
  stats: [
    {
      value: '01',
      label: 'Campanhas e ativações'
    },
    {
      value: '02',
      label: 'Entrevistas e eventos'
    },
    {
      value: '03',
      label: 'Bastidores e direção de conteúdo'
    }
  ],
  presenceAreas: [
    {
      title: 'Presença & Imagem',
      description: 'Participação em campanhas, vídeos editoriais, fotos comerciais e ações com rosto de marca.',
      icon: 'image'
    },
    {
      title: 'Conteúdo & Redes',
      description: 'Roteiros curtos, reels, stories, bastidores e publicações com leitura estética e objetivo claro.',
      icon: 'network'
    },
    {
      title: 'Eventos & Comunicação',
      description: 'Coberturas, entrevistas, ativações e presença em experiências presenciais ou híbridas.',
      icon: 'mic'
    },
    {
      title: 'Produção Audiovisual',
      description: 'Planejamento, gravação, bastidores e apoio criativo para vídeos comerciais e digitais.',
      icon: 'video'
    },
    {
      title: 'Mídia & iGaming',
      description: 'Linguagem rápida, formatos de retenção e presença para projetos de entretenimento digital.',
      icon: 'gamepad'
    },
    {
      title: 'Arquitetura',
      description: 'Projetos de arquitetura organizados em uma área própria para apresentação e cadastro.',
      icon: 'layout'
    }
  ],
  editorialCallouts: [
    {
      title: 'Presença em câmera',
      description: 'Postura, dicção e naturalidade para vídeos, entrevistas e participações comerciais.',
      image: {
        src: alineAvatarDark,
        alt: 'Aline Carlin em retrato editorial para presença em câmera'
      }
    },
    {
      title: 'Bastidores e produção',
      description: 'Registro de processo, rotina de gravação e narrativa visual antes da entrega final.',
      image: {
        src: alineAvatarLight,
        alt: 'Aline Carlin em imagem clara para chamada de bastidores e produção'
      }
    },
    {
      title: 'Eventos e ativações',
      description: 'Cobertura de experiências, entrevistas rápidas e presença alinhada ao ambiente da marca.',
      image: {
        src: alineAvatarDark,
        alt: 'Aline Carlin em composição visual para eventos e ativações'
      }
    },
    {
      title: 'Conteúdo para marcas',
      description: 'Peças sociais com intenção visual, mensagem direta e adequação ao canal de publicação.',
      image: {
        src: alineAvatarLight,
        alt: 'Aline Carlin em composição visual para conteúdo de marcas'
      }
    }
  ],
  featuredItems: [
    {
      title: 'Campanhas digitais',
      category: 'Campanhas',
      description: 'Participação em vídeos, fotos, chamadas sociais e ativações com linguagem editorial.',
      image: {
        src: alineAvatarDark,
        alt: 'Retrato editorial de Aline Carlin para campanha digital'
      },
      href: '/media-kit'
    },
    {
      title: 'Entrevistas e ativações',
      category: 'Comunicação',
      description: 'Condução em câmera, interação com convidados e presença em ações comerciais ao vivo.',
      image: {
        src: alineAvatarLight,
        alt: 'Retrato claro de Aline Carlin para entrevistas e ativações'
      },
      href: '/media-kit'
    },
    {
      title: 'Cobertura de eventos',
      category: 'Eventos',
      description: 'Registro de momentos-chave, bastidores, presença social e conteúdo para pós-evento.',
      image: {
        src: alineAvatarDark,
        alt: 'Retrato editorial de Aline Carlin para cobertura de eventos'
      },
      href: '/media-kit'
    },
    {
      title: 'Bastidores e produção',
      category: 'Produção',
      description: 'Acompanhamento de gravações, making of, rotina criativa e materiais de apoio.',
      image: {
        src: alineAvatarLight,
        alt: 'Retrato claro de Aline Carlin para bastidores e produção'
      },
      href: '/media-kit'
    },
    {
      title: 'Conteúdo para marcas',
      category: 'Redes',
      description: 'Reels, stories e peças digitais com estética consistente e mensagem objetiva.',
      image: {
        src: alineAvatarDark,
        alt: 'Retrato editorial de Aline Carlin para conteúdo de marcas'
      },
      href: '/media-kit'
    },
    {
      title: 'Projetos audiovisuais',
      category: 'Audiovisual',
      description: 'Participação em vídeos, chamadas institucionais e produções digitais com direção visual.',
      image: {
        src: alineAvatarLight,
        alt: 'Retrato claro de Aline Carlin para projetos audiovisuais'
      },
      href: '/media-kit'
    }
  ],
  mediaKitCta: {
    eyebrow: 'Comercial',
    title: 'Media Kit',
    description:
      'Veja formatos de colaboração, experiências, presença digital e possibilidades comerciais para campanhas, eventos e projetos de mídia.',
    cta: {
      label: 'Acessar Media Kit',
      href: '/media-kit',
      variant: 'primary',
      ariaLabel: 'Acessar o Media Kit de Aline Carlin'
    },
    secondaryCta: {
      label: 'Contato comercial',
      href: '/contato',
      variant: 'secondary',
      ariaLabel: 'Abrir página de contato comercial de Aline Carlin'
    }
  }
} satisfies HomeData
