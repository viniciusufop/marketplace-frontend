import { Component, OnInit } from '@angular/core';
import {Product} from '../models/dto/product';
import {ProductsService} from '../services/products.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(
      data => {
        this.product = data;
      }, error => {
        console.log(error);
        this.product = null;
      }
    );
  }

  idProduct(): string {
    if (this.product === undefined) {
      return '';
    }
    return this.product.id;
  }

  nameProduct(): string {
    if (this.product === undefined) {
      return '';
    }
    return this.product.name;
  }

  comprar(): void {
    console.log('quer comprar o produto= ' + this.product.id);
  }
}
