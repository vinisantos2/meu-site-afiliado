import { Publicacao } from "../types/Publicacao";

export const PUBLICACOES: Publicacao[] = [
  {
    titulo: "Como escolher um smartphone em 2025",
    resumo:
      "Descubra como escolher o smartphone ideal para o seu perfil, avaliando desempenho, câmera, bateria e custo-benefício.",
    slug: "como-escolher-smartphone",
    imagem: "/imagens/categorias/smartphone/smartphone.avif",
    tipo: "guia",

    publicado: false,
    criadoEm: "2025-01-01",

    blocos: [
      // Introdução
      {
        tipo: "titulo",
        conteudo: "O que avaliar antes de comprar um smartphone",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Escolher um smartphone em 2025 vai muito além de preço ou marca. Com tantas opções no mercado, entender quais características realmente fazem diferença no dia a dia é essencial para evitar arrependimentos.",
      },
      {
        tipo: "lista",
        itens: [
          "Desempenho e processador",
          "Quantidade de memória RAM",
          "Qualidade da tela",
          "Autonomia da bateria",
          "Câmeras e recursos de fotografia",
          "Custo-benefício",
        ],
      },

      // Uso básico
      {
        tipo: "titulo",
        conteudo: "Smartphone para uso básico e cotidiano",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Para quem utiliza o celular principalmente para redes sociais, mensagens, chamadas, vídeos e navegação na internet, não é necessário investir em modelos muito caros.",
      },
      {
        tipo: "lista",
        itens: [
          "Processadores de entrada ou intermediários",
          "4 GB a 6 GB de memória RAM",
          "Bateria que dure um dia inteiro",
          "Tela com boa resolução para consumo de conteúdo",
        ],
      },

      // Trabalho e produtividade
      {
        tipo: "titulo",
        conteudo: "Smartphone para trabalho e produtividade",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Quem usa o smartphone para trabalho, como e-mails, aplicativos corporativos, reuniões online e organização de tarefas, precisa de um aparelho mais equilibrado em desempenho e autonomia.",
      },
      {
        tipo: "lista",
        itens: [
          "Processadores intermediários",
          "6 GB a 8 GB de memória RAM",
          "Boa autonomia de bateria",
          "Armazenamento interno suficiente para apps e arquivos",
        ],
      },

      // Uso avançado e jogos
      {
        tipo: "titulo",
        conteudo: "Smartphone para uso avançado, jogos e criação de conteúdo",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Para quem joga, grava vídeos, edita fotos ou utiliza aplicativos mais pesados, é recomendado investir em smartphones mais potentes, que garantem fluidez e maior vida útil.",
      },
      {
        tipo: "lista",
        itens: [
          "Processadores intermediários ou premium",
          "8 GB ou mais de memória RAM",
          "Tela com alta taxa de atualização",
          "Bateria de maior capacidade",
          "Câmeras de melhor qualidade",
        ],
      },

      // Conclusão
      {
        tipo: "titulo",
        conteudo: "Conclusão",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "O smartphone ideal é aquele que atende ao seu perfil de uso sem extrapolar o orçamento. Avaliar corretamente suas necessidades ajuda a fazer uma escolha mais consciente e evita gastos desnecessários.",
      },
    ],
  },

  {
    titulo: "Notebook: o que analisar antes de comprar",
    resumo:
      "Evite gastar dinheiro à toa: veja como escolher o notebook certo para o seu perfil e não se arrepender depois da compra.",

    slug: "como-escolher-notebook",
    imagem: "/imagens/categorias/notebook/notebook.jpg",
    tipo: "guia",

    publicado: false,
    criadoEm: "2025-01-01",

    blocos: [
      // Título e prévia do conteúdo
      {
        tipo: "titulo",
        conteudo: "O que avaliar antes de comprar um notebook",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Antes de escolher um notebook, é fundamental entender qual será a principal finalidade do aparelho. O tipo de uso influencia diretamente no desempenho necessário, na durabilidade e no custo do equipamento.",
      },
      {
        tipo: "lista",
        itens: [
          "Processador adequado ao seu tipo de uso",
          "Quantidade de memória RAM",
          "Tipo e capacidade do armazenamento (SSD)",
          "Tamanho e qualidade da tela",
          "Autonomia da bateria",
          "Peso e portabilidade",
        ],
      },

      // Usuário doméstico e estudos
      {
        tipo: "titulo",
        conteudo: "Notebook para uso doméstico e estudos",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Para tarefas básicas como navegação na internet, estudos, assistir vídeos e uso de programas como Word e Excel, não é necessário investir em um notebook muito robusto.",
      },
      {
        tipo: "lista",
        itens: [
          "Memória RAM entre 4 GB e 8 GB",
          "Processadores básicos ou intermediários",
          "Armazenamento SSD para melhor desempenho",
          "Tela de 14 ou 15.6 polegadas",
        ],
      },

      // Home office básico
      {
        tipo: "titulo",
        conteudo: "Notebook para trabalho e home office básico",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Para quem trabalha em home office com atividades leves, como videoconferências, e-mails e uso de documentos, não é necessário um notebook muito potente.",
      },

      {
        tipo: "paragrafo",
        conteudo:
          "Para esse perfil de uso, uma configuração intermediária já oferece um ótimo desempenho, sem a necessidade de investir em modelos mais caros.",
      },
      {
        tipo: "lista",
        itens: [
          "Memória RAM entre 8 GB",
          "Processadores intermediários",
          "Armazenamento SSD",
          "Tela de 14 ou 15.6 polegadas",
        ],
      },

      // Trabalhos pesados e profissionais
      {
        tipo: "titulo",
        conteudo: "Notebook para trabalhos pesados e profissionais",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Atividades como programação, edição de imagens, edição de vídeos e uso de softwares profissionais exigem notebooks mais robustos, garantindo maior desempenho e produtividade.",
      },
      {
        tipo: "lista",
        itens: [
          "Processador intermediário ou premium",
          "Mínimo de 16 GB de memória RAM",
          "SSD de maior capacidade",
          "Placa de vídeo dedicada (dependendo do uso)",
        ],
      },

      // Conclusão
      {
        tipo: "titulo",
        conteudo: "Conclusão",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Escolher o notebook ideal depende do equilíbrio entre desempenho, custo e necessidade. Avaliar corretamente o seu perfil de uso evita gastos desnecessários e garante um equipamento adequado para o dia a dia.",
      },
    ],
  },

  {
    titulo: "Smartwatch vale a pena? Veja quando comprar",
    resumo:
      "Entenda quando o smartwatch realmente vale a pena, para quais perfis ele faz sentido e quando não compensa investir.",
    slug: "smartwatch-vale-a-pena",
    imagem: "/imagens/categorias/smartwatch/smartwatch.jpg",
    tipo: "artigo",

    publicado: false,
    criadoEm: "2025-01-01",

    blocos: [
      // Introdução
      {
        tipo: "titulo",
        conteudo: "Smartwatch: vale a pena investir?",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Os smartwatches se tornaram cada vez mais populares, oferecendo recursos que vão além de mostrar as horas. No entanto, nem sempre esse tipo de dispositivo é realmente necessário para todo mundo.",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Neste artigo, você vai entender quando vale a pena investir em um smartwatch, quais perfis se beneficiam mais e em quais casos ele pode não ser a melhor escolha.",
      },

      // Para quem vale a pena
      {
        tipo: "titulo",
        conteudo: "Para quem o smartwatch vale a pena",
      },
      {
        tipo: "lista",
        itens: [
          "Pessoas que praticam atividades físicas regularmente",
          "Quem busca monitoramento de saúde, como batimentos cardíacos e sono",
          "Quem quer mais praticidade no dia a dia, com notificações no pulso",
          "Usuários que gostam de acompanhar métricas e desempenho pessoal",
        ],
      },

      // Atividades físicas
      {
        tipo: "titulo",
        conteudo: "Smartwatch para atividades físicas",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Para quem pratica exercícios físicos, o smartwatch pode ser um grande aliado. Ele ajuda a monitorar treinos, acompanhar evolução e manter a motivação.",
      },
      {
        tipo: "lista",
        itens: [
          "Contagem de passos e calorias",
          "Monitoramento de frequência cardíaca",
          "Modos esportivos específicos",
          "Resistência à água",
        ],
      },

      // Saúde e bem-estar
      {
        tipo: "titulo",
        conteudo: "Smartwatch para saúde e bem-estar",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Alguns modelos oferecem recursos focados em saúde, ajudando no acompanhamento do dia a dia e na criação de hábitos mais saudáveis.",
      },
      {
        tipo: "lista",
        itens: [
          "Monitoramento do sono",
          "Acompanhamento de estresse",
          "Alertas de sedentarismo",
          "Medições básicas de saúde",
        ],
      },

      // Quando não vale a pena
      {
        tipo: "titulo",
        conteudo: "Quando o smartwatch pode não valer a pena",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Apesar das vantagens, o smartwatch pode não ser a melhor escolha para todos os perfis, principalmente se o uso for muito básico.",
      },
      {
        tipo: "lista",
        itens: [
          "Quem já usa pouco o smartphone",
          "Quem não pratica atividades físicas",
          "Quem prefere relógios tradicionais",
          "Quem busca apenas ver horas e notificações simples",
        ],
      },

      // Conclusão
      {
        tipo: "titulo",
        conteudo: "Conclusão",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "O smartwatch vale a pena quando está alinhado ao seu estilo de vida. Avaliar suas necessidades e hábitos é essencial para decidir se o investimento faz sentido ou se um relógio tradicional já atende bem.",
      },
    ],
  },

  {
    titulo: "Fones de ouvido",
    resumo:
      "Veja quando vale a pena investir em um fone de ouvido e use este checklist para escolher o modelo ideal sem erro.",
    slug: "checklist-fones-de-ouvido",
    imagem: "/imagens/categorias/fone-de-ouvido/fone-de-ouvido.avif",
    tipo: "checklist",

    publicado: false,
    criadoEm: "2025-01-01",

    blocos: [
      // Introdução
      {
        tipo: "titulo",
        conteudo: "Fones de ouvido: vale a pena investir?",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Os fones de ouvido se tornaram itens quase indispensáveis no dia a dia, seja para ouvir música, trabalhar, estudar ou praticar atividades físicas. Com tantos modelos disponíveis, escolher o fone certo pode gerar dúvidas.",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Neste artigo, você vai entender quando vale a pena investir em um fone de ouvido, quais perfis mais se beneficiam e o que observar antes de comprar.",
      },

      // Para quem vale a pena
      {
        tipo: "titulo",
        conteudo: "Para quem o fone de ouvido vale a pena",
      },
      {
        tipo: "lista",
        itens: [
          "Quem escuta música com frequência",
          "Quem trabalha ou estuda ouvindo áudio ou em chamadas",
          "Quem pratica atividades físicas",
          "Quem busca mais praticidade no dia a dia",
        ],
      },

      // Tipos de uso
      {
        tipo: "titulo",
        conteudo: "Fones de ouvido para o dia a dia",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Para uso cotidiano, como ouvir música, assistir vídeos e atender chamadas, não é necessário investir em modelos muito caros. O mais importante é conforto, bateria e estabilidade da conexão.",
      },
      {
        tipo: "lista",
        itens: [
          "Boa autonomia de bateria",
          "Bluetooth estável",
          "Conforto para uso prolongado",
          "Qualidade de som equilibrada",
        ],
      },

      // Atividades físicas
      {
        tipo: "titulo",
        conteudo: "Fones de ouvido para atividades físicas",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Para quem pratica exercícios, o fone de ouvido precisa ser mais resistente e firme, evitando quedas e desconforto durante o movimento.",
      },
      {
        tipo: "lista",
        itens: [
          "Boa fixação no ouvido",
          "Resistência ao suor e respingos",
          "Bateria suficiente para os treinos",
          "Controles simples e acessíveis",
        ],
      },

      // Quando não vale a pena
      {
        tipo: "titulo",
        conteudo: "Quando o fone de ouvido pode não valer a pena",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "Apesar das vantagens, nem todo perfil precisa investir em um fone de ouvido mais completo, principalmente se o uso for ocasional.",
      },
      {
        tipo: "lista",
        itens: [
          "Quem usa fone apenas esporadicamente",
          "Quem não se importa com qualidade de áudio",
          "Quem prefere usar o som do próprio celular",
        ],
      },

      // Checklist como apoio (opcional, no final)
      {
        tipo: "titulo",
        conteudo: "Checklist antes de comprar fones de ouvido",
      },
      {
        tipo: "check",
        itens: [
          {
            texto: "Definir o tipo: intra-auricular, TWS ou headphone",
            marcado: false,
          },
          {
            texto:
              "Verificar se o Bluetooth é estável e compatível com seu dispositivo",
            marcado: false,
          },
          {
            texto: "Avaliar a autonomia da bateria para o seu uso diário",
            marcado: false,
          },
          {
            texto: "Checar a qualidade do som (graves, médios e agudos)",
            marcado: false,
          },
          {
            texto: "Confirmar conforto para uso prolongado",
            marcado: false,
          },
        ],
      },

      // Conclusão
      {
        tipo: "titulo",
        conteudo: "Conclusão",
      },
      {
        tipo: "paragrafo",
        conteudo:
          "O fone de ouvido ideal é aquele que se adapta ao seu estilo de vida. Avaliar seu perfil de uso e considerar os pontos certos antes da compra evita arrependimentos e garante uma escolha mais consciente.",
      },
    ],
  },
];
