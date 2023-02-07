import { NgModule } from '@angular/core';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [{
      path: ':id',
      component: EmployeeDetailsComponent,
    }, {
      path: '',
      pathMatch: 'full',
      component: EmployeeListComponent,
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
