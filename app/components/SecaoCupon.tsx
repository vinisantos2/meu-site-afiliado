

import Link from "next/link";
import { CuponComId } from "@/app/types/Cupon";
import { buscarTodosCupons } from "@/app/services/CuponService";
import CardCupon from "./CardCupon";

export default async function SecaoCupon() {
  const dados: CuponComId[] = await buscarTodosCupons();
  const cupons = dados.filter((item) => item.destaque);

  return (
    <section className="py-12 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Título */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <h2 className="text-3xl font-extrabold text-blue-800 flex items-center justify-center sm:justify-start gap-2">
              🎟️ Cupons em destaque
            </h2>
            <p className="text-gray-600 text-sm">
              Economize nas melhores lojas com nossos cupons atualizados diariamente!
            </p>
          </div>
          <Link
            href="/cuponmania"
            className="hidden sm:inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition-colors font-medium"
          >
            Ver mais cupons
          </Link>
        </div>

        {/* Cupons */}
        {cupons.length === 0 ? (
          <p className="text-gray-500 text-center">Nenhum cupom disponível no momento.</p>
        ) : (
          <div
            className="
              grid 
              grid-cols-1
              sm:grid-cols-2 
              md:grid-cols-2 
              lg:grid-cols-2
              gap-6
              justify-items-center"
          >
            {cupons.slice(0, 6).map((cupon) => (
              <CardCupon key={cupon.uid} cupon={cupon} />
            ))}
          </div>
        )}

        {/* Botão Ver Mais (mobile) */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/cuponmania"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow transition-colors font-medium"
          >
            Ver mais cupons
          </Link>
        </div>
      </div>
    </section>
  );
}
