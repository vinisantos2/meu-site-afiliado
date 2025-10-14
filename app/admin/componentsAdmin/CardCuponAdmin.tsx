"use client";

import { Cupon } from "@/app/types/Cupon";
import { Edit, Trash2, ExternalLink } from "lucide-react";
import Link from "next/link";

interface CardCuponAdminProps {
  anuncio: Cupon;
  onExcluir: () => void;
  onAtualizar: () => void;
}

export default function CardCuponAdmin({
  anuncio,
  onExcluir,
  onAtualizar,
}: CardCuponAdminProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col justify-between border border-gray-200 dark:border-gray-700 hover:shadow-lg transition">
      {/* Título e Categoria */}
      <div className="mb-3">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
          {anuncio.titulo}
        </h3>
        <span className="inline-block bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 text-xs font-medium px-2 py-1 rounded">
          {anuncio.categoria}
        </span>
      </div>

      {/* Código e Desconto */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-800 dark:text-gray-200 font-semibold">
          Código:{" "}
          <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
            {anuncio.codigo}
          </span>
        </p>
        <p className="text-green-600 dark:text-green-400 font-bold text-sm">
          {anuncio.tipoDesconto === "percentual"
            ? `${anuncio.desconto}% OFF`
            : `R$ ${anuncio.desconto.toFixed(2)}`}
        </p>
      </div>

      {/* Regras ou detalhes */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 line-clamp-2">
        {anuncio.regras || anuncio.detalhes}
      </p>

      {/* Validade e status */}
      <div className="flex justify-between items-center text-xs mb-3">
        <span className="text-gray-500 dark:text-gray-400">
          Criado em: {anuncio.criadoEm}
        </span>
        <span
          className={`font-medium ${
            new Date(anuncio.validade) < new Date()
              ? "text-red-500"
              : "text-green-600"
          }`}
        >
          Válido até: {anuncio.validade}
        </span>
      </div>

      {/* Ações */}
      <div className="flex justify-between items-center mt-auto">
        <Link
          href={anuncio.link}
          target="_blank"
          className="flex items-center gap-1 text-blue-600 hover:underline text-sm"
        >
          <ExternalLink size={16} />
          Ver Oferta
        </Link>
        <div className="flex gap-2">
          <button
            onClick={onAtualizar}
            className="p-2 rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white transition"
            title="Editar"
          >
            <Edit size={16} />
          </button>
          <button
            onClick={onExcluir}
            className="p-2 rounded-lg bg-red-600 hover:bg-red-700 text-white transition"
            title="Excluir"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
