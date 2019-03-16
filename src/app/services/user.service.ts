import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../auth/token-storage.service';
import {BackendConfig} from '../backend-config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string;
  private userUrl: string;
  private pmUrl: string;
  private adminUrl: string;
  private httpOptions;

  constructor(private http: HttpClient, private tokenStorage: TokenStorageService,
              private config: BackendConfig) {
    this.baseUrl = config.BASE_URL;
    this.userUrl = this.baseUrl + '/api/test/user';
    this.pmUrl = this.baseUrl + '/api/test/pm';
    this.adminUrl = this.baseUrl + '/api/test/admin';
    this.httpOptions = {
      responseType: 'text',
      headers: new HttpHeaders({ 'Authorization': this.tokenStorage.getToken()})
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
