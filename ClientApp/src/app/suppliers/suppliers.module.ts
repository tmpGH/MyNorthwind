import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SuppliersService } from './suppliers.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: SupplierListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    SupplierListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule 
  ],
  providers: [SuppliersService],
  exports: [RouterModule]
})
export class SuppliersModule { }
