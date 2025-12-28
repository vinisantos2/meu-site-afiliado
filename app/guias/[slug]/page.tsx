import CardBloco from "@/app/components/CardBloco";
import NavPadrao from "@/app/components/NavPadrao";
import { PUBLICACOES } from "@/app/data/Categorias";
import { notFound } from "next/navigation";
import { use } from "react";

export default function GuiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const publicacao = PUBLICACOES.find((item) => item.slug === slug);

  if (!publicacao) {
    notFound();
  }

  return (
    <main className="bg-gray-50 dark:bg-zinc-950">
      <NavPadrao />
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Cabeçalho */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
            {publicacao.titulo}
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
            {publicacao.resumo}
          </p>
        </header>

        {/* Conteúdo */}
        <article className="prose dark:prose-invert max-w-none">
          {publicacao.blocos.map((bloco, index) => (
            <CardBloco key={index} blocoConteudo={bloco} />
          ))}
        </article>

        {/* CTA */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
            Quer comparar os melhores modelos?
          </h3>

          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Veja rankings atualizados e análises completas para escolher com
            mais segurança.
          </p>

          <a
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
          >
            Ver rankings agora →
          </a>
        </div>
      </section>
    </main>
  );
}
