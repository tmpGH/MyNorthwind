import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { SupplierListItem } from './model/supplier-list-item';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/suppliers';

  constructor(http: HttpClient) { super(http); }

  getSupplierList(pageNumber: number = 1) {
    return this.getListPage<SupplierListItem>(this.apiUrl, pageNumber);
  }

}
