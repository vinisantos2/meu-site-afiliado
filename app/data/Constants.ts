import { TipoPublicacao } from "../types/Publicacao";

export const NOME_LOJA = "VS-Tech Afiliados"

export const OPCOES_TIPO_PUBLICACAO = [
  { label: "Artigo", value: "artigo" },
  { label: "Guia", value: "guia" },
  { label: "Checklist", value: "checklist" },
  { label: "Ranking", value: "ranking" },
  { label: "Cupom", value: "cupom" },
] satisfies { label: string; value: TipoPublicacao }[];

OPCOES_TIPO_PUBLICACAO.sort((a,b) =>  (a.label.localeCompare( b.label)))