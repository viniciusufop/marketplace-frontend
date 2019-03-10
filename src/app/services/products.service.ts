import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PageProduct, Product} from '../models/dto/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseUrl = 'http://localhost:9000/products/public';
  private searchNameProductsUrl = '/search';
  private listNameProductsUrl = '/list';
  constructor(private http: HttpClient) { }

  searchNameProducts(nameSearch: string): Observable<string[]> {
    return this.http.get<string[]>(this.baseUrl + this.searchNameProductsUrl + '?name=' + nameSearch);
  }

  listProducts(size: number, page: number, name: string): Observable<PageProduct> {
    return this.http.get<PageProduct>(this.baseUrl + this.listNameProductsUrl + '?name='
      + name + '&size=' + size + '&page=' + ( page - 1 ));
  }

  getProduct(uuid: string): Observable<Product> {
    return this.http.get<Product>(this.baseUrl + '/' + uuid);
  }
}
