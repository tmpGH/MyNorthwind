import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { SupplierDetailsComponent } from '../supplier-details/supplier-details.component';
import { SupplierListComponent } from '../supplier-list/supplier-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: SupplierDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: SupplierListComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuppliersRoutingModule { }
