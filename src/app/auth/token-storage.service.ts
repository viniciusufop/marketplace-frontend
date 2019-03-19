import { Injectable } from '@angular/core';
import {Role} from '../models/dto/role';
import { Sale } from '../models/dto/sale';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
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

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): Role[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
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
