import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SaleResponse } from '../models/dto/sale';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SaleService {

  private baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.APIEndpoint + '/sales';
  }

  getSale(code: String): Observable <SaleResponse> {
    return this.http.get<SaleResponse>(this.baseUrl + '/' + code);
  }

  getAllSalesByUserName(username: String): Observable <SaleResponse[]> {
    return this.http.get<SaleResponse[]>(this.baseUrl + '?username=' + username);
  }
}
