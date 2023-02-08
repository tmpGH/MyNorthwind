import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { ShipperListItem, ShipperDetails, ShippersState } from './shippers-state';

@Injectable({providedIn: 'root'})
export class ShippersService extends ApiServiceBase {

  private _state$: BehaviorSubject<ShippersState>;
  state$: Observable<ShippersState>;
  
  private readonly apiUrl = environment.apiUrl + '/shippers';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new ShippersState());
    this.state$ = this._state$.asObservable();    
  }

  getShipperList(pageNumber: number = 1) {
    this.getListPage<ShipperListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), ShipperList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
 
  getShipperSearch(pageNumber: number = 1) {
    //TODO: query params
    this.getListPage<ShipperListItem>(this.apiUrl + '/search', pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), ShipperSearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getShipper(id: number) {
    this.getDetails<ShipperDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedShipper: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
