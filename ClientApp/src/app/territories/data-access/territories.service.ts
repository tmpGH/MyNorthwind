import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { TerritoriesState, TerritoryDetails, TerritoryListItem } from './territories-state';

@Injectable({providedIn: 'root'})
export class TerritoriesService extends ApiServiceBase {

  private _state$: BehaviorSubject<TerritoriesState>;
  state$: Observable<TerritoriesState>;

  private readonly apiUrl = environment.apiUrl + '/territories';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new TerritoriesState());
    this.state$ = this._state$.asObservable();    
  }

  getTerritoryList(pageNumber: number = 1) {
    this.getListPage<TerritoryListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), TerritoryList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getTerritorySearch(pageNumber: number = 1, query: any) {
    this.getListPage<TerritoryListItem>(this.apiUrl + '/search', pageNumber, query)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), TerritorySearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getTerritory(id: number) {
    this.getDetails<TerritoryDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedTerritory: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }  
}
