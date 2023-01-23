import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/services/api-service-base';
import { CustomerListItem } from './model/customer-list-item';

@Injectable()
export class CustomersService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/customers';

  constructor(http: HttpClient) { super(http); }

  getCustomerList(pageNumber: number = 1) {
    return this.getListPage<CustomerListItem>(this.apiUrl, pageNumber);
  }  
}
