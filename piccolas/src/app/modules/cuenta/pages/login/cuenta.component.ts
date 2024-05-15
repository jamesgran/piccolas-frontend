import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import Swal from 'sweetalert2';
import { RegistroService } from '../../../../services/registro/registro.service';
import { error } from 'console';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css',
})
export class CuentaComponent {
  registroService = inject(RegistroService);
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  registroForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
  });

  login() {
    Swal.fire({
      icon: 'success',
      title: 'Se ha logueado correctamente',
      showConfirmButton: true,
      timer: 1500,
    });
  }

  registro() {
    let usuario: any = {};

    if (this.registroForm.valid) {
      usuario = {
        nombre: this.registroForm.value.nombre,
        apellido: this.registroForm.value.apellido,
        email: this.registroForm.value.email,
        password: this.registroForm.value.password,
        direccion: this.registroForm.value.direccion,
        telefono: this.registroForm.value.telefono,
      };
      this.registroService.registro(usuario).subscribe(
        (res: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Se ha Registrado correctamente',
            showConfirmButton: true,
            timer: 1500,
          });
          this.registroForm.reset()
        },
        (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Error al registrarse',
            showConfirmButton: true,
            timer: 1500,
          });
        }
      );
    }
  }
}
