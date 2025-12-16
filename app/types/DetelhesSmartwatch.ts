import { AnuncioBase } from "./AnuncioBase";

export interface DetalhesSmartwatch {
  tipo: "In-Ear" | "On-Ear" | "Over-Ear" | "TWS";
  conectividade: "Bluetooth";
  bluetoothVersao?: string;
  cancelamentoRuido: boolean;
  bateriaHoras: number;
  bateriaComEstojoHoras?: number;
  resistenciaAgua?: string; // ex: IPX4, IPX5
  microfone: boolean;
  controles: "Toque" | "Botão" | "Toque e Botão";
  compatibilidade: string[]; // Android, iOS, Windows
}

export interface AnuncioSmartWatch extends AnuncioBase {
  topico: "Smartwatch";
  detalhes: DetalhesSmartwatch;
}
