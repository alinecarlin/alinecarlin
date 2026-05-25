import alineAvatarDark from '@alinecarlin/assets/aline-avatar-dark.webp'
import alineAvatarLight from '@alinecarlin/assets/aline-avatar-light.webp'

import type { MediaKitData } from '../types/media-kit.types'

export const mediaKitMock = {
  hero: {
    eyebrow: 'Media Kit comercial',
    title: 'Media Kit',
    description:
      'Comunicação, imagem e produção audiovisual para marcas, eventos e projetos digitais. Presença em câmera, criação de conteúdo, entrevistas, campanhas, ativações e bastidores com estética, clareza e intenção.',
    image: {
      src: alineAvatarDark,
      alt: 'Retrato editorial de Aline Carlin para Media Kit'
    },
    ctas: [
      {
        label: 'Solicitar proposta',
        href: '/contato',
        variant: 'primary',
        ariaLabel: 'Solicitar proposta comercial com Aline Carlin'
      },
      {
        label: 'Ver formatos de colaboração',
        href: '#formatos',
        variant: 'secondary',
        ariaLabel: 'Ver formatos de colaboração do Media Kit'
      }
    ]
  },
  profile: {
    title: 'Comunicação em vídeo com presença, leitura estética e ritmo de conteúdo.',
    description:
      'Aline Carlin atua com comunicação em vídeo, presença de marca, conteúdo digital e produção audiovisual. Sua entrega combina desenvoltura em câmera, leitura estética, ritmo de conteúdo e experiência prática em ambientes de mídia, eventos e projetos digitais.',
    highlights: ['Campanhas e ativações', 'Entrevistas em vídeo', 'Cobertura de eventos', 'Conteúdo para redes']
  },
  commercialAreas: [
    {
      title: 'Presença & Imagem',
      description: 'Participação em campanhas, vídeos editoriais, fotos comerciais e ações com rosto de marca.',
      icon: 'image'
    },
    {
      title: 'Conteúdo para Redes',
      description: 'Reels, stories, vídeos curtos e publicações com direção visual e mensagem clara.',
      icon: 'network'
    },
    {
      title: 'Eventos & Ativações',
      description: 'Cobertura, presença em experiências, bastidores e entregas para redes sociais.',
      icon: 'event'
    },
    {
      title: 'Entrevistas & Apresentação',
      description: 'Condução de conversas, apresentação de convidados e comunicação natural em vídeo.',
      icon: 'mic'
    },
    {
      title: 'Produção Audiovisual',
      description: 'Apoio criativo, captação, direção de conteúdo e narrativa visual para projetos digitais.',
      icon: 'video'
    },
    {
      title: 'Bastidores & Cobertura',
      description: 'Registro de rotina, making of, momentos-chave e materiais de apoio para campanhas.',
      icon: 'coverage'
    }
  ],
  collaborationFormats: [
    {
      title: 'Campanhas digitais',
      description: 'Presença em peças de vídeo, fotos editoriais, chamadas sociais e ativações de marca.'
    },
    {
      title: 'Conteúdos para Instagram, TikTok e YouTube',
      description: 'Conteúdos adaptados ao canal, com linguagem direta e estética consistente.'
    },
    {
      title: 'Cobertura de eventos',
      description: 'Registros em tempo real, bastidores, entrevistas rápidas e conteúdo para pós-evento.'
    },
    {
      title: 'Entrevistas com convidados, marcas ou participantes',
      description: 'Condução em vídeo com naturalidade, escuta e boa leitura do ambiente.'
    },
    {
      title: 'Apresentação de ativações',
      description: 'Presença em ações comerciais, experiências de marca e momentos de interação.'
    },
    {
      title: 'Participação em vídeos institucionais',
      description: 'Imagem profissional para vídeos de marca, chamadas internas e apresentações digitais.'
    },
    {
      title: 'Produção de conteúdo audiovisual',
      description: 'Apoio em captação, direção de presença e organização de entregas para vídeo.'
    },
    {
      title: 'Parcerias editoriais',
      description: 'Conteúdos com linguagem premium, contexto visual e alinhamento com a identidade da marca.'
    }
  ],
  igamingExperience: {
    title: 'Mídia & iGaming',
    description:
      '2 anos de experiência em mídia e comunicação no mercado de iGaming, com atuação em entrevistas, eventos, produção de conteúdo digital, apresentação e comunicação em ambientes dinâmicos.',
    points: ['Entrevistas em eventos', 'Comunicação de alta retenção', 'Conteúdo digital em ritmo rápido']
  },
  metrics: [
    {
      label: 'Instagram',
      value: '870K+',
      description: 'Seguidores',
      icon: 'instagram'
    },
    {
      label: 'TikTok',
      value: '1.5M+',
      description: 'Seguidores',
      icon: 'tiktok'
    },
    {
      label: 'YouTube',
      value: '420K+',
      description: 'Inscritos',
      icon: 'youtube'
    },
    {
      label: 'Alcance mensal',
      value: '8M+',
      description: 'Contas alcançadas / mês',
      icon: 'reach'
    },
    {
      label: 'Engajamento médio',
      value: '9.6%',
      description: 'Engajamento médio',
      icon: 'engagement'
    }
  ],
  cases: [
    {
      title: 'Cobertura de Evento',
      category: 'Eventos & Comunicação',
      description: 'Registro de bastidores, presença em ativações e conteúdo em tempo real para redes sociais.',
      image: {
        src: alineAvatarLight,
        alt: 'Aline Carlin em composição editorial para cobertura de evento'
      }
    },
    {
      title: 'Entrevistas em Ambiente de Mídia',
      category: 'Entrevistas & Apresentação',
      description: 'Condução de conversas curtas, apresentação de convidados e comunicação em vídeo com naturalidade.',
      image: {
        src: alineAvatarDark,
        alt: 'Aline Carlin em retrato editorial para entrevistas em mídia'
      }
    },
    {
      title: 'Conteúdo para Campanha Digital',
      category: 'Conteúdo & Redes',
      description: 'Peças em vídeo com foco em presença, clareza de mensagem e adaptação para plataformas sociais.',
      image: {
        src: alineAvatarLight,
        alt: 'Aline Carlin em composição editorial para campanha digital'
      }
    },
    {
      title: 'Produção Audiovisual de Bastidores',
      category: 'Produção Audiovisual',
      description: 'Captação, direção de conteúdo e construção de narrativa visual para projetos digitais.',
      image: {
        src: alineAvatarDark,
        alt: 'Aline Carlin em retrato editorial para produção audiovisual'
      }
    }
  ],
  finalCta: {
    title: 'Vamos construir uma presença forte para o seu projeto?',
    description:
      'Campanhas, eventos, entrevistas, ativações e conteúdos digitais com direção, imagem e comunicação profissional.',
    ctas: [
      {
        label: 'Entrar em contato',
        href: '/contato',
        variant: 'primary',
        ariaLabel: 'Entrar em contato com Aline Carlin'
      },
      {
        label: 'Enviar briefing',
        href: '/contato',
        variant: 'secondary',
        ariaLabel: 'Enviar briefing para Aline Carlin'
      }
    ]
  }
} satisfies MediaKitData
