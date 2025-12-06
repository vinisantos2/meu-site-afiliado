import { AnuncioBase } from "@/app/types/AnuncioBase";

import TextareaPadrao from "@/app/components/TextareaPadrao";
import CampoLista from "@/app/components/CampoLista";
import CheckboxPadrao from "@/app/components/CheckboxPadrao";
import InputPadrao from "@/app/components/Input";
import SelectPadrao from "@/app/components/SelectPadrao";
import { TOPICOS } from "@/app/data/DataTopicos";

type FormBaseProps = {
  data: AnuncioBase;
  onChange: (field: keyof AnuncioBase, value: any) => void;
};

export default function FormBase({ data, onChange }: FormBaseProps) {

  const topicoSelecionado = TOPICOS.find((t) => t.url === data.topico);
  
  return (
    <div className="space-y-6">
      {/* NOME */}
      <InputPadrao
        label="Nome do produto"
        value={data.nome}
        onChange={(e) => onChange("nome", e.target.value)}
        placeholder="Digite o nome do produto"
      />

      {/* TÓPICO */}
      <SelectPadrao
        label="Tópico"
        value={data.topico}
        onChange={(value) => onChange("topico", value)}
        placeholder="Selecione um tópico"
        options={TOPICOS.map((t) => ({
          value: t.url,
          label: t.titulo,
        }))}
      />

      {/* ✅ CATEGORIAS */}
      {/* ✅ CATEGORIAS (DEPENDENTES DO TÓPICO) */}
      {topicoSelecionado && (
        <div>
          <p className="text-sm font-semibold mb-2">Categorias</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {topicoSelecionado.categorias.map((categoria) => {
              const checked = data.categorias.includes(categoria);

              return (
                <CheckboxPadrao
                  key={categoria}
                  label={categoria}
                  checked={checked}
                  onChange={(value) => {
                    onChange(
                      "categorias",
                      value
                        ? [...data.categorias, categoria]
                        : data.categorias.filter((c) => c !== categoria)
                    );
                  }}
                />
              );
            })}
          </div>
        </div>
      )}

      {/* REVIEW */}
      <div className="border p-4 rounded space-y-4">
        <InputPadrao
          label="Veredito"
          value={data.veredito || ""}
          onChange={(e) => onChange("veredito", e.target.value)}
        />

        <TextareaPadrao
          label="Opinião"
          value={data.opiniao}
          onChange={(e) => onChange("opiniao", e.target.value)}
          rows={4}
        />

        <InputPadrao
          label="Nota"
          type="number"
          value={data.nota?.toString() ?? ""}
          onChange={(e) =>
            onChange(
              "nota",
              e.target.value ? Number(e.target.value) : undefined
            )
          }
        />
      </div>

      {/* PRÓS */}
      <CampoLista
        label="Prós"
        placeholder="Digite e pressione Enter"
        valores={data.pros}
        onAdd={(valor) => onChange("pros", [...data.pros, valor])}
        onRemove={(index) =>
          onChange(
            "pros",
            data.pros.filter((_, i) => i !== index)
          )
        }
      />

      {/* CONTRAS */}
      <CampoLista
        label="Contras"
        placeholder="Digite e pressione Enter"
        valores={data.contras}
        onAdd={(valor) => onChange("contras", [...data.contras, valor])}
        onRemove={(index) =>
          onChange(
            "contras",
            data.contras.filter((_, i) => i !== index)
          )
        }
      />

      {/* IMAGENS */}
      <CampoLista
        label="Imagens"
        placeholder="URL da imagem e Enter"
        valores={data.imagens}
        onAdd={(valor) => onChange("imagens", [...data.imagens, valor])}
        onRemove={(index) =>
          onChange(
            "imagens",
            data.imagens.filter((_, i) => i !== index)
          )
        }
        renderItem={(img, index) => (
          <div key={index} className="relative">
            <img src={img} className="w-full h-24 object-cover rounded" />
            <button
              type="button"
              onClick={() =>
                onChange(
                  "imagens",
                  data.imagens.filter((_, i) => i !== index)
                )
              }
              className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 rounded"
            >
              ✕
            </button>
          </div>
        )}
      />

      {/* LINKS */}
      <CampoLista
        label="Links"
        placeholder="Cole o link e Enter"
        valores={data.links}
        onAdd={(valor) => onChange("links", [...data.links, valor])}
        onRemove={(index) =>
          onChange(
            "links",
            data.links.filter((_, i) => i !== index)
          )
        }
      />

      {/* PREÇO */}
      <InputPadrao
        label="Preço"
        type="number"
        value={data.valor?.toString() ?? ""}
        onChange={(e) =>
          onChange("valor", e.target.value ? Number(e.target.value) : undefined)
        }
      />

      {/* DESTAQUE */}
      <CheckboxPadrao
        label="Destaque"
        checked={data.destaque ?? false}
        onChange={(value) => onChange("destaque", value)}
      />
    </div>
  );
}
