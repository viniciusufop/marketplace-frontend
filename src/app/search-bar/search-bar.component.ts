import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  private myControl = new FormControl();
  private options: string[] = [];
  constructor(private productsService: ProductsService) {
  }

  ngOnInit() {
  }

  search($event) {
    const value = ($event.srcElement as HTMLInputElement).value;
    if(value.length > 2) {
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
}
