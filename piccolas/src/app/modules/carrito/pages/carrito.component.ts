import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
displayedColumns: string[] = ['nombre', 'precio', 'cantidad','subtotal', 'acciones'];
envio = 15000;
productos: any[]= [
  {nombre: 'Nombre del producto', precio: 120000, cantidad: 2},
  {nombre: 'Nombre del producto', precio: 120000, cantidad: 2}
]

getTotal(){
  let subtotal = 0;
  this.productos.forEach(element => {
    subtotal = subtotal + (element.precio * element.cantidad)
  });
  return subtotal
}
}
