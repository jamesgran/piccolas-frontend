import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuenta',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cuenta.component.html',
  styleUrl: './cuenta.component.css'
})
export class CuentaComponent {
loginForm = new FormGroup({
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required)
})

registroForm = new FormGroup({
  nombre: new FormControl('', Validators.required),
  apellido: new FormControl('', Validators.required),
  email: new FormControl('', [Validators.required, Validators.email]),
  password: new FormControl('', Validators.required),
  direccion: new FormControl('', Validators.required),
  telefono: new FormControl('', Validators.required)
})



login(){
Swal.fire({
  icon: "success",
  title: "Se ha logueado correctamente",
  showConfirmButton: true,
  timer: 1500
});
}

registro(){
  Swal.fire({
    icon: "success",
    title: "Se ha Registrado correctamente",
    showConfirmButton: true,
    timer: 1500
  });
}


}

