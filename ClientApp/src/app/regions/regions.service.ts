import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { RegionListItem } from './model/region-list-item';

@Injectable({
  providedIn: 'root'
})
export class RegionsService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/regions';

  constructor(http: HttpClient) { super(http); }

  getRegionList(pageNumber: number = 1) {
    return this.getListPage<RegionListItem>(this.apiUrl, pageNumber);
  }
}
