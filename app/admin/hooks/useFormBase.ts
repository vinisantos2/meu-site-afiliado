import { useState } from "react";
import { AnuncioBase } from "@/app/types/AnuncioBase";

export function useFormBase(initialData?: Partial<AnuncioBase>) {
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

    // permite sobrescrever valores iniciais
    ...initialData,
  });

  function updateField<K extends keyof AnuncioBase>(
    field: K,
    value: AnuncioBase[K]
  ) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function resetForm() {
    setFormData({
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
  }

  return {
    formData,
    setFormData,
    updateField,
    resetForm,
  };
}
