import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { HttpClient } from '@angular/common/http';
const data = 'http://localhost:3000/products';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    constructor (private http: HttpClient) {}
    getProduct(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(`${data}`);
    }
    findProductById(id): Observable<IProduct> {
      return this.http.get<IProduct>(`${data}/${id}`);
    }
 }
