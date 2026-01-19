import { Metadata } from "next";

export const SEO_PADRAO: Metadata = {
  title: "VS Tech Digital | Ofertas em Tecnologia",
  description:
    "Encontre notebooks, smartphones, fones, smartwatches e cupons com os melhores preços da internet.",
  keywords: [
    "notebooks",
    "smartphones",
    "tecnologia",
    "ofertas",
    "cupons",
    "VS Tech Digital",
  ],
  authors: [{ name: "VS Tech Digital" }],
  creator: "VS Tech Digital",
  openGraph: {
    title: "VS Tech Digital",
    description:
      "As melhores ofertas em tecnologia, notebooks, celulares e acessórios.",
    url: "https://vstechdigital.com.br",
    siteName: "VS Tech Digital",
    images: [
      {
        url: "https://vstechdigital.com.br/imagens/VS-TECH-logo.png",
        width: 800,
        height: 600,
        alt: "VS Tech Digital",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};
