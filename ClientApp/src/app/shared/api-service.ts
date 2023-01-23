import { HttpClient, HttpParams } from "@angular/common/http";

export abstract class ApiService {
  
  constructor(protected http: HttpClient) { }
  
  getListCount(apiUrl: string) {
    return this.http.get<number>(apiUrl);
  }  

  getListPage<T>(apiUrl: string, pageNumber: number = 1) {
    let params = new HttpParams().set('pageNumber', pageNumber);
    return this.http.get<T[]>(apiUrl, { params });
  }

  getDetails<T>(apiUrl: string, id: number) {
    return this.http.get<T>(apiUrl + '/' + id );
  }

}
