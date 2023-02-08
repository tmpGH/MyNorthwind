import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { EmployeeListItem, EmployeeDetails, EmployeesState } from './employees-state';

@Injectable({providedIn: 'root'})
export class EmployeesService extends ApiServiceBase {

  private _state$: BehaviorSubject<EmployeesState>;
  state$: Observable<EmployeesState>;
  
  private readonly apiUrl = environment.apiUrl + '/employees';

  constructor(http: HttpClient) {
    super(http);
    this._state$ = new BehaviorSubject(new EmployeesState());
    this.state$ = this._state$.asObservable();  
  }

  getEmployeeList(pageNumber: number = 1) {
    this.getListPage<EmployeeListItem>(this.apiUrl, pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), EmployeeList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getEmployeeSearch(pageNumber: number = 1) {
    //TODO: query params
    this.getListPage<EmployeeListItem>(this.apiUrl + '/search', pageNumber)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), EmployeeSearchList: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }

  getEmployee(id: number) {
    this.getDetails<EmployeeDetails>(this.apiUrl, id)
    .subscribe({
      next: x => {
        let newState = { ...this._state$.getValue(), SelectedEmployee: x };
        this._state$.next(newState);
      }, 
      error: err => console.log(err)
    });
  }
}
