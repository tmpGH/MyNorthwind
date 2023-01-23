import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/services/api-service-base';
import { ShipperListItem } from './model/shipper-list-item';

@Injectable()
export class ShippersService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/shippers';

  constructor(http: HttpClient) { super(http); }

  getShipperList(pageNumber: number = 1) {
    return this.getListPage<ShipperListItem>(this.apiUrl, pageNumber);
  }
  
}
