import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { CategoriesState, CategoryDetails, CategoryListItem } from './categories-state';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class CategoriesService extends ApiServiceBase {

  private _state$: BehaviorSubject<CategoriesState>;
  state$: Observable<CategoriesState>;
  
  private readonly apiUrl = environment.apiUrl + '/categories';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new CategoriesState());
    this.state$ = this._state$.asObservable();    
  }

  getCategoryList(pageNumber: number = 1) {
    this.getListPage<CategoryListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), CategoryList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getCategorySearch(pageNumber: number = 1) {
    //TODO: query params
    this.getListPage<CategoryListItem>(this.apiUrl + '/search', pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), CategorySearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getCategory(id: number) {
    this.getDetails<CategoryDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedCategory: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
