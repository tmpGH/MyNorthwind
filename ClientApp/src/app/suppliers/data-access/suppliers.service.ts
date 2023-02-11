import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { SupplierListItem, SupplierDetails, SuppliersState } from './suppliers-state';

@Injectable({providedIn: 'root'})
export class SuppliersService extends ApiServiceBase {

  private _state$: BehaviorSubject<SuppliersState>;
  state$: Observable<SuppliersState>;

  private readonly apiUrl = environment.apiUrl + '/suppliers';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new SuppliersState());
    this.state$ = this._state$.asObservable();    
  }

  getSupplierList(pageNumber: number = 1) {
    this.getListPage<SupplierListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SupplierList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getSupplierSearch(pageNumber: number = 1, query: any) {
    this.getListPage<SupplierListItem>(this.apiUrl + '/search', pageNumber, query)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SupplierSearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getSupplier(id: number) {
    this.getDetails<SupplierDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedSupplier: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
