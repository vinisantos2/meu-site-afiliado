export interface Anuncio {
  uid: string;
  nome: string;
  preco: string;
  descricao: string;
  link: string;
  imagem: string;
  topico: string;
  criadoEm: string;
  detalhes: string;
  destaque?: boolean;
}
