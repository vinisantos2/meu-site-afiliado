import { Publicacao } from "../types/Publicacao";

export const DADOS: Publicacao[] = [
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
];
