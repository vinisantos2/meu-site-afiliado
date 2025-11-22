"use client";
import { useState, useEffect } from "react";

import { TOPICOS } from "@/app/data/DataTopicos";

import FormNotebook from "./FormNotebook";
import FormSmartphone from "./FormSmartphone";
import {
  AnuncioNotebook,
  DetalhesNotebook,
} from "@/app/types/DetalhesNotebook ";
import {
  AnuncioSmartphone,
  DetalhesSmartphone,
} from "@/app/types/DetalheSmartphone";
import { Anuncio } from "@/app/types/AnuncioBase";
import FormBase from "./FormAnuncioBase";

type FormAnuncioProps = {
  initialData?: Anuncio | null;
  onSubmit: (data: Anuncio) => void;
};

export default function FormAnuncio({
  initialData = null,
  onSubmit,
}: FormAnuncioProps) {
  const [topico, setTopico] = useState<string>("");

  const [formData, setFormData] = useState({
    nome: "",
    pros: [],
    contras: [],
    opiniao: "",
    veredito: "",
    nota: 0,
    links: [],
    valor: undefined,
    imagens: [],
    categorias: [],
    criadoEm: new Date().toISOString(),
    destaque: false,
  });

  const [detalhesNotebook, setDetalhesNotebook] = useState<DetalhesNotebook>({
    processador: "",
    ramGB: 0,
    armazenamento: "",
    tipoArmazenamento: "SSD",
    placaVideo: "",
    tela: "",
    sistema: "",
    bateria: "",
    peso: "",
    portas: [],
  });

  const [detalhesSmartphone, setDetalhesSmartphone] =
    useState<DetalhesSmartphone>({
      processador: "",
      ramGB: 0,
      armazenamentoGB: 0,
      tela: "",
      bateriaMah: 0,
      cameras: "",
      sistema: "",
      tem5G: false,
    });

  const categoriasDoTopico =
    TOPICOS.find((t) => t.url === topico)?.categorias || [];

  useEffect(() => {
    if (!initialData) return;

    const { topico, detalhes, ...base } = initialData;

    setTopico(topico);
    setFormData(base);

    if (topico === "notebook") {
      setDetalhesNotebook(detalhes);
    }

    if (topico === "smartphone") {
      setDetalhesSmartphone(detalhes);
    }
  }, [initialData]);

  const handleChange = (field: keyof Anuncio, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let anuncioFinal: AnuncioSmartphone | AnuncioNotebook;

    if (topico === "notebook") {
      anuncioFinal = {
        ...formData,
        topico: "notebook",
        detalhes: detalhesNotebook,
      };
    } else if (topico === "smartphone") {
      anuncioFinal = {
        ...formData,
        topico: "smartphone",
        detalhes: detalhesSmartphone,
      };
    } else {
      alert("Selecione um tópico válido");
      return;
    }

    onSubmit(anuncioFinal);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {initialData ? "✏️ Editar Anúncio" : "📌 Novo Anúncio"}
      </h2>

      {/* TÓPICO */}
      <div>
        <label className="font-semibold">Tópico</label>
        <select
          value={topico}
          onChange={(e) => setTopico(e.target.value)}
          className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        >
          <option value="">Selecione um tópico</option>
          {TOPICOS.map((t) => (
            <option key={t.url} value={t.url}>
              {t.titulo}
            </option>
          ))}
        </select>
      </div>

      {/* FORM BASE */}
      <FormBase
        data={{ ...formData, categorias: formData.categorias }}
        onChange={handleChange}
      />

      {/* FORM DINÂMICO */}
      {topico === "notebook" && (
        <FormNotebook value={detalhesNotebook} onChange={setDetalhesNotebook} />
      )}

      {topico === "smartphone" && (
        <FormSmartphone
          value={detalhesSmartphone}
          onChange={setDetalhesSmartphone}
        />
      )}

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
