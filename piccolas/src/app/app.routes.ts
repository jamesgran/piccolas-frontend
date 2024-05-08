import { Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio.component';
import { TiendaComponent } from './modules/tienda/pages/tienda.component';

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
];
