import { TOPICOS } from "../data/DataTopicos";

export interface Topico {
  titulo: string;
  icon: string;
  url: string;
  filtro: string;
  categorias: string[];
  texto: string
}

export type TopicoTitulo = "Smartphone" | "Notebook" | "Placa-mãe" | "";
