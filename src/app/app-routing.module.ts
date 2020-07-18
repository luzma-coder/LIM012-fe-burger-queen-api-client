import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './components/waiter/order/order.component';


const routes: Routes = [
  { path: 'order', component: OrderComponent }
];
@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)],
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
