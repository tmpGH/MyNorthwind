import { NgModule } from '@angular/core';
import { CustomerListComponent } from '../customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { CustomerDetailsComponent } from '../customer-details/customer-details.component';
import { CustomerSearchComponent } from '../customer-search/customer-search.component';

const routes: Routes = [
  { 
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: CustomerListComponent,
    }, {
      path: 'search',
      component: CustomerSearchComponent,
    }, {
      path: ':id',
      component: CustomerDetailsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
