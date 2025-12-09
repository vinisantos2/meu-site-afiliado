import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech Ranking | Análises e Comparativos de Tecnologia",
  description:
    "Tech Ranking é um site independente de análises, rankings e comparações de produtos de tecnologia. Encontre os melhores smartphones, notebooks e acessórios com foco em custo-benefício.",
  keywords: [
    "análises de tecnologia",
    "comparativo de smartphones",
    "ranking de celulares",
    "melhor custo benefício",
    "reviews de produtos",
    "notebooks",
    "smartphones",
    "produtos de tecnologia",
    "Tech Ranking",
    "VS-Tech afiliados",
  ],
  openGraph: {
    title: "Tech Ranking | Rankings e Reviews de Tecnologia",
    description:
      "Compare produtos de tecnologia, veja rankings atualizados e escolha com segurança o melhor custo-benefício.",
    type: "website",
    locale: "pt_BR",
    url: "https://www.seusite.com", // substitua pelo domínio final
    siteName: "Tech Ranking",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Ranking | Reviews e Rankings de Tecnologia",
    description:
      "Análises e comparações de produtos de tecnologia para você comprar com mais segurança.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-gray-900 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
