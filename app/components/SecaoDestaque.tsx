"use client";

import { AnuncioComId } from "../types/Anuncio";
import CardAnuncio from "./CardAnuncio";

type Props = {
  loading: boolean;
  anunciosDestaque: Array<AnuncioComId>;
};

export default function SecaoDestaque({ loading, anunciosDestaque }: Props) {
  const destaques = anunciosDestaque.filter((item) => item.destaque);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">🔥 Produtos em Destaque</h2>

      {loading ? (
        <p className="text-gray-600">Carregando anúncios...</p>
      ) : destaques.length === 0 ? (
        <p className="text-gray-600">Nenhum anúncio disponível.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {destaques.map((item) => (
            <div key={item.uid}>
              <CardAnuncio anuncio={item} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
