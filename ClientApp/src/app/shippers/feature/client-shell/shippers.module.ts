import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ShipperDetailsComponent } from '../shipper-details/shipper-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { ShippersService } from '../../data-access/shippers.service';
import { ShipperListComponent } from '../shipper-list/shipper-list.component';
import { ShippersRoutingModule } from './shippers-routing.module';
import { ShipperSearchComponent } from '../shipper-search/shipper-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MainComponent,
    ShipperListComponent,
    ShipperDetailsComponent,
    ShipperSearchComponent
  ],
  imports: [
    CommonModule,
    ShippersRoutingModule,
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ShippersService],
  exports: [RouterModule]
})
export class ShippersModule { }
