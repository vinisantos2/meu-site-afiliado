"use client";

import { use, useEffect, useState } from "react";
import CardAnuncio from "@/app/components/CardAnuncio";
import Loading from "@/app/components/Loading";
import { buscarTodosAnuncios } from "@/app/services/anuncioService";
import { Anuncio } from "@/app/types/Anuncio";

type PageProps = {
  params: {
    url: string;
  };
};

export default function Topico({ params }: PageProps) {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
  const [loading, setLoading] = useState(true);

  const { url } = use(params);

  useEffect(() => {
    async function carregarDados() {
      setLoading(true);
      const todos = await buscarTodosAnuncios();
      const filtrados = todos.filter((item) => item.topico === url);
      setAnuncios(filtrados);
      setLoading(false);
    }

    carregarDados();
  }, [url]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loading />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-8 capitalize text-center">
          {url.replace(/-/g, " ")}
        </h1>

        {anuncios.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {anuncios.map((item) => (
              <CardAnuncio key={item.uid} anuncio={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center text-gray-600 dark:text-gray-400 mt-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4 text-gray-400 dark:text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-9-12v12m0 0l3.75-3.75M12 16.5l-3.75-3.75"
              />
            </svg>
            <p className="text-lg font-medium">
              Nenhum anúncio disponível ainda
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Volte mais tarde ou explore outros tópicos.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
