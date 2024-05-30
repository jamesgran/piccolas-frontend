import { Component, Inject, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CarritoService } from '../../../services/carrito/carrito.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pedido } from '../../../core/interfaces/pedido.interface';
import { PedidoService } from '../../../services/pedido/pedido.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  //Banderas
  hayUsuario: boolean = false;
  hayCarrito: boolean = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ){
  }

  ngOnInit(): void {
    this.getCart();
    this.validarLogin();
    this.validarCarrito();
  }
  get token() {
    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem('token') || '';
    }
    return null
    
  }

  get usuario() {

    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem('usuario') || '';
    }
    return null
  }

  get carrito(){
    if(isPlatformBrowser(this.platformId)){
      return localStorage.getItem('carrito');
    }
    return null
    
  }
  carritoService = inject(CarritoService);
  pedidoService = inject(PedidoService);
  displayedColumns: string[] = [
    'nombre',
    'precio',
    'cantidad',
    'subtotal',
    'acciones',
  ];
  envio = 15000;

  productos: any[] = [];

  getTotal() {
    let subtotal = 0;
    this.productos.forEach((element) => {
      subtotal = subtotal + element.precio * element.cantidad;
    });
    return subtotal;
  }

  getCart() {
    let respuesta = this.carritoService.cart;
    this.productos = respuesta;
  }
  validarLogin() {
    if (this.token) {
      this.hayUsuario = true;
    }
  }

  validarCarrito(){
    if(this.carrito){
      this.hayCarrito= true;
    }
  }

  eliminarDelCarrito(element: any){
    let arrayFiltrado = this.productos.filter(item => item.id_producto !== element.id_producto)
    this.productos = arrayFiltrado
    localStorage.setItem('carrito', JSON.stringify(this.productos))
    if(this.productos[0] == undefined){
      localStorage.removeItem('carrito')
      window.location.reload()
    }
  }

  crearPedido() {
    const productos = this.carritoService.cart;
    const pedido: Pedido = {
      id_usuario: Number(this.usuario),
      productos: productos,
    };
    this.pedidoService.crearPedido(pedido).subscribe({
      next: (res:any)=>{
        Swal.fire({
          icon: "success",
          title: "Pedido creado correctamente",
          showConfirmButton: true,
        });
      },
      error: (error:any) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Halgo ha salido mal. Intente mas tarde",
          showConfirmButton: true
        });
      }
    })
  }
}
