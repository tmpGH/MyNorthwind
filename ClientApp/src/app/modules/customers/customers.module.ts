import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: CustomerListComponent }
];

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CustomersModule { }
