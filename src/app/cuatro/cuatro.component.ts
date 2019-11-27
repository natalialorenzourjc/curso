import { Component, OnInit } from '@angular/core';
import {Usuario} from './model/usuario.model';
import {ProbandoService} from '../probando.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-cuatro',
  templateUrl: './cuatro.component.html',
  styleUrls: ['./cuatro.component.css']
})
export class CuatroComponent implements OnInit {

  public usuarios: Usuario[];
  public usuarios$: Observable<Usuario[]>;
  public usuariosSuscripcion: Subscription;
  public usuario: Usuario;

  constructor(private probandoService: ProbandoService) { }

  ngOnInit() {
    this.usuarios = this.probandoService.getUsuarios();
    this.usuarios$ = this.probandoService.getUsuarios$();
    this.usuariosSuscripcion = this.usuarios$.subscribe
    (usuarios => this.usuarios = usuarios);
    this.usuario = this.probandoService.nuevoUsuario();
  }

  public nuevo(): void {
    this.probandoService.agregaUsuario(this.usuario); // Grabo el usuario
    this.usuario = this.probandoService.nuevoUsuario(); // limpio el objeto para el siguiente
  }

}
