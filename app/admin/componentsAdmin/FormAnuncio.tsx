"use client";
import { useState, useEffect } from "react";
import { Anuncio } from "@/app/types/Anuncio";
import { TOPICOS } from "@/app/data/DataTopicos";

type FormAnuncioProps = {
  initialData?: Anuncio | null;
  onSubmit: (data: Anuncio) => void;
};

export default function FormAnuncio({
  initialData = null,
  onSubmit,
}: FormAnuncioProps) {
  const [formData, setFormData] = useState<Anuncio>({
    nome: "",
    pros: [],
    contras: [],
    opiniao: "",
    veredito: "",
    nota: 0,
    links: [],
    valor: undefined,
    imagens: [],
    topico: "",
    categorias: [],
    criadoEm: new Date().toISOString(),
    destaque: false,
    detalhes: "",
  });

  const categoriasDoTopico =
    TOPICOS.find((t) => t.url === formData.topico)?.categorias || [];

  const handleNotaChange = (value: string) => {
    // permite somente dígitos e 1 vírgula ou ponto
    const sanitized = value
      .replace(/,/g, ".") // troca vírgula por ponto
      .replace(/[^0-9.]/g, ""); // remove tudo que não for número ou ponto

    const parts = sanitized.split(".");

    // impede mais de um ponto decimal
    if (parts.length > 2) return;

    // atualiza o estado com texto
    handleChange("nota", sanitized);
  };

  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        pros: initialData.pros || [],
        contras: initialData.contras || [],
        categorias: initialData.categorias || [],
        imagens: initialData.imagens || [],
        links: initialData.links || [],
      });
    }
  }, [initialData]);

  const handleChange = (field: keyof Anuncio, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {initialData ? "✏️ Editar Anúncio" : "📌 Novo Anúncio"}
      </h2>

      {/* NOME */}
      <div>
        <label className="font-semibold">Nome do produto</label>
        <input
          type="text"
          value={formData.nome}
          onChange={(e) => handleChange("nome", e.target.value)}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* DETALHES */}
      <div>
        <label className="font-semibold">Detalhes do produto</label>
        <textarea
          placeholder="Informações adicionais, ficha técnica, contexto etc."
          rows={4}
          value={formData.detalhes}
          onChange={(e) => handleChange("detalhes", e.target.value)}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* REVIEW */}
      <div className="space-y-4 border p-4 rounded dark:border-gray-700">
        <h3 className="text-lg font-semibold">📝 Review do Produto</h3>

        <div>
          <label className="font-semibold">Veredito</label>
          <textarea
            rows={2}
            value={formData.veredito}
            onChange={(e) => handleChange("veredito", e.target.value)}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label className="font-semibold">Opinião completa</label>
          <textarea
            rows={5}
            value={formData.opiniao}
            onChange={(e) => handleChange("opiniao", e.target.value)}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        <div>
          <label className="font-semibold">Nota (0 a 10)</label>
          <input
            type="text"
            min={0}
            max={10}
            value={formData.nota}
            onChange={(e) => handleNotaChange(e.target.value)}
            className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
      </div>

      {/* PRÓS E CONTRAS */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border p-4 rounded dark:border-gray-700">
          <label className="font-semibold text-green-600">✔️ Prós</label>

          <input
            type="text"
            placeholder="Adicionar pró (Enter)"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const value = (e.target as HTMLInputElement).value.trim();
                if (value) {
                  handleChange("pros", [...formData.pros, value]);
                  (e.target as HTMLInputElement).value = "";
                }
              }
            }}
            className="w-full p-2 mt-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <ul className="mt-3 space-y-2">
            {formData.pros.map((p, i) => (
              <li
                key={i}
                className="flex justify-between bg-green-100 dark:bg-green-800 p-2 rounded"
              >
                {p}
                <button
                  type="button"
                  onClick={() =>
                    handleChange(
                      "pros",
                      formData.pros.filter((_, idx) => idx !== i)
                    )
                  }
                  className="text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="border p-4 rounded dark:border-gray-700">
          <label className="font-semibold text-red-600">❌ Contras</label>

          <input
            type="text"
            placeholder="Adicionar contra (Enter)"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                const value = (e.target as HTMLInputElement).value.trim();
                if (value) {
                  handleChange("contras", [...formData.contras, value]);
                  (e.target as HTMLInputElement).value = "";
                }
              }
            }}
            className="w-full p-2 mt-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />

          <ul className="mt-3 space-y-2">
            {formData.contras.map((c, i) => (
              <li
                key={i}
                className="flex justify-between bg-red-100 dark:bg-red-800 p-2 rounded"
              >
                {c}
                <button
                  type="button"
                  onClick={() =>
                    handleChange(
                      "contras",
                      formData.contras.filter((_, idx) => idx !== i)
                    )
                  }
                  className="text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* IMAGENS */}
      <div>
        <label className="font-semibold">🖼️ Imagens (URLs)</label>
        <input
          type="text"
          placeholder="Adicionar URL da imagem (Enter)"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const url = (e.target as HTMLInputElement).value.trim();
              if (url) {
                handleChange("imagens", [...formData.imagens, url]);
                (e.target as HTMLInputElement).value = "";
              }
            }
          }}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />

        {formData.imagens.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-3">
            {formData.imagens.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img}
                  className="w-full h-28 object-cover rounded border dark:border-gray-600"
                />
                <button
                  type="button"
                  onClick={() =>
                    handleChange(
                      "imagens",
                      formData.imagens.filter((_, i) => i !== idx)
                    )
                  }
                  className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* TÓPICO */}
      <div>
        <label className="font-semibold">Tópico</label>
        <select
          value={formData.topico}
          onChange={(e) => handleChange("topico", e.target.value)}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">Selecione um tópico</option>
          {TOPICOS.map((t, i) => (
            <option key={i} value={t.url}>
              {t.titulo}
            </option>
          ))}
        </select>
      </div>

      {/* CATEGORIAS */}
      <div>
        <label className="font-semibold">🏷️ Categorias extras</label>

        {/* CATEGORIAS (checkbox) */}
        <div>
          <label className="font-semibold">🏷️ Categorias extras</label>

          {!formData.topico && (
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Selecione um tópico primeiro.
            </p>
          )}

          <div className="mt-2 space-y-2">
            {categoriasDoTopico.map((cat, idx) => {
              const isChecked = formData.categorias.includes(cat);

              return (
                <label
                  key={idx}
                  className="flex items-center gap-2 cursor-pointer bg-gray-100 dark:bg-gray-700 p-2 rounded"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => {
                      if (isChecked) {
                        // remover categoria
                        handleChange(
                          "categorias",
                          formData.categorias.filter((c) => c !== cat)
                        );
                      } else {
                        // adicionar categoria
                        handleChange("categorias", [
                          ...formData.categorias,
                          cat,
                        ]);
                      }
                    }}
                    className="w-4 h-4"
                    disabled={!formData.topico}
                  />
                  <span>{cat}</span>
                </label>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {formData.categorias?.map((cat, idx) => (
            <span
              key={idx}
              className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded flex items-center gap-2"
            >
              {cat}
              <div
                onClick={() =>
                  handleChange(
                    "categorias",
                    formData.categorias.filter((_, i) => i !== idx)
                  )
                }
                className="text-red-600 cursor-pointer"
              >
                ✕
              </div>
            </span>
          ))}
        </div>
      </div>

      {/* LINKS */}
      <div>
        <label className="font-semibold">🔗 Links</label>

        <input
          type="text"
          placeholder="Adicionar link (Enter)"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              const input = e.target as HTMLInputElement;
              const url = input.value.trim();

              if (url) {
                handleChange("links", [...formData.links, url]);
                input.value = "";
              }
            }
          }}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />

        {formData.links && formData.links.length > 0 && (
          <ul className="mt-3 space-y-2">
            {formData.links.map((link, idx) => (
              <li
                key={idx}
                className="flex justify-between bg-gray-100 dark:bg-gray-700 p-2 rounded"
              >
                <a
                  href={link}
                  target="_blank"
                  className="text-blue-600 dark:text-blue-300 underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {link}
                </a>

                <button
                  type="button"
                  onClick={() =>
                    handleChange(
                      "links",
                      formData.links.filter((_, i) => i !== idx)
                    )
                  }
                  className="text-red-600"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* PREÇO */}
      <div>
        <label className="font-semibold">Preço</label>
        <input
          type="number"
          value={formData.valor ?? ""}
          onChange={(e) =>
            handleChange(
              "valor",
              e.target.value ? Number(e.target.value) : undefined
            )
          }
          className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      </div>

      {/* DESTAQUE */}
      <div className="flex items-center gap-2">
        <label className="font-semibold">Destaque</label>
        <input
          type="checkbox"
          checked={formData.destaque}
          onChange={(e) => handleChange("destaque", e.target.checked)}
        />
      </div>

      {/* BOTÃO */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-3 rounded text-lg font-semibold transition"
      >
        💾 {initialData ? "Salvar Alterações" : "Adicionar Anúncio"}
      </button>
    </form>
  );
}
