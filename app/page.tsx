import { buscarTodosAnuncios } from "./services/anuncioService";
import SecaoDestaque from "./components/SecaoDestaque";
import NavInicial from "./components/NavInicial";
import SecaoCupon from "./components/SecaoCupon";
import { AnuncioComId } from "./types/Anuncio";

export const metadata = {
  title: "Tech Ofertas - Promoções e Cupons",
  description: "As melhores ofertas e cupons atualizados diariamente.",
};

export default async function Home() {
  // 🚀 A busca acontece no servidor automaticamente
  const dados: AnuncioComId[] = await buscarTodosAnuncios();
  const anunciosDestaque = dados.filter((item) => item.destaque);

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <NavInicial />
      <main className="max-w-6xl mx-auto p-5">
        <SecaoDestaque loading={false} anunciosDestaque={anunciosDestaque} />
        <SecaoCupon />
      </main>

      <footer className="bg-gray-800 text-white py-6 text-center mt-12">
        <p className="text-sm">
          © 2025 Tech Ofertas - Todos os direitos reservados.
          <br /> Este site participa do programa de afiliados do Mercado Livre.
        </p>
      </footer>
    </div>
  );
}
