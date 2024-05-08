import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RUTAS } from '../../core/enums/rutas.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  get RUTAS(){
    return RUTAS;
  }

}
