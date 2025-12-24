import { NOME_LOJA } from "../data/Constants";
import ButtonPadrao from "./BottonPadrao";

export default function Apresentacao() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Compare produtos de tecnologia e escolha o melhor custo-benefício
      </h1>

      <p className="text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
        O {NOME_LOJA} é um portal de comparação de tecnologia onde você encontra
        análises, rankings e guias completos para escolher notebooks,
        smartphones, smartwatches, fones de ouvido e outros eletrônicos com mais
        segurança e informação.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <ButtonPadrao
          texto="Explorar categorias"
          href="#categorias"
          variante="primario"
        />

        <ButtonPadrao
          texto="Ver rankings"
          href="/rankings"
        />
      </div>
    </section>
  );
}
