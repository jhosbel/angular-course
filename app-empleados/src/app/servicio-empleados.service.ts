import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }
  //aca se crea el metodo, que es el mensaje que se va a mostrar cada ves que se ejecuta las funciones que lo requieran, se le coloca un parametro y se devuelte el alert con el parametro como valor
  muestraMensaje(mensaje: string) {
    alert(mensaje)
  }

}
