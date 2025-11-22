import { AnuncioSmartphone } from "./DetalheSmartphone";
import { AnuncioNotebook } from "./DetalhesNotebook ";

export type Anuncio = AnuncioNotebook | AnuncioSmartphone;


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
}

export interface AnuncioComId extends AnuncioBase {
  uid: string;
}
