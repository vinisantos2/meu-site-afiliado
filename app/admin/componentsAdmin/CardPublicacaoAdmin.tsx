"use client";

import { PublicacaoComID } from "@/app/services/PublicacaoService";

type Props = {
  publicacao: PublicacaoComID;
  onExcluir: () => void;
  onEditar: () => void;
};

export default function CardPublicacaoAdmin({
  publicacao,
  onExcluir,
  onEditar,
}: Props) {
  return (
    <div className="border rounded-lg p-4 bg-white dark:bg-gray-900 dark:border-gray-800 flex flex-col justify-between">
      <div className="space-y-2">
        <span className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400">
          {publicacao.tipo}
        </span>

        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 line-clamp-2">
          {publicacao.titulo}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
          {publicacao.resumo}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span
          className={`text-xs font-medium px-2 py-1 rounded ${
            publicacao.publicado
              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
          }`}
        >
          {publicacao.publicado ? "Publicado" : "Rascunho"}
        </span>

        <div className="flex gap-2">
          <button
            onClick={onEditar}
            className="text-sm px-3 py-1 rounded border hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            Editar
          </button>
          <button
            onClick={onExcluir}
            className="text-sm px-3 py-1 rounded border border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-900"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
