import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:9000/products/public/';
  private searchNameProductsUrl = '/search';
  constructor(private http: HttpClient) { }

  searchNameProducts(nameSearch: string): Observable<Object> {
    return this.http.get(this.baseUrl + nameSearch + this.searchNameProductsUrl);
  }
}
