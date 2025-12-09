import SecaoCupon from "./components/SecaoCupon";
import Footer from "./components/Footer";
import TopicosGrid from "./components/TopicosGrid";
import NavPadrao from "./components/NavPadrao";
import Apresentacao from "./components/Apresentacao";


export default async function Home() {
  // 🚀 A busca acontece no servidor automaticamente

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <NavPadrao />
      <main className="max-w-6xl mx-auto p-5 border-8">
        <Apresentacao />
        <TopicosGrid />
        <SecaoCupon />
      </main>

      <Footer />
    </div>
  );
}
