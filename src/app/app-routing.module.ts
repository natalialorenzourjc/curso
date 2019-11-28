import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {SegundoComponent} from './segundo/segundo.component';
import {TercerComponent} from './tercer/tercer.component';
import {CuatroComponent} from './cuatro/cuatro.component';
import {UsuarioApiComponent} from './apizend/usuario-api/usuario-api.component';
import {CursoApiComponent} from './curso-api/curso-api.component';

const routes: Routes = [
  {path: 'primero', component: InicioComponent},
  {path: 'segundo', component: SegundoComponent},
  {path: 'tercer', component: TercerComponent },
  {path: 'cuatro', component: CuatroComponent },
  {path: 'usuario-api', component: UsuarioApiComponent },
  {path: 'curso-api', component : CursoApiComponent},
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
