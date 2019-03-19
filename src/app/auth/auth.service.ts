import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SignupRequest} from '../models/request/sigup.request';
import {LoginRequest} from '../models/request/login.request';
import {JwtResponse} from '../models/response/jwt.response';
import {environment} from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string;
  private loginUrl: string;
  private signupUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.APIEndpoint;
    this.loginUrl = this.baseUrl + '/api/auth/signin';
    this.signupUrl = this.baseUrl + '/api/auth/signup';
  }

  attemptAuth(credentials: LoginRequest): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

  signUp(info: SignupRequest): Observable<string> {
    return this.http.post<string>(this.signupUrl, info, httpOptions);
  }
}
