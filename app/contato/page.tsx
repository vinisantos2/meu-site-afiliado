import NavPadrao from "../components/NavPadrao";
import Footer from "../components/Footer";

export default function Contato() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-950">
      <NavPadrao />

      <main className="max-w-6xl mx-auto p-5">
        {/* Título */}
        <section className="text-center mb-12 mt-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contato
          </h1>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Caso tenha dúvidas, sugestões ou interesse em parcerias,
            entre em contato diretamente pelo e-mail abaixo.
          </p>
        </section>

        {/* Bloco de contato */}
        <section className="max-w-xl mx-auto bg-white dark:bg-gray-900 border dark:border-gray-800 rounded-2xl p-10 text-center">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            E-mail para contato:
          </p>

          <a
            href="mailto:marcus.santos3@outlook.com"
            className="text-lg font-semibold text-blue-600 hover:underline"
          >
            marcus.santos3@outlook.com
          </a>

          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            Respondemos normalmente em até 24 horas.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
