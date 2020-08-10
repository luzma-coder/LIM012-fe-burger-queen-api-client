import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/waiter/order/order.component';
import { PendingsComponent } from './components/waiter/pendings/pendings.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserComponent } from './components/admin/users/user.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/admin/products/products/products.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'navigation',
    component: NavigationComponent,
    children: [
      { path: '', redirectTo: '/order', pathMatch: 'full' },
      { path: 'order', component: OrderComponent },
      { path: 'pendings', component: PendingsComponent },
      { path: 'user', component: UserComponent },
      { path: 'products', component: ProductsComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation : true}
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
