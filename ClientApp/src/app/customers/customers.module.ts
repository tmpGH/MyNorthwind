import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomersService } from './customers.service';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: CustomerListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    CustomerListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule 
  ],
  providers: [CustomersService],
  exports: [RouterModule]
})
export class CustomersModule { }
