import { TipoPublicacao } from "../types/Publicacao";

export const NOME_LOJA = "VS-Tech Afiliados"

export const OPCOES_TIPO_PUBLICACAO = [
  { label: "Artigo", value: "artigo" },
  { label: "Guia", value: "guia" },
  { label: "Checklist", value: "checklist" },
  { label: "Ranking", value: "ranking" },
] satisfies { label: string; value: TipoPublicacao }[];