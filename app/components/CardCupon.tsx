"use client";

import { CuponComId } from "@/app/types/Cupon";
import { Tag, Percent, ExternalLink, Info } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ModalRegrasCupon from "./ModalRegrasCupon";

type Props = {
  cupon: CuponComId;
};

export default function CardCupon({ cupon }: Props) {
  const [abrirModal, setAbrirModal] = useState(false);

  return (
    <>
      <div
        className={`relative flex flex-col justify-between bg-white shadow-lg rounded-2xl p-4 border hover:shadow-xl transition-all duration-300 
        w-full sm:w-72 md:w-80 lg:w-96 
        ${cupon.destaque ? "border-yellow-400 shadow-yellow-100" : "border-gray-200"}`}
      >
        {/* Badge de destaque */}
        {cupon.destaque && (
          <div className="absolute top-2 right-2 bg-yellow-400 text-white text-[10px] sm:text-xs font-bold px-2 py-1 rounded-full shadow-sm">
            Destaque
          </div>
        )}

        {/* Cabeçalho */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-gray-800 break-words">
            {cupon.titulo}
          </h3>
          <p
            title={cupon.regras}
            className="text-gray-500 text-xs sm:text-sm line-clamp-2"
          >
            {cupon.regras}
          </p>
        </div>

        {/* Código do cupom */}
        <div className="mt-3 flex flex-wrap sm:flex-nowrap items-center justify-between bg-gray-100 border rounded-lg px-3 py-2 gap-2">
          <span className="font-mono text-sm sm:text-base font-semibold text-gray-800 break-all">
            {cupon.codigo}
          </span>
          <button
            onClick={() => navigator.clipboard.writeText(cupon.codigo)}
            className="text-blue-600 text-xs sm:text-sm font-medium hover:underline"
          >
            Copiar
          </button>
        </div>

        {/* Desconto */}
        <div className="mt-4 flex items-center gap-2 text-base sm:text-lg font-bold text-green-600">
          {cupon.tipoDesconto === "percentual" ? (
            <Percent size={20} />
          ) : (
            <Tag size={20} />
          )}
          {cupon.tipoDesconto === "percentual"
            ? `${cupon.desconto}% OFF`
            : `R$ ${cupon.desconto.toFixed(2)}`}
        </div>

        {/* Data de validade */}
        <p className="text-gray-400 text-[11px] sm:text-xs mt-1">
          Válido até:{" "}
          <span className="font-medium text-gray-600">
            {new Date(cupon.validade).toLocaleDateString("pt-BR")}
          </span>
        </p>

        {/* Botão de regras */}
        <button
          onClick={() => setAbrirModal(true)}
          className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-600 hover:text-blue-600 transition-colors"
        >
          <Info size={16} />
          Regras do cupom
        </button>

        {/* Botão de ação */}
        <Link
          href={cupon.link}
          target="_blank"
          className="mt-3 inline-flex items-center justify-center gap-2 w-full bg-blue-600 text-white text-sm sm:text-base font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Usar Cupom
          <ExternalLink size={18} />
        </Link>
      </div>

      {abrirModal && (
        <ModalRegrasCupon cupon={cupon} onClose={() => setAbrirModal(false)} />
      )}
    </>
  );
}
