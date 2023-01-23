import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/services/api-service-base';
import { EmployeeListItem } from './model/employee-list-item';

@Injectable()
export class EmployeesService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/employees';

  constructor(http: HttpClient) { super(http); }

  getEmployeeList(pageNumber: number = 1) {
    return this.getListPage<EmployeeListItem>(this.apiUrl, pageNumber);
  }

}
