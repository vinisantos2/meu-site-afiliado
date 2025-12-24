import { PUBLICACOES } from "../data/Categorias";
import CardPublicacao from "./CardPublicacao";

export default function Publicacoes() {
  return (
    <section id="publicacoes" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PUBLICACOES.map((publicacao) => (
          <CardPublicacao key={publicacao.slug} publicacao={publicacao} />
        ))}
      </div>
    </section>
  );
}
