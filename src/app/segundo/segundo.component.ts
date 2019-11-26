import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {error, log} from 'util';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})
export class SegundoComponent implements OnInit {
  variableBoleana = false;
  numero = 5;
  arrayDatos: number[];
  numeroPipe = 10.879;
  dineroPipe = 13.89;
  fecha= Date.now();
  objeto = {nombre: 'Curso', asistentes: 24};
  cadenaPipe = 'esto es una cadena';

  datosAObservar = of('1', '2', '3');
  observador;

  constructor() {
    this.observador = {
      next: x => {
        console.log('mostramos el primer valor' + x);
      },
      error: err => {
        console.log('mostramos un error');
      },
      complete: () => {
        console.log ('hemos completado los datos');
      }
    };
  }

  ngOnInit() {
    this.arrayDatos = [3, 5, 10];
    this.datosAObservar.subscribe(this.observador);
  }
}
