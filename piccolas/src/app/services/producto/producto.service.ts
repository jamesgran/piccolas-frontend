import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/configuracion/environment';
const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getProductos(){
    return this.httpClient.get(`${base_url}/producto`)
  }
  getImagenes(){
    return this.httpClient.get(`${base_url}/producto/imagenes`)
  }
  getImagen(id_producto : any){
    return this.httpClient.get(`${base_url}/producto/imagen/${id_producto}`)
  }
  getProducto(id_producto : any){
    return this.httpClient.get(`${base_url}/producto/${id_producto}`)
  }
  getDestacados(){
    return this.httpClient.get(`${base_url}/producto/destacados`)
  }
  
}
