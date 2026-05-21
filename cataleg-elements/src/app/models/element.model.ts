export interface ElementCataleg {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  esPopular: boolean;
  stock: number;
  dataAfegit?: Date;
}

export interface ElementApiResponse {
  id: string;
  nom: string;
  descripcio: string;
  categoria: string;
  preu: number;
  imatge: string;
  popular: boolean;  // ← Diferent nom que el model intern
  stock: number;
}

export interface ElementsCercaResponse {
  elements: ElementApiResponse[];
  total: number;
}