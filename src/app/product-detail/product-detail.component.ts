import { Component, OnInit } from '@angular/core';
import {Product} from '../models/dto/product';
import {ProductsService} from '../services/products.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Sale } from '../models/dto/sale';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product();
  listProductImages: string[] = [];
  constructor(private productsService: ProductsService,
    private tokenStorage: TokenStorageService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.productsService.getProduct(this.route.snapshot.params['id']).subscribe(
      data => {
        this.product = data;
        this.listProductImages = this.listProductImages.concat(this.product.urlPrimaryImage);
        this.listProductImages = this.listProductImages.concat(this.product.urlImages);
      }, error => {
        console.log(error);
        this.product = new Product();
        this.listProductImages = [];
      }
    );
  }

  comprar(): void {
    console.log('quer comprar o produto= ' + this.product.idES);
    const sale = new Sale();
    sale.product = this.product;
    this.tokenStorage.saveSale(sale);
    this.router.navigate(['sale/']);
  }
}
