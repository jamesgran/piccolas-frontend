import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio.component';
import { TiendaComponent } from './modules/tienda/pages/tienda.component';
import { ProductoComponent } from './modules/producto/pages/producto.component';
import { CarritoComponent } from './modules/carrito/pages/carrito.component';
import { CuentaComponent } from './modules/cuenta/pages/login/cuenta.component';
import { ContactoComponent } from './modules/contacto/pages/contacto.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio',
    component: InicioComponent,
  },
  {
    path: 'tienda',
    title: 'Tienda',
    component: TiendaComponent,
  },
  {
    path: 'producto',
    title: 'Producto',
    component: ProductoComponent,
  },
  {
    path: 'carrito',
    title: 'Carrito',
    component: CarritoComponent,
  },
  {
    path: 'cuenta',
    title: 'Cuenta',
    component: CuentaComponent,
  },
  {
    path: 'contacto',
    title: 'Contacto',
    component: ContactoComponent,
  },

];
