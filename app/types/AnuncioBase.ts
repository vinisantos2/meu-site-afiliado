import { AnuncioSmartphone } from "./DetalheSmartphone";
import { AnuncioNotebook } from "./DetalhesNotebook ";
import { TopicoUrl } from "./Topico";

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
  topico: TopicoUrl; // 👈 AQUI  
}

export type AnuncioComId = Anuncio & {
  uid: string;
};
