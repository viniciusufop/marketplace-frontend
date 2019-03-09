
export class Product {
  id: string;
  name: string;
}

export class PageProduct {
  content: Product[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}
