"use client";

import { CATEGORIAS } from "@/app/data/DataCategorias";
import { Cupon } from "@/app/types/Cupon";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type FormAnuncioProps = {
  initialData?: Cupon | null; // Dados ao editar
  onSubmit: (data: Cupon) => void; // Função de add/update
};

export default function FormCupon({
  initialData = null,
  onSubmit,
}: FormAnuncioProps) {
  const [formData, setFormData] = useState<Cupon>({
    titulo: "",
    link: "",
    categoria: "",
    ativo: false,
    codigo: "",
    desconto: 0,
    regras: "",
    tipoDesconto: "valor",
    detalhes: "",
    validade:"",
    criadoEm: new Date().toISOString(),
    destaque: false,
  });

  // Carregar dados iniciais ao editar
  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
      });
    }
  }, [initialData]);

  const handleChange = (field: keyof Cupon, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

   const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 space-y-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Título"
          required
          value={formData.titulo}
          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
          className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
        />
        <input
          type="text"
          placeholder="Código"
          required
          value={formData.codigo}
          onChange={(e) => setFormData({ ...formData, codigo: e.target.value })}
          className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
        />
        <input
          type="number"
          placeholder="Desconto"
          required
          value={formData.desconto}
          onChange={(e) =>
            setFormData({ ...formData, desconto: Number(e.target.value) })
          }
          className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
        />
        <select
          value={formData.tipoDesconto}
          required
          onChange={(e) =>
            setFormData({
              ...formData,
              tipoDesconto: e.target.value as "percentual" | "valor",
            })
          }
          className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
        >
          <option value="percentual">Percentual (%)</option>
          <option value="valor">Valor (R$)</option>
        </select>

        <input
          type="date"
          value={formData.validade}
          required
          onChange={(e) =>
            setFormData({ ...formData, validade: e.target.value })
          }
          className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
        />
        <input
          type="text"
          placeholder="Link"
          required
          value={formData.link}
          onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
        />

        {/* 🏷️ Campo de categoria */}
        <select
          value={formData.categoria || ""}
          required
          onChange={(e) =>
            setFormData({ ...formData, categoria: e.target.value })
          }
          className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
        >
          <option className="dark:bg-gray-500" value="">
            Selecione uma categoria
          </option>
          {CATEGORIAS.map((cat) => (
            <option className="dark:bg-gray-700" key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <textarea
        placeholder="Regras"
        required
        value={formData.regras}
        onChange={(e) => setFormData({ ...formData, regras: e.target.value })}
        className="w-full border dark:border-gray-700 bg-transparent rounded p-2"
      />

      {/* DESTAQUE */}
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={formData.destaque}
          onChange={(e) => handleChange("destaque", e.target.checked)}
        />
        Destaque
      </label>

      <div className="flex justify-end">
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded transition-all"
        >
          💾 {initialData ? "Atualizar Cupon" : "Adicionar Cupon"}
        </button>
      </div>
    </form>
  );
}
