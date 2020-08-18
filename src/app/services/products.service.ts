import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProduct = `${environment.apiUrl}products`;
  LStoken = localStorage.getItem('token');
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  getAdmin(name: string): Observable<Product> {
    const url = `${this.urlProduct}/?name=${name}`;
    return this.http.get<Product>(url, { headers: { token: this.LStoken } });
  }

  // consultar del servidor (route) GET /products/
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.urlProduct);
  }

  // consultar del servidor (route) GET /products/
  getProduct(id: number): Observable<Product> {
    console.log(`${this.urlProduct}/${id}`);
    return this.http.get<Product>(`${this.urlProduct}/${id}`);
  }
  // _________________________________________________________________________

  uploadFile(File): Observable<any> {
    const peticion = 'POST/products';
    const json = JSON.stringify(File);
    console.log(File);
    const headers = new HttpHeaders().set('content-Type', 'application/json');
    return this.http.post(this.urlProduct + peticion, File, { headers });
  }

  getUploads(): Observable<any> {
    const peticion = 'GET/products';
    return this.http.get(this.urlProduct + peticion);
  }


  // _________________________________________________________________________
  // enviar al servidor un nuevo usuario (route) POST /users
  postProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.urlProduct, product);
  }

  // eliminar un usuario DELETE
  deleteProduct(product: Product | number): Observable<Product> {
    console.log(typeof product);
    const id = typeof product === 'number' ? product : product.id;

    return this.http.delete<Product>(`${this.urlProduct}/${id}`);
  }

  // actualizar datos del usuario PUT
  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.urlProduct}/${product.id}`, product, this.httpOptions);
  }

}
