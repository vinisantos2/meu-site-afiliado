"use client";

import {  useEffect, useState } from "react";
import { AnuncioBase } from "@/app/types/AnuncioBase";
import { buscarAnuncio } from "@/app/services/anuncioService";
import Loading from "@/app/components/Loading";
import NavPadrao from "@/app/components/NavPadrao";

type PageProps = {
  params: {
    uid: string;
  };
};

export default function DetalheAnuncio({ params }: PageProps) {
  const  uid  = params.uid;
  const [anuncio, setAnuncio] = useState<AnuncioBase | null>(null);
  const [imagemSelecionada, setImagemSelecionada] = useState<string | null>(
    null
  );

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarAnuncio(uid);
        setAnuncio(dados);
        if (dados?.imagens?.[0]) setImagemSelecionada(dados.imagens[0]);
      } catch (err) {
        console.error("Erro ao carregar anúncio:", err);
      }
    }
    carregar();
  }, [uid]);

  if (!anuncio) return <Loading />;

  return (
    <>
      <NavPadrao />
      <main className="mx-auto px-4 py-10 max-w-6xl text-gray-800 dark:text-gray-100 transition-colors duration-300">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Galeria de imagens */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 flex justify-center items-center rounded-xl overflow-hidden shadow-lg">
              <img
                src={imagemSelecionada || "/placeholder.png"}
                alt={anuncio.nome}
                className="max-h-full object-contain"
              />
            </div>

            {anuncio.imagens.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {anuncio.imagens.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setImagemSelecionada(img)}
                    className={`w-20 h-20 border rounded-lg overflow-hidden transition transform hover:scale-105 ${
                      imagemSelecionada === img
                        ? "border-blue-600 dark:border-blue-400"
                        : "border-gray-300 dark:border-gray-600"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Imagem ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Informações principais */}
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
              {anuncio.nome}
            </h1>

           

            

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
              Publicado em:{" "}
              {new Date(anuncio.criadoEm).toLocaleDateString("pt-BR")}
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                Informações do produto
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             
              </p>
            </div>
          </div>
        </div>

        {/* Seção de detalhes abaixo */}
        <section className="mt-10 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Detalhes do produto
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
           
          </p>
        </section>
      </main>
    </>
  );
}
