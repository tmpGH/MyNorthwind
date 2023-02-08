import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { ShipperDetailsComponent } from '../shipper-details/shipper-details.component';
import { ShipperListComponent } from '../shipper-list/shipper-list.component';
import { ShipperSearchComponent } from '../shipper-search/shipper-search.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: '',
      pathMatch: 'full',
      component: ShipperListComponent,
    }, {
      path: 'search',
      component: ShipperSearchComponent,
    }, {
      path: ':id',
      component: ShipperDetailsComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShippersRoutingModule { }
