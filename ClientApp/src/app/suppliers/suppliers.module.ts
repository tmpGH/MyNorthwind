import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SuppliersService } from './suppliers.service';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SharedModule } from '../shared/shared.module';

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
  declarations: [
    MainComponent,
    SupplierListComponent,
    SupplierDetailsComponent
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
  providers: [SuppliersService],
  exports: [RouterModule]
})
export class SuppliersModule { }
