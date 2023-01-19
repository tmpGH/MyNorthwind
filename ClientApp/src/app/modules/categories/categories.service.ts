import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CategoryListItem } from './model/category-list-item';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private readonly apiUrl = environment.apiUrl + '/categories';

  constructor(private http: HttpClient) { }

  getCategoryList(pageNumber: number = 1) {
    let params = new HttpParams().set('pageNumber', pageNumber);
    
    return this.http.get<CategoryListItem[]>(this.apiUrl, { params });
  }

}
