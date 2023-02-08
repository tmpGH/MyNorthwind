import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { ShipperListItem, ShipperDetails } from './shippers-state';

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
