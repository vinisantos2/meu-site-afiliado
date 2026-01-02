import NavPadrao from "./components/NavPadrao";
import Footer from "./components/Footer";
import SecaoCupon from "./components/SecaoCupon";
import { buscarTodasPublicacoes } from "./services/PublicacaoService";
import HomeClient from "./HomeClient";

export default async function Home() {
  // ✅ Busca no servidor (Google vê o conteúdo)
  const publicacoes = await buscarTodasPublicacoes();

  return (
    <div className="font-sans min-h-screen bg-gray-50">
      <NavPadrao />

      <HomeClient publicacoes={publicacoes} />

      <SecaoCupon />
      <Footer />
    </div>
  );
}
