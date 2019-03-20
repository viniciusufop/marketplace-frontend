import { Component, OnInit } from '@angular/core';
import { Sale } from '../models/dto/sale';
import { TokenStorageService } from '../auth/token-storage.service';
import {ProductsService} from '../services/products.service';
import { Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MessageComponent } from '../message/message.component';

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
  isValueInvalid = false;
  showModal = false;

  constructor(
    private tokenStorage: TokenStorageService,
    private productService: ProductsService,
    private  dialog:  MatDialog) { }

  ngOnInit() {
    this.sale = this.tokenStorage.getSale();
    this.user = this.tokenStorage.getName();
    this.currentValue = 1;
    this.alterValue();
  }

  alterValue(): void {
    this.finalValue = this.sale.product.value * this.currentValue;
    this.isValueInvalid = this.currentValue <= 0 || this.currentValue % 1 !== 0;
  }

  corfimSale(): void {
    if (!this.isValueInvalid) {
      this.sale.quantity = this.currentValue;
      this.sale.totalValue = this.finalValue;
      this.sale.username = this.user;
      this.productService.sale(this.sale).subscribe(
        data => {
          console.log(data);
          this.dialog.open(MessageComponent, { data: {
            title: 'Compra Confirmada!',
            message:  'Sua compra foi efetivada com sucesso, código da Compra: ' + data.code
            }});
        }, error => {
          console.log(error);
          this.dialog.open(MessageComponent, { data: {
            title: 'Erro na operação!',
            message:  'Não foi possível efetivar a compra, tente mais tarde!'
            }});
        }
      );
    } else {

    }
  }
}
