import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../models/iproduct';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private httpOptions ={}
  constructor(private hClient: HttpClient) {
    this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    }
   }



  getProducts(): Observable<IProduct[]> {
    return this.hClient.get<IProduct[]>(`${environment.apiUrl}/product`, this.httpOptions );
  }
}
