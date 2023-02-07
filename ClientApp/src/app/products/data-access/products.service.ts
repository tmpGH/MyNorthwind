import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../../shared/data-access/api-service-base';
import { ProductDetails } from './product-details';
import { ProductListItem } from './product-list-item';

@Injectable()
export class ProductsService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/products';

  constructor(http: HttpClient) { super(http); }

  getProductList(pageNumber: number = 1) {
    return this.getListPage<ProductListItem>(this.apiUrl, pageNumber);
  }

  getProduct(id: number) {
    return this.getDetails<ProductDetails>(this.apiUrl, id);
  }
}
