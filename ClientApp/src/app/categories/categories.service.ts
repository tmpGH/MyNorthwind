import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CategoryListItem } from './model/category-list-item';
import { environment } from 'src/environments/environment';
import { ApiServiceBase } from '../core/services/api-service-base';

@Injectable()
export class CategoriesService extends ApiServiceBase {

  private readonly apiUrl = environment.apiUrl + '/categories';

  constructor(http: HttpClient) { super(http); }

  getCategoryList(pageNumber: number = 1) {
    return this.getListPage<CategoryListItem>(this.apiUrl, pageNumber);
  }

  // getCategoryListCount() {
  //   return this.getListCount(this.apiUrl);
  // }

  getCategory(id: number) {
    return this.getDetails<CategoryListItem>(this.apiUrl, id);
  }

}
