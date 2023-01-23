import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { ShippersService } from './shippers.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: ShipperListComponent,
    }]
  }
];

@NgModule({
  declarations: [
    MainComponent,
    ShipperListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule 
  ],
  providers: [ShippersService],
  exports: [RouterModule]
})
export class ShippersModule { }
