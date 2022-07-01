import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Car } from './car';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiURL = 'https://cars-backend-wsb.herokuapp.com';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Car[]> {
    return this.httpClient
      .get<Car[]>(this.apiURL + '/cars/')
      .pipe(catchError(this.errorHandler));
  }
  find(id: any): Observable<Car> {
    return this.httpClient
      .get<Car>(this.apiURL + '/cars/' + id)
      .pipe(catchError(this.errorHandler));
  }
  update(id: any, car: Car): Observable<Car> {
    return this.httpClient
      .put<Car>(
        this.apiURL + '/cars/' + id,
        JSON.stringify(car),
        this.httpOptions
      )
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessages = '';
    if (error.error instanceof ErrorEvent) {
      errorMessages = error.error.message;
    } else {
      errorMessages = `Kod błędu: ${error.status}\n Komunikat: ${error.message}`;
    }
    return throwError(errorMessages);
  }
}
