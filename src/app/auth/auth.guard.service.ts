import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenStorageService} from './token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (route.data.roles == null) {
      return true;
    }
    let autorited = false;
    const token = this.tokenStorageService.getToken();
    if (token != null && this.tokenStorageService.getAuthorities() != null) {
      this.tokenStorageService.getAuthorities().forEach(function (value) {
        autorited = autorited || (route.data.roles.indexOf(value) > -1);
      });
    }
    if (!autorited) {
      // not logged in so redirect to login page with the return url
      alert('Você não tem permissão para acessar essa página');
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    }
    return autorited;
  }
}
