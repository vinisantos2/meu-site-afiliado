export interface Anuncio {
  nome: string;
  opiniao: string;
  descricao: string;
  link: string;
  imagens: Array<string>;
  topico: string;
  criadoEm: string;
  detalhes: string;
  valor: number
  destaque?: boolean;
}

export interface AnuncioComId extends Anuncio {
  uid: string;
}