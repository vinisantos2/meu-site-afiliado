import SecaoCupon from "./components/SecaoCupon";
import Footer from "./components/Footer";
import TopicosGrid from "./components/TopicosGrid";
import NavPadrao from "./components/NavPadrao";
import Apresentacao from "./components/Apresentacao";
import Publicacoes from "./components/Publicacoes";


export default async function Home() {
  // 🚀 A busca acontece no servidor automaticamente

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <NavPadrao />
      <main className="border-2 border-amber-300">
        <Apresentacao />
        <Publicacoes />
        <SecaoCupon />
      </main>

      <Footer />
    </div>
  );
}
