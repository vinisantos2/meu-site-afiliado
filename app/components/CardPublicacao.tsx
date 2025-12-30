import Link from "next/link";
import { Publicacao } from "../types/Publicacao";

type Props = {
  publicacao: Publicacao;
};

export default function CardPublicacao({ publicacao }: Props) {
  const href =
    publicacao.tipo === "ranking"
      ? `/topico/${publicacao.slug}`
      : `/guias/${publicacao.slug}`;

  return (
    <Link
      href={href}
      className="
        relative overflow-hidden rounded-2xl
        border border-zinc-200 dark:border-zinc-700
        bg-white dark:bg-zinc-900
        hover:shadow-xl transition
        aspect-square
        group
      "
    >
      {/* Background image */}
      {publicacao.imagem && (
        <div
          className="
            absolute inset-0 bg-cover bg-center
            group-hover:scale-110 transition-transform duration-500
          "
          style={{ backgroundImage: `url(${publicacao.imagem})` }}
        />
      )}

      {/* Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-zinc-950/90
          via-zinc-950/40
          to-zinc-950/10
        "
      />

      {/* Conteúdo */}
      <div className="relative h-full p-5 flex flex-col justify-end">
        <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
          {publicacao.titulo}
        </h3>

        <p className="text-sm text-zinc-200 line-clamp-2">
          {publicacao.resumo}
        </p>
      </div>
    </Link>
  );
}
