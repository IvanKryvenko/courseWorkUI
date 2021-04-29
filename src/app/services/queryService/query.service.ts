import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(public http: HttpClient) { }

  makePostOfficeSelection(weightLimit: any, workersCount: any): Observable<any> {

    return this.http.put(`${URL}office/find`, {weightLimit, workersCount});
  }

  makeServiceSelection(servicePrice: any, serviceRating: any): Observable<any> {

    return this.http.put(`${URL}service/find`, {servicePrice, serviceRating});
  }

  makeClientSeelction(age: any, deliveryCount: any): Observable<any> {

    return this.http.put(`${URL}client/find`, {age, deliveryCount});
  }

  makeDeliverySeelction(deliveryType: any, deliveryTime: any): Observable<any> {

    return this.http.put(`${URL}posting/find`, {deliveryType, deliveryTime});
  }

  makeTransportSeelction(releaseDate: any, capacity: any): Observable<any> {

    return this.http.put(`${URL}transport/find`, {releaseDate, capacity});
  }

  makeEmployeeSeelction(salary: any, workStartDate: any): Observable<any> {

    return this.http.put(`${URL}employee/find`, {salary, workStartDate});
  }

  makeCitySelection(popularity: any, postOfficesCount: any): Observable<any> {

    return this.http.put(`${URL}city/find`, {popularity, postOfficesCount});
  }

  makeArchiveSeelction(issuedEmployee: any, sum: any): Observable<any> {

    return this.http.put(`${URL}archive/find`, {issuedEmployee, sum});
  }

  makeCustomSelection(employee: any, office: any): Observable<any> {
    return this.http.put(`${URL}custom/find`, {employee, office});
  }
}
