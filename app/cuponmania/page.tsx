"use client";

import { useEffect, useState } from "react";
import { CuponComId } from "@/app/types/Cupon";
import { buscarTodosCupons } from "@/app/services/CuponService";
import { ChevronDown, Filter } from "lucide-react";
import NavPadrao from "../components/NavPadrao";
import CardCupon from "../components/CardCupon";

export default function ListaCupons() {
  const [cupons, setCupons] = useState<CuponComId[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");
  const [ordenarPorVencimento, setOrdenarPorVencimento] = useState(false);
  const [categorias, setCategorias] = useState<string[]>([]);

  useEffect(() => {
    const carregar = async () => {
      const data = await buscarTodosCupons();
      setCupons(data);
      const categoriasUnicas = Array.from(
        new Set(data.map((c) => c.categoria).filter(Boolean))
      );
      setCategorias(categoriasUnicas);
    };
    carregar();
  }, []);

  const cuponsFiltrados = cupons
    .filter(
      (c) => !categoriaSelecionada || c.categoria === categoriaSelecionada
    )
    .sort((a, b) => {
      if (ordenarPorVencimento) {
        return new Date(a.validade).getTime() - new Date(b.validade).getTime();
      }
      return 0;
    });

  return (
    <>
      <NavPadrao />
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 transition-colors duration-300">
        {/* Filtros */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          {/* Filtro por categoria */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
            <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-medium text-sm">
              <Filter size={18} />
              <span>Filtrar por categoria:</span>
            </div>
            <select
              value={categoriaSelecionada}
              onChange={(e) => setCategoriaSelecionada(e.target.value)}
              className="border dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-48"
            >
              <option value="">Todas</option>
              {categorias.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Botão de ordenação */}
          <button
            onClick={() => setOrdenarPorVencimento((prev) => !prev)}
            className={`flex items-center justify-center gap-2 border rounded-lg px-4 py-2 text-sm font-medium transition-colors w-full sm:w-auto ${
              ordenarPorVencimento
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600"
            }`}
          >
            Ordenar por vencimento
            <ChevronDown
              size={16}
              className={`${
                ordenarPorVencimento ? "rotate-180" : ""
              } transition-transform`}
            />
          </button>
        </div>

        {/* Grid de cupons */}
        {cuponsFiltrados.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-center py-12 text-lg">
            Nenhum cupom encontrado 😕
          </p>
        ) : (
          <div
            className="
              grid 
              grid-cols-2
              sm:grid-cols-2 
              md:grid-cols-3 
              lg:grid-cols-3
              gap-6
              justify-items-center
            "
          >
            {cuponsFiltrados.map((cupon) => (
              <CardCupon key={cupon.uid} cupon={cupon} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}
