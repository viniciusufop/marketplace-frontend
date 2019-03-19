import { Injectable } from '@angular/core';
import { Sale } from '../models/dto/sale';

@Injectable({
  providedIn: 'root'
})
export class SaleStorageService {
  sale: Sale;

  constructor() { }

  addSale(obj: Sale): void {
    console.log(obj);
    this.sale = obj;
  }

  getSale(): Sale {
    console.log(this.sale);
    return this.sale;
  }
}
