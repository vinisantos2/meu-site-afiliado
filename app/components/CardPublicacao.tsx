import Link from "next/link";
import { Publicacao } from "../types/Publicacao";

type Props = {
  publicacao: Publicacao;
};

export default function CardPublicacao({ publicacao }: Props) {
  let href = "";

  if (publicacao.tipo === "ranking") {
    if (publicacao.categoria) {
      href = `/topico/${publicacao.slug}?categoria=${encodeURIComponent(
        publicacao.categoria
      )}`;
    } else {
      href = `/topico/${publicacao.slug}`;
    }
  } else if (publicacao.tipo === "cupom") {
    href = publicacao.slug;
  } else {
    href = `/guias/${publicacao.slug}`;
  }

  return (
    <Link
      href={href}
      className="
        relative aspect-square overflow-hidden rounded-2xl
        border border-zinc-200 dark:border-zinc-700
        bg-zinc-100 dark:bg-zinc-900
        transition-all duration-300
        hover:shadow-xl
        group
      "
    >
      {/* Background image */}
      {publicacao.imagem && (
        <div
          className="
            absolute inset-0
            bg-cover bg-center
            transition-transform duration-500
            group-hover:scale-110
          "
          style={{
            backgroundImage: `url(${publicacao.imagem})`,
          }}
        />
      )}

      {/* Overlay gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t
          from-black/80
          via-black/40
          to-black/10
        "
      />

      {/* Conteúdo */}
      <div className="relative z-10 h-full p-5 flex flex-col justify-end">
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
