export interface Anuncio {
  nome: string;
  pros: string[];
  contras: string[];
  opiniao: string; // opinião detalhada
  veredito?: string; // resumo curto
  nota?: number; // 0–10
  links: string[];
  valor?: number;
  imagens: string[];
  topico: string; // categoria principal
  categorias: string[]; // categorias extras
  criadoEm: string;
  destaque?: boolean;
  detalhes: string;
}

export interface AnuncioComId extends Anuncio {
  uid: string;
}
