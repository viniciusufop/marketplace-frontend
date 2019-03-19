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
  listProductImages: string[] = [];
  constructor(private productsService: ProductsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(
      data => {
        this.product = data;
        console.log(this.product.urlPrimaryImage);
        console.log(this.product.urlImages);
        this.listProductImages = this.listProductImages.concat(this.product.urlPrimaryImage);
        this.listProductImages = this.listProductImages.concat(this.product.urlImages);
        console.log(this.listProductImages);
      }, error => {
        console.log(error);
        this.product = null;
        this.listProductImages = [];
      }
    );
  }

  idProduct(): string {
    if (this.product === undefined) {
      return '';
    }
    return this.product.idES;
  }

  nameProduct(): string {
    if (this.product === undefined) {
      return '';
    }
    return this.product.name;
  }

  comprar(): void {
    console.log('quer comprar o produto= ' + this.product.idES);
  }
}
