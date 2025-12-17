import { useState } from "react";
import { DetalhesSmartwatch } from "@/app/types/DetelhesSmartwatch";

export function useDetalhesSmartwatch(
  initialData?: Partial<DetalhesSmartwatch>
) {
  const [detalhesSmartWatch, setDetalhesSmartWatch] =
    useState<DetalhesSmartwatch>({
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

      // permite sobrescrever no modo edição
      ...initialData,
    });

  return {
    detalhesSmartWatch,
    setDetalhesSmartWatch,
  };
}
