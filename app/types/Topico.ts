import { TOPICOS } from "../data/DataTopicos";

export interface Topico {
  titulo: string;
  icon: string;
  url: string;
  filtro: string;
  categorias: string[];
}

export type TopicoTitulo = typeof TOPICOS[number]["titulo"];
