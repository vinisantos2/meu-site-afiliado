"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { AnuncioComId } from "../types/Anuncio";
import CardAnuncio from "./CardAnuncio";

// Importa os estilos básicos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Props = {
  loading: boolean;
  anunciosDestaque: Array<AnuncioComId>;
};

export default function SecaoDestaque({ loading, anunciosDestaque }: Props) {
  const destaques = anunciosDestaque.filter((item) => item.destaque);

  // Renderização condicional da classe base
  const containerClasses =
    destaques.length > 5
      ? "flex overflow-x-auto snap-x snap-mandatory scroll-p-4 gap-6"
      : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6";

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">🔥 Produtos em Destaque</h2>

      {loading ? (
        <p className="text-gray-600">Carregando anúncios...</p>
      ) : destaques.length === 0 ? (
        <p className="text-gray-600">Nenhum anúncio disponível.</p>
      ) : (
        <div className={containerClasses}>
          {destaques.map((item) => (
            <div
              key={item.uid}
              className={
                destaques.length > 5
                  ? "flex-shrink-0 w-full md:w-1/2 lg:w-1/3 snap-start"
                  : ""
              }
            >
              <CardAnuncio anuncio={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
