import { AnuncioBase } from "./AnuncioBase";

export interface AnuncioNotebook extends AnuncioBase {
  topico: "notebook";
  detalhes: DetalhesNotebook;
}

export interface DetalhesNotebook {
  processador: string;
  ramGB: number;
  armazenamento: string;
  tipoArmazenamento: "SSD" | "HDD" | "NVMe";
  placaVideo?: string;
  tela: string;
  sistema: string;
  bateria?: string;
  peso?: string;
  portas?: string[];
}
