"use client";

import { useRouter } from "next/navigation";
import { Anuncio } from "../types/Anuncio";
import BtnMercadoLivre from "./BotaoMercadoLivre";

type Props = {
  anuncio: Anuncio;
};

export default function CardAnuncio({ anuncio }: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/anuncio/" + anuncio.uid)}
      className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition transform hover:scale-[1.02] hover:shadow-xl flex flex-col
      w-full sm:w-[320px] md:w-[360px] lg:w-[380px] min-w-[280px]"
    >
      {/* Imagem */}
      <div className="overflow-hidden mb-4 w-full h-56">
        <img
          src={anuncio.imagens[0]}
          alt={anuncio.nome}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Conteúdo */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-1">
          {anuncio.nome}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {anuncio.descricao}
        </p>

        <BtnMercadoLivre link={anuncio.link} />
      </div>
    </div>
  );
}
