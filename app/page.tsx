"use client";

import { useEffect, useState } from "react";
import { buscarTodosAnuncios } from "./services/anuncioService";
import SecaoDestaque from "./components/SecaoDestaque";
import NavInicial from "./components/NavInicial";
import { AnuncioComId } from "./types/Anuncio";
import SecaoCupon from "./components/SecaoCupon";

export default function Home() {
  const [anunciosDestaque, setAnunciosDestaque] = useState<AnuncioComId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregar() {
      try {
        const dados = await buscarTodosAnuncios();
        setAnunciosDestaque(dados.filter((item) => item.destaque));
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
      <NavInicial />
      <main className="max-w-6xl mx-auto p-5">
        <SecaoDestaque loading={loading} anunciosDestaque={anunciosDestaque} />
        <SecaoCupon />
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p className="text-sm">
          © 2025 Tech Ofertas - Todos os direitos reservados.
          <br /> Este site participa do programa de afiliados do Mercado Livre.
        </p>
      </footer>
    </div>
  );
}
