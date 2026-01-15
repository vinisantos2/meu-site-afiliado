import CardBloco from "@/app/components/CardBloco";
import NavPadrao from "@/app/components/NavPadrao";
import { buscarPublicacaoPorSlug } from "@/app/services/PublicacaoService";
import { notFound } from "next/navigation";

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
    <main className="bg-gray-50 dark:bg-zinc-950">
      <NavPadrao />

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
          {publicacao?.blocos &&
            publicacao.blocos.map((bloco) => (
              <CardBloco blocoConteudo={bloco} />
            ))}
        </article>
      </section>
    </main>
  );
}
