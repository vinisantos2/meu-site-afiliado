// types/Cupon.ts
export interface Cupon {
  nome: string;
  descricao: string;
  codigo: string;
  desconto: number;
  tipoDesconto: "percentual" | "valor";
  link: string;
  criadoEm: string;
  validade: string;
  ativo: boolean;
  detalhes: string;
  destaque?: boolean;
}

export interface CuponComId extends Cupon {
  uid: string;
}
