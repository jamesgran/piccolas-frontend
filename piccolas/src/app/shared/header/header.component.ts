import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { RUTAS } from '../../core/enums/rutas.enum';
import { ScrollService } from '../../services/scroll/scroll.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
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

  constructor(
    //solucion para error window is not defined
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ){
    
  }

  ngOnInit(): void {
    //funcion para que el scroll se ubique en el top con cada cambio del router
    this.scrollService.setScrollTopOnRouterEvents()
    this.validarLogin()
  }

  get RUTAS(){
    return RUTAS;
  }
  get usuario(){
    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem('usuario');
    }
    return null;
  }

  validarLogin(){
    if(this.usuario){
      this.hayUsuario=true
    }
  }
  cerrarSesion(){
    this.autenticacionService.logout()
    this.router.navigateByUrl('')
    Swal.fire({
      icon: "info",
      text: "Se ha cerrado sesion correctamente",
      showConfirmButton: true,
      timer: 2000
    });
    
    
  
  }
}
