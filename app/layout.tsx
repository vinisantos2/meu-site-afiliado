import Footer from "./Footer";
import "./globals.css";
import HeaderSite from "./Header";
import { ThemeProvider } from "./providers/ThemeProvider";
import { SEO_PADRAO } from "./seo";

export const metadata = SEO_PADRAO;


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-950">
        <HeaderSite />

        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
