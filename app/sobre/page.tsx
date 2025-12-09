import Footer from "../components/Footer";
import NavPadrao from "../components/NavPadrao";

export default function Sobre() {
  return (
    <>
    <NavPadrao />
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Título */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Sobre a VS-Tech Afiliados
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A VS-Tech Afiliados é um projeto independente focado em análise,
            comparação e recomendação de produtos tecnológicos, ajudando
            consumidores a tomarem decisões de compra mais inteligentes.
          </p>
        </section>

        {/* O que fazemos */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            O que fazemos
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nosso objetivo é reunir informações claras, imparciais e atualizadas
            sobre smartphones, notebooks, acessórios e outros produtos de
            tecnologia. Realizamos análises técnicas, listamos pontos positivos
            e negativos e comparamos modelos semelhantes, sempre focando no
            custo-benefício.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Alguns links presentes no site são links de afiliados. Isso
            significa que podemos receber uma comissão caso a compra seja
            realizada,
            <strong> sem nenhum custo adicional para o consumidor</strong>.
          </p>
        </section>

        {/* Missão, Visão e Valores */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Missão</h3>
            <p className="text-gray-600">
              Ajudar pessoas a escolherem os melhores produtos de tecnologia,
              oferecendo informações confiáveis, objetivas e fáceis de entender.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">Visão</h3>
            <p className="text-gray-600">
              Ser um portal de referência em recomendações de produtos
              tecnológicos, reconhecido pela transparência e qualidade das
              análises.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-600">
              Valores
            </h3>
            <ul className="text-gray-600 list-disc list-inside space-y-1">
              <li>Transparência com o público</li>
              <li>Imparcialidade nas análises</li>
              <li>Compromisso com informação de qualidade</li>
              <li>Atualização constante</li>
              <li>Respeito ao consumidor</li>
            </ul>
          </div>
        </section>

        {/* Aviso legal */}
        <section className="bg-gray-100 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-600">
            A VS-Tech Afiliados não vende produtos diretamente. Nosso conteúdo é
            informativo e baseado em pesquisas técnicas, opiniões especializadas
            e dados públicos fornecidos pelos fabricantes e varejistas.
          </p>
        </section>

        {/* Rodapé */}
        <section className="text-center mt-12">
          <p className="text-gray-500">
            VS-Tech Afiliados © {new Date().getFullYear()} • Informação antes da
            compra 🛒
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
