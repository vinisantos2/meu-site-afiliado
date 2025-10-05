"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Anuncio } from "../types/Anuncio";
import CardAnuncio from "./CardAnuncio";

type Props = {
  loading: boolean;
  anunciosDestaque: Array<Anuncio>;
};

export default function SecaoDestaque({ loading, anunciosDestaque }: Props) {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">🔥 Produtos em Destaque</h2>

      {loading ? (
        <p className="text-gray-600">Carregando anúncios...</p>
      ) : anunciosDestaque.length === 0 ? (
        <p className="text-gray-600">Nenhum anúncio disponível.</p>
      ) : (
        <>
          {anunciosDestaque.length > 5 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={16}
              slidesPerView={5}
              navigation
              pagination={{ clickable: true }}
              className="pb-8"
            >
              {anunciosDestaque.map((item) => {
                if (!item.destaque) return null;
                return (
                  <SwiperSlide key={item.uid}>
                    <CardAnuncio anuncio={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {anunciosDestaque.map((item) => {
                if (!item.destaque) return null;
                return <CardAnuncio key={item.uid} anuncio={item} />;
              })}
            </div>
          )}
        </>
      )}
    </section>
  );
}
