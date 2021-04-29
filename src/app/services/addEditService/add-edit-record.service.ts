import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddEditRecordService {

  constructor(private http: HttpClient) { }

  addRecord(type: string, record: any): Observable<any> {
    return this.http.post(`http://localhost:3000/${type}`, record);
  }

  deleteRecord(type: string, record: any): Observable<any> {

    const httpHeaders = new HttpHeaders();

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: record
      ,
    };

    return this.http.delete(`http://localhost:3000/${type}`, options);
  }

  editRecord(type: string, record: any): Observable<any> {
    return this.http.put(`http://localhost:3000/${type}`, record);
  }
}
