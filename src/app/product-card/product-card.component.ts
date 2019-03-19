import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../models/dto/product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  getImage(): string {
    if (this.product.urlPrimaryImage === null) {
      return 'https://via.placeholder.com/150';
    }
    return this.product.urlPrimaryImage;
  }


  selectProduct(product: Product): void {
    this.router.navigate(['products/' + product.idES]);
  }
}
