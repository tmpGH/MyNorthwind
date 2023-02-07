import { NgModule } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { CustomersService } from '../../data-access/customers.service';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    SharedModule
  ],
  providers: [CustomersService],
  exports: [RouterModule]
})
export class CustomersModule { }
