import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShipperListComponent } from './shipper-list/shipper-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: ShipperListComponent }
];

@NgModule({
  declarations: [
    ShipperListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ShippersModule { }
