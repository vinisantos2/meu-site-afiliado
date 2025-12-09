import { AnuncioBase } from "./AnuncioBase";

export interface DetalhesPlacaMae {
  socket: string; // AM4, AM5, LGA1700, etc
  chipset: string; // B550, B650, Z690, X670, etc
  formato: "ATX" | "Micro-ATX" | "Mini-ITX";
  memoriaTipo: "DDR4" | "DDR5";
  maxRamGB: number;
  slotsRam: number;
  frequenciaMaxRamMHz: number;
  pciExpress: string; // PCIe 4.0, PCIe 5.0
  gpuIntegradaSuporte: boolean; // Suporte a iGPU do processador
  armazenamento: {
    sata: number;
    m2: number;
  };
  rede: {
    lan: string; // 1Gb, 2.5Gb
    wifi?: string; // Wi-Fi 5 / 6 / 6E
    bluetooth?: string; // 5.2, 5.3
  };
  usb: {
    usb2: number;
    usb3: number;
    usbC: number;
  };
  rgb: boolean;
  overclock: boolean;
  biosFlashback?: boolean;
}

export interface AnuncioPlacaMae extends AnuncioBase {
  topico: "Placa-mãe" | "placa-mae";
  detalhes: DetalhesPlacaMae;
}
