import alineAvatarDark from '@alinecarlin/assets/aline-avatar-dark.webp'
import alineAvatarLight from '@alinecarlin/assets/aline-avatar-light.webp'

import type { HomeData } from '../types/home.types'

export const homeMock = {
  hero: {
    eyebrow: 'Mídia criativa · Presença de marca · Audiovisual',
    title: 'Aline Carlin',
    description:
      'Comunicadora criativa, presença de marca e produtora audiovisual. Atuação em conteúdo digital, campanhas, eventos, entrevistas, produção audiovisual e projetos com presença visual estratégica.',
    image: {
      src: alineAvatarDark,
      alt: 'Retrato editorial de Aline Carlin com presença de câmera'
    },
    secondaryImage: {
      src: alineAvatarLight,
      alt: 'Retrato claro de Aline Carlin para composição visual da Home'
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
      label: 'Presença para campanhas e marcas'
    },
    {
      value: '02',
      label: 'Conteúdo digital com estética e estratégia'
    },
    {
      value: '03',
      label: 'Produção, bastidores e frente de câmera'
    }
  ],
  presenceAreas: [
    {
      title: 'Presença & Imagem',
      description: 'Participação em campanhas, vídeos editoriais, ensaios comerciais e projetos com rosto de marca.',
      icon: 'image'
    },
    {
      title: 'Conteúdo & Redes',
      description: 'Criação de narrativas para Instagram, LinkedIn, vídeos curtos, bastidores e experiências digitais.',
      icon: 'network'
    },
    {
      title: 'Eventos & Comunicação',
      description: 'Coberturas, entrevistas, ativações, recepção de marca e comunicação em ambientes ao vivo.',
      icon: 'mic'
    },
    {
      title: 'Produção Audiovisual',
      description: 'Planejamento, gravação, direção de presença, bastidores e execução visual para projetos de vídeo.',
      icon: 'video'
    },
    {
      title: 'Mídia & iGaming',
      description: 'Experiência em comunicação dinâmica, linguagem digital e formatos de alta retenção para mídia.',
      icon: 'gamepad'
    },
    {
      title: 'Arquitetura como repertório visual',
      description: 'Base estética e técnica que fortalece composição, leitura espacial, proporção e direção visual.',
      icon: 'layout'
    }
  ],
  editorialCallouts: [
    {
      title: 'Frente às câmeras',
      description: 'Presença segura, visual forte e comunicação direta para campanhas, entrevistas e conteúdos.',
      image: {
        src: alineAvatarDark,
        alt: 'Aline Carlin em retrato editorial para chamada frente às câmeras'
      }
    },
    {
      title: 'Bastidores e produção',
      description: 'Atenção ao ritmo, estética, operação e narrativa antes, durante e depois da gravação.',
      image: {
        src: alineAvatarLight,
        alt: 'Aline Carlin em imagem clara para chamada de bastidores e produção'
      }
    },
    {
      title: 'Comunicação para marcas',
      description: 'Imagem, linguagem e intenção alinhadas ao posicionamento comercial de cada projeto.',
      image: {
        src: alineAvatarDark,
        alt: 'Aline Carlin em composição visual para comunicação de marcas'
      }
    },
    {
      title: 'Conteúdo com estética e estratégia',
      description: 'Criatividade aplicada a formatos digitais, presença visual e percepção de valor.',
      image: {
        src: alineAvatarLight,
        alt: 'Aline Carlin em composição visual para conteúdo estratégico'
      }
    }
  ],
  featuredItems: [
    {
      title: 'Campanha digital com presença editorial',
      category: 'Campanhas',
      description: 'Formato para participação em vídeos, fotos, chamadas sociais e ativações com leitura de marca.',
      image: {
        src: alineAvatarDark,
        alt: 'Retrato editorial de Aline Carlin para campanha digital'
      },
      href: '/media-kit'
    },
    {
      title: 'Cobertura de experiência e bastidores',
      category: 'Eventos',
      description:
        'Modelo de entrega para eventos, entrevistas, recepção de marca, stories, reels e registros de bastidor.',
      image: {
        src: alineAvatarLight,
        alt: 'Retrato claro de Aline Carlin para cobertura de experiência'
      },
      href: '/media-kit'
    },
    {
      title: 'Produção audiovisual para projetos digitais',
      category: 'Audiovisual',
      description:
        'Atuação entre planejamento, presença em vídeo, direção visual e conteúdo com linguagem contemporânea.',
      image: {
        src: alineAvatarDark,
        alt: 'Retrato editorial de Aline Carlin para produção audiovisual'
      },
      href: '/media-kit'
    }
  ],
  architectureNote: {
    title: 'Arquitetura entra como repertório, não como rótulo principal.',
    description:
      'A formação amplia o olhar para composição, luz, espaço, estética e organização visual. Na Home, esse repertório sustenta a comunicação criativa sem competir com mídia, presença e audiovisual.',
    points: ['Composição visual', 'Leitura espacial', 'Direção estética', 'Clareza de apresentação']
  },
  mediaKitCta: {
    eyebrow: 'Media Kit',
    title: 'Formatos comerciais, presença e possibilidades em um só lugar.',
    description: 'Conheça formatos de participação, experiências e possibilidades comerciais no Media Kit.',
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
