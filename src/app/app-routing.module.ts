import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {PmComponent} from './pm/pm.component';
import {AdminComponent} from './admin/admin.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AuthGuardService} from './auth/auth.guard.service';
import {Role} from './models/dto/role';
import {ProductTableComponent} from './product-table/product-table.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { ProductSaleComponent } from './product-sale/product-sale.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuardService],
    data: {roles : [Role.USER, Role.ADMIN]}
  },
  {
    path: 'pm',
    component: PmComponent,
    canActivate: [AuthGuardService],
    data: {roles : [Role.PM, Role.ADMIN]}
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuardService],
    data: {roles : [Role.ADMIN]}
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: RegisterComponent
  },
  {
    path: 'products',
    component: ProductTableComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'sale',
    component: ProductSaleComponent,
    canActivate: [AuthGuardService],
    data: {roles : [Role.USER]}
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
