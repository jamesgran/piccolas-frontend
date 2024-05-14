import { Component, OnInit, inject } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CarritoService } from '../../../services/carrito/carrito.service';

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
export class CarritoComponent implements OnInit{
ngOnInit(): void {
  this.getCart()
}
carritoService = inject(CarritoService);
displayedColumns: string[] = ['nombre', 'precio', 'cantidad','subtotal', 'acciones'];
envio = 15000;

productos: any[]= [];

getTotal(){
  let subtotal = 0;
  this.productos.forEach(element => {
    subtotal = subtotal + (element.precio * element.cantidad)
  });
  return subtotal
}

getCart(){
  let respuesta= this.carritoService.cart
  this.productos = respuesta
  console.log(this.productos)
}
}
