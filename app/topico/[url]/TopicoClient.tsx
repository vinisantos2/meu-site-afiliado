"use client";

import { useEffect, useState } from "react";
import CardAnuncio from "@/app/components/CardAnuncio";
import Loading from "@/app/components/Loading";
import { useSearchParams } from "next/navigation";
import { AnuncioComId } from "@/app/types/AnuncioBase";

type Props = {
  anunciosIniciais: AnuncioComId[];
  topicoAtual: {
    titulo: string;
    texto?: string;
    categorias?: string[];
  };
};

export default function TopicoClient({
  anunciosIniciais,
  topicoAtual,
}: Props) {
  const [anuncios, setAnuncios] = useState<AnuncioComId[]>([]);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const categoriaParam = searchParams.get("categoria");

  const categoriasDoTopico = topicoAtual.categorias || [];

  /* ===============================
     CATEGORIA PADRÃO
  =============================== */

  const categoriaTop =
    categoriasDoTopico.find((c) => c.toLowerCase().includes("top")) ??
    categoriasDoTopico[0] ??
    null;

  const [categoria, setCategoria] = useState<string | null>(null);

  useEffect(() => {
    if (categoriaParam) {
      setCategoria(categoriaParam);
      return;
    }

    if (categoriaTop) {
      setCategoria(categoriaTop);
      return;
    }

    setCategoria(null);
  }, [categoriaParam, categoriaTop]);

  /* ===============================
     FILTRAGEM
  =============================== */

  useEffect(() => {
    const filtrados = anunciosIniciais
      .filter((item) => item.topico === topicoAtual.titulo)
      .filter((item) => {
        if (!categoria) return true;
        return item.categorias?.includes(categoria);
      })
      .sort((a, b) => (b.nota ?? 5) - (a.nota ?? 5))
      .slice(0, 10);

    setAnuncios(filtrados);
    setLoading(false);
  }, [categoria, anunciosIniciais, topicoAtual.titulo]);

  /* ===============================
     LOADING
  =============================== */

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loading />
      </div>
    );
  }

  /* ===============================
     RENDER
  =============================== */

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-6">
      <div className="max-w-4xl mx-auto bg-gray-50 dark:bg-[#1f1f1f] p-6 md:p-10 rounded-xl shadow-lg border border-gray-200 dark:border-[#333]">

        <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
          {topicoAtual.titulo} — Ranking atualizado
        </h1>

        {topicoAtual.texto && (
          <p className="text-center text-gray-700 dark:text-gray-300 mb-10">
            {topicoAtual.texto}
          </p>
        )}

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-10">
          Alguns links podem gerar comissão e ajudam a manter este projeto no ar,
          sem custo extra para você.
        </p>

        {/* ===============================
            FILTRO DE CATEGORIAS
        =============================== */}

        {categoriasDoTopico.length > 0 && (
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categoriasDoTopico.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategoria(cat)}
                className={`px-4 py-2 rounded-full border transition
                  ${
                    categoria === cat
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* ===============================
            RESULTADOS
        =============================== */}

        {anuncios.length > 0 ? (
          <div className="flex flex-col gap-8 items-center">
            {anuncios.map((item, index) => (
              <div key={item.uid} className="w-full md:w-[70%]">
                <CardAnuncio index={index} anuncio={item} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-20">
            <p className="text-lg font-medium">
              Nenhum anúncio nessa categoria
            </p>
            <p className="text-sm mt-1">Tente outra categoria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
