import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  private apiUrl = 'http://localhost:8081/articles';

  constructor(private http: HttpClient) {}

  getGraphImageByProductId(productId: string): Observable<Product> {
    const url = `${this.apiUrl}/${productId}/graph`;
    return this.http.get<Product>(url);
  }
}
