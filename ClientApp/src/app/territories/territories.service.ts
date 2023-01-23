import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { TerritoryListItem } from './model/territory-list-item';

@Injectable({
  providedIn: 'root'
})
export class TerritoriesService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/territories';

  constructor(http: HttpClient) { super(http); }

  getTeritoryList(pageNumber: number = 1) {
    return this.getListPage<TerritoryListItem>(this.apiUrl, pageNumber);
  }
}
