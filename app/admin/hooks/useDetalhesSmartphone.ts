import { useState } from "react";
import { DetalhesSmartphone } from "@/app/types/DetalheSmartphone";

export function useDetalhesSmartphone(
  initialData?: Partial<DetalhesSmartphone>
) {
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

      // sobrescreve no modo edição
      ...initialData,
    });

  return {
    detalhesSmartphone,
    setDetalhesSmartphone,
  };
}
