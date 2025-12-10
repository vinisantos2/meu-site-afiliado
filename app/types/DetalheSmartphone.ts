import { AnuncioBase } from "./AnuncioBase";

export interface DetalhesSmartphone {
  processador: string;
  ramGB: number;
  armazenamentoGB: number;
  tela: string;
  bateriaMah: number;
  cameras: string;
  sistema: string;
  tem5G: boolean;
}

export interface AnuncioSmartphone extends AnuncioBase {
  topico: "Smartphone" ;
  detalhes: DetalhesSmartphone;
}
