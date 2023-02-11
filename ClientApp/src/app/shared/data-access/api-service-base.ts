import { HttpClient, HttpParams } from "@angular/common/http";

export abstract class ApiServiceBase {
  
  constructor(protected http: HttpClient) { }
  
  getListPage<T>(apiUrl: string, pageNumber: number = 1, query?: any) {
    //TODO: wywoluje sie 2 razy
    let params: HttpParams;
    if(query) {
      params = new HttpParams().appendAll(query);
      params.append('pageNumber', pageNumber);
    } else {
      params = new HttpParams().set('pageNumber', pageNumber);
    }
    
    return this.http.get<T[]>(apiUrl, { params });
  }

  getDetails<T>(apiUrl: string, id: number) {
    //TODO: wywoluje sie 2 razy - 2gi przy wyjsciu
    return this.http.get<T>(apiUrl + '/' + id );
  }
}
