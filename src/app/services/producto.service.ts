import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductoInterface } from '../interfaces/producto-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private http = inject(HttpClient)

  constructor() { }

  getProducto() : Observable<ProductoInterface[]>{
    return this.http.get<ProductoInterface[]>("https://api.escuelajs.co/api/v1/products")
  }
  getProductoOnly(numero: number) : Observable<ProductoInterface[]>{
    return this.http.get<ProductoInterface[]>("https://api.escuelajs.co/api/v1/products/" + numero)
  }
}
