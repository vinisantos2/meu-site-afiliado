export type TipoPublicacao = "guia" | "artigo" | "checklist" | "ranking";

/* =======================
   Blocos de Conteúdo
======================= */

export type BlocoConteudo =
  | BlocoTitulo
  | BlocoParagrafo
  | BlocoLista
  | BlocoCheck;

export interface BlocoTitulo {
  tipo: "titulo";
  conteudo: string;
}

export interface BlocoParagrafo {
  tipo: "paragrafo" | "texto";
  conteudo: string;
}

export interface BlocoLista {
  tipo: "lista";
  itens: string[];
}

export interface ItemCheck {
  texto: string;
  marcado: boolean;
}

export interface BlocoCheck {
  tipo: "check";
  itens: ItemCheck[];
}

/* =======================
   Publicação
======================= */

export interface Publicacao {
  titulo: string;
  resumo: string;
  slug: string;
  imagem: string;
  tipo: TipoPublicacao;

  publicado: boolean;
  criadoEm: string;
  publicadoEm?: string;

  // você pode usar um OU outro
  conteudo?: string; // texto longo (HTML ou simples)
  blocos?: BlocoConteudo[]; // ✅ array de blocos
}

export type PublicacaoComID = Publicacao & {
  uid: string;
};
