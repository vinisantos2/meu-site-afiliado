import { useState } from "react";
import { DetalhesPlacaMae } from "@/app/types/DetalhePlacaMae";

export function useDetalhesPlacaMae(initialData?: Partial<DetalhesPlacaMae>) {
  const [detalhesPlacaMae, setDetalhesPlacaMae] = useState<DetalhesPlacaMae>({
    socket: "",
    chipset: "",
    formato: "ATX",
    memoriaTipo: "DDR4",
    maxRamGB: 0,
    slotsRam: 0,
    frequenciaMaxRamMHz: 0,
    pciExpress: "",
    gpuIntegradaSuporte: false,

    armazenamento: {
      sata: 0,
      m2: 0,
      ...initialData?.armazenamento,
    },

    rede: {
      lan: "",
      ...initialData?.rede,
    },

    usb: {
      usb2: 0,
      usb3: 0,
      usbC: 0,
      ...initialData?.usb,
    },

    rgb: false,
    overclock: false,
    biosFlashback: false,

    // campos simples sobrescrevem normalmente
    ...initialData,
  });

  return {
    detalhesPlacaMae,
    setDetalhesPlacaMae,
  };
}
