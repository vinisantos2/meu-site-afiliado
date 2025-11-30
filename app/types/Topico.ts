import { TOPICOS } from "../data/DataTopicos";

export interface Topico {
  titulo: string;
  icon: string;
  url: string;
  filtro: string;
  categorias: string[];
}

export type TopicoUrl = typeof TOPICOS[number]["url"];
