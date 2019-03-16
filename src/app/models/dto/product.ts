
export class Product {
  idES: string;
  idDB: number;
  name: string;
  description: string;
  idProductProvider: string;
  provider: string;
  value: number;
  productType: string;
}

export class PageProduct {
  content: Product[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
