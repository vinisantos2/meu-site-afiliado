import { Anuncio } from "../types/AnuncioBase";

export const DADOS: Anuncio[] = [
  {
    nome: "Apple Watch Series 11",
    topico: "Smartwatch",

    pros: [
      "Excelente integração com o ecossistema Apple",
      "Tela OLED de alta qualidade com ótimo brilho",
      "Recursos avançados de saúde e bem-estar",
      "Desempenho rápido e fluido",
      "Construção premium",
    ],

    contras: [
      "Preço elevado no Brasil",
      "Compatível apenas com iPhone",
      "Autonomia de bateria poderia ser maior",
    ],

    opiniao:
      "O Apple Watch Series 11 é um dos smartwatches mais completos do mercado, oferecendo monitoramento avançado de saúde, desempenho rápido e uma integração impecável com o iPhone. É ideal para quem já está no ecossistema Apple e busca um relógio inteligente premium, confiável e cheio de recursos.",

    veredito:
      "Smartwatch premium, completo e altamente recomendado para usuários de iPhone.",

    nota: 9.6,

    valor: 4499, // valor médio estimado no Brasil

    links: ["https://mercadolivre.com/sec/2qtUNJU"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_797507-MLA95397349140_102025-F.webp",
    ],

    categorias: [
      "Premium",
      "Top Smartwatch",
      "Melhor Avaliação",
      "Apple",
      "Para Saúde",
      "Para Trabalho",
    ],

    criadoEm: new Date().toISOString(),

    destaque: true,

    detalhes: {
      tipo: "TWS", // mantido conforme sua tipagem atual
      conectividade: "Bluetooth",
      bluetoothVersao: "5.3",
      cancelamentoRuido: false,
      bateriaHoras: 18,
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["iOS"],
    },
  },

  {
    nome: "Samsung Galaxy Watch 6 Classic",
    topico: "Smartwatch",

    pros: [
      "Design clássico com acabamento premium",
      "Tela Super AMOLED de excelente qualidade",
      "Recursos avançados de saúde e fitness",
      "Compatível com Android e integração forte com Samsung",
      "Boa performance no dia a dia",
    ],

    contras: [
      "Não compatível com iPhone",
      "Alguns recursos funcionam melhor apenas com celulares Samsung",
      "Autonomia de bateria mediana",
    ],

    opiniao:
      "O Samsung Galaxy Watch 6 Classic é uma excelente escolha para usuários Android que buscam um smartwatch premium com visual sofisticado. Ele entrega ótimos recursos de saúde, desempenho sólido e uma tela impressionante, sendo um dos melhores relógios inteligentes do ecossistema Android.",

    veredito:
      "Smartwatch premium ideal para usuários Android, especialmente quem utiliza smartphones Samsung.",

    nota: 9.2,

    valor: 1829, // valor médio estimado no Brasil

    links: ["https://mercadolivre.com/sec/1gZPJZD"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_860983-MLA100002940699_112025-F.webp",
    ],

    categorias: [
      "Premium",
      "Top Smartwatch",
      "Melhor Custo-Benefício Premium",
      "Samsung",
      "Para Saúde",
      "Para Trabalho",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS", // mantido conforme sua tipagem atual
      conectividade: "Bluetooth",
      bluetoothVersao: "5.3",
      cancelamentoRuido: false,
      bateriaHoras: 40,
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android"],
    },
  },

  {
    nome: "Huawei Watch GT 4",
    topico: "Smartwatch",

    pros: [
      "Bateria excelente (até 14 dias)",
      "Tela AMOLED grande e muito nítida",
      "Design premium e leve",
      "Recursos completos de saúde e esportes",
      "Compatível com Android e iOS",
    ],

    contras: [
      "Não possui Wear OS",
      "Loja de apps mais limitada",
      "Pagamentos por NFC limitados no Brasil",
    ],

    opiniao:
      "O Huawei Watch GT 4 é um dos smartwatches mais equilibrados do mercado, oferecendo ótima autonomia de bateria, design sofisticado e recursos completos de monitoramento de saúde. É ideal para quem quer fugir da recarga diária sem abrir mão de qualidade.",

    veredito:
      "Excelente smartwatch para quem prioriza bateria, design e confiabilidade.",

    nota: 8.9,

    valor: 1699,

    links: ["https://mercadolivre.com/sec/1UAC2WK"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_761443-MLA100007400661_122025-F.webp",
    ],

    categorias: [
      "Melhor Custo-Benefício",
      "Top Smartwatch",
      "Huawei",
      "Para Saúde",
      "Para Esporte",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.2",
      cancelamentoRuido: false,
      bateriaHoras: 336, // 14 dias
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android", "iOS"],
    },
  },

  {
    nome: "Relógio Smartwatch QCY GT S8 AMOLED",
    topico: "Smartwatch",

    pros: [
      "Tela AMOLED com ótimo brilho para a faixa de preço",
      "Preço acessível",
      "Design moderno e leve",
      "Resistência à água IPX8",
      "Boa opção para primeiro smartwatch",
    ],

    contras: [
      "Não possui GPS integrado",
      "Sistema simples, sem Wear OS",
      "Métricas de saúde menos precisas que modelos premium",
    ],

    opiniao:
      "O QCY GT S8 é um smartwatch voltado para quem busca um modelo básico, bonito e funcional sem gastar muito. Ele entrega uma boa tela AMOLED, resistência à água e recursos essenciais de saúde, sendo ideal para iniciantes ou quem quer um relógio inteligente para o dia a dia.",

    veredito:
      "Smartwatch barato e funcional, ideal para quem quer custo-benefício e simplicidade.",

    nota: 7.8,

    valor: 299,

    links: ["https://mercadolivre.com/sec/2a2nR2Y"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_919648-MLA99871222133_112025-F.webp",
    ],

    categorias: [
      "Smartwatch Barato",
      "Custo-Benefício",
      "Até 300R$",
      "QCY",
      "Primeiro Smartwatch",
      "Para Academia",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS", // mantido por compatibilidade com sua tipagem atual
      conectividade: "Bluetooth",
      bluetoothVersao: "5.2",
      cancelamentoRuido: false,
      bateriaHoras: 192, // até 8 dias
      resistenciaAgua: "IPX8",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android", "iOS"],
    },
  },

  {
    nome: "Amazfit GTR 4",
    topico: "Smartwatch",

    pros: [
      "Excelente autonomia de bateria (até 14 dias)",
      "GPS integrado muito preciso",
      "Tela AMOLED grande e de ótima qualidade",
      "Compatível com Android e iOS",
      "Ótimo para esportes e atividades físicas",
    ],

    contras: [
      "Sistema próprio (Zepp OS), sem Wear OS",
      "Loja de aplicativos limitada",
      "Pagamentos por NFC não funcionam no Brasil",
    ],

    opiniao:
      "O Amazfit GTR 4 é um dos smartwatches mais completos fora do ecossistema Apple e Samsung. Ele se destaca pela bateria de longa duração, GPS preciso e excelente desempenho em atividades esportivas, sendo ideal para quem busca um relógio inteligente potente sem precisar recarregar todos os dias.",

    veredito:
      "Smartwatch completo, excelente para esportes e uso diário, com ótima bateria.",

    nota: 8.7,

    valor: 1399,

    links: ["https://mercadolivre.com/sec/1QC6KEG"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_632929-MLA96873821523_102025-F.webp",
    ],

    categorias: [
      "Top Smartwatch",
      "Intermediário Premium",
      "Amazfit",
      "Para Esporte",
      "Para Saúde",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.2",
      cancelamentoRuido: false,
      bateriaHoras: 336, // até 14 dias
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android", "iOS"],
    },
  },

  {
    nome: "Garmin Venu Sq 2",
    topico: "Smartwatch",

    pros: [
      "Alta precisão nos sensores de saúde e atividades",
      "GPS integrado confiável",
      "Bateria excelente para a categoria",
      "Tela AMOLED com boa visibilidade",
      "Ótimo para treinos e esportes",
    ],

    contras: [
      "Design mais simples",
      "Interface menos intuitiva para iniciantes",
      "Preço elevado comparado a smartwatches sem foco esportivo",
    ],

    opiniao:
      "O Garmin Venu Sq 2 é ideal para quem prioriza esportes, métricas precisas e confiabilidade. Apesar do visual mais simples, ele entrega excelente desempenho em atividades físicas, GPS preciso e uma bateria que supera muitos concorrentes, sendo uma ótima escolha para usuários ativos.",

    veredito:
      "Smartwatch focado em esportes, precisão e autonomia, ideal para quem treina com frequência.",

    nota: 8.6,

    valor: 1599,

    links: ["https://mercadolivre.com/sec/2ApS9Ye"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_631732-MLA99931961609_112025-F.webp",
    ],

    categorias: [
      "Top Smartwatch",
      "Para Esporte",
      "Garmin",
      "GPS Integrado",
      "Saúde",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.1",
      cancelamentoRuido: false,
      bateriaHoras: 264, // até 11 dias
      resistenciaAgua: "5 ATM",
      microfone: false,
      controles: "Botão",
      compatibilidade: ["Android", "iOS"],
    },
  },

  {
    nome: "Samsung Galaxy Watch FE",
    topico: "Smartwatch",

    pros: [
      "Boa integração com celulares Samsung",
      "Tela AMOLED de ótima qualidade",
      "Recursos completos de saúde e bem-estar",
      "Desempenho sólido para o dia a dia",
      "Design moderno e confortável",
    ],

    contras: [
      "Autonomia de bateria apenas razoável",
      "Alguns recursos exclusivos para smartphones Samsung",
      "Carregamento não é dos mais rápidos",
    ],

    opiniao:
      "O Samsung Galaxy Watch FE é uma opção equilibrada para quem quer um smartwatch moderno, confiável e com preço mais acessível dentro do ecossistema Samsung. Ele entrega bons recursos de saúde, tela de qualidade e desempenho estável, sendo ideal para uso diário.",

    veredito:
      "Smartwatch intermediário bem equilibrado, especialmente indicado para usuários Samsung.",

    nota: 8.4,

    valor: 1110,

    links: ["https://mercadolivre.com/sec/1Fet3jM"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_974162-MLA99583763920_122025-F.webp",
    ],

    categorias: [
      "Top Smartwatch",
      "Intermediário",
      "Samsung",
      "Para Saúde",
      "Para Trabalho",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.3",
      cancelamentoRuido: false,
      bateriaHoras: 40,
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android"],
    },
  },

  {
    nome: "Amazfit GTS 4",
    topico: "Smartwatch",

    pros: [
      "Design leve e confortável",
      "Tela AMOLED com ótima nitidez",
      "Excelente autonomia de bateria",
      "GPS integrado preciso",
      "Compatível com Android e iOS",
    ],

    contras: [
      "Sistema próprio (Zepp OS)",
      "Loja de aplicativos limitada",
      "Não possui pagamentos por NFC no Brasil",
    ],

    opiniao:
      "O Amazfit GTS 4 é uma excelente escolha para quem busca um smartwatch leve, bonito e eficiente para o dia a dia. Ele se destaca pela ótima bateria, GPS confiável e boa variedade de recursos de saúde, sendo ideal tanto para atividades físicas quanto para uso casual.",

    veredito:
      "Smartwatch equilibrado, com ótima bateria e ideal para uso diário.",

    nota: 8.3,

    valor: 1199,

    links: ["https://mercadolivre.com/sec/19FJDDT"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_622383-MLA99568360732_122025-F.webp",
    ],

    categorias: [
      "Top Smartwatch",
      "Intermediário",
      "Amazfit",
      "Boa Bateria",
      "Para Saúde",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.2",
      cancelamentoRuido: false,
      bateriaHoras: 288, // até 12 dias
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android", "iOS"],
    },
  },

  {
    nome: "Huawei Watch Fit 3",
    topico: "Smartwatch",

    pros: [
      "Design moderno e muito leve",
      "Tela AMOLED grande e de ótima qualidade",
      "Excelente autonomia de bateria",
      "Recursos completos de saúde e exercícios",
      "Compatível com Android e iOS",
    ],

    contras: [
      "Não possui GPS tão avançado quanto modelos premium",
      "Sistema fechado, sem apps de terceiros",
      "Sem pagamentos por NFC no Brasil",
    ],

    opiniao:
      "O Huawei Watch Fit 3 é um smartwatch focado em leveza, conforto e bateria. Ele atende muito bem quem busca monitoramento de saúde, exercícios e uso diário, sendo uma das opções mais equilibradas entre preço, qualidade e autonomia.",

    veredito:
      "Smartwatch leve, moderno e com excelente bateria, ideal para o dia a dia.",

    nota: 8.1,

    valor: 799,

    links: ["https://mercadolivre.com/sec/1CCSCGc"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_792763-MLA99887228335_112025-F.webp",
    ],

    categorias: [
      "Top Smartwatch",
      "Custo-Benefício",
      "Huawei",
      "Boa Bateria",
      "Para Saúde",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.2",
      cancelamentoRuido: false,
      bateriaHoras: 240, // até 10 dias
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android", "iOS"],
    },
  },

  {
    nome: "Xiaomi Redmi Watch 4",
    topico: "Smartwatch",

    pros: [
      "Preço competitivo",
      "Tela AMOLED grande e de boa qualidade",
      "Boa autonomia de bateria",
      "Design moderno",
      "Compatível com Android e iOS",
    ],

    contras: [
      "Não possui GPS integrado",
      "Sistema simples, sem apps avançados",
      "Sensores mais básicos",
    ],

    opiniao:
      "O Xiaomi Redmi Watch 4 é um smartwatch focado em custo-benefício, ideal para quem quer recursos essenciais, boa tela e bateria sem gastar muito. É uma excelente opção para uso cotidiano e para quem está entrando no mundo dos smartwatches.",

    veredito:
      "Smartwatch acessível e funcional, ideal para quem busca economia.",

    nota: 7.9,

    valor: 494,

    links: ["https://mercadolivre.com/sec/2LzVfM5"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_731550-MLA99889596969_112025-F.webp",
    ],

    categorias: [
      "Top Smartwatch",
      "Custo-Benefício",
      "Xiaomi",
      "Para Uso Diário",
      "Boa Bateria",
    ],

    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.3",
      cancelamentoRuido: false,
      bateriaHoras: 240, // até 10 dias
      resistenciaAgua: "5 ATM",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android", "iOS"],
    },
  },

  {
    nome: "Haylou RS4 Plus AMOLED",
    topico: "Smartwatch",

    pros: [
      "Tela AMOLED de ótima qualidade",
      "Preço acessível",
      "Design moderno e fino",
      "Boa autonomia de bateria",
      "Compatível com Android e iOS",
    ],

    contras: [
      "Não possui GPS integrado",
      "Sistema simples",
      "Recursos avançados de saúde são limitados",
    ],

    opiniao:
      "O Haylou RS4 Plus é um smartwatch de entrada muito popular no Brasil, focado em custo-benefício. Ele entrega uma excelente tela AMOLED, boa bateria e recursos essenciais para o dia a dia, sendo ideal para quem quer um smartwatch funcional gastando pouco.",

    veredito:
      "Smartwatch acessível com tela AMOLED, ideal para quem busca economia e simplicidade.",

    nota: 7.6,

    valor: 156,

    links: ["https://mercadolivre.com/sec/1RUPiKW"],

    imagens: [
      "https://http2.mlstatic.com/D_NQ_NP_2X_969240-MLA98115149183_112025-F.webp",
    ],

    categorias: [
      "Oferta",
      "Smartwatch Barato",
      "Até 200R$",
      "Custo-Benefício",
      "Primeiro Smartwatch",
    ],
    criadoEm: new Date().toISOString(),

    destaque: false,

    detalhes: {
      tipo: "TWS",
      conectividade: "Bluetooth",
      bluetoothVersao: "5.1",
      cancelamentoRuido: false,
      bateriaHoras: 240, // até 10 dias
      resistenciaAgua: "IP68",
      microfone: true,
      controles: "Toque",
      compatibilidade: ["Android", "iOS"],
    },
  },
];
