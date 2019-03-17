import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  options: string[] = [];
  constructor(private productsService: ProductsService,
              private router: Router) { }

  ngOnInit() {
  }

  search($event) {
    const value = ($event.srcElement as HTMLInputElement).value;
    if (value.length > 2) {
      this.productsService.searchNameProducts(value).subscribe(
        data => {
          this.options = data;
        },
        error => {
          console.log(error);
          this.options = [];
        }
      );
    } else {
      this.options = [];
    }
  }
  onEnter(value: string): void {
    console.log(value);
    this.router.navigate(['products'], { queryParams: { 'name': value } });
  }
}
