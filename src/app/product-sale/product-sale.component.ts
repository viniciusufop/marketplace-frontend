import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/dto/sale';
import { TokenStorageService } from '../auth/token-storage.service';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-product-sale',
  templateUrl: './product-sale.component.html',
  styleUrls: ['./product-sale.component.css']
})
export class ProductSaleComponent implements OnInit {

  sale: Sale = new Sale();
  user: string;
  currentValue = 0;
  finalValue = 0;
  constructor(
    private tokenStorage: TokenStorageService,
    private productService: ProductsService) { }

  ngOnInit() {
    this.sale = this.tokenStorage.getSale();
    this.user = this.tokenStorage.getUsername();
    this.currentValue = 1;
    this.alterValue();
  }

  alterValue(): void {
    this.finalValue = this.sale.product.value * this.currentValue;
  }

  corfimSale(): void {
    this.sale.quantity = this.currentValue;
    this.sale.totalValue = this.finalValue;
    this.sale.username = this.user;
    this.productService.sale(this.sale).subscribe(
      data => {
        console.log('sucesso');
      }, error => {
        console.log('error');
      }
    );
  }
}
