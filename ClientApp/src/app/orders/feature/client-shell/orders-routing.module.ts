import { NgModule } from '@angular/core';
import { OrderListComponent } from '../order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { OrderSearchComponent } from '../order-search/order-search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: OrderListComponent,
    }, {
      path: 'search',
      component: OrderSearchComponent,
    }, {
      path: ':id',
      component: OrderDetailsComponent,
    }, ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
