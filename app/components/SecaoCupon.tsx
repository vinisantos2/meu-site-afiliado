"use client";

import { useEffect, useState } from "react";
import { CuponComId } from "@/app/types/Cupon";
import CardCupon from "./CardCupon";
import { buscarTodosCupons } from "@/app/services/CuponService";
import Link from "next/link";

export default function SecaoCupon() {
  const [cupons, setCupons] = useState<CuponComId[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarCupons() {
      try {
        const dados = await buscarTodosCupons();
        setCupons(dados);
      } catch (error) {
        console.error("Erro ao carregar cupons:", error);
      } finally {
        setLoading(false);
      }
    }

    carregarCupons();
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">🎟️ Cupons</h2>
            <p className="text-gray-600 text-sm">
              Aproveite descontos exclusivos nas melhores lojas e serviços.
            </p>
          </div>
          <Link
            href="/cuponmania"
            className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Ver mais cupons
          </Link>
        </div>

        {/* Cupons */}
        {loading ? (
          <p className="text-gray-500 text-center">Carregando cupons...</p>
        ) : cupons.length === 0 ? (
          <p className="text-gray-500 text-center">Nenhum cupom disponível.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {cupons.slice(0, 6).map((cupon) => (
              <CardCupon key={cupon.uid} cupon={cupon} />
            ))}
          </div>
        )}

        {/* Botão Ver Mais (mobile) */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/cuponmania"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-colors font-medium"
          >
            Ver mais cupons
          </Link>
        </div>
      </div>
    </section>
  );
}
