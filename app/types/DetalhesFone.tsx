import { AnuncioBase } from "./AnuncioBase";

export interface DetalhesFone {
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

export interface AnuncioFone extends AnuncioBase {
  topico: "Fone de ouvido";
  detalhes: DetalhesFone;
}
