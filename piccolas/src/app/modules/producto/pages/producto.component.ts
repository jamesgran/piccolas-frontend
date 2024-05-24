import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CardComponent } from '../../../components/card/card.component';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../services/producto/producto.service';
import { DestacadosComponent } from '../../../components/destacados/destacados.component';
import { CarritoService } from '../../../services/carrito/carrito.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto',
  standalone: true,
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css',
  imports: [
    CommonModule,
    MatDividerModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    CardComponent,
    DestacadosComponent,
    ReactiveFormsModule
  ],
})
export class ProductoComponent {
  productoService = inject(ProductoService);
  carritoService = inject(CarritoService)
  id_producto: any;
  imagenesConsultadas: any = [];
  imagenes: any[] = [];
  imagenActual: string = '';
  tallas: any[] = [];
  producto: any = {};
  carrito: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {
    this.id_producto = this.activatedRoute.snapshot.paramMap.get('id_producto');
    this.cargarProducto();
  }

  productoForm = new FormGroup({
    talla: new FormControl('', Validators.required),
    cantidad: new FormControl('1',[Validators.min(1), Validators.required]),
  })

  cambiarImagen(imagen: string): void {
    // Cambia la imagen actual al hacer clic en una miniatura
    this.imagenActual = imagen;
  }

  cargarProducto() {
    try {
      //Carga de imagenes
      this.productoService.getImagen(this.id_producto).subscribe((res: any) => {
        this.imagenesConsultadas = res.resultados;
        this.imagenes = [
          this.imagenesConsultadas[0].url,
          this.imagenesConsultadas[1].url,
          this.imagenesConsultadas[2].url,
          this.imagenesConsultadas[3].url,
        ];
        // Establece la primera imagen como imagen actual al iniciar el componente
        this.imagenActual = this.imagenesConsultadas[0].url;
      });

      //carga de detalles del producto
      this.productoService
        .getProducto(this.id_producto)
        .subscribe((res: any) => {
          this.producto = res.resultados[0];
          this.tallas = this.producto.tallas.split(' ');
        });
    } catch (error) {
      console.log('Error al cargar el producto', error);
    }
  }

  anadirAlCarrito(){

    try {

      let productoAnadido = {
        id_producto: this.producto.id_producto,
        nombre: this.producto.nombre,
        precio: this.producto.precio_venta,
        cantidad: this.productoForm.value.cantidad,
        talla: this.productoForm.value.talla
      }
      this.carritoService.anadirAlCarrito(productoAnadido)
      Swal.fire({
        icon: 'success',
        title: 'Se ha añadido al carrito correctamente',
        showConfirmButton: true,
        timer: 3000
      });
      
    } catch (error) {

      Swal.fire({
        icon: 'error',
        title: 'Contactese con el administador',
        showConfirmButton: true
      })
      console.error('error: ', error)
    }
   
  }
}
