import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RUTAS } from '../../core/enums/rutas.enum';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  scrollService = inject(ScrollService)

  ngOnInit(): void {
    //funcion para que el scroll se ubique en el top con cada cambio del router
    this.scrollService.setScrollTopOnRouterEvents()
  }

  get RUTAS(){
    return RUTAS;
  }

}
