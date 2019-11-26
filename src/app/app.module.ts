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

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SegundoComponent,
    TercerComponent,
    CuatroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
  MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
