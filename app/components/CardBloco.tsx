import { BlocoConteudo } from "../types/Publicacao";

type Props = {
  blocoConteudo: BlocoConteudo;
};

export default function CardBloco({ blocoConteudo }: Props) {
  switch (blocoConteudo.tipo) {
    case "titulo":
      return (
        <h2 className="mt-10 mb-4 text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
          {blocoConteudo.conteudo}
        </h2>
      );

    case "paragrafo":
    case "texto":
      return (
        <p className="mb-5 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
          {blocoConteudo.conteudo}
        </p>
      );

    case "lista":
      if (!blocoConteudo.itens || blocoConteudo.itens.length === 0) {
        return null;
      }

      return (
        <ul className="mb-6 space-y-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 p-4 pl-6 list-disc text-zinc-700 dark:text-zinc-300">
          {blocoConteudo.itens.map((item, index) => (
            <li key={index} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );

    case "check":
      return (
        <ul>
          {blocoConteudo.itens.map((item, i) => (
            <li key={i}>
              <input type="checkbox" checked={item.marcado} readOnly />
              {item.texto}
            </li>
          ))}
        </ul>
      );

    default:
      return null;
  }
}
