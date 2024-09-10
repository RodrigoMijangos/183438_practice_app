import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Myinterface } from '../interfaces/myinterface';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  private base_ur = "https://jsonplaceholder.typicode.com/"

  constructor(private _http: HttpClient) { }

  get(): Observable<Myinterface>{
    return this._http.get<Myinterface>(this.base_ur + "albums/51")
  }

  post(body: any): Observable<any>{
    return this._http.post<any>(this.base_ur + "posts/", body)
  }
}
