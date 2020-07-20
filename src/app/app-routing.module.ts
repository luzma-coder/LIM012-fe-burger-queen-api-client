import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/waiter/order/order.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'order', component: OrderComponent},
  {path: '', redirectTo:'/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  })
export class AppRoutingModule { }
