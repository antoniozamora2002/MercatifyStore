import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../../shared/model/ProductDTO';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/api/v1/products/`);
  }
}
