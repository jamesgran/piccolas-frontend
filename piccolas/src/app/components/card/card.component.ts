import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { RUTAS } from '../../core/enums/rutas.enum';
import { Subscription } from 'rxjs';
import { ProductoService } from '../../services/producto/producto.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  productoSubscription: Subscription | undefined;
  @Input() producto: any;
  imagen = '';
  constructor(
    private router: Router,
    private productoService: ProductoService,
  ){
    
  }
  ngOnInit(): void {
   this.getImagen();
  }
 

    verProducto(){
      
      this.router.navigateByUrl(RUTAS.PRODUCTO + `/${this.producto.id_producto}`)
    }

    getImagen(){
      if (this.producto){
        this.productoSubscription = this.productoService.getImagen(this.producto.id_producto)
        .subscribe((res : any) =>{
          this.imagen=res.resultados[0].url;
          
        })
      }else{
        console.log('you are here')
      }

    } 

  

}
