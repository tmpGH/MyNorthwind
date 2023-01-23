import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/abstractions/api-service-base';
import { EmployeeDetails } from './model/employee-details';
import { EmployeeListItem } from './model/employee-list-item';

@Injectable()
export class EmployeesService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/employees';

  constructor(http: HttpClient) { super(http); }

  getEmployeeList(pageNumber: number = 1) {
    return this.getListPage<EmployeeListItem>(this.apiUrl, pageNumber);
  }

  getEmployee(id: number) {
    return this.getDetails<EmployeeDetails>(this.apiUrl, id);
  }
}
