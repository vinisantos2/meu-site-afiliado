"use client";

import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import {
  excluirAnuncio,
} from "@/app/services/anuncioService";
import { useRouter } from "next/navigation";
import { CuponComId } from "@/app/types/Cupon";
import { buscarTodosCupons } from "@/app/services/CuponService";
import CardCuponAdmin from "../componentsAdmin/CardCuponAdmin";

export default function AbaCuponsAdmin() {
  const [anuncios, setAnuncios] = useState<CuponComId[]>([]);
  const [loading, setLoading] = useState(true);
  const route = useRouter();

  useEffect(() => {
    fetchAnuncios();
  }, []);

  async function fetchAnuncios() {
    setLoading(true);
    const lista = await buscarTodosCupons();
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

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Cupons
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gerencie todos os Cupons cadastrados
          </p>
        </div>
      </div>

      {/* Conteúdo */}
      {anuncios.length === 0 ? (
        <div className="text-center py-16 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Nenhum anúncio encontrado.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {anuncios.map((anuncio) => (
            <CardCuponAdmin
              key={anuncio.uid}
              anuncio={anuncio}
              onExcluir={() => handleExcluir(anuncio.uid)}
              onAtualizar={() => route.push(`/admin/cupon/${anuncio.uid}`)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
