import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { ShipperListItem } from './model/shipper-list-item';

@Injectable({
  providedIn: 'root'
})
export class ShippersService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/shippers';

  constructor(http: HttpClient) { super(http); }

  getShipperList(pageNumber: number = 1) {
    return this.getListPage<ShipperListItem>(this.apiUrl, pageNumber);
  }
  
}
