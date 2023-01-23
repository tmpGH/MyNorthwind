import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { OrderListItem } from './model/order-list-item';

@Injectable({
  providedIn: 'root'
})
export class OrdersService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/orders';

  constructor(http: HttpClient) { super(http); }

  getOrderList(pageNumber: number = 1) {
    return this.getListPage<OrderListItem>(this.apiUrl, pageNumber);
  }
}
