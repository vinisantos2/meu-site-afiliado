import BtnMercadoLivre from "@/app/components/btnLinks";
import ImgCard from "@/app/components/ImgCard";
import { AnuncioBase } from "@/app/types/AnuncioBase";
import Link from "next/link";

interface CardAnuncioAdminProps {
  anuncio: AnuncioBase;
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
      <ImgCard img={anuncio.imagens[0]} nome={anuncio.nome} />

      {/* Conteúdo */}
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {anuncio.nome}
      </h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
        {anuncio.descricao}
      </p>

      {/* Valor */}
      <p className="text-green-600 font-bold text-lg mb-2">
        {anuncio.valor
          ? anuncio.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })
          : "Preço não informado"}
      </p>

      <BtnMercadoLivre link={anuncio.links} />

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
