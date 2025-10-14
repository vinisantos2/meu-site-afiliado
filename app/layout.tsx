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
  title: "VS-Tech Ofertas",
  description: "VS-Tech Ofertas é o seu espaço para descobrir as melhores promoções, novidades e dicas sobre tecnologia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased`}
      >
        {children}
          <Analytics /> {/* 👈 adiciona o componente de rastreamento */}
      </body>
    </html>
  );
}
