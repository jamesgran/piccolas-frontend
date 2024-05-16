import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UsuarioService } from '../../services/usuario/usuario.service';
import Swal from 'sweetalert2';
import { TablaComponent } from "../tabla/tabla.component";

@Component({
    selector: 'app-usuario',
    standalone: true,
    templateUrl: './usuario.component.html',
    styleUrl: './usuario.component.css',
    imports: [
        MatExpansionModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        TablaComponent
    ]
})
export class UsuarioComponent implements OnInit {
  usuario: any = {};
  usuarioActualizado: any = {};

  constructor() {
    this.getUserData();
  }
  ngOnInit(): void {}
  @ViewChild(MatAccordion) accordion: MatAccordion;
  usuarioService = inject(UsuarioService);



  usuarioForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl({ value: '', disabled: true }, [
      Validators.required,
      Validators.email,
    ]),
    fecha_registro: new FormControl(
      { value: '', disabled: true },
      Validators.required
    ),
    direccion: new FormControl('', Validators.required),
    telefono: new FormControl('', Validators.required),
  });

  get id_usuario() {
    return localStorage.getItem('usuario') || '';
  }


  getUserData() {
    this.usuarioService.getUsuarioById(this.id_usuario).subscribe({
      next: (res: any) => {
        this.usuario = res[0];
        this.usuarioForm.patchValue(this.usuario);
      },
    });
  }
  actualizar() {
    this.usuarioActualizado = {
      nombre: this.usuarioForm.value.nombre,
      apellido: this.usuarioForm.value.apellido,
      direccion: this.usuarioForm.value.direccion,
      telefono: this.usuarioForm.value.telefono,
      id_usuario: this.id_usuario,
    };

    this.usuarioService.actualizarUsuario(this.usuarioActualizado).subscribe({
      next: (res: any) => {
        Swal.fire(
          'Completado',
          'Usuario actualizado satisfactoriamente',
          'success'
        );
        this.getUserData();
      },
      error: (err: any) => {
        Swal.fire('Error!', 'Error al actualizar', 'error');
      },
    });
  }
}
