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

      // Uso
      "Para Estudo",
      "Para Programação",
      "Para Home Office",

      // Gamer
      "Gamer",

      // Sistemas e linhas especiais
      "MacBook",
    ],

    dica: "Antes de comprar um notebook, avalie o tipo de uso (estudo, trabalho, programação ou jogos), o processador, a quantidade de memória RAM (mínimo de 8GB para bom desempenho), o tipo de armazenamento (SSD) e o tamanho da tela. Esses fatores fazem toda a diferença na experiência e na durabilidade do equipamento.",
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

  {
    titulo: "Fone de ouvido",
    url: "fone-de-ouvido",
    icon: "Headphones",
    texto:
      "Compare os melhores fones de ouvido e headphones sem fio do mercado. Avaliamos qualidade de som, bateria, conforto e custo-benefício para te ajudar a escolher o modelo ideal.",
    categorias: [
      "Até 100R$",
      "Até 200R$",
      "Até 300R$",
      "Até 500R$",

      "Top 10 Fones Sem Fio",
      "Melhor Custo-Benefício",
      "Mais Vendidos",
      "Melhor Avaliação",
      "Premium",
      "Com Fio",

      "True Wireless (TWS)",
      "Com Cancelamento de Ruído",

      "Para Academia",
      "Para Trabalho",
      "Para Jogos",
      "Para Viagens",

      "JBL",
      "Samsung",
      "Apple (AirPods)",
      "Xiaomi",
      "Edifier",
    ],
  },

  {
    titulo: "Smartwatch",
    url: "smartwatch",
    icon: "Watch",
    texto:
      "Compare os melhores smartwatches do mercado. Avaliamos recursos de saúde, bateria, compatibilidade com Android e iOS, além do custo-benefício para te ajudar a escolher o modelo ideal.",
    categorias: [
      // Preço
      "Até 200R$",
      "Até 300R$",
      "Até 500R$",
      "Premium",

      // Rankings
      "Top Smartwatch",
      "Melhor Custo-Benefício",
      "Mais Vendidos",
      "Smartwatch Barato",

      // Uso
      "Para Academia",
      "Para Corrida",
      "Para Trabalho",
      "Saúde e Monitoramento",

      // Sistemas
      "Android",
      "iOS",

      // Marcas
      "Apple",
      "Samsung",
      "Xiaomi",
      "Huawei",
      "Amazfit",
      "QCY",
    ],
  },

  {
    titulo: "Smart TV",
    url: "smart-tv",
    icon: "Tv",
    texto:
      "Compare as melhores Smart TVs do mercado. Avaliamos qualidade de imagem, sistema operacional, recursos inteligentes e custo-benefício para te ajudar a escolher a TV ideal para sua casa.",
    categorias: [
      // Tamanho
      'Até 43"',
      '50" a 55"',
      'Acima de 60"',

      // Resolução
      "Full HD",
      "4K",
      "8K",

      // Rankings
      "Top Smart TV",
      "Melhor Custo-Benefício",
      "Mais Vendidas",

      // Sistemas
      "Android TV / Google TV",
      "Tizen",
      "webOS",

      // Marcas
      "Samsung",
      "LG",
      "Sony",
      "Philips",
      "TCL",
    ],
  },
];
