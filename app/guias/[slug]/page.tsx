import CardBloco from "@/app/components/CardBloco";
import { buscarPublicacaoPorSlug } from "@/app/services/PublicacaoService";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

export default async function GuiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  console.log("Slug:", slug);

  if (!slug) {
    notFound();
  }

  const publicacao = await buscarPublicacaoPorSlug(slug);

  if (!publicacao) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: publicacao.titulo,
            description: publicacao.resumo,
            url: `https://vstechdigital.com.br/guias/${slug}`,
            publisher: {
              "@type": "Organization",
              name: "VS Tech Digital",
            },
          }),
        }}
      />

      <main className="bg-gray-50 dark:bg-zinc-950">
        <section className="max-w-4xl mx-auto px-6 py-16">
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold">
              {publicacao.titulo}
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              {publicacao.resumo}
            </p>
          </header>

          <article className="prose dark:prose-invert max-w-none">
            {publicacao.blocos?.length ? (
              publicacao.blocos.map((bloco, index) => (
                <CardBloco key={index} blocoConteudo={bloco} />
              ))
            ) : (
              <p>Conteúdo em produção.</p>
            )}
          </article>
        </section>
      </main>
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  if (!slug) return {};

  const publicacao = await buscarPublicacaoPorSlug(slug);

  if (!publicacao) return {};

  return {
    title: publicacao.titulo + " | VS Tech Digital",
    description: publicacao.resumo,
    alternates: {
      canonical: `https://vstechdigital.com.br/guias/${slug}`,
    },
    openGraph: {
      title: publicacao.titulo,
      description: publicacao.resumo,
      url: `https://vstechdigital.com.br/guias/${slug}`,
      siteName: "VS Tech Digital",
      type: "article",
    },
  };
}
