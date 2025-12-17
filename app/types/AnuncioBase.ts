import { AnuncioPlacaMae } from "./DetalhePlacaMae";
import { AnuncioFone } from "./DetalhesFone";
import { AnuncioSmartphone } from "./DetalheSmartphone";
import { AnuncioSmartTV } from "./DetalheSmartv";
import { AnuncioNotebook } from "./DetalhesNotebook ";
import { AnuncioSmartWatch } from "./DetelhesSmartwatch";
import { TopicoTitulo } from "./Topico";

export type Anuncio =
  | AnuncioNotebook
  | AnuncioSmartphone
  | AnuncioPlacaMae
  | AnuncioFone
  | AnuncioSmartWatch
  | AnuncioSmartTV;

export interface AnuncioBase {
  nome: string;
  pros: string[];
  contras: string[];
  opiniao: string; // opinião detalhada
  veredito?: string; // resumo curto
  nota?: number; // 0–10
  links: string[];
  valor?: number;
  imagens: string[];
  categorias: string[]; // categorias extras
  criadoEm: string;
  destaque?: boolean;
  topico: TopicoTitulo; // 👈 AQUI
}

export type AnuncioComId = Anuncio & {
  uid: string;
};
