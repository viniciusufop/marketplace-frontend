import { Product } from './product';

export class Sale {
    product: Product;
    quantity: number;
    totalValue: number;
    username: string;
}

export class SaleResponse {
    idReceipt: string;
    product: Product;
    quantity: number;
    totalValue: number;
    username: string;
    dateCreate: Date;
}
