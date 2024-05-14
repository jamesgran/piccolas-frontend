import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cartItems: any[] = []
  constructor() { }
  get cart(){
    let cart: any[] = [];
    let cartString = localStorage.getItem('carrito') || '';
    //parsear de nuevo a un array
    if(cartString){
      cart = JSON.parse(cartString)
      return cart
    }else{
      return [undefined]
    }
  
    
  }

  anadirAlCarrito(producto: any){
    localStorage.setItem('carrito', JSON.stringify(this.cartItems))
    this.cartItems.push(producto)
    localStorage.setItem('carrito', JSON.stringify(this.cartItems))
  }
}
