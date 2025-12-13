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

import {
  AnuncioPlacaMae,
  DetalhesPlacaMae,
} from "@/app/types/DetalhePlacaMae";

import { AnuncioFone, DetalhesFone } from "@/app/types/DetalhesFone";

/* ---------------- PROPS ---------------- */
type FormAnuncioProps = {
  initialData?: Anuncio | null;
  onSubmit: (data: Anuncio) => void;
};

export default function FormAnuncio({
  initialData = null,
  onSubmit,
}: FormAnuncioProps) {
  /* ---------------- BASE ---------------- */
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
    topico: "Smartphone",
  });

  /* ---------------- NOTEBOOK ---------------- */
  const [detalhesNotebook, setDetalhesNotebook] =
    useState<DetalhesNotebook>({
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

  /* ---------------- SMARTPHONE ---------------- */
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

  /* ---------------- PLACA-MÃE ---------------- */
  const [detalhesPlacaMae, setDetalhesPlacaMae] =
    useState<DetalhesPlacaMae>({
      socket: "",
      chipset: "",
      formato: "ATX",
      memoriaTipo: "DDR4",
      maxRamGB: 0,
      slotsRam: 0,
      frequenciaMaxRamMHz: 0,
      pciExpress: "",
      gpuIntegradaSuporte: false,
      armazenamento: { sata: 0, m2: 0 },
      rede: { lan: "" },
      usb: { usb2: 0, usb3: 0, usbC: 0 },
      rgb: false,
      overclock: false,
      biosFlashback: false,
    });

  /* ---------------- FONE ---------------- */
  const [detalhesFone, setDetalhesFone] = useState<DetalhesFone>({
    tipo: "TWS",
    conectividade: "Bluetooth",
    bluetoothVersao: "",
    cancelamentoRuido: false,
    bateriaHoras: 0,
    bateriaComEstojoHoras: undefined,
    resistenciaAgua: "",
    microfone: true,
    controles: "Toque",
    compatibilidade: ["Android", "iOS"],
  });

  /* ---------------- EDIT MODE ---------------- */
  useEffect(() => {
    if (!initialData) return;

    const { topico, detalhes, ...base } = initialData;
    setFormData({ ...base, topico });

    if (topico === "Notebook") setDetalhesNotebook(detalhes);
    if (topico === "Smartphone") setDetalhesSmartphone(detalhes);
    if (topico === "Placa-mãe") setDetalhesPlacaMae(detalhes);
    if (topico === "Fone de ouvido") setDetalhesFone(detalhes);
  }, [initialData]);

  /* ---------------- BASE CHANGE ---------------- */
  const handleChange = <K extends keyof AnuncioBase>(
    field: K,
    value: AnuncioBase[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
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
    } else {
      alert("Selecione um tópico válido");
      return;
    }

    onSubmit(anuncioFinal);
  };

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
        <FormNotebook
          value={detalhesNotebook}
          onChange={setDetalhesNotebook}
        />
      )}

      {formData.topico === "Smartphone" && (
        <FormSmartphone
          value={detalhesSmartphone}
          onChange={setDetalhesSmartphone}
        />
      )}

      {formData.topico === "Placa-mãe" && (
        <FormPlacaMae
          value={detalhesPlacaMae}
          onChange={setDetalhesPlacaMae}
        />
      )}

      {formData.topico === "Fone de ouvido" && (
        <FormFone value={detalhesFone} onChange={setDetalhesFone} />
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
