import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../auth/token-storage.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbarmob',
  templateUrl: './navbarmob.component.html',
  styleUrls: ['./navbarmob.component.css']
})
export class NavbarmobComponent implements OnInit {
  private roles: string[];
  authority: string;
  private username: string;
  private navigationSubscription;


  constructor(private tokenStorage: TokenStorageService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.configurarBarra();
      }
    });
  }

  ngOnInit() {
    this.configurarBarra();
  }

  configurarBarra(): void {
    if (this.tokenStorage.getToken()) {
      this.username = this.tokenStorage.getUsername();
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }


  logout(): void {
    this.tokenStorage.signOut();
    window.location.reload();
  }

}
