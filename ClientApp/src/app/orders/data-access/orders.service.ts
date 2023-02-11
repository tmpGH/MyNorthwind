import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { OrderListItem, OrderDetails, OrdersState } from './orders-state';

@Injectable({providedIn: 'root'})
export class OrdersService extends ApiServiceBase {

  private _state$: BehaviorSubject<OrdersState>;
  state$: Observable<OrdersState>;

  private readonly apiUrl = environment.apiUrl + '/orders';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new OrdersState());
    this.state$ = this._state$.asObservable();    
  }

  getOrderList(pageNumber: number = 1) {
    this.getListPage<OrderListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), OrderList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getOrderSearch(pageNumber: number = 1, query: any) {
    this.getListPage<OrderListItem>(this.apiUrl + '/search', pageNumber, query)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), OrderSearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getOrder(id: number) {
    this.getDetails<OrderDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedOrder: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
