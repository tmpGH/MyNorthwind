import { NgModule } from '@angular/core';
import { OrderListComponent } from '../order-list/order-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { OrdersService } from '../../data-access/orders.service';
import { OrdersRoutingModule } from './orders-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    OrderListComponent,
    OrderDetailsComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
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
