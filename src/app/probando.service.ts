import { Injectable } from '@angular/core';
import {Usuario} from './cuatro/model/usuario.model';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProbandoService {

  private _usuarios: Usuario[];
  private _usuarios$ = new Subject<Usuario[]>(); // el $ es convención de nombrado para Observables

  constructor() {
    this._usuarios = [];
  }

  public getUsuarios() {
    return this._usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]> {
    return this._usuarios$.asObservable();
  }

  /* Recibe un objeto usuario y lo graba en nuestro array de usuarios  */
  agregaUsuario(usuario: Usuario) {
    this._usuarios.push(usuario);
    this._usuarios$.next(this._usuarios);
  }

  /* Genera un objeto usuario vacio */
  nuevoUsuario(): Usuario {
    // Todos null para crearlo sin valores concretos
    // Importante edad = null porque al ser numérco no se puede poner = '' y no queremos inicializaron con un valor
    return  new Usuario(null,null, null, null,null);
  }
}
