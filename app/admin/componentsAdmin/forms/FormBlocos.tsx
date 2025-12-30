"use client";

import ButtonPadrao from "@/app/components/BottonPadrao";
import SelectPadrao from "@/app/components/SelectPadrao";
import InputPadrao from "@/app/components/Input";
import TextareaPadrao from "@/app/components/TextareaPadrao";

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
    const novoBloco: BlocoConteudo =
      tipo === "titulo"
        ? { tipo: "titulo", conteudo: "" }
        : tipo === "paragrafo"
        ? { tipo: "paragrafo", conteudo: "" }
        : tipo === "lista"
        ? { tipo: "lista", itens: [""] }
        : {
            tipo: "check",
            itens: [{ texto: "", marcado: false }],
          };

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

      {/* Blocos */}
      {blocos.map((bloco, index) => (
        <div
          key={index}
          className="
            rounded-lg border p-4 space-y-4
            bg-gray-50 dark:bg-gray-800
            dark:border-gray-700
          "
        >
          <div className="flex justify-between items-center">
            <span className="text-xs uppercase text-gray-500">
              {bloco.tipo}
            </span>

            <button
              type="button"
              onClick={() => removerBloco(index)}
              className="text-xs text-red-600 hover:underline"
            >
              Remover
            </button>
          </div>

          {/* TÍTULO */}
          {bloco.tipo === "titulo" && (
            <InputPadrao
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

          {/* PARÁGRAFO */}
          {bloco.tipo === "paragrafo" && (
            <TextareaPadrao
              placeholder="Texto do parágrafo"
              rows={4}
              value={bloco.conteudo}
              onChange={(e) =>
                atualizarBloco(index, {
                  ...bloco,
                  conteudo: e.target.value,
                })
              }
            />
          )}

          {/* LISTA */}
          {bloco.tipo === "lista" && (
            <div className="space-y-2">
              {bloco.itens.map((item, i) => (
                <InputPadrao
                  key={i}
                  placeholder={`Item ${i + 1}`}
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

              <ButtonPadrao
                texto="+ Adicionar item"
                onClick={() =>
                  atualizarBloco(index, {
                    ...bloco,
                    itens: [...bloco.itens, ""],
                  })
                }
              />
            </div>
          )}

          {/* CHECKLIST */}
          {bloco.tipo === "check" && (
            <div className="space-y-2">
              {bloco.itens.map((item, i) => (
                <InputPadrao
                  key={i}
                  placeholder={`Item ${i + 1}`}
                  value={item.texto}
                  onChange={(e) => {
                    const novosItens = [...bloco.itens];
                    novosItens[i] = {
                      ...novosItens[i],
                      texto: e.target.value,
                    };
                    atualizarBloco(index, {
                      ...bloco,
                      itens: novosItens,
                    });
                  }}
                />
              ))}

              <ButtonPadrao
                texto="+ Adicionar item"
                onClick={() =>
                  atualizarBloco(index, {
                    ...bloco,
                    itens: [
                      ...bloco.itens,
                      { texto: "", marcado: false },
                    ],
                  })
                }
              />
            </div>
          )}
        </div>
      ))}

      {/* Adicionar novo bloco */}
      <SelectPadrao
        label="Adicionar novo bloco"
        placeholder="Escolha o tipo"
        options={opcoesBlocos}
        onChange={(value) => value && adicionarBloco(value as any)}
        className="max-w-xs"
      />
    </div>
  );
}
