import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { CardComponent } from "../../../components/card/card.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
    selector: 'app-tienda',
    standalone: true,
    templateUrl: './tienda.component.html',
    styleUrl: './tienda.component.css',
    imports: [
      MatGridListModule, 
      CardComponent,
      NgxPaginationModule,
      CommonModule,
      MatButtonModule
    ]
})
export class TiendaComponent {
  p: number = 1;
  productos: any[]=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
  itemsPerPage = 16; // Cambia este valor según tus necesidades
  currentPage = 1;

  get pageItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.productos.slice(startIndex, endIndex);
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  goToNextPage() {
    if (this.currentPage < Math.ceil(this.productos.length / this.itemsPerPage)) {
      this.currentPage++;
    }
  }



}
