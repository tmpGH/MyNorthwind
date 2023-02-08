import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { ProductListItem, ProductDetails, ProductsState } from './products-state';

@Injectable({providedIn: 'root'})
export class ProductsService extends ApiServiceBase {

  private _state$: BehaviorSubject<ProductsState>;
  state$: Observable<ProductsState>;

  private readonly apiUrl = environment.apiUrl + '/products';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new ProductsState());
    this.state$ = this._state$.asObservable(); 
  }

  getProductList(pageNumber: number = 1) {
    this.getListPage<ProductListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), ProductList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getProductSearch(pageNumber: number = 1) {
    //TODO: query params
    this.getListPage<ProductListItem>(this.apiUrl + '/search', pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), ProductSearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getProduct(id: number) {
    this.getDetails<ProductDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedProduct: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
