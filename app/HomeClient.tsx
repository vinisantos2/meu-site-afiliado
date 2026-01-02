"use client";

import { useState } from "react";
import Publicacoes from "./Publicacoes";
import SelectPadrao from "./components/SelectPadrao";
import CampoBuscaPadrao from "./components/CampoBuscaPadrao";
import { OPCOES_TIPO_PUBLICACAO } from "./data/Constants";
import { Publicacao } from "./types/Publicacao";

type Props = {
  publicacoes: Publicacao[];
};

export default function HomeClient({ publicacoes }: Props) {
  const [filtroTipo, setFiltroTipo] = useState("");
  const [busca, setBusca] = useState("");

  const publicacoesFiltradas = publicacoes.filter((p) => {
    const combinaTipo = filtroTipo ? p.tipo === filtroTipo : true;
    const combinaBusca = p.titulo
      .toLowerCase()
      .includes(busca.toLowerCase());

    return combinaTipo && combinaBusca;
  });

  return (
    <main>
      {/* Filtros */}
      <section className="border-b bg-white">
        <div
          className="
            max-w-6xl mx-auto
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
              placeholder="Buscar publicação pelo título..."
            />
          </div>

          {/* Filtro */}
          <SelectPadrao
            value={filtroTipo}
            options={OPCOES_TIPO_PUBLICACAO}
            placeholder="Tipo de conteúdo"
            onChange={setFiltroTipo}
          />
        </div>
      </section>

      <Publicacoes publicacoes={publicacoesFiltradas} />
    </main>
  );
}
