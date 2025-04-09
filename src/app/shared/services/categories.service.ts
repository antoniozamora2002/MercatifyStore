import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from '../model/CategoryDTO';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/api/v1/categories/`);
  }
}
