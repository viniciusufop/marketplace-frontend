import { Component, OnInit } from '@angular/core';
import { SaleResponse } from '../models/dto/sale';
import { SaleService } from '../services/sale.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  sales: SaleResponse[];

  constructor(
    private token: TokenStorageService,
    private saleService: SaleService) {
      saleService.getAllSalesByUserName(token.getUsername()).subscribe(
        data => {
          this.sales = data;
        }, error => {
          console.log(error);
          this.sales = [];
        }
      );
    }
  ngOnInit() {
  }

}
