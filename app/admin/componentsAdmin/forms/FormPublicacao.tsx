"use client";

import { useState } from "react";
import { Publicacao, TipoPublicacao } from "@/app/types/Publicacao";

import InputPadrao from "@/app/components/Input";
import TextareaPadrao from "@/app/components/TextareaPadrao";
import SelectPadrao from "@/app/components/SelectPadrao";
import ButtonPadrao from "@/app/components/BottonPadrao";

import FormBlocos from "./FormBlocos";
import { OPCOES_TIPO_PUBLICACAO } from "@/app/data/Constants";

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
      <InputPadrao
        label="Título"
        value={publicacao.titulo}
        onChange={(e) =>
          setPublicacao({ ...publicacao, titulo: e.target.value })
        }
      />

      <TextareaPadrao
        label="Resumo"
        value={publicacao.resumo}
        onChange={(e) =>
          setPublicacao({ ...publicacao, resumo: e.target.value })
        }
      />

      <InputPadrao
        label="Slug"
        value={publicacao.slug}
        onChange={(e) => setPublicacao({ ...publicacao, slug: e.target.value })}
      />

      <InputPadrao
        label="Imagem"
        placeholder="/imagens/..."
        value={publicacao.imagem}
        onChange={(e) =>
          setPublicacao({ ...publicacao, imagem: e.target.value })
        }
      />

      <div>

        
        <label className="block mb-1 text-sm font-medium text-gray-800 dark:text-gray-200">
          Tipo de publicação
        </label>

        <SelectPadrao
          value={publicacao.tipo}
          options={OPCOES_TIPO_PUBLICACAO}
          placeholder="Selecione o tipo"
          onChange={(value) =>
            setPublicacao({
              ...publicacao,
              tipo: value as TipoPublicacao,
            })
          }
        />
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200">
        <input
          type="checkbox"
          checked={publicacao.publicado}
          onChange={(e) =>
            setPublicacao({
              ...publicacao,
              publicado: e.target.checked,
              publicadoEm: e.target.checked
                ? new Date().toISOString()
                : "",
            })
          }
        />
        <span>Publicar agora</span>
      </div>

      <FormBlocos
        blocos={publicacao.blocos ?? []}
        onChange={(blocos) => setPublicacao({ ...publicacao, blocos })}
      />

      <ButtonPadrao
        texto={initialData ? "Salvar Alterações" : "Adicionar publicação"}
        type="submit"
      />
    </form>
  );
}
