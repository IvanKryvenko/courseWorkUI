import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTableService {

  constructor(private http: HttpClient) { }

  getTable(tableName: string): Observable<any> {
    let headers = new HttpHeaders();

    headers = headers.append('accepr', 'Access-Control-Allow-Origin');

    return this.http.get(`http://localhost:3000/${tableName}`, {headers});
  }
}
