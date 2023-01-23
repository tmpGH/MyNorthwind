import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/services/api-service-base';
import { ProductListItem } from './model/product-list-item';

@Injectable()
export class ProductsService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/products';

  constructor(http: HttpClient) { super(http); }

  getProductList(pageNumber: number = 1) {
    return this.getListPage<ProductListItem>(this.apiUrl, pageNumber);
  }
}
