export type TipoPublicacao = "guia" | "artigo" | "checklist";

export interface Publicacao {
  titulo: string;
  resumo: string;
  slug: string;
  imagem: string;
  tipo: TipoPublicacao;
  publicadoEm?: string;
}
