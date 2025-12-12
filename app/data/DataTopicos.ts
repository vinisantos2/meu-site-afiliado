import { Topico } from "../types/Topico";

export const TOPICOS = <Array<Topico>>[
  {
    titulo: "Notebook",
    url: "notebook",
    icon: "Laptop",
    texto:
      "Encontre o notebook ideal para o seu dia a dia! Aqui você pode comparar modelos para estudo, trabalho, programação e até notebooks gamer. Organizamos tudo por preço, desempenho e uso, facilitando sua escolha com recomendações atualizadas, rankings e análises completas.",

    categorias: [
      // Preço
      "Até 2000R$",

      // Ranking
      "Top 10 Notebooks",
      "Melhor Custo-Benefício",
      // "Mais Vendidos",

      // Uso
      "Para Estudo",
      "Para Programação",
      "Para Home Office",

      // Gamer
      "Gamer",

      // Sistemas e linhas especiais
      "MacBook",
    ],
  },
  {
    titulo: "Smartphone",
    url: "smartphone",
    icon: "Smartphone",
    texto:
      "Aqui você encontra os melhores smartphones divididos por preço, marcas e desempenho. Compare modelos para fotografia, jogos, uso diário e produtividade. Reunimos análises objetivas, rankings atualizados e recomendações para ajudar você a escolher o smartphone ideal sem complicação.",
    categorias: [
      // Preço
      "Até 1000R$",
      "Até 2000R$",

      // Rankings / Destaques
      "Top 10 Smartphones",
      "Mais Vendidos",
      "Melhor Avaliado",
      "Melhor Custo-Benefício",

      // Marcas / Linhas
      "iPhone",
      "Samsung Galaxy",
      "Xiaomi / POCO",
      "Realme",
      "Motorola",

      // Uso
      "Gamer",

      // Recursos

      "Alto Desempenho",
    ],
  },
  // {
  //   titulo: "Tablet",
  //   url: "tablet",
  //   icon: "Tablet",
  //   texto: "Os tablets oferecem ótimo equilíbrio entre portabilidade e produtividade. Se você busca um dispositivo para estudo, leitura, trabalho leve ou entretenimento, aqui você encontrará comparativos claros e sugestões dos melhores modelos para cada necessidade e orçamento.",

  //   categorias: ["Para Estudo", "Baratos"],
  // },

  {
    titulo: "Placa-mãe",
    url: "placa-mae",
    icon: "Cpu",
    texto:
      "A placa-mãe é o coração do seu PC. Aqui você pode comparar modelos de entrada, intermediários e de alta performance para Intel e AMD, além de opções com recursos como overclock, RGB e suporte avançado para upgrades. Rankings e recomendações ajudam você a montar o PC ideal para seu objetivo.",

    categorias: [
      "Entrada",
      "Custo-Benefício",
      "Intermediária",
      "Alta Performance",
      "Overclock",
      "RGB",
      "AMD Ryzen",
      "Intel",
      "Baratas",
      "Top de Linha",
    ],
  },
  // {
  //   titulo: "Relogios",
  //   url: "relogios",
  //   icon: "relogio",
  //   categorias: [],
  // texto: "Descubra os melhores relógios e smartwatches para saúde, esportes, produtividade e uso diário. Organizamos os modelos por funcionalidades, estilos e faixas de preço, facilitando sua escolha com análises diretas e recomendações para cada tipo de usuário.",
  // },
];
