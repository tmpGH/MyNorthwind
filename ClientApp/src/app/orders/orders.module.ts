import { NgModule } from '@angular/core';
import { OrderListComponent } from './order-list/order-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from './orders.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: OrderListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    OrderListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule 
  ],
  providers: [OrdersService],
  exports: [RouterModule]
})
export class OrdersModule { }
