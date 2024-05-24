import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { MailService } from '../../../services/mail/mail.service';
import { error } from 'console';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  name: string;
  email: string;
  message: string;

  constructor(private emailService: MailService) {}



  contactoForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('',Validators.required)
    
  })

  enviar(){
    const emailData = {
      name: this.contactoForm.value.nombre ||'',
      email: this.contactoForm.value.email || '',
      message: this.contactoForm.value.mensaje || ''
    }

    this.emailService.sendEmail(emailData).subscribe({
      next: (res:any) => {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado exitosamente",
          showConfirmButton: false,
          timer: 3000
        });
      },
      error: () =>{
        Swal.fire({
          icon: "error",
          title: "Error al enviar. Intente mas tarde",
          showConfirmButton: false,
          timer: 3000
        })
      }
    }

    )

  }

}
