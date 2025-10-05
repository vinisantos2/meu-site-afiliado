"use client";

import { useEffect, useState } from "react";
import { Anuncio } from "@/app/types/Anuncio";
import { buscarTodosAnuncios } from "./services/anuncioService";
import SecaoDestaque from "./components/SecaoDestaque";
import BannerInicial from "./components/BannerInicial";

export default function Home() {
  const [anuncios, setAnuncios] = useState<Anuncio[]>([]);
  const [anunciosDestaque, setAnunciosDestaque] = useState<Anuncio[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarTodosAnuncios();
        setAnunciosDestaque(dados.filter((item) => item.destaque));
        setAnuncios(dados);
      } catch (error) {
        console.error("Erro ao buscar anúncios:", error);
      } finally {
        setLoading(false);
      }
    }

    carregar();
  }, []);


  return (
    <div className="font-sans min-h-screen bg-gray-50">
      {/* Bannner inicial */}
      <BannerInicial />

      {/* Corpo com subtítulos */}
      <main className="max-w-6xl mx-auto p-6">
       <SecaoDestaque loading={loading} anunciosDestaque={anunciosDestaque} />

        {/* Seção 2 */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">📘 Últimas Dicas</h2>
          <p className="text-gray-700">
            Aqui você vai encontrar comparativos, listas dos melhores produtos e
            recomendações de tecnologia para todos os bolsos.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p className="text-sm">
          © 2025 Tech Ofertas - Todos os direitos reservados.
          <br /> Este site participa do programa de afiliados do Mercado Livre.
        </p>
      </footer>
    </div>
  );
}
