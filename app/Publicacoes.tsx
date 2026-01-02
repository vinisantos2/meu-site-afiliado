import CardPublicacao from "./components/CardPublicacao";
import { Publicacao } from "./types/Publicacao";


type Props = {
  publicacoes: Publicacao[];
};

export default function Publicacoes({ publicacoes }: Props) {
  if (!publicacoes.length) {
    return (
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <p className="text-zinc-500">
          Nenhuma publicação encontrada.
        </p>
      </section>
    );
  }

  return (
    <section id="publicacoes" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {publicacoes.map((publicacao) => (
          <CardPublicacao
            key={publicacao.slug}
            publicacao={publicacao}
          />
        ))}
      </div>
    </section>
  );
}
