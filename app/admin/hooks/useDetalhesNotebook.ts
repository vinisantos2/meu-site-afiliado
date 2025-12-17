import { DetalhesNotebook } from "@/app/types/DetalhesNotebook ";
import { useState } from "react";

export function useDetalhesNotebook(initialData?: Partial<DetalhesNotebook>) {
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

    // sobrescreve no modo edição, se existir
    ...initialData,
  });

  return {
    detalhesNotebook,
    setDetalhesNotebook,
  };
}
