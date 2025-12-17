import { useState } from "react";
import { DetalhesFone } from "@/app/types/DetalhesFone";

export function useDetalhesFone(initialData?: Partial<DetalhesFone>) {
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

    // sobrescreve no modo edição
    ...initialData,
  });

  return {
    detalhesFone,
    setDetalhesFone,
  };
}
