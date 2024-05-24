import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/configuracion/environment';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { UsuarioModel } from '../../core/models/usuario.model';
import { RUTAS } from '../../core/enums/rutas.enum';
const base_url = environment.base_url;
@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  usuario: UsuarioModel;
  constructor(private httpClient: HttpClient, private router: Router) {}
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  validarToken(): Observable<boolean> {
    return this.httpClient
      .get(`${base_url}/auth`, {
        headers: {
          'x-token': this.token,
        },
      })
      .pipe(
        map((resp: any) => {
          const {
            id_usuario,
            nombre,
            apellido,
            email,
            password,
            telefono,
            direccion,
            fecha_registro,
            rol,
          } = resp.usuario;
          console.log(resp)
          this.usuario = new UsuarioModel(
            id_usuario,
            nombre,
            apellido,
            email,
            password,
            telefono,
            direccion,
            fecha_registro,
            rol
          );
          localStorage.setItem('token', resp.token);
          
          

          return true;
        }),
        catchError((error) => {
          console.error(error);
          return of(false);
        })
      );
  }

  login(login: any) {
    return this.httpClient.post(`${base_url}/auth`, login).pipe(
      //pipe permite unir otra funcion o encadenar el tap
      tap((resp: any) => {
        localStorage.setItem('token', resp.token);
        console.log(resp)
        localStorage.setItem('usuario', resp.usuario[0].id_usuario)
        //this.router.navigateByUrl('login')
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario')
    this.router.navigateByUrl(RUTAS.INICIO)
  }
}
