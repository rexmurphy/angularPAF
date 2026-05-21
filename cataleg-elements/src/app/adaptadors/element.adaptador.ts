import { ElementCataleg, ElementApiResponse } from '../models/element.model';

export function adaptarElementApi(apiElement: ElementApiResponse): ElementCataleg {
  return {
    id: apiElement.id,
    nom: apiElement.nom,
    descripcio: apiElement.descripcio,
    categoria: apiElement.categoria,
    preu: apiElement.preu,
    imatge: apiElement.imatge,
    esPopular: apiElement.popular,  // Canvi de nom
    stock: apiElement.stock,
    dataAfegit: new Date()  // Camp afegit
  };
}

export function adaptarElementsApi(apiElements: ElementApiResponse[]): ElementCataleg[] {
  return apiElements.map(adaptarElementApi);
}

export function elementBuit(): ElementCataleg {
  return {
    id: '',
    nom: '',
    descripcio: '',
    categoria: '',
    preu: 0,
    imatge: 'https://via.placeholder.com/300x200?text=Sense+imatge',
    esPopular: false,
    stock: 0,
    dataAfegit: new Date()
  };
}