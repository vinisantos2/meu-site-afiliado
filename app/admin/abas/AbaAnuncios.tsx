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
import SelectPadrao from "@/app/components/SelectPadrao";

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

  // 🔥 FILTRO FINAL (busca + tópico) com tratamento
  const anunciosFiltrados = anuncios.filter((anuncio, index) => {
    // 🔍 Validação defensiva
    if (!anuncio || typeof anuncio !== "object") {
      console.error("❌ Anúncio inválido (não é objeto):", anuncio);
      return false;
    }

    if (typeof anuncio.nome !== "string") {
      console.error("❌ Anúncio com nome inválido:", {
        index,
        anuncio,
      });
      return false;
    }

    if (typeof anuncio.topico !== "string") {
      console.error("❌ Anúncio com tópico inválido:", {
        index,
        anuncio,
      });
      return false;
    }

    // ✅ Busca segura
    const combinaBusca = anuncio.nome
      .toLowerCase()
      .includes(busca.toLowerCase());

    // ✅ Filtro por tópico
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
      {/* Busca + filtro */}
      <div className="mb-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Busca */}
        <div className="col-span-2">
          <CampoBuscaPadrao
            value={busca}
            onChange={setBusca}
            placeholder="Buscar publicação pelo título..."
          />
        </div>

        {/* Filtro por tipo */}
        <SelectPadrao
          value={filtroTopico}
          options={TOPICOS.map((item) => ({
            label: item.titulo,
            value: item.titulo,
          }))}
          placeholder="Selecione o tipo"
          onChange={(value) => setFiltroTopico(value)}
        />
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
