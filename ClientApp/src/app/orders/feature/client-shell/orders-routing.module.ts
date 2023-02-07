import { NgModule } from '@angular/core';
import { OrderListComponent } from '../order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: OrderDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: OrderListComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
