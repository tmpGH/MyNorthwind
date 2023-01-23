import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from './orders.service';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { SharedModule } from '../shared/shared.module';

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
  declarations: [
    MainComponent,
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    SharedModule
  ],
  providers: [OrdersService],
  exports: [RouterModule]
})
export class OrdersModule { }
