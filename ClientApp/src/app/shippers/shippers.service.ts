import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/abstractions/api-service-base';
import { ShipperListItem } from './model/shipper-list-item';
import { ShipperDetails } from './model/shipper-details';

@Injectable()
export class ShippersService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/shippers';

  constructor(http: HttpClient) { super(http); }

  getShipperList(pageNumber: number = 1) {
    return this.getListPage<ShipperListItem>(this.apiUrl, pageNumber);
  }
 
  getShipper(id: number) {
    return this.getDetails<ShipperDetails>(this.apiUrl, id);
  }
}
