import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { RegionListItem, RegionDetails, RegionsState } from './regions-state';

@Injectable({providedIn: 'root'})
export class RegionsService extends ApiServiceBase {

  private _state$: BehaviorSubject<RegionsState>;
  state$: Observable<RegionsState>;

  private readonly apiUrl = environment.apiUrl + '/regions';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new RegionsState());
    this.state$ = this._state$.asObservable(); 
  }

  getRegionList(pageNumber: number = 1) {
    this.getListPage<RegionListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), RegionList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getRegionSearch(pageNumber: number = 1, query: any) {
    this.getListPage<RegionListItem>(this.apiUrl + '/search', pageNumber, query)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), RegionSearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }  

  getRegion(id: number) {
    this.getDetails<RegionDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedRegion: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
