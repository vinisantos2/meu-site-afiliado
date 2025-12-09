import { NOME_LOJA } from "../data/Constants";
import ButtonPadrao from "./BottonPadrao";

export default function Apresentacao() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Compare, analise e escolha o melhor para você
      </h1>

      <p className="text-gray-600 max-w-3xl mx-auto mb-8">
        O {NOME_LOJA} é um site independente que analisa, compara e classifica
        produtos de tecnologia para ajudar você a comprar com mais segurança e
        melhor custo-benefício.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* <ButtonPadrao texto="Ver rankings" href="/rankings" /> */}
        {/* <ButtonPadrao
          texto="Sobre o projeto"
          href="/sobre"
          variante="primario"
        /> */}
      </div>
    </section>
  );
}
