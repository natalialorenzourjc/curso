import {Component, OnInit} from '@angular/core';
import {Usuario} from '../../cuatro/model/usuario.model';
import {UsuarioApiService} from '../services/Usuario-api.service';

@Component({
  selector: 'app-usuario-api',
  templateUrl: './usuario-api.component.html',
  styleUrls: ['./usuario-api.component.css']
})
export class UsuarioApiComponent implements OnInit {
  public usuarios: Usuario[];
  public mensaje;
  public cuantos;
  public edito = false;
  public crear = false;
  public usuario: Usuario;

  constructor(private usuarioApi: UsuarioApiService) {
    this.usuarioApi.getUsuarios().subscribe(
      resp => {
        this.usuarios = [];
        // @ts-ignore
        resp.body.forEach((elem, i) => {
          console.log ('aaa');
          this.usuarios.push(elem);
          console.log(elem);
        });
        // @ts-ignore
        this.cuantos = resp.body.length;
        this.mensaje = 'Datos cargados correctamente';
      },
      err => {
        this.mensaje = 'Error al cargar los datos.' + err;
      }
    );
    this.usuario = new Usuario(null,null,null,null,null);
  }

  ngOnInit(): void {
  }

  nuevo(accion): void {
    if (accion == 'grabar') {
      this.usuarioApi.agregarUsuario(this.usuario).subscribe(
        resp => {
          this.mensaje = 'Datos insertados correctamente';
          // Si los vuelvo a pedir me sale actualizado (poco óptimo, otra llamada al API)
          // this.usuarioApi.getUsuarios();

          // Más óptimo si actualizamos el array
          // @ts-ignore
          // tslint:disable-next-line:max-line-length
          this.agregarUsuarioArray(new Usuario(resp.body.login, resp.body.nombre, resp.body.apellido1, resp.body.apellido2, resp.body.edad));
        },
        err => {
          this.mensaje = 'Error al insertados los datos.' + err;
        }
      );
      this.crear = false;
    } else {
      this.crear = true;
    }
    // Siempre limpiamos el this.usuario para que la siguiente acción no lleve información errónea
    // this.usuario = this.nuevoUsuarioArray();
  }
}
