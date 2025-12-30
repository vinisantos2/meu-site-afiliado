"use client";
import { useEffect, useState } from "react";
import CardPublicacao from "./components/CardPublicacao";
import { Publicacao } from "./types/Publicacao";
import { buscarTodasPublicacoes } from "./services/PublicacaoService";
import Loading from "./components/Loading";

export default function Publicacoes() {
  const [publicacoes, setPublicacoes] = useState<Array<Publicacao>>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchPublicacoes() {
      setLoading(true);
      const lista = await buscarTodasPublicacoes();

      setPublicacoes(lista);
      setLoading(false);
    }

    fetchPublicacoes();
  }, []);

  if (loading) return <Loading />;
  return (
    <section id="publicacoes" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {publicacoes.map((publicacao) => (
          <CardPublicacao key={publicacao.slug} publicacao={publicacao} />
        ))}
      </div>
    </section>
  );
}
