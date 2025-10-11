"use client";
import { useState, useEffect } from "react";
import { Anuncio } from "@/app/types/Anuncio";
import { Topico } from "@/app/types/Topico";
import { buscarTodosTopicos } from "@/app/services/topicoService";

type FormAnuncioProps = {
  initialData?: Anuncio | null; // Dados ao editar
  onSubmit: (data: Anuncio) => void; // Função de add/update
};

export default function FormAnuncio({
  initialData = null,
  onSubmit,
}: FormAnuncioProps) {
  const [formData, setFormData] = useState<Anuncio>({
    uid: "",
    nome: "",
    opiniao: "",
    descricao: "",
    link: "",
    imagens: [],
    topico: "",
    criadoEm: new Date().toISOString(),
    detalhes: "",
    destaque: false,
  });

  const [topicos, setTopicos] = useState<Topico[]>([]);

  // Carregar dados iniciais ao editar
  useEffect(() => {
    if (initialData) {
      setFormData({
        ...initialData,
        imagens: initialData.imagens || [],
      });
    }
  }, [initialData]);

  // Carregar tópicos do Firestore
  useEffect(() => {
    async function fetchTopicos() {
      const dados = await buscarTodosTopicos();
      setTopicos(dados);
    }
    fetchTopicos();
  }, []);

  const handleChange = (field: keyof Anuncio, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddImagem = (url: string) => {
    if (url.trim() !== "") {
      setFormData((prev) => ({ ...prev, imagens: [...prev.imagens, url] }));
    }
  };

  const handleRemoveImagem = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      imagens: prev.imagens.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* NOME */}
      <input
        type="text"
        placeholder="Nome"
        value={formData.nome}
        onChange={(e) => handleChange("nome", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      {/* IMAGENS */}
      <div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="URL da imagem"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleAddImagem((e.target as HTMLInputElement).value);
                (e.target as HTMLInputElement).value = "";
              }
            }}
            className="flex-1 p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        {formData.imagens.length > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-2">
            {formData.imagens.map((img, idx) => (
              <div key={idx} className="relative">
                <img
                  src={img}
                  alt={`Preview ${idx}`}
                  className="w-full h-28 object-cover rounded border dark:border-gray-600"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImagem(idx)}
                  className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* SELECT DE TÓPICO */}
      <select
        value={formData.topico}
        onChange={(e) => handleChange("topico", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <option value="">Selecione um tópico</option>
        {topicos.map((t) => (
          <option key={t.uid} value={t.url}>
            {t.titulo}
          </option>
        ))}
      </select>

      {/* LINK */}
      <input
        type="text"
        placeholder="Link do produto"
        value={formData.link}
        onChange={(e) => handleChange("link", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      {/* DESCRIÇÃO */}
      <textarea
        placeholder="Descrição"
        rows={3}
        value={formData.descricao}
        onChange={(e) => handleChange("descricao", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      {/* DETALHES */}
      <textarea
        placeholder="Detalhes"
        rows={5}
        value={formData.detalhes}
        onChange={(e) => handleChange("detalhes", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      />

      {/* OPINIÃO */}
      <textarea
        placeholder="Opinião"
        rows={5}
        value={formData.opiniao}
        onChange={(e) => handleChange("opiniao", e.target.value)}
        className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
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

      {/* BOTÃO */}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white py-2 rounded transition-all"
      >
        💾 {initialData ? "Atualizar Anúncio" : "Adicionar Anúncio"}
      </button>
    </form>
  );
}
