"use client";

import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useRouter } from "next/navigation";
import { CuponComId } from "@/app/types/Cupon";
import { buscarTodosCupons, excluirCupon } from "@/app/services/CuponService";
import CardCuponAdmin from "../componentsAdmin/CardCuponAdmin";
import CampoBuscaPadrao from "@/app/components/CampoBuscaPadrao";
import SelectPadrao from "@/app/components/SelectPadrao";
import { OPCOES_TIPO_PUBLICACAO } from "@/app/data/Constants";
import ButtonPadrao from "@/app/components/BottonPadrao";
import { TOPICOS } from "@/app/data/DataTopicos";

export default function AbaCuponsAdmin() {
  const [cupons, setCupons] = useState<CuponComId[]>([]);
  const [loading, setLoading] = useState(true);

  const [busca, setBusca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetchCupons();
  }, []);

  async function fetchCupons() {
    setLoading(true);
    const lista = await buscarTodosCupons();
    setCupons(lista);
    setLoading(false);
  }

  async function handleExcluir(id: string) {
    const confirmar = confirm("Tem certeza que deseja excluir este cupom?");
    if (!confirmar) return;

    await excluirCupon(id);
    await fetchCupons();
  }

  // 🔎 Filtro + busca
  const cuponsFiltrados = cupons.filter((cupon) => {
    const matchBusca = cupon.titulo.toLowerCase().includes(busca.toLowerCase());

    const matchTipo = filtroTipo ? cupon.categoria === filtroTipo : true;

    return matchBusca && matchTipo;
  });

  if (loading) return <Loading />;

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Cupons
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Gerencie todos os cupons cadastrados
          </p>
        </div>

        <ButtonPadrao
          texto="+ Novo Cupom"
          onClick={() => router.push("/admin/cupon/novo")}
        />
      </div>

      {/* Filtros */}
      <section className="border-b bg-white dark:bg-zinc-900 dark:border-zinc-800 mb-8">
        <div
          className="
            max-w-6xl
            px-6 py-6
            grid grid-cols-1 sm:grid-cols-3
            gap-4
          "
        >
          {/* Busca */}
          <div className="sm:col-span-2">
            <CampoBuscaPadrao
              value={busca}
              onChange={setBusca}
              placeholder="Buscar cupom pelo título..."
            />
          </div>

          {/* Filtro */}
          <SelectPadrao
            value={filtroTipo}
            options={TOPICOS.map((item) => ({
              label: item.titulo,
              value: item.titulo,
            }))}
            placeholder="Tipo de cupom"
            onChange={setFiltroTipo}
          />
        </div>
      </section>

      {/* Conteúdo */}
      {cuponsFiltrados.length === 0 ? (
        <div
          className="
            text-center py-16
            border border-zinc-200 dark:border-zinc-800
            rounded-lg
            bg-zinc-50 dark:bg-zinc-900
          "
        >
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Nenhum cupom encontrado.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuponsFiltrados.map((cupon) => (
            <CardCuponAdmin
              key={cupon.uid}
              anuncio={cupon}
              onExcluir={() => handleExcluir(cupon.uid)}
              onAtualizar={() => router.push(`/admin/cupon/${cupon.uid}`)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
