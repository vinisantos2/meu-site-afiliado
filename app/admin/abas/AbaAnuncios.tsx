"use client";

import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import {
  buscarTodosAnuncios,
  excluirAnuncio,
} from "@/app/services/anuncioService";
import { AnuncioComId } from "@/app/types/AnuncioBase";
import CardAnuncioAdmin from "../componentsAdmin/CardAnuncioAdmin";
import { useRouter } from "next/navigation";
import { TOPICOS } from "@/app/data/DataTopicos";
import ButtonPadrao from "@/app/components/BottonPadrao";
import CampoBuscaPadrao from "@/app/components/CampoBuscaPadrao";

export default function AbaAnunciosAdmin() {
  const [anuncios, setAnuncios] = useState<AnuncioComId[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const [busca, setBusca] = useState(""); // Busca por nome
  const [filtroTopico, setFiltroTopico] = useState(""); // Novo filtro por tópico

  const route = useRouter();

  useEffect(() => {
    fetchAnuncios();
  }, []);

  async function fetchAnuncios() {
    setLoading(true);
    const lista = await buscarTodosAnuncios();
    lista.sort(
      (a, b) => new Date(a.criadoEm).getTime() - new Date(b.criadoEm).getTime()
    );
    setAnuncios(lista);
    setLoading(false);
  }

  async function handleExcluir(id: string) {
    const confirmar = confirm("Tem certeza que deseja excluir este anúncio?");
    if (!confirmar) return;

    await excluirAnuncio(id);
    await fetchAnuncios();
  }

  if (loading) return <Loading />;

  // 🔥 FILTRO FINAL (busca + tópico)
  const anunciosFiltrados = anuncios.filter((anuncio) => {
    const combinaBusca = anuncio.nome
      .toLowerCase()
      .includes(busca.toLowerCase());
    const combinaTopico = filtroTopico ? anuncio.topico === filtroTopico : true;
    return combinaBusca && combinaTopico;
  });

  return (
    <section className="w-full">
      {/* Header */}

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Anúncios
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Gerencie todos os anúncios cadastrados
            </p>
          </div>
        </div>

        <ButtonPadrao
          texto="Novo anuncio"
          onClick={() => router.push("/admin/anuncio/novo")}
        />
      </div>

      {/* Busca + filtro */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Campo de busca */}

        <CampoBuscaPadrao
          value={busca}
          onChange={(value) => setBusca(value)}
          placeholder="Buscar anúncio pelo nome..."
        />

        {/* Select de tópico */}
        <div>
          <select
            value={filtroTopico}
            onChange={(e) => setFiltroTopico(e.target.value)}
            className="
              w-full p-3 rounded-lg border 
              bg-white text-gray-900 
              dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          >
            <option value="">Todos os tópicos</option>
            {TOPICOS.map((t, i) => (
              <option key={i} value={t.titulo}>
                {t.titulo}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Conteúdo */}
      {anunciosFiltrados.length === 0 ? (
        <div className="text-center py-16 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Nenhum anúncio encontrado.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {anunciosFiltrados.map((anuncio) => (
            <CardAnuncioAdmin
              key={anuncio.uid}
              anuncio={anuncio}
              onExcluir={() => handleExcluir(anuncio.uid)}
              onAtualizar={() => route.push(`/admin/anuncio/${anuncio.uid}`)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
