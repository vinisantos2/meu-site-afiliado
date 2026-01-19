import { buscarTodasPublicacoes } from "./services/PublicacaoService";
import HomeClient from "./HomeClient";

export default async function Home() {
  const publicacoes = await buscarTodasPublicacoes();

  return (
    <div className="font-sans min-h-screen bg-gray-50 dark:bg-zinc-900 dark:text-zinc-100">
      <HomeClient publicacoes={publicacoes} />
    </div>
  );
}
