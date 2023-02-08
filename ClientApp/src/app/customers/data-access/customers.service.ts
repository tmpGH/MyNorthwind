import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { CustomerListItem, CustomerDetails, CustomersState } from './customers-state';

@Injectable({providedIn: 'root'})
export class CustomersService extends ApiServiceBase {

  private _state$: BehaviorSubject<CustomersState>;
  state$: Observable<CustomersState>;
  
  private readonly apiUrl = environment.apiUrl + '/customers';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new CustomersState());
    this.state$ = this._state$.asObservable(); 
  }

  getCustomerList(pageNumber: number = 1) {
    this.getListPage<CustomerListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), CustomerList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getCategorySearch(pageNumber: number = 1) {
    //TODO: query params
    this.getListPage<CustomerListItem>(this.apiUrl + '/search', pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), CustomerSearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getCustomer(id: number) {
    this.getDetails<CustomerDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedCustomer: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
