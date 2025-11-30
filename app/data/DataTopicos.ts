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
    titulo: "smartphone",
    url: "smartphone",
    icon: "Smartphone",
    categorias: [
      "Até 2000R$",
      "Top 10 Smartphones",
      "Mais Vendidos",
      "Melhor Avaliado",
    ],
  },
  {
    titulo: "tablet",
    url: "tablet",
    icon: "Tablet",
    categorias: ["Para Estudo", "Baratos"],
  },
];
