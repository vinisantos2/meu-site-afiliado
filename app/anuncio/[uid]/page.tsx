"use client";

import Image from "next/image";
import { use, useEffect, useState } from "react";
import { Anuncio } from "@/app/types/Anuncio";
import { buscarAnuncio } from "@/app/services/anuncioService";
import Loading from "@/app/components/Loading";
import BtnMercadoLivre from "@/app/components/BotaoMercadoLivre";
import BannerInicial from "@/app/components/BannerInicial";
import NavPadrao from "@/app/components/NavPadrao";

type PageProps = {
  params: {
    uid: string;
  };
};

export default function DetalheAnuncio({ params }: PageProps) {
  const { uid } = use(params);
  const [anuncio, setAnuncio] = useState<Anuncio | null>(null);

  useEffect(() => {
    async function carregar() {
      console.log("UID: " + uid);
      const dados = await buscarAnuncio(uid);
      console.log(dados);
      setAnuncio(dados);
    }
    carregar();
  }, [uid]);

  if (!anuncio) {
    return <Loading />;
  }

  return (
    <>
      <NavPadrao />
      <main className="mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Galeria de imagens */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-full h-[400px] bg-gray-100 flex justify-center items-center rounded-lg overflow-hidden">
              {anuncio ? (
                <img
                  src={anuncio.imagens?.[0] || "/placeholder.png"}
                  alt={anuncio.nome}
                  className="object-cover rounded-lg"
                />
              ) : (
                <Loading />
              )}
            </div>

            {anuncio.imagens.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto">
                {anuncio.imagens.map((img, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 border rounded-md overflow-hidden hover:scale-105 transition"
                  >
                    <img
                      src={img}
                      alt={`Imagem ${index + 1}`}
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Informações principais */}
          <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-3xl font-semibold mb-3 text-gray-800">
              {anuncio.nome}
            </h1>

            <BtnMercadoLivre link={anuncio.link} />

            <p className="text-sm text-gray-500 mt-3">
              Publicado em:{" "}
              {new Date(anuncio.criadoEm).toLocaleDateString("pt-BR")}
            </p>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                Informações do produto
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {anuncio.descricao}
              </p>
            </div>
          </div>
        </div>

        {/* Seção de detalhes abaixo */}
        <section className="mt-10 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Detalhes do produto
          </h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {anuncio.detalhes || "Nenhum detalhe adicional informado."}
          </p>
        </section>
      </main>
    </>
  );
}
