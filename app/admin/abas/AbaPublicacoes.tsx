"use client";

import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import {
  buscarTodasPublicacoes,
  excluirPublicacao,
} from "@/app/services/PublicacaoService";
import { useRouter } from "next/navigation";
import CardPublicacaoAdmin from "../componentsAdmin/CardPublicacaoAdmin";
import { PublicacaoComID } from "@/app/types/Publicacao";
import ButtonPadrao from "@/app/components/BottonPadrao";
import { OPCOES_TIPO_PUBLICACAO } from "@/app/data/Constants";
import SelectPadrao from "@/app/components/SelectPadrao";
import CampoBuscaPadrao from "@/app/components/CampoBuscaPadrao";

export default function AbaPublicacoes() {
  const [publicacoes, setPublicacoes] = useState<PublicacaoComID[]>([]);
  const [loading, setLoading] = useState(true);

  const [busca, setBusca] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetchPublicacoes();
  }, []);

  async function fetchPublicacoes() {
    setLoading(true);
    const lista = await buscarTodasPublicacoes();

    lista.sort(
      (a, b) => new Date(a.criadoEm).getTime() - new Date(b.criadoEm).getTime()
    );

    setPublicacoes(lista);
    setLoading(false);
  }

  async function handleExcluir(id: string) {
    const confirmar = confirm(
      "Tem certeza que deseja excluir esta publicação?"
    );
    if (!confirmar) return;

    await excluirPublicacao(id);
    await fetchPublicacoes();
  }

  if (loading) return <Loading />;

  // 🔍 FILTRO FINAL
  const publicacoesFiltradas = publicacoes.filter((pub) => {
    const combinaBusca = pub.titulo.toLowerCase().includes(busca.toLowerCase());

    const combinaTipo = filtroTipo ? pub.tipo === filtroTipo : true;

    return combinaBusca && combinaTipo;
  });

  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Publicações
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Gerencie guias, artigos e checklists
          </p>
        </div>

        <ButtonPadrao
          onClick={() => router.push("/admin/publicacao/nova")}
          texto="Nova publicação"
        />
      </div>

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
          value={filtroTipo}
          options={OPCOES_TIPO_PUBLICACAO}
          placeholder="Selecione o tipo"
          onChange={(value) => setFiltroTipo(value)}
        />
      </div>

      {/* Conteúdo */}
      {publicacoesFiltradas.length === 0 ? (
        <div className="text-center py-16 border rounded-lg bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Nenhuma publicação encontrada.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publicacoesFiltradas.map((pub) => (
            <CardPublicacaoAdmin
              key={pub.uid}
              publicacao={pub}
              onExcluir={() => handleExcluir(pub.uid)}
              onEditar={() => router.push(`/admin/publicacao/${pub.uid}`)}
            />
          ))}
        </div>
      )}
    </section>
  );
}
