"use client";

import { useState } from "react";
import { AnuncioComId } from "../types/AnuncioBase";
import ImgCard from "./ImgCard";
import BtnLinks from "./btnLinks";

type Props = {
  anuncio: AnuncioComId;
  index: number; // posição no ranking
};

export default function CardAnuncio({ anuncio, index }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        bg-white dark:bg-[#1a1a1a]
        rounded-xl shadow-md overflow-hidden
        transition transform hover:scale-[1.01] hover:shadow-xl
        flex flex-col
        w-full md:w-[70%]
        max-w-3xl
        mx-auto
      "
    >
      {/* ===== IMAGEM COM OVERLAY ===== */}
      <div className="relative">
        <ImgCard img={anuncio.imagens[0]} nome={anuncio.nome} />

        {/* Overlay escuro */}
        <div className="absolute inset-0 rounded-t-xl" />

        {/* Preço */}
        {anuncio.valor && (
          <div
            className="
              absolute bottom-3 right-3
              bg-black/70 text-white
              px-3 py-1 rounded-lg
              text-sm font-bold
              backdrop-blur
            "
          >
            R$ {anuncio.valor.toLocaleString("pt-BR")}
          </div>
        )}
      </div>

      {/* ===== CONTEÚDO ===== */}
      <div className="p-4 flex flex-col flex-1">
        {/* Ranking + Nota */}
        <div className="flex items-center justify-between mb-1">
          <span
            className={`
              text-xs font-bold px-2 py-1 rounded-full
              ${
                index === 0
                  ? "bg-yellow-500 text-black"
                  : index === 1
                  ? "bg-gray-300 text-black"
                  : index === 2
                  ? "bg-amber-700 text-white"
                  : "bg-gray-100 dark:bg-[#333] text-gray-700 dark:text-gray-300"
              }
            `}
          >
            {index + 1}º lugar
          </span>

          {anuncio.nota && (
            <span
              className="
                text-sm font-bold px-2 py-1 rounded
                bg-blue-100 text-blue-700
                dark:bg-blue-900 dark:text-blue-300
              "
            >
              {anuncio.nota}/10
            </span>
          )}
        </div>

        {/* Nome */}
        <h3
          className="
            font-semibold text-lg mb-2 line-clamp-1
            text-gray-800 dark:text-gray-100
          "
        >
          {anuncio.nome}
        </h3>

        {/* Pros e Contras */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* PRÓS */}
          <div>
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-1">
              Prós
            </h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-4 space-y-1">
              {anuncio.pros?.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>

          {/* CONTRAS */}
          <div>
            <h4 className="font-semibold text-red-700 dark:text-red-400 mb-1">
              Contras
            </h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-4 space-y-1">
              {anuncio.contras?.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detalhes / Opinião */}
        <div className="mb-4">
          <button
            onClick={() => setOpen(!open)}
            className="
              w-full text-left px-3 py-2 rounded-lg text-sm font-medium
              bg-gray-100 hover:bg-gray-200
              dark:bg-[#2a2a2a] dark:hover:bg-[#333]
              dark:text-gray-200
            "
          >
            {open ? "Esconder detalhes ▲" : "Ver mais detalhes ▼"}
          </button>

          {open && (
            <div
              className="
                mt-2 p-3 bg-gray-50 dark:bg-[#222]
                rounded-lg border dark:border-[#333]
              "
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 border-l-4 border-blue-500 dark:border-blue-400 pl-3">
                {anuncio.opiniao}
              </p>
            </div>
          )}
        </div>

        {/* Botões de compra */}
        <div className="mt-auto space-y-2">
          {Array.isArray(anuncio.links) &&
            anuncio.links.map((link, idx) => (
              <BtnLinks key={idx} link={link} />
            ))}
        </div>
      </div>
    </div>
  );
}
