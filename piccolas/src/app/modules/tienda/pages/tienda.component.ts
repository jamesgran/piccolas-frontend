import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from "../../../components/card/card.component";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../../services/producto/producto.service';
import {PageEvent, MatPaginatorModule, MatPaginator} from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { routes } from '../../../app.routes';
@Component({
    selector: 'app-tienda',
    standalone: true,
    templateUrl: './tienda.component.html',
    styleUrl: './tienda.component.css',
    imports: [
      MatGridListModule, 
      CardComponent,
      CommonModule,
      MatButtonModule,
      MatPaginatorModule,
      
    ]
})
export class TiendaComponent implements OnInit, OnDestroy{
  productoSubscription: Subscription | undefined;
  productos: any[]=[]
 
  imagenes: any[] = []

  constructor(
    private productoService: ProductoService,
  ){}

  ngOnInit(): void {
    this.cargarProductos();
    //this.getImagenes();
  }
  ngOnDestroy(): void {
    this.productoSubscription?.unsubscribe();
  }



  cargarProductos (){
    this.productoSubscription = this.productoService.getProductos()
    .subscribe((res : any) =>{
      this.productos=res.resultados;
    })



  }
/*   getImagenes(){
    this.productoSubscription = this.productoService.getImagenes()
    .subscribe((res : any) =>{
      this.imagenes=res.resultados;
    })

  } */


  
}
