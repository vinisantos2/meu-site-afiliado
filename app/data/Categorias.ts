import { Publicacao } from "../types/Publicacao";

export const PUBLICACOES: Publicacao[] = [
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
