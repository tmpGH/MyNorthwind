import { NgModule } from '@angular/core';
import { OrderListComponent } from '../order-list/order-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbDatepickerModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsComponent } from '../order-details/order-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { OrdersService } from '../../data-access/orders.service';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrderSearchComponent } from '../order-search/order-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    OrderListComponent,
    OrderDetailsComponent,
    OrderSearchComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    NgbDatepickerModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [OrdersService],
  exports: [RouterModule]
})
export class OrdersModule { }
