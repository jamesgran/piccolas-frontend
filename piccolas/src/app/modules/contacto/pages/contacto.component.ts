import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  contactoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('',Validators.required)
    
  })

  contacto(){
    Swal.fire({
      icon: "success",
      title: "Mensaje enviado correctamente",
      showConfirmButton: true,
      timer: 2000
    });
  }

}
