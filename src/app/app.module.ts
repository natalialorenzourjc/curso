import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SegundoComponent } from './segundo/segundo.component';
import {FormsModule} from '@angular/forms';
import { TercerComponent } from './tercer/tercer.component';
import {MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CuatroComponent } from './cuatro/cuatro.component';
import { UsuarioApiComponent } from './apizend/usuario-api/usuario-api.component';
import {HttpClientModule} from '@angular/common/http';
import {UsuarioApiService} from './apizend/services/Usuario-api.service';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SegundoComponent,
    TercerComponent,
    CuatroComponent,
    UsuarioApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
  MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [UsuarioApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
