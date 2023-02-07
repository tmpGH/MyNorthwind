import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { CustomerDetails } from './customer-details';
import { CustomerListItem } from './customer-list-item';

@Injectable()
export class CustomersService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/customers';

  constructor(http: HttpClient) { super(http); }

  getCustomerList(pageNumber: number = 1) {
    return this.getListPage<CustomerListItem>(this.apiUrl, pageNumber);
  }  

  getCustomer(id: number) {
    return this.getDetails<CustomerDetails>(this.apiUrl, id);
  }
}
