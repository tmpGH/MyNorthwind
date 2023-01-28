import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/abstractions/api-service-base';
import { TeritoryDetails } from './model/territory-details';
import { TerritoryListItem } from './model/territory-list-item';

@Injectable()
export class TerritoriesService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/territories';

  constructor(http: HttpClient) { super(http); }

  getTeritoryList(pageNumber: number = 1) {
    return this.getListPage<TerritoryListItem>(this.apiUrl, pageNumber);
  }

  getTeritory(id: number) {
    return this.getDetails<TeritoryDetails>(this.apiUrl, id);
  }  
}