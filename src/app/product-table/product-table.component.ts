import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../models/dto/product';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent implements OnInit, OnDestroy {
  headElements = ['ElasticSearchID', 'NAME'];
  elements: Product[] = [];
  name: string;
  navigationSubscription;

  constructor(private productService: ProductsService,
              private router: Router,
              private route: ActivatedRoute) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseInvites();
      }
    });
  }

  ngOnInit() {
    this.listProducts();
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  initialiseInvites() {
    this.listProducts();
  }

  listProducts(): void {
    this.name = this.route.snapshot.queryParamMap.get('name');
    this.productService.listProducts(5, 1, this.name).subscribe(
      data => {
        this.elements = data.content;
      }, error => {
        console.log(error);
        this.elements = [];
      }
    );
  }

  selectProduct(product: Product): void {
    this.router.navigate(['products/' + product.idES]);
  }
}
