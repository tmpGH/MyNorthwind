import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CategoryListItem } from './model/category-list-item';
import { environment } from 'src/environments/environment';
import { ApiService } from '../shared/api-service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends ApiService {

  private readonly apiUrl = environment.apiUrl + '/categories';

  constructor(http: HttpClient) { super(http); }

  getCategoryList(pageNumber: number = 1) {
    return this.getListPage<CategoryListItem>(this.apiUrl, pageNumber);
  }

  getCategoryListCount() {
    return this.getListCount(this.apiUrl);
  }

}
