import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { SupplierDetailsComponent } from '../supplier-details/supplier-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { SuppliersService } from '../../data-access/suppliers.service';
import { SupplierListComponent } from '../supplier-list/supplier-list.component';
import { SuppliersRoutingModule } from './suppliers-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    SupplierListComponent,
    SupplierDetailsComponent
  ],
  imports: [
    CommonModule,
    SuppliersRoutingModule,
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
