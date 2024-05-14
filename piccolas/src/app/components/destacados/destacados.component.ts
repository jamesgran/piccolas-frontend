import { Component, OnInit, inject } from '@angular/core';
import { ProductoService } from '../../services/producto/producto.service';
import { CardComponent } from "../card/card.component";
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
    selector: 'app-destacados',
    standalone: true,
    templateUrl: './destacados.component.html',
    styleUrl: './destacados.component.css',
    imports: [CardComponent, MatGridListModule]
})
export class DestacadosComponent implements OnInit {

ngOnInit(): void {
  this.cargarDestacados()
}
productoService = inject(ProductoService)
productos: any;


cargarDestacados(){
  try {
    this.productoService.getDestacados().subscribe((res:any) =>{
      this.productos=res.resultados

    })
  } catch (error) {
    console.log('Error al cargar destacados')
  }
}
}
