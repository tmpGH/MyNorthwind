import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { EmployeeListItem } from './model/employee-list-item';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/employees';

  constructor(http: HttpClient) { super(http); }

  getEmployeeList(pageNumber: number = 1) {
    return this.getListPage<EmployeeListItem>(this.apiUrl, pageNumber);
  }

}
