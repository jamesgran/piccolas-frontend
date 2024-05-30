import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  cartItems: any[] = []
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  get cart(){
    let cart = [];
    if(isPlatformBrowser(this.platformId)){
      var cartString = localStorage.getItem('carrito') || '';
      
      //parsear de nuevo a un array
      if(cartString){
        cart = JSON.parse(cartString)
        return cart
      }else{
        return [undefined]
      }
    }
    
    
  
    
  }

  anadirAlCarrito(producto: any){
    localStorage.setItem('carrito', JSON.stringify(this.cartItems))
    this.cartItems.push(producto)
    localStorage.setItem('carrito', JSON.stringify(this.cartItems))
  }
}
