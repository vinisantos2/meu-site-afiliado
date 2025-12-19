export interface Topico {
  titulo: string;
  icon: string;
  url: string;
  filtro: string;
  categorias: string[];
  texto: string;
  dica: string;
}

export type TopicoTitulo =
  | "Smartphone"
  | "Notebook"
  | "Placa-mãe"
  | "Fone de ouvido"
  | "Smartwatch"
  | "Smart TV";
