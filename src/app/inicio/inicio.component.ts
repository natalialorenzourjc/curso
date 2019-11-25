import { Component, OnInit } from '@angular/core';

interface IPersona {
  nombre: string;
  apellidos: string;
  edad: number;
}

export class CPersona {
  constructor( nombre: string, apellidos: string, direccion: string) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.direccion = direccion;
  }

  nombre: string;
  apellidos: string;
  direccion: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent implements OnInit {
  // variablePersona: Persona;
  variable: number;
  // tslint:disable-next-line:no-unused-expression
  variableCadena: string;
  // tslint:disable-next-line:no-unused-expression
  variableCualquierDato: any;

  Maria: CPersona;

constructor() {}

ngOnInit() {

  this.variableCadena = 'hola cara bola';
  this.variable = 7;
  this.variableCualquierDato = 'es un cholllo de variable';

  this.Maria = new CPersona ('rafa', 'santos garcia', 'toleod');
  }

}
