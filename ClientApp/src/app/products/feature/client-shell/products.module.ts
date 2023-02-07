import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { ProductsService } from '../../data-access/products.service';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    SharedModule
  ],
  providers: [ProductsService],
  exports: [RouterModule]
})
export class ProductsModule { }
