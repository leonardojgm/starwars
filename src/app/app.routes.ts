import { Routes } from '@angular/router';
import { InicioComponent } from './components/pages/inicio/inicio.component';
import { FilmesComponent } from './components/pages/filmes/filmes.component';
import { NavesComponent } from './components/pages/naves/naves.component';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'naves', component: NavesComponent }
];
