import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

  private baseUrl = 'https://mydemoapi.herokuapp.com/';
  constructor(private http:HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(this.baseUrl+'getNews');
  }
  public getNewsOf(newsCategory: string): Observable<any>{
    return this.http.get<any>(this.baseUrl+'getNewsOf/'+newsCategory);
  }

}
