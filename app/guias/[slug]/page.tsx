"use client";
import CardBloco from "@/app/components/CardBloco";
import Loading from "@/app/components/Loading";
import NavPadrao from "@/app/components/NavPadrao";
import { buscarPublicacaoPorSlug } from "@/app/services/PublicacaoService";
import { Publicacao } from "@/app/types/Publicacao";
import { notFound } from "next/navigation";
import { use, useEffect, useState } from "react";

export default function GuiaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const [publicacao, setPublicacao] = useState<Publicacao | null>(null);

  const [loading, setLoading] = useState(true);
  const { slug } = use(params);

  useEffect(() => {
    async function fetchPublicacao() {
      try {
        const data = await buscarPublicacaoPorSlug(slug);

        console.log(data);

        console.log("Slug recebido:", slug);

        if (!data) {
          notFound();
          return;
        }

        setPublicacao(data);
      } finally {
        setLoading(false);
      }
    }

    fetchPublicacao();
  }, [slug]);

  if (loading) return <Loading />;

  return (
    <main className="bg-gray-50 dark:bg-zinc-950">
      <NavPadrao />
      <section className="max-w-4xl mx-auto px-6 py-16">
        {/* Cabeçalho */}
        <header className="mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 leading-tight">
            {publicacao?.titulo}
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl">
            {publicacao?.resumo}
          </p>
        </header>

        {/* Conteúdo */}
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
