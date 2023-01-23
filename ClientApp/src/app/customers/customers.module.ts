import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from './customers.service';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: CustomerDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: CustomerListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerDetailsComponent
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
  providers: [CustomersService],
  exports: [RouterModule]
})
export class CustomersModule { }
