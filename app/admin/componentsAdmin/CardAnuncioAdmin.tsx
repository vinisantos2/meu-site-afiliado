import { Anuncio } from "@/app/types/Anuncio";
import Link from "next/link";

interface CardAnuncioAdminProps {
  anuncio: Anuncio;
  onExcluir: () => void;
  onAtualizar: () => void;
}

export default function CardAnuncioAdmin({
  anuncio,
  onExcluir,
  onAtualizar,
}: CardAnuncioAdminProps) {
  return (
    <div className="border rounded-lg shadow-md hover:shadow-lg transition bg-white dark:bg-gray-800 p-4 flex flex-col">
      {/* Imagem */}
      <img
        src={anuncio.imagem}
        alt={anuncio.nome}
        className="rounded mb-4 w-full h-40 object-cover"
      />

      {/* Conteúdo */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {anuncio.nome}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
        {anuncio.descricao}
      </p>
      <p className="text-lg font-bold text-gray-800 dark:text-gray-200 mt-3">
        R$ {anuncio.preco}
      </p>

      {/* Link externo */}
      {anuncio.link && (
        <Link
          href={anuncio.link}
          target="_blank"
          className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm text-center"
        >
          Ver no Mercado Livre
        </Link>
      )}

      {/* Ações */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={onAtualizar}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded text-sm transition"
        >
          Editar
        </button>
        <button
          onClick={onExcluir}
          className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded text-sm transition"
        >
          Excluir
        </button>
      </div>
    </div>
  );
}
