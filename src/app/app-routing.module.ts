import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './inicio/inicio.component';
import {SegundoComponent} from './segundo/segundo.component';


const routes: Routes = [
  {path: 'primero', component: InicioComponent},
  {path: 'segundo', component: SegundoComponent },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
