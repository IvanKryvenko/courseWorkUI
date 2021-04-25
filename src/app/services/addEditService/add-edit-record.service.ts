import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddEditRecordService {

  constructor(private http: HttpClient) { }

  editRecord(type: string, record: any): Observable<any> {
    return this.http.put(`http://localhost:3000/${type}`, record);
  }
}
