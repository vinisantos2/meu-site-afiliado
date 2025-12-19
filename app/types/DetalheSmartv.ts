import { AnuncioBase } from "./AnuncioBase";

export interface DetalhesSmartTV {
  tamanhoTelaPolegadas: number; // ex: 43, 55, 65
  resolucao: "HD" | "Full HD" | "4K" | "8K";
  tipoTela: "LED" | "QLED" | "OLED" | "Mini-LED" | "QNED";
  taxaAtualizacaoHz: number; // ex: 60, 120
  sistemaOperacional:
    | "Android TV"
    | "Google TV"
    | "Tizen"
    | "webOS"
    | "Roku TV";
  conectividade: string[]; // Wi-Fi, Bluetooth, Ethernet
  portasHDMI: number;
  portasUSB: number;
  assistenteVoz?: ("Google Assistant" | "Alexa" | "Bixby")[];
  hdr?: ("HDR10" | "HDR10+" | "Dolby Vision"| "HLG")[];
  somWatts?: number;
  gamer?: boolean; // VRR, ALLM, modo jogo
}

export interface AnuncioSmartTV extends AnuncioBase {
  topico: "Smart TV";
  detalhes: DetalhesSmartTV;
}
