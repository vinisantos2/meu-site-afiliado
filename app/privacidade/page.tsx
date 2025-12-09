import NavPadrao from "../components/NavPadrao";
import Footer from "../components/Footer";
import { NOME_LOJA } from "../data/Constants";

export default function Privacidade() {
  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-gray-950">
      <NavPadrao />

      <main className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Política de Privacidade
        </h1>

        <section className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            A sua privacidade é importante para nós. Esta Política de
            Privacidade descreve como o {NOME_LOJA} coleta, usa e protege
            informações dos usuários que acessam o site.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Coleta de informações
          </h2>
          <p>
            O {NOME_LOJA} pode coletar informações não pessoais, como dados
            de navegação, páginas visitadas e tempo de permanência no site,
            por meio de ferramentas de análise e cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Uso de cookies
          </h2>
          <p>
            Cookies são pequenos arquivos armazenados no dispositivo do
            usuário, utilizados para melhorar a experiência de navegação
            e analisar o desempenho do site.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Serviços de terceiros
          </h2>
          <p>
            Podemos utilizar serviços de terceiros, como ferramentas de
            análise, plataformas de afiliados e serviços de hospedagem,
            que podem coletar informações de acordo com suas próprias
            políticas de privacidade.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Links externos
          </h2>
          <p>
            Nosso site pode conter links para sites externos. Não nos
            responsabilizamos pelas práticas de privacidade desses sites.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Segurança das informações
          </h2>
          <p>
            Empregamos medidas razoáveis para proteger as informações
            coletadas, porém nenhum método de transmissão ou armazenamento
            é totalmente seguro.
          </p>

          <h2 className="text-2xl font-semibold mt-10">
            Contato
          </h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade, entre em
            contato pelo e-mail{" "}
            <a
              href="mailto:marcus.santos3@outlook.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              marcus.santos3@outlook.com
            </a>.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
