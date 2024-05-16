import { Component, OnInit, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { CarritoService } from '../../../services/carrito/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pedido } from '../../../core/interfaces/pedido.interface';
import { PedidoService } from '../../../services/pedido/pedido.service';
import Swal from 'sweetalert2';
import { error } from 'console';

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
  hayUsuario: boolean = false;
  ngOnInit(): void {
    this.getCart();
    this.validarLogin();
  }
  get token() {
    return localStorage.getItem('token') || '';
  }

  get usuario() {
    return localStorage.getItem('usuario') || '';
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
