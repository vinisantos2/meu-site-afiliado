"use client";

import { Publicacao, TipoPublicacao } from "@/app/types/Publicacao";
import { useState } from "react";
import FormBlocos from "./FormBlocos";

type Props = {
  initialData?: Publicacao;
  onSubmit: (data: Publicacao) => void;
};

const publicacaoInicial: Publicacao = {
  titulo: "",
  resumo: "",
  slug: "",
  imagem: "",
  tipo: "artigo",

  publicado: false,
  criadoEm: new Date().toISOString(),

  blocos: [],
};

export default function FormPublicacao({ initialData, onSubmit }: Props) {
  const [publicacao, setPublicacao] = useState<Publicacao>(
    initialData ?? publicacaoInicial
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(publicacao);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl">
      {/* TÍTULO */}
      <div>
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Título
        </label>
        <input
          className="
            w-full rounded p-2 border
            bg-white text-gray-900
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          value={publicacao.titulo}
          onChange={(e) =>
            setPublicacao({
              ...publicacao,
              titulo: e.target.value,
            })
          }
        />
      </div>

      {/* RESUMO */}
      <div>
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Resumo
        </label>
        <textarea
          className="
            w-full rounded p-2 border
            bg-white text-gray-900
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          rows={3}
          value={publicacao.resumo}
          onChange={(e) =>
            setPublicacao({
              ...publicacao,
              resumo: e.target.value,
            })
          }
        />
      </div>

      {/* SLUG */}
      <div>
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Slug
        </label>
        <input
          className="
            w-full rounded p-2 border
            bg-white text-gray-900
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          value={publicacao.slug}
          onChange={(e) =>
            setPublicacao({
              ...publicacao,
              slug: e.target.value,
            })
          }
        />
      </div>

      {/* IMAGEM */}
      <div>
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Imagem
        </label>
        <input
          className="
            w-full rounded p-2 border
            bg-white text-gray-900
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          placeholder="/imagens/..."
          value={publicacao.imagem}
          onChange={(e) =>
            setPublicacao({
              ...publicacao,
              imagem: e.target.value,
            })
          }
        />
      </div>

      {/* TIPO */}
      <div>
        <label className="block mb-1 font-medium text-gray-800 dark:text-gray-200">
          Tipo de publicação
        </label>
        <select
          className="
            w-full rounded p-2 border
            bg-white text-gray-900
            dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
          value={publicacao.tipo}
          onChange={(e) =>
            setPublicacao({
              ...publicacao,
              tipo: e.target.value as TipoPublicacao,
            })
          }
        >
          <option value="artigo">Artigo</option>
          <option value="guia">Guia</option>
          <option value="checklist">Checklist</option>
        </select>
      </div>

      {/* PUBLICAÇÃO */}
      <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
        <input
          type="checkbox"
          checked={publicacao.publicado}
          onChange={(e) =>
            setPublicacao({
              ...publicacao,
              publicado: e.target.checked,
              publicadoEm: e.target.checked
                ? new Date().toISOString()
                : undefined,
            })
          }
        />
        <span>Publicar agora</span>
      </div>

      <FormBlocos
        blocos={publicacao.blocos ?? []}
        onChange={(novosBlocos) =>
          setPublicacao({
            ...publicacao,
            blocos: novosBlocos,
          })
        }
      />

      {/* SUBMIT */}
      <button
        type="submit"
        className="
          bg-black text-white px-4 py-2 rounded
          hover:bg-gray-800
          dark:bg-white dark:text-black dark:hover:bg-gray-200
          transition
        "
      >
        Salvar publicação
      </button>
    </form>
  );
}
