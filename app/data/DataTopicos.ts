import { Topico } from "../types/Topico";

export const TOPICOS = <Array<Topico>>[
  {
    titulo: "Notebook",
    url: "notebook",
    icon: "Laptop",
    categorias: [
      // Preço
      "Até 2000R$",
      "Até 3000R$",

      // Ranking
      "Top 10 Notebooks",
      "Melhor Custo-Benefício",
      "Mais Vendidos",

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
  {
    titulo: "Tablet",
    url: "tablet",
    icon: "Tablet",
    categorias: ["Para Estudo", "Baratos"],
  },

  {
    titulo: "Placa-mãe",
    url: "placa-mae",
    icon: "Cpu",
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
];
