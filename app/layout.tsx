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
  title: "VS-Tech Ofertas | Cupons, Descontos e Promoções de Tecnologia",
  description:
    "VS-Tech Ofertas é o seu espaço para descobrir as melhores promoções, cupons de desconto e novidades do mundo da tecnologia — atualizado diariamente para você economizar mais!",
  keywords: [
    "promoções",
    "cupons de desconto",
    "ofertas",
    "tecnologia",
    "VS-Tech Ofertas",
    "descontos",
    "produtos de tecnologia",
    "compras online",
  ],
  openGraph: {
    title: "VS-Tech Ofertas | Cupons e Promoções Atualizadas",
    description:
      "Descubra cupons de desconto e ofertas incríveis em produtos de tecnologia. Atualizado todos os dias!",
    type: "website",
    locale: "pt_BR",
    url: "https://www.seusite.com", // 👉 substitua pelo seu domínio real
    siteName: "VS-Tech Ofertas",
  },
  twitter: {
    card: "summary_large_image",
    title: "VS-Tech Ofertas | Cupons e Promoções",
    description:
      "Encontre cupons de desconto e ofertas exclusivas em tecnologia — atualizado diariamente!",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable}  text-gray-900 antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
