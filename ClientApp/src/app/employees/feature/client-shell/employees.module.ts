import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { MainComponent } from '../../ui/main/main.component';
import { NgbAccordionModule, NgbNavModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { SharedModule } from '../../../shared/shared.module';
import { EmployeesService } from '../../data-access/employees.service';
import { EmployeesRoutingModule } from './employees-routing.module';

@NgModule({
  declarations: [
    MainComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    NgbAccordionModule,
    NgbTypeaheadModule,
    NgbPaginationModule,
    NgbNavModule,
    SharedModule
  ],
  providers: [EmployeesService],
  exports: [RouterModule]
})
export class EmployeesModule { }
