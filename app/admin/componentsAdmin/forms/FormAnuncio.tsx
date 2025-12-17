"use client";
import { useState, useEffect } from "react";

/* ---------------- FORMS ---------------- */
import FormNotebook from "./FormNotebook";
import FormSmartphone from "./FormSmartphone";
import FormPlacaMae from "./FormPlacaMae";
import FormFone from "./FormFone";
import FormBase from "./FormAnuncioBase";

/* ---------------- TYPES ---------------- */
import { Anuncio, AnuncioBase } from "@/app/types/AnuncioBase";

import {
  AnuncioNotebook,
  DetalhesNotebook,
} from "@/app/types/DetalhesNotebook ";

import {
  AnuncioSmartphone,
  DetalhesSmartphone,
} from "@/app/types/DetalheSmartphone";

import { AnuncioPlacaMae, DetalhesPlacaMae } from "@/app/types/DetalhePlacaMae";

import { AnuncioFone, DetalhesFone } from "@/app/types/DetalhesFone";
import {
  AnuncioSmartWatch,
  DetalhesSmartwatch,
} from "@/app/types/DetelhesSmartwatch";
import FormSmartWatch from "./FormSmartWach";
import { useFormBase } from "../../hooks/useFormBase";
import { useDetalhesSmartwatch } from "../../hooks/useDetalhesSmartwatch";
import { useDetalhesNotebook } from "../../hooks/useDetalhesNotebook";
import { useDetalhesSmartphone } from "../../hooks/useDetalhesSmartphone";
import { useDetalhesPlacaMae } from "../../hooks/useDetalhesPlacaMae";
import { useDetalhesFone } from "../../hooks/useDetalhesFone";

/* ---------------- PROPS ---------------- */
type FormAnuncioProps = {
  initialData?: Anuncio | null;
  onSubmit: (data: Anuncio) => void;
};

export default function FormAnuncio({
  initialData = null,
  onSubmit,
}: FormAnuncioProps) {
  const { formData, setFormData, updateField, resetForm } = useFormBase();

  /* ---------------- SMARTWATCH ---------------- */
  const { detalhesSmartWatch, setDetalhesSmartWatch } = useDetalhesSmartwatch();

  /* ---------------- NOTEBOOK ---------------- */
  const { detalhesNotebook, setDetalhesNotebook } = useDetalhesNotebook();

  /* ---------------- SMARTPHONE ---------------- */
  const { detalhesSmartphone, setDetalhesSmartphone } = useDetalhesSmartphone();

  /* ---------------- PLACA-MÃE ---------------- */
  const { detalhesPlacaMae, setDetalhesPlacaMae } = useDetalhesPlacaMae();

  /* ---------------- FONE ---------------- */
  const { detalhesFone, setDetalhesFone } = useDetalhesFone();

  /* ---------------- EDIT MODE ---------------- */
  useEffect(() => {
    if (!initialData) return;

    const { topico, detalhes, ...base } = initialData;
    setFormData({ ...base, topico });

    if (topico === "Notebook") setDetalhesNotebook(detalhes);
    if (topico === "Smartphone") setDetalhesSmartphone(detalhes);
    if (topico === "Placa-mãe") setDetalhesPlacaMae(detalhes);
    if (topico === "Fone de ouvido") setDetalhesFone(detalhes);
    if (topico === "Smartwatch") setDetalhesSmartWatch(detalhes);
  }, [initialData]);

  /* ---------------- BASE CHANGE ---------------- */
  const handleChange = <K extends keyof AnuncioBase>(
    field: K,
    value: AnuncioBase[K]
  ) => {
    updateField(field, value);
  };

  /* ---------------- SUBMIT ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let anuncioFinal: Anuncio;

    if (formData.topico === "Notebook") {
      anuncioFinal = {
        ...formData,
        topico: "Notebook",
        detalhes: detalhesNotebook,
      } as AnuncioNotebook;
    } else if (formData.topico === "Smartphone") {
      anuncioFinal = {
        ...formData,
        topico: "Smartphone",
        detalhes: detalhesSmartphone,
      } as AnuncioSmartphone;
    } else if (formData.topico === "Placa-mãe") {
      anuncioFinal = {
        ...formData,
        topico: "Placa-mãe",
        detalhes: detalhesPlacaMae,
      } as AnuncioPlacaMae;
    } else if (formData.topico === "Fone de ouvido") {
      anuncioFinal = {
        ...formData,
        topico: "Fone de ouvido",
        detalhes: detalhesFone,
      } as AnuncioFone;
    } else if (formData.topico === "Smartwatch") {
      anuncioFinal = {
        ...formData,
        topico: "Smartwatch",
        detalhes: detalhesSmartWatch,
      } as AnuncioSmartWatch;
    } else {
      alert("Selecione um tópico válido");
      return;
    }

    onSubmit(anuncioFinal);
  };

  console.log(formData);

  /* ---------------- RENDER ---------------- */
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
        {initialData ? "✏️ Editar Anúncio" : "📌 Novo Anúncio"}
      </h2>

      {/* BASE */}
      <FormBase data={formData} onChange={handleChange} />

      {/* DINÂMICO */}
      {formData.topico === "Notebook" && (
        <FormNotebook value={detalhesNotebook} onChange={setDetalhesNotebook} />
      )}

      {formData.topico === "Smartphone" && (
        <FormSmartphone
          value={detalhesSmartphone}
          onChange={setDetalhesSmartphone}
        />
      )}

      {formData.topico === "Placa-mãe" && (
        <FormPlacaMae value={detalhesPlacaMae} onChange={setDetalhesPlacaMae} />
      )}

      {formData.topico === "Fone de ouvido" && (
        <FormFone value={detalhesFone} onChange={setDetalhesFone} />
      )}

      {formData.topico === "Smartwatch" && (
        <FormSmartWatch
          value={detalhesSmartWatch}
          onChange={setDetalhesSmartWatch}
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