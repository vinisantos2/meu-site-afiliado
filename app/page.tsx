import { buscarTodosAnuncios } from "./services/anuncioService";
import SecaoDestaque from "./components/TopicosGrid";
import NavInicial from "./components/NavInicial";
import SecaoCupon from "./components/SecaoCupon";
import { AnuncioComId } from "./types/AnuncioBase";
import Footer from "./components/Footer";
import TopicosGrid from "./components/TopicosGrid";

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
      <main className="max-w-6xl mx-auto p-5 border-8">
        <TopicosGrid  />
        <SecaoCupon />
      </main>

      <Footer />
    </div>
  );
}
