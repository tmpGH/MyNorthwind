import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';
import { ProductListItem } from './model/product-list-item';

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/products';

  constructor(http: HttpClient) { super(http); }

  getProductList(pageNumber: number = 1) {
    return this.getListPage<ProductListItem>(this.apiUrl, pageNumber);
  }
}
