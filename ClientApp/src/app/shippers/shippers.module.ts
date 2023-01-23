import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ShippersService } from './shippers.service';
import { ShipperDetailsComponent } from './shipper-details/shipper-details.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: ShipperDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: ShipperListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    ShipperListComponent,
    ShipperDetailsComponent
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
  providers: [ShippersService],
  exports: [RouterModule]
})
export class ShippersModule { }
