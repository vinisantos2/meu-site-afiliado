// types/Cupon.ts
export interface Cupon {
  titulo: string;
  regras: string;
  codigo: string;
  desconto: number;
  tipoDesconto: "percentual" | "valor";
  link: string;
  criadoEm: string;
  validade: string;
  ativo: boolean;
  categoria: string
  detalhes: string;
  destaque?: boolean;
}

export interface CuponComId extends Cupon {
  uid: string;
}


