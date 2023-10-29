import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product, ProductCategory } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  API_PRODUCTS_ENDPOINT = 'https://api.escuelajs.co/api/v1/products';

  constructor(private httpClient: HttpClient) {}

  getProduct(id: string | null): Observable<Product> {
    let endpoint = `${this.API_PRODUCTS_ENDPOINT}/${id}`;

    return this.httpClient.get<Product>(endpoint);
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.API_PRODUCTS_ENDPOINT);
  }

  updateProducts(product: Product): Observable<Product> {
    let endpoint = `${this.API_PRODUCTS_ENDPOINT}/${product.id}`;
    return this.httpClient.put<Product>(endpoint, product);
  }

  createProducts(productCategory: Product): Observable<Product> {
    let endpoint = `${this.API_PRODUCTS_ENDPOINT}`;
    return this.httpClient.post<Product>(endpoint, productCategory);
  }
}
