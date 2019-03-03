import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../auth/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:9000';
  private userUrl = this.baseUrl + '/api/test/user';
  private pmUrl = this.baseUrl + '/api/test/pm';
  private adminUrl = this.baseUrl + '/api/test/admin';
  private httpOptions;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService) {
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({ 'Authorization': this.tokenStorage.getToken()}
    };
  }

  getUserBoard(): Observable<Object> {
    return this.http.get(this.userUrl, this.httpOptions);
  }

  getPMBoard(): Observable<Object> {
    return this.http.get(this.pmUrl, this.httpOptions);
  }

  getAdminBoard(): Observable<Object> {
    return this.http.get(this.adminUrl, this.httpOptions);
  }
}
