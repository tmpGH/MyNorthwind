import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { RegionListItem, RegionDetails } from './regions-state';

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
