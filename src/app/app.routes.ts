import { Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaComponent } from './pages/acerca/acerca.component';
import { VentasComponent } from './pages/ventas/ventas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'ventas', component: VentasComponent }
];
