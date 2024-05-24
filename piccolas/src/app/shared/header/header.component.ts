import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RUTAS } from '../../core/enums/rutas.enum';
import { ScrollService } from '../../services/scroll/scroll.service';
import { CommonModule } from '@angular/common';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  hayUsuario: boolean= false;

  scrollService = inject(ScrollService)
  autenticacionService = inject(AutenticacionService)

  ngOnInit(): void {
    //funcion para que el scroll se ubique en el top con cada cambio del router
    this.scrollService.setScrollTopOnRouterEvents()
    this.validarLogin()
  }

  get RUTAS(){
    return RUTAS;
  }
  get usuario(){
    return localStorage.getItem('usuario')
  }

  validarLogin(){
    if(this.usuario){
      this.hayUsuario=true
    }
  }
  cerrarSesion(){
    this.autenticacionService.logout()
    Swal.fire({
      icon: "info",
      text: "Se ha cerrado sesion correctamente",
      showConfirmButton: true
    });
  
  }

}
