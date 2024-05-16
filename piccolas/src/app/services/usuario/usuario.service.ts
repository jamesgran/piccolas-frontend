import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/configuracion/environment';
const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(
    private httpClient: HttpClient
  ) { }

  getUsuarioById( id_usuario: any){
    return this.httpClient.get(`${base_url}/usuario/${id_usuario}`)
  }
  actualizarUsuario( usuario: any){
    return this.httpClient.put(`${base_url}/usuario`, usuario)
  }
}
