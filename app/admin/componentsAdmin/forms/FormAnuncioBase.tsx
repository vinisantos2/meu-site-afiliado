import { Anuncio } from "@/app/types/AnuncioBase";
import { TOPICOS } from "@/app/data/DataTopicos";

type FormBaseProps = {
  data: Anuncio;
  onChange: (field: keyof Anuncio, value: any) => void;
};

export default function FormBase({ data, onChange }: FormBaseProps) {
  const categoriasDoTopico =
    TOPICOS.find((t) => t.url === data.topico)?.categorias || [];

  return (
    <div className="space-y-6">

      {/* NOME */}
      <div>
        <label className="font-semibold">Nome do produto</label>
        <input
          type="text"
          value={data.nome}
          onChange={(e) => onChange("nome", e.target.value)}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* REVIEW */}
      <div className="border p-4 rounded space-y-4">
        <input
          type="text"
          placeholder="Veredito"
          value={data.veredito || ""}
          onChange={(e) => onChange("veredito", e.target.value)}
          className="w-full p-3 border rounded"
        />

        <textarea
          placeholder="Opinião completa"
          rows={4}
          value={data.opiniao}
          onChange={(e) => onChange("opiniao", e.target.value)}
          className="w-full p-3 border rounded"
        />

        <input
          type="number"
          min={0}
          max={10}
          step={0.1}
          value={data.nota ?? ""}
          onChange={(e) => onChange("nota", Number(e.target.value))}
          className="w-full p-3 border rounded"
        />
      </div>

      {/* PRÓS */}
      <div>
        <label>Prós</label>
        <input
          type="text"
          placeholder="Digite e pressione Enter"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const value = (e.target as HTMLInputElement).value.trim();
              if (value) {
                onChange("pros", [...data.pros, value]);
                (e.target as HTMLInputElement).value = "";
              }
            }
          }}
          className="w-full p-2 border rounded"
        />

        {data.pros.map((p, i) => (
          <div key={i} className="flex justify-between mt-2 bg-green-100 rounded p-2 text-gray-950">
            {p}
            <button type="button" onClick={() =>
              onChange("pros", data.pros.filter((_, idx) => idx !== i))
            }>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* CONTRAS */}
      <div>
        <label>Contras</label>
        <input
          type="text"
          placeholder="Digite e pressione Enter"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const value = (e.target as HTMLInputElement).value.trim();
              if (value) {
                onChange("contras", [...data.contras, value]);
                (e.target as HTMLInputElement).value = "";
              }
            }
          }}
          className="w-full p-2 border rounded"
        />

        {data.contras.map((c, i) => (
          <div key={i} className="flex justify-between mt-2 bg-red-100 rounded p-2 text-gray-950">
            {c}
            <button type="button" onClick={() =>
              onChange("contras", data.contras.filter((_, idx) => idx !== i))
            }>
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* IMAGENS */}
      <div>
        <label>Imagens</label>
        <input
          type="text"
          placeholder="URL da imagem (Enter)"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const url = (e.target as HTMLInputElement).value.trim();
              if (url) {
                onChange("imagens", [...data.imagens, url]);
                (e.target as HTMLInputElement).value = "";
              }
            }
          }}
          className="w-full p-2 border rounded"
        />

        <div className="grid grid-cols-3 gap-2 mt-3">
          {data.imagens.map((img, idx) => (
            <div key={idx} className="relative">
              <img src={img} className="w-full h-24 object-cover rounded" />
              <button
                type="button"
                onClick={() =>
                  onChange("imagens", data.imagens.filter((_, i) => i !== idx))
                }
                className="absolute top-1 right-1 bg-red-600 text-white text-xs px-2 rounded"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIAS */}
      <div>
        <label>Categorias</label>
        <div className="space-y-2 mt-2">
          {categoriasDoTopico.map((cat, i) => {
            const active = data.categorias.includes(cat);

            return (
              <label key={i} className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={active}
                  onChange={() => {
                    if (active) {
                      onChange(
                        "categorias",
                        data.categorias.filter((c) => c !== cat)
                      );
                    } else {
                      onChange("categorias", [...data.categorias, cat]);
                    }
                  }}
                />
                {cat}
              </label>
            );
          })}
        </div>
      </div>

      {/* LINKS */}
      <div>
        <label>Links</label>
        <input
          type="text"
          placeholder="Link afiliado (Enter)"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const url = (e.target as HTMLInputElement).value.trim();

              if (url) {
                onChange("links", [...data.links, url]);
                (e.target as HTMLInputElement).value = "";
              }
            }
          }}
          className="w-full p-2 border rounded"
        />

        {data.links.map((link, idx) => (
          <div key={idx} className="flex justify-between mt-2 bg-gray-100 rounded p-2">
            <a className="text-blue-600 underline" href={link} target="_blank">
              {link}
            </a>
            <button
              type="button"
              onClick={() =>
                onChange("links", data.links.filter((_, i) => i !== idx))
              }
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* PREÇO */}
      <div>
        <label>Preço</label>
        <input
          type="number"
          value={data.valor ?? ""}
          onChange={(e) =>
            onChange(
              "valor",
              e.target.value ? Number(e.target.value) : undefined
            )
          }
          className="w-full p-3 border rounded"
        />
      </div>

      {/* DESTAQUE */}
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          checked={data.destaque}
          onChange={(e) => onChange("destaque", e.target.checked)}
        />
        <label>Destaque</label>
      </div>
    </div>
  );
}
