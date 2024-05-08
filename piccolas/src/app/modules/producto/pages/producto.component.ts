import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from "../../../components/card/card.component";

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
        CardComponent
    ]
})
export class ProductoComponent {

  imagenes: any[]= [
    "https://previews.dropbox.com/p/thumb/ACRQrMLi6moXnHSAAoZDerGnZ_fEtO-PTj593StS9DqebWAe8L5DHg4jtF1AosGwKrsp_yK9CXqBcgbhSoe0lkGMgbCsfLezSpwPXLTlvCBj-Apf7KD2vBLP_2jOO7Hsi8zzPVDTFzCdRXSRuafBqR6nDiHAc43DFns8ATiT192J7Hah-YD5BPjr-b7BxyM6kJ_Mgy_svwy4ZlblUysQx4X1IYf-tdjt1G7UmQZgvE9WnV7F8bsVcGvnszRoboa9jfwDlmLO38lstC3XUI5GEFq_QwfuylW8Lt0YFNxJyyMkT-j2GyqeixgXZV4yk0jrZo-F-7Mdg5BHj8nz6-YkjZyc/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACRQrMLi6moXnHSAAoZDerGnZ_fEtO-PTj593StS9DqebWAe8L5DHg4jtF1AosGwKrsp_yK9CXqBcgbhSoe0lkGMgbCsfLezSpwPXLTlvCBj-Apf7KD2vBLP_2jOO7Hsi8zzPVDTFzCdRXSRuafBqR6nDiHAc43DFns8ATiT192J7Hah-YD5BPjr-b7BxyM6kJ_Mgy_svwy4ZlblUysQx4X1IYf-tdjt1G7UmQZgvE9WnV7F8bsVcGvnszRoboa9jfwDlmLO38lstC3XUI5GEFq_QwfuylW8Lt0YFNxJyyMkT-j2GyqeixgXZV4yk0jrZo-F-7Mdg5BHj8nz6-YkjZyc/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACRQrMLi6moXnHSAAoZDerGnZ_fEtO-PTj593StS9DqebWAe8L5DHg4jtF1AosGwKrsp_yK9CXqBcgbhSoe0lkGMgbCsfLezSpwPXLTlvCBj-Apf7KD2vBLP_2jOO7Hsi8zzPVDTFzCdRXSRuafBqR6nDiHAc43DFns8ATiT192J7Hah-YD5BPjr-b7BxyM6kJ_Mgy_svwy4ZlblUysQx4X1IYf-tdjt1G7UmQZgvE9WnV7F8bsVcGvnszRoboa9jfwDlmLO38lstC3XUI5GEFq_QwfuylW8Lt0YFNxJyyMkT-j2GyqeixgXZV4yk0jrZo-F-7Mdg5BHj8nz6-YkjZyc/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACRQrMLi6moXnHSAAoZDerGnZ_fEtO-PTj593StS9DqebWAe8L5DHg4jtF1AosGwKrsp_yK9CXqBcgbhSoe0lkGMgbCsfLezSpwPXLTlvCBj-Apf7KD2vBLP_2jOO7Hsi8zzPVDTFzCdRXSRuafBqR6nDiHAc43DFns8ATiT192J7Hah-YD5BPjr-b7BxyM6kJ_Mgy_svwy4ZlblUysQx4X1IYf-tdjt1G7UmQZgvE9WnV7F8bsVcGvnszRoboa9jfwDlmLO38lstC3XUI5GEFq_QwfuylW8Lt0YFNxJyyMkT-j2GyqeixgXZV4yk0jrZo-F-7Mdg5BHj8nz6-YkjZyc/p.jpeg",

  ]
  imagenActual: string = '';

  producto: any = {
    nombre: 'Nombre del producto',
    precio: '$120.000',
    descripcion: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam imperdiet sodales velit, at sollicitud',
    tallas: [27,28,29,30,31,32,33]
  }
  productos: any[] = [1,2,3,4]

  ngOnInit(): void {
    // Establece la primera imagen como imagen actual al iniciar el componente
    if (this.imagenes.length > 0) {
      this.imagenActual = this.imagenes[0];
    }
  }

  cambiarImagen(imagen: string): void {
    // Cambia la imagen actual al hacer clic en una miniatura
    this.imagenActual = imagen;
  }



}
