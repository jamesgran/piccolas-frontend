import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pedido } from '../../core/interfaces/pedido.interface';
import { environment } from '../../../environments/configuracion/environment';
const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  crearPedido(pedido: Pedido){
    return this.httpClient.post(`${base_url}/pedido`, pedido)
  }
  getPedidoByUsuario( id_usuario: any){
    return this.httpClient.get(`${base_url}/pedido/${id_usuario}`)
  }
}
