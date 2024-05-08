import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router } from '@angular/router';
import { RUTAS } from '../../core/enums/rutas.enum';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  constructor(
    private router: Router
  ){
    
  }
  data: any = 
    {
      nombre: 'Nombre del producto',
      precio: '120.000',
      foto: 'https://drive.google.com/file/d/1nu8r3WFi3RigzZho0mbUFbXede1yAJXw/view?usp=sharing'
    }

    verProducto(){
      this.router.navigateByUrl(RUTAS.PRODUCTO)
    }

  

}
