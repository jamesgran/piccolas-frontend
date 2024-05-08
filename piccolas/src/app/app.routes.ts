import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio.component';
import { TiendaComponent } from './modules/tienda/pages/tienda.component';
import { ProductoComponent } from './modules/producto/pages/producto.component';

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
];
