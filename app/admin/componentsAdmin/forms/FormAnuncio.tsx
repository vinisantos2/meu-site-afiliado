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
import { Anuncio, AnuncioBase } from "@/app/types/AnuncioBase";
import FormBase from "./FormAnuncioBase";

type FormAnuncioProps = {
  initialData?: Anuncio | null;
  onSubmit: (data: Anuncio) => void;
};

export default function FormAnuncio({
  initialData = null,
  onSubmit,
}: FormAnuncioProps) {
  const [formData, setFormData] = useState<AnuncioBase>({
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
    topico: "",
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

  useEffect(() => {
    if (!initialData) return;

    const { topico, detalhes, ...base } = initialData;

    setFormData({ ...base, topico });

    if (topico === "notebook") {
      setDetalhesNotebook(detalhes);
    }

    if (topico === "smartphone") {
      setDetalhesSmartphone(detalhes);
    }
  }, [initialData]);

  const handleChange = <K extends keyof AnuncioBase>(
    field: K,
    value: AnuncioBase[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let anuncioFinal: AnuncioSmartphone | AnuncioNotebook;

    if (formData.topico === "notebook") {
      anuncioFinal = {
        ...formData,
        topico: "notebook",
        detalhes: detalhesNotebook,
      };
    } else if (formData.topico === "smartphone") {
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

      {/* FORM BASE */}
      <FormBase
        data={{ ...formData, categorias: formData.categorias }}
        onChange={handleChange}
      />

      {/* FORM DINÂMICO */}
      {formData.topico === "notebook" && (
        <FormNotebook value={detalhesNotebook} onChange={setDetalhesNotebook} />
      )}

      {formData.topico === "smartphone" && (
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
