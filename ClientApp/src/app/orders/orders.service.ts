import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/services/api-service-base';
import { OrderListItem } from './model/order-list-item';

@Injectable()
export class OrdersService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/orders';

  constructor(http: HttpClient) { super(http); }

  getOrderList(pageNumber: number = 1) {
    return this.getListPage<OrderListItem>(this.apiUrl, pageNumber);
  }
}
