import { Injectable } from '@angular/core';
import {Usuario} from '../../cuatro/model/usuario.model';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {
  private apiUrl = 'http://localhost/public/';

  constructor(private http: HttpClient) {  }

  private static crearHeaders() {
    const options: any = {
      headers: new HttpHeaders(),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  }
  /* private static updateHeaders() {
    const options: any = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers' : 'X-Requested-With, Origin, Content-Type, X-Auth-Token',
        'Content-Type': 'application/json'
      }),
      params: new HttpParams(),
      responseType: 'json',
      observe: 'response'
    };
    return options;
  } */

  public getUsuarios() {
    console.log(this.apiUrl + 'usuario');
    return this.http.get<Usuario[]>(this.apiUrl + 'usuario', UsuarioApiService.crearHeaders());
  }

  public modificarUsuario(usuario: Usuario) {
    return this.http.put<Usuario>(this.apiUrl + 'usuario' + '/' + usuario.login, usuario, UsuarioApiService.crearHeaders());
  }

  public borrarUsuario(usuario: Usuario) {
    return this.http.delete<Usuario>(this.apiUrl + 'usuario' + '/' + usuario.login, UsuarioApiService.crearHeaders());
  }

  public agregarUsuario(usuario: Usuario) {
    return this.http.post<Usuario>(this.apiUrl + 'usuario', usuario, UsuarioApiService.crearHeaders());
  }

}
