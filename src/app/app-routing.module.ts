import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './UI/auth/login/login.component';
import { RegisterComponent } from './UI/auth/register/register.component';
import { ShopComponent } from './UI/shop/shop.component';

const routes: Routes = [ 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'shop', component: ShopComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
