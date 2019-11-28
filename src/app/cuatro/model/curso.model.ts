export class Curso {

  constructor( id: number, nombre: string, descripcion: string, capacidad: number) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.capacidad = capacidad;


  }
  id: number;
  nombre: string;
  descripcion : string;
  capacidad: number;
}
