import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: OrderListComponent }
];

@NgModule({
  declarations: [OrderListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersModule { }
