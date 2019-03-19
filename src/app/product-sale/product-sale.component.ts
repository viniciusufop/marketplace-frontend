import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/dto/sale';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  sale: Sale = new Sale();
  currentValue = 0;
  finalValue = 0;
  constructor(
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit() {
    this.sale = this.tokenStorage.getSale();
    this.currentValue = 1;
    this.alterValue();
  }

  alterValue() {
    this.finalValue = this.sale.product.value * this.currentValue;
  }
}
