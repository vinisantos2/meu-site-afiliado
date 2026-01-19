import { NOME_LOJA } from "../data/Constants";

export default function Politica() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-950">

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Política de Afiliados
        </h1>

        <section className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            O {NOME_LOJA} participa de programas de afiliados de lojas e
            marketplaces online. Isso significa que alguns links presentes em
            nosso site são links de afiliados.
          </p>

          <p>
            Ao clicar em um link de afiliado e realizar uma compra, podemos
            receber uma comissão pela indicação,{" "}
            <strong>sem qualquer custo adicional para o consumidor</strong>.
          </p>

          <p>
            Essa remuneração ajuda a manter o site, produzir conteúdo, realizar
            análises e manter as informações sempre atualizadas.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Independência editorial
          </h2>

          <p>
            As análises, comparações e recomendações publicadas no {NOME_LOJA}
            são realizadas de forma independente, com base em pesquisas,
            especificações técnicas e experiência prática sempre que possível.
          </p>

          <p>
            Não aceitamos pagamentos para alterar rankings, avaliações ou
            opiniões. A transparência com nossos leitores é prioridade.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Atualização de preços e ofertas
          </h2>

          <p>
            Os preços, disponibilidade e condições comerciais apresentados podem
            sofrer alterações a qualquer momento, de acordo com a loja
            responsável pela venda do produto.
          </p>

          <p>
            Recomendamos que o usuário sempre confira as informações finais
            diretamente no site do vendedor antes de concluir a compra.
          </p>

          <h2 className="text-2xl font-semibold mt-10">Contato</h2>

          <p>
            Em caso de dúvidas sobre esta Política de Afiliados, entre em
            contato através da nossa página de contato ou pelo e-mail{" "}
            <a
              href="mailto:marcus.santos3@outlook.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              marcus.santos3@outlook.com
            </a>
            .
          </p>
        </section>
      </main>

    </div>
  );
}
