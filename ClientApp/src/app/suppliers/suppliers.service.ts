import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/services/api-service-base';
import { SupplierListItem } from './model/supplier-list-item';

@Injectable()
export class SuppliersService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/suppliers';

  constructor(http: HttpClient) { super(http); }

  getSupplierList(pageNumber: number = 1) {
    return this.getListPage<SupplierListItem>(this.apiUrl, pageNumber);
  }

}
