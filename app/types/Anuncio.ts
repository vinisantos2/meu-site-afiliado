export interface Anuncio {
  uid: string;
  nome: string;
  opiniao: string
  descricao: string;
  link: string;
  imagens: Array<string>;
  topico: string;
  criadoEm: string;
  detalhes: string;
  destaque?: boolean;
}
