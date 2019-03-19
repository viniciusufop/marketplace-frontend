import { Component, OnInit } from '@angular/core';
import { SaleStorageService } from '../services/sale-storage.service';
import { Sale } from '../models/dto/sale';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  sale: Sale = new Sale();
  constructor(
    private saleStorage: SaleStorageService
  ) { }

  ngOnInit() {
    this.sale = this.saleStorage.getSale();
  }
}
