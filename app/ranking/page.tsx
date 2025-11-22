"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnuncioComId } from "@/app/types/Anuncio";
import { buscarTodosAnuncios } from "../services/anuncioService";
import CardRanking from "../components/CardRanking";

export default function Ranking() {
  const searchParams = useSearchParams();
  const categoriaUrl = searchParams.get("categoria") || "";

  const [anuncios, setAnuncios] = useState<AnuncioComId[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoria, setCategoria] = useState<string>(categoriaUrl);

  useEffect(() => {
    async function carregarAnuncios() {
      try {
        const dados = await buscarTodosAnuncios();
        const ordenados = dados.sort((a, b) => a.ranking - b.ranking);
        setAnuncios(ordenados);
      } catch (e) {
        console.error("Erro ao buscar anúncios:", e);
      } finally {
        setLoading(false);
      }
    }

    carregarAnuncios();
  }, []);

  useEffect(() => {
    if (categoriaUrl) setCategoria(categoriaUrl);
  }, [categoriaUrl]);

  if (loading)
    return (
      <div className="p-4 text-center text-gray-600 dark:text-gray-300">
        Carregando ranking...
      </div>
    );

  const categorias = Array.from(new Set(anuncios.map((a) => a.topico))).sort();
  const filtrados = anuncios.filter((a) => a.topico === categoria);

  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto space-y-6">
        
        {/* TÍTULO */}
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
          Ranking de {categoria}
        </h1>

        {/* SELECT FILTRADO */}
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">
            Filtrar categoria
          </label>

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="
              w-full p-3 rounded-lg border 
              bg-white dark:bg-gray-800 
              border-gray-300 dark:border-gray-700
              text-gray-800 dark:text-gray-200
              shadow-sm transition
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            "
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* LISTA DE CARDS */}
        <div className="space-y-4">
          {filtrados.map((item, index) => (
            <CardRanking key={item.uid} anuncio={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
