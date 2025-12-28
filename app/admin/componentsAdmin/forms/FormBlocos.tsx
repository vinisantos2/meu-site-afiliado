"use client";

import SelectPadrao from "@/app/components/SelectPadrao";
import { BlocoConteudo } from "@/app/types/Publicacao";

const opcoesBlocos = [
  { label: "Título", value: "titulo" },
  { label: "Parágrafo", value: "paragrafo" },
  { label: "Lista", value: "lista" },
  { label: "Checklist", value: "check" },
];

type Props = {
  blocos: BlocoConteudo[];
  onChange: (blocos: BlocoConteudo[]) => void;
};

export default function FormBlocos({ blocos, onChange }: Props) {
  function adicionarBloco(tipo: BlocoConteudo["tipo"]) {
    let novoBloco: BlocoConteudo;

    switch (tipo) {
      case "titulo":
        novoBloco = { tipo: "titulo", conteudo: "" };
        break;
      case "paragrafo":
        novoBloco = { tipo: "paragrafo", conteudo: "" };
        break;
      case "lista":
        novoBloco = { tipo: "lista", itens: [""] };
        break;
      case "check":
        novoBloco = {
          tipo: "check",
          itens: [{ texto: "", marcado: false }],
        };
        break;
      default:
        return;
    }

    onChange([...blocos, novoBloco]);
  }

  function atualizarBloco(index: number, bloco: BlocoConteudo) {
    const novos = [...blocos];
    novos[index] = bloco;
    onChange(novos);
  }

  function removerBloco(index: number) {
    onChange(blocos.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
        Conteúdo da publicação
      </h2>

      {/* Lista de blocos */}
      {blocos.map((bloco, index) => (
        <div
          key={index}
          className="
            border rounded-lg p-4
            bg-gray-50 dark:bg-gray-800
            dark:border-gray-700
          "
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm uppercase text-gray-500">
              {bloco.tipo}
            </span>
            <button
              type="button"
              onClick={() => removerBloco(index)}
              className="text-sm text-red-600 hover:underline"
            >
              Remover
            </button>
          </div>

          {/* Editor por tipo */}
          {bloco.tipo === "titulo" && (
            <input
              className="w-full p-2 rounded border"
              placeholder="Título do bloco"
              value={bloco.conteudo}
              onChange={(e) =>
                atualizarBloco(index, {
                  ...bloco,
                  conteudo: e.target.value,
                })
              }
            />
          )}

          {bloco.tipo === "paragrafo" && (
            <textarea
              className="w-full p-2 rounded border"
              rows={4}
              placeholder="Texto do parágrafo"
              value={bloco.conteudo}
              onChange={(e) =>
                atualizarBloco(index, {
                  ...bloco,
                  conteudo: e.target.value,
                })
              }
            />
          )}

          {bloco.tipo === "lista" && (
            <div className="space-y-2">
              {bloco.itens.map((item, i) => (
                <input
                  key={i}
                  className="w-full p-2 rounded border"
                  value={item}
                  onChange={(e) => {
                    const novosItens = [...bloco.itens];
                    novosItens[i] = e.target.value;
                    atualizarBloco(index, {
                      ...bloco,
                      itens: novosItens,
                    });
                  }}
                />
              ))}
              <button
                type="button"
                onClick={() =>
                  atualizarBloco(index, {
                    ...bloco,
                    itens: [...bloco.itens, ""],
                  })
                }
                className="text-sm text-blue-600"
              >
                + Adicionar item
              </button>
            </div>
          )}

          {bloco.tipo === "check" && (
            <div className="space-y-2">
              {bloco.itens.map((item, i) => (
                <input
                  key={i}
                  className="w-full p-2 rounded border"
                  value={item.texto}
                  onChange={(e) => {
                    const novosItens = [...bloco.itens];
                    novosItens[i].texto = e.target.value;
                    atualizarBloco(index, {
                      ...bloco,
                      itens: novosItens,
                    });
                  }}
                />
              ))}
              <button
                type="button"
                onClick={() =>
                  atualizarBloco(index, {
                    ...bloco,
                    itens: [...bloco.itens, { texto: "", marcado: false }],
                  })
                }
                className="text-sm text-blue-600"
              >
                + Adicionar item
              </button>
            </div>
          )}
        </div>
      ))}

      {/* Adicionar bloco */}
      <div className="flex gap-3">
        <SelectPadrao
          label="Adicionar novo bloco"
          placeholder="Escolha o tipo de bloco"
          options={opcoesBlocos}
          onChange={(value) => {
            if (!value) return;
            adicionarBloco(value as any);
          }}
          className="max-w-xs"
        />
      </div>
    </div>
  );
}
