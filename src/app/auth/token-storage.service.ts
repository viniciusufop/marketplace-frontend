import { Injectable } from '@angular/core';
import {Role} from '../models/dto/role';
import { Sale } from '../models/dto/sale';
import * as jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'AuthToken';
const SALE_KEY = 'SaleKey';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  private roles: Array<Role> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  private getDecodedAccessToken(token: string): any {
    try {
        return jwt_decode(token);
    } catch (Error) {
        return null;
    }
  }

  public saveToken(token: string) {
    const obj = this.getDecodedAccessToken(token);
    console.log(obj);
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public getUsername(): string {
    if (sessionStorage.getItem(TOKEN_KEY)) {
      const objToken = this.getDecodedAccessToken(sessionStorage.getItem(TOKEN_KEY));
      return objToken.sub;
    }
    return null;
  }

  public getName(): string {
    if (sessionStorage.getItem(TOKEN_KEY)) {
      const objToken = this.getDecodedAccessToken(sessionStorage.getItem(TOKEN_KEY));
      return objToken.sub;
    }
    return null;
  }

  public getAuthorities(): Role[] {
    this.roles = [];
    if (sessionStorage.getItem(TOKEN_KEY)) {
      const objToken = this.getDecodedAccessToken(sessionStorage.getItem(TOKEN_KEY));
      objToken.role.forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }

  public saveSale(sale: Sale) {
    window.sessionStorage.removeItem(SALE_KEY);
    window.sessionStorage.setItem(SALE_KEY, JSON.stringify(sale));
  }

  public getSale(): Sale {
    let sale: Sale;
    if (sessionStorage.getItem(SALE_KEY)) {
      sale = JSON.parse(sessionStorage.getItem(SALE_KEY));
    }

    return sale;
  }
}
