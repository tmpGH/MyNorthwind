import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { TeritoryDetails } from './territory-details';
import { TerritoryListItem } from './territory-list-item';

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
