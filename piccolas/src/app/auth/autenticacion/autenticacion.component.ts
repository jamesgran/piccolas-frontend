import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AutenticacionService } from '../../services/autenticacion/autenticacion.service';
import { Router } from '@angular/router';
import { RUTAS } from '../../core/enums/rutas.enum';

@Component({
  selector: 'app-autenticacion',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './autenticacion.component.html',
  styleUrl: './autenticacion.component.css'
})
export class AutenticacionComponent {
  autenticacionService = inject(AutenticacionService);
  constructor(
    private router: Router
  ){

  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  get login() {
    return this.loginForm.get('login');
  }
  get password() {
    return this.loginForm.get('password');
  }

  realizoLogin() {
    if(this.loginForm.invalid){
      return;}

    const data = this.loginForm.value;
    this.autenticacionService.login(data).subscribe({
      next: (resp: any) =>{
        if (resp && resp.usuario) {
          const { nombre, login, email } = resp.usuario;
          this.loginForm.reset()
          Swal.fire({
            html: `Bienvenido ${resp.usuario[0].nombre}`,
          }).then(() => {
            window.location.reload()
          });
        }
      },
      error: (error:any) =>{
        console.error(error)
      }
    })
    }

  }

