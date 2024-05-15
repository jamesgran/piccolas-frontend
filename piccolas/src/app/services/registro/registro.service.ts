import { Injectable } from '@angular/core';
import { environment } from '../../../environments/configuracion/environment';
import { HttpClient } from '@angular/common/http';
const base_url = environment.base_url
@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(
    private httpClient: HttpClient
  ) { }

  registro( usuario: any){
    return this.httpClient.post(`${base_url}/usuario`, usuario)
  }

}
