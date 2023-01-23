import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/abstractions/api-service-base';
import { RegionListItem } from './model/region-list-item';
import { RegionDetails } from './model/region-details';

@Injectable()
export class RegionsService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/regions';

  constructor(http: HttpClient) { super(http); }

  getRegionList(pageNumber: number = 1) {
    return this.getListPage<RegionListItem>(this.apiUrl, pageNumber);
  }

  getRegion(id: number) {
    return this.getDetails<RegionDetails>(this.apiUrl, id);
  }
}
