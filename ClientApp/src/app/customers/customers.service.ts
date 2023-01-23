import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { CustomerListItem } from './model/customer-list-item';

@Injectable({
  providedIn: 'root'
})
export class CustomersService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/customers';

  constructor(http: HttpClient) { super(http); }

  getCustomerList(pageNumber: number = 1) {
    return this.getListPage<CustomerListItem>(this.apiUrl, pageNumber);
  }  
}
