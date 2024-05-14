import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from "../../../components/card/card.component";
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../../../services/producto/producto.service';
import { DestacadosComponent } from "../../../components/destacados/destacados.component";

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
        DestacadosComponent
    ]
})
export class ProductoComponent {

  productoService = inject(ProductoService);

  id_producto: any;
  imagenesConsultadas: any = [];
  imagenes: any[] = [];
  imagenActual: string = '';
  tallas: any[] = [];
  producto: any = {};
  productos: any[] = [1, 2, 3, 4];
  
  constructor(private activatedRoute: ActivatedRoute) {
    this.id_producto = this.activatedRoute.snapshot.paramMap.get('id_producto');
    this.cargarProducto();
  }

  ngOnInit(): void {


  }

  cambiarImagen(imagen: string): void {
    // Cambia la imagen actual al hacer clic en una miniatura
    this.imagenActual = imagen;
  }

  cargarProducto() {
    try {
      //Carga de imagenes
      this.productoService.getImagen(this.id_producto).subscribe((res:any) =>{
        this.imagenesConsultadas = res.resultados
        this.imagenes = [
          this.imagenesConsultadas[0].url,
          this.imagenesConsultadas[1].url,
          this.imagenesConsultadas[2].url,
          this.imagenesConsultadas[3].url, 
        ]
         // Establece la primera imagen como imagen actual al iniciar el componente
        this.imagenActual= this.imagenesConsultadas[0].url
      });
      
      //carga de detalles del producto
      this.productoService
        .getProducto(this.id_producto)
        .subscribe((res: any) => {
          this.producto = res.resultados[0]
          this.tallas = this.producto.tallas.split(' ')
        });


    } catch (error) {
      console.log('Error al cargar el producto', error)
    }
  }
}
